$ErrorActionPreference = "Stop"

$root = (Resolve-Path $PSScriptRoot).Path
$rootPrefix = $root.TrimEnd([IO.Path]::DirectorySeparatorChar, [IO.Path]::AltDirectorySeparatorChar) + [IO.Path]::DirectorySeparatorChar
$port = if ($env:PORT) { [int]$env:PORT } else { 4173 }
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $port)
$listener.Start()

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".txt" = "text/plain; charset=utf-8"
  ".xml" = "application/xml; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg" = "image/svg+xml"
}

Write-Host "Preview server running at http://127.0.0.1:$port/"
Write-Host "Press Ctrl+C to stop."

function Send-Response($stream, $status, $contentType, [byte[]]$body, [hashtable]$extraHeaders, [bool]$sendBody) {
  $reasons = @{
    200 = "OK"
    400 = "Bad Request"
    404 = "Not Found"
    405 = "Method Not Allowed"
  }
  $reason = if ($reasons.ContainsKey($status)) { $reasons[$status] } else { "Error" }
  $securityHeaders = @{
    "X-Content-Type-Options" = "nosniff"
    "Referrer-Policy" = "strict-origin-when-cross-origin"
    "X-Frame-Options" = "DENY"
    "Content-Security-Policy" = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' https://images.unsplash.com data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
  }

  $header = "HTTP/1.1 $status $reason`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n"
  foreach ($name in $securityHeaders.Keys) {
    $header += "${name}: $($securityHeaders[$name])`r`n"
  }
  if ($extraHeaders) {
    foreach ($name in $extraHeaders.Keys) {
      $header += "${name}: $($extraHeaders[$name])`r`n"
    }
  }
  $header += "`r`n"

  $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
  $stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($sendBody) {
    $stream.Write($body, 0, $body.Length)
  }
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    $stream = $client.GetStream()

    try {
      $buffer = New-Object byte[] 4096
      $read = $stream.Read($buffer, 0, $buffer.Length)
      if ($read -le 0) {
        Send-Response $stream 400 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Bad request")) $null $true
        continue
      }

      $request = [Text.Encoding]::ASCII.GetString($buffer, 0, $read)
      $requestLine = ($request -split "`r?`n")[0]
      $parts = $requestLine -split " "
      $method = if ($parts.Length -ge 1) { $parts[0].ToUpperInvariant() } else { "" }

      if ($method -ne "GET" -and $method -ne "HEAD") {
        Send-Response $stream 405 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Method not allowed")) @{ "Allow" = "GET, HEAD" } $true
        continue
      }

      $sendBody = $method -ne "HEAD"
      $rawPath = if ($parts.Length -ge 2) { $parts[1] } else { "/" }
      $pathOnly = ($rawPath -split "\?")[0].TrimStart("/")

      if ([string]::IsNullOrWhiteSpace($pathOnly)) {
        $pathOnly = "index.html"
      }

      try {
        $decodedPath = [Uri]::UnescapeDataString($pathOnly).Replace("/", [IO.Path]::DirectorySeparatorChar)
      }
      catch {
        Send-Response $stream 400 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Bad request")) $null $sendBody
        continue
      }

      if ([IO.Path]::IsPathRooted($decodedPath)) {
        Send-Response $stream 404 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Not found")) $null $sendBody
        continue
      }

      $segments = $decodedPath -split "[\\/]+"
      if ($segments | Where-Object { $_ -eq ".." -or $_.StartsWith(".") }) {
        Send-Response $stream 404 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Not found")) $null $sendBody
        continue
      }

      $candidate = [IO.Path]::GetFullPath((Join-Path $root $decodedPath))

      if (-not $candidate.StartsWith($rootPrefix, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
        Send-Response $stream 404 "text/plain; charset=utf-8" ([Text.Encoding]::UTF8.GetBytes("Not found")) $null $sendBody
        continue
      }

      $extension = [IO.Path]::GetExtension($candidate).ToLowerInvariant()
      $contentType = $mimeTypes[$extension]
      if ([string]::IsNullOrWhiteSpace($contentType)) {
        $contentType = "application/octet-stream"
      }

      Send-Response $stream 200 $contentType ([IO.File]::ReadAllBytes($candidate)) $null $sendBody
    }
    finally {
      $stream.Close()
      $client.Close()
    }
  }
}
finally {
  $listener.Stop()
}
