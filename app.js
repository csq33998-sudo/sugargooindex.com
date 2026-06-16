const PROMO_URL = "https://streetstyle.maisonlooks.com/";
const CATEGORY_URL_BASE = "https://streetstyle.maisonlooks.com/en?categorySlug=";

const translations = {
  en: {
    navHome: "Home",
    navCategories: "Categories",
    navFinds: "Finds",
    navGuide: "Guide",
    eyebrow: "Sugargoo spreadsheet picks with a streetwear buyer's eye",
    heroTitle: "A cleaner Sugargoo spreadsheet for streetwear finds.",
    heroText:
      "Use this index as a sharper starting point before opening another product tab. It groups wearable sneakers, washed hoodies, jackets, and accessories with QC details that matter when you are building a haul.",
    heroCta: "Visit Street Style",
    heroSecondary: "Explore finds",
    metricFinds: "Streetwear finds",
    metricAccess: "quick routes",
    metricQc: "QC notes",
    visualMainLabel: "01 / Street rotation",
    visualMainTitle: "Sneakers, washed cotton, clean layers, useful accessories.",
    visualSmallLabel: "QC watch",
    visualSmallTitle: "Shape, stitching, wash, sole.",
    visualNoteLabel: "Not a random dump of links.",
    visualNoteText: "A focused starting point for Sugargoo shoppers headed to Street Style.",
    categoriesEyebrow: "Browse by outfit role",
    categoriesTitle: "Go straight to the part of the haul you are actually shopping",
    catSneakersLabel: "Sneakers",
    catHoodiesLabel: "Hoodies",
    catJacketsLabel: "Jackets",
    catAccessoriesLabel: "Accessories",
    catSneakers: "Daily pairs, retro runners, skate shapes, and QC-sensitive soles",
    catHoodies: "Washed fleece, zip-ups, heavyweight blanks, and easy layering fits",
    catJackets: "Shells, puffers, bombers, and workwear layers with real silhouette",
    catAccessories: "Bags, caps, belts, socks, and small details that finish a haul",
    findsEyebrow: "Current edit",
    findsTitle: "Streetwear routes built around real outfit use",
    guideEyebrow: "Shopping workflow",
    guideTitle: "Use the index like a buyer, not a link collector",
    guideText:
      "Start with the part of the outfit you are missing, then judge the find by material, shape, QC risk, and whether it still works after the first wear.",
    stepOne: "Choose the category you would actually add to the next haul.",
    stepTwo: "Compare silhouette, material, price level, and QC priority.",
    stepThree: "Open Street Style only when the find has a clear role in an outfit.",
    notesEyebrow: "Buying notes",
    notesTitle: "The checks that make a spreadsheet find worth opening",
    noteOneLabel: "Sneakers",
    noteOneTitle: "Shape matters before the logo does.",
    noteOneText:
      "A pair can look right in a thumbnail and still feel off once the toe box, heel curve, or sole height is wrong. Strong Sugargoo spreadsheet entries help you inspect those details before you build a haul around the pair.",
    noteTwoLabel: "Hoodies",
    noteTwoTitle: "Good basics are usually quiet.",
    noteTwoText:
      "Weight, sleeve drop, wash, zipper line, and ribbing tell you more than a loud front graphic. A hoodie worth opening should make a simple fit better, not just fill another spreadsheet row.",
    noteThreeLabel: "Outerwear",
    noteThreeTitle: "The layer has to carry bad weather and a fit.",
    noteThreeText:
      "Jackets are where cheap details show quickly: flat collars, weak cuffs, thin quilting, odd pocket placement. A useful Sugargoo index points you toward layers that hold shape from the first wear.",
    faqEyebrow: "Straight answers",
    faqTitle: "Questions worth asking before opening another product tab",
    faqOneQ: "What makes this different from a random Sugargoo spreadsheet?",
    faqOneA:
      "It is built around how people actually shop: category shortcuts, outfit use, QC-sensitive details, and fewer low-signal links.",
    faqTwoQ: "Why is this useful for Sugargoo spreadsheet searches?",
    faqTwoA:
      "Searchers usually want a fast route to relevant finds, not a wall of mixed links. This page keeps sneakers, hoodies, jackets, and accessories separated so the next click is more intentional.",
    faqThreeQ: "How should I judge a find before adding it to a haul?",
    faqThreeA:
      "Start with silhouette and material, then check QC-sensitive areas: stitching, print placement, wash, outsole shape, zipper quality, and whether the piece still works without relying on a logo.",
    footerText: "Independent streetwear index. Product availability and prices may change.",
    footerCta: "Open Street Style",
    openFind: "Open find",
    productSneakersTitle: "Daily sneakers with QC tells",
    productSneakersType: "Sneakers",
    productSneakersCopy:
      "Runners, low profiles, and skate shapes that earn repeat wear. Check toe shape, heel curve, outsole height, and whether the pair still works without loud styling.",
    productSneakersTags: ["QC shape", "Daily wear", "Soles"],
    productHoodiesTitle: "Hoodies that carry a simple fit",
    productHoodiesType: "Hoodies",
    productHoodiesCopy:
      "Washed fleece, zip-ups, and heavyweight blanks that should feel useful before the logo matters. Sleeve drop, ribbing, and fabric weight decide the pick.",
    productHoodiesTags: ["Washed fleece", "Zip-ups", "Layering"],
    productJacketsTitle: "Outerwear with real shape",
    productJacketsType: "Jackets",
    productJacketsCopy:
      "Shells, bombers, puffers, and workwear layers selected for collar shape, cuff strength, pocket placement, and how the jacket sits over a hoodie.",
    productJacketsTags: ["Silhouette", "Seasonal", "Texture"],
    productAccessoriesTitle: "Accessories that finish the haul",
    productAccessoriesType: "Accessories",
    productAccessoriesCopy:
      "Caps, bags, belts, and socks that make a basic haul feel intentional. The best small pieces add texture, proportion, or utility without stealing the outfit.",
    productAccessoriesTags: ["Caps", "Bags", "Finish"],
  },
  fr: {
    navHome: "Accueil",
    navCategories: "Categories",
    navFinds: "Selections",
    navGuide: "Guide",
    eyebrow: "Selections Sugargoo spreadsheet avec un regard d'acheteur streetwear",
    heroTitle: "Un Sugargoo spreadsheet plus clair pour les finds streetwear",
    heroText:
      "Utilisez cet index comme point de depart plus net avant d'ouvrir un autre produit. Sneakers, hoodies, vestes et accessoires sont classes avec les details QC qui comptent dans un haul.",
    heroCta: "Visiter Street Style",
    heroSecondary: "Voir les selections",
    metricFinds: "streetwear finds",
    metricAccess: "routes rapides",
    metricQc: "notes QC",
    visualMainLabel: "01 / Rotation streetwear",
    visualMainTitle: "Sneakers, coton lave, couches nettes, accessoires utiles.",
    visualSmallLabel: "A verifier QC",
    visualSmallTitle: "Shape, coutures, wash, semelle.",
    visualNoteLabel: "Pas un simple tas de liens.",
    visualNoteText: "Un point de depart clair pour les acheteurs Sugargoo qui vont vers Street Style.",
    categoriesEyebrow: "Par role dans le haul",
    categoriesTitle: "Allez directement a la piece que vous cherchez vraiment",
    catSneakersLabel: "Sneakers",
    catHoodiesLabel: "Hoodies",
    catJacketsLabel: "Vestes",
    catAccessoriesLabel: "Accessoires",
    catSneakers: "Paires daily, runners retro, shapes skate et semelles a verifier",
    catHoodies: "Fleece lave, zip-ups, blanks epais et fits faciles a layer",
    catJackets: "Shells, puffers, bombers et workwear avec vraie silhouette",
    catAccessories: "Sacs, caps, ceintures, chaussettes et details qui finissent un haul",
    findsEyebrow: "Edition actuelle",
    findsTitle: "Routes streetwear pensees pour de vraies tenues",
    guideEyebrow: "Flux d'achat",
    guideTitle: "Utilisez l'index comme un acheteur, pas comme un collecteur de liens",
    guideText:
      "Commencez par la piece qui manque a votre tenue, puis jugez le find par la matiere, le shape, le risque QC et son usage apres le premier port.",
    stepOne: "Choisissez la categorie que vous ajouteriez vraiment au prochain haul.",
    stepTwo: "Comparez silhouette, matiere, niveau de prix et priorite QC.",
    stepThree: "Ouvrez Street Style seulement si le find a un role clair dans une tenue.",
    notesEyebrow: "Notes d'achat",
    notesTitle: "Les controles qui rendent un find de spreadsheet interessant",
    noteOneLabel: "Sneakers",
    noteOneTitle: "La forme passe avant le logo.",
    noteOneText:
      "Une paire peut sembler correcte en miniature puis tomber a plat a cause de la toe box, du talon ou de la hauteur de semelle. Une bonne entree Sugargoo spreadsheet aide a voir ces details avant de construire le haul autour.",
    noteTwoLabel: "Hoodies",
    noteTwoTitle: "Un bon basic reste souvent discret.",
    noteTwoText:
      "Poids, tombant des manches, lavage, zip et bord-cotes comptent plus qu'un grand graphique. Un hoodie qui vaut le clic doit ameliorer une tenue simple, pas seulement remplir une ligne.",
    noteThreeLabel: "Outerwear",
    noteThreeTitle: "La couche doit tenir la meteo et la silhouette.",
    noteThreeText:
      "Les vestes revelent vite les details faibles: col plat, poignets mous, matelassage fin, poches mal placees. Un bon index Sugargoo pousse vers des couches qui gardent leur forme.",
    faqEyebrow: "Reponses directes",
    faqTitle: "Questions utiles avant d'ouvrir un autre produit",
    faqOneQ: "Qu'est-ce qui change par rapport a un Sugargoo spreadsheet aleatoire ?",
    faqOneA:
      "Il est pense pour la facon dont les gens cherchent vraiment: raccourcis par categorie, usage dans une tenue, details QC et moins de liens faibles.",
    faqTwoQ: "Pourquoi est-ce utile pour une recherche Sugargoo spreadsheet ?",
    faqTwoA:
      "Les recherches Sugargoo spreadsheet veulent souvent un chemin rapide vers de bons finds, pas un mur de liens melanges. Ici, sneakers, hoodies, vestes et accessoires restent separes.",
    faqThreeQ: "Comment juger un find avant de l'ajouter au haul ?",
    faqThreeA:
      "Commencez par la silhouette et la matiere, puis verifiez les zones sensibles QC: coutures, placement du print, lavage, forme de semelle, zip et usage sans logo.",
    footerText: "Index streetwear independant. Les disponibilites et prix peuvent changer.",
    footerCta: "Ouvrir Street Style",
    openFind: "Ouvrir",
    productSneakersTitle: "Sneakers daily avec signaux QC",
    productSneakersType: "Sneakers",
    productSneakersCopy:
      "Runners, profils bas et shapes skate faits pour etre portes souvent. Verifiez toe box, talon, hauteur de semelle et usage sans styling bruyant.",
    productSneakersTags: ["Shape QC", "Daily", "Semelles"],
    productHoodiesTitle: "Hoodies qui portent un fit simple",
    productHoodiesType: "Hoodies",
    productHoodiesCopy:
      "Fleece lave, zip-ups et blanks epais qui doivent etre utiles avant le logo. Tombant des manches, ribbing et poids du tissu decident du pick.",
    productHoodiesTags: ["Fleece lave", "Zip-ups", "Layering"],
    productJacketsTitle: "Outerwear avec vraie forme",
    productJacketsType: "Vestes",
    productJacketsCopy:
      "Shells, bombers, puffers et couches workwear choisis pour le col, les poignets, les poches et la facon dont la veste tombe sur un hoodie.",
    productJacketsTags: ["Silhouette", "Saison", "Texture"],
    productAccessoriesTitle: "Accessoires qui finissent le haul",
    productAccessoriesType: "Accessoires",
    productAccessoriesCopy:
      "Caps, sacs, ceintures et chaussettes qui rendent un haul simple plus intentionnel. Les bons petits details ajoutent texture, proportion ou utilite.",
    productAccessoriesTags: ["Caps", "Sacs", "Finition"],
  },
  de: {
    navHome: "Home",
    navCategories: "Kategorien",
    navFinds: "Funde",
    navGuide: "Guide",
    eyebrow: "Sugargoo Spreadsheet Picks mit Streetwear-Buyer Blick",
    heroTitle: "Ein klareres Sugargoo Spreadsheet fuer Streetwear Finds",
    heroText:
      "Nutze diesen Index als klaren Startpunkt, bevor du den naechsten Produkt-Tab oeffnest. Sneaker, Hoodies, Jacken und Accessoires sind nach Outfit-Nutzen und QC-relevanten Details sortiert.",
    heroCta: "Street Style besuchen",
    heroSecondary: "Finds ansehen",
    metricFinds: "Streetwear Finds",
    metricAccess: "schnelle Routen",
    metricQc: "QC Notizen",
    visualMainLabel: "01 / Street Rotation",
    visualMainTitle: "Sneaker, washed Cotton, klare Layer, nuetzliche Accessoires.",
    visualSmallLabel: "QC Blick",
    visualSmallTitle: "Shape, Naehte, Wash, Sohle.",
    visualNoteLabel: "Kein zufaelliger Link-Dump.",
    visualNoteText: "Ein klarer Startpunkt fuer Sugargoo Shopper auf dem Weg zu Street Style.",
    categoriesEyebrow: "Nach Haul-Rolle",
    categoriesTitle: "Geh direkt zu dem Teil, das deinem Haul wirklich fehlt",
    catSneakersLabel: "Sneaker",
    catHoodiesLabel: "Hoodies",
    catJacketsLabel: "Jacken",
    catAccessoriesLabel: "Accessoires",
    catSneakers: "Daily Pairs, Retro Runner, Skate Shapes und QC-kritische Sohlen",
    catHoodies: "Washed Fleece, Zip-ups, schwere Blanks und leichte Layering-Fits",
    catJackets: "Shells, Puffer, Bomber und Workwear Layer mit echter Silhouette",
    catAccessories: "Taschen, Caps, Guertel, Socken und Details, die den Haul abrunden",
    findsEyebrow: "Aktuelle Auswahl",
    findsTitle: "Streetwear-Routen fuer echte Outfit-Nutzung",
    guideEyebrow: "Shopping Workflow",
    guideTitle: "Nutze den Index wie ein Buyer, nicht wie ein Link-Sammler",
    guideText:
      "Starte mit dem Teil, das deinem Outfit fehlt, und bewerte den Find nach Material, Shape, QC-Risiko und Nutzwert nach dem ersten Wear.",
    stepOne: "Waehle die Kategorie, die du wirklich zum naechsten Haul hinzufuegen wuerdest.",
    stepTwo: "Vergleiche Silhouette, Material, Preisniveau und QC-Prioritaet.",
    stepThree: "Oeffne Street Style nur, wenn der Find eine klare Rolle im Outfit hat.",
    notesEyebrow: "Buying Notes",
    notesTitle: "Die Checks, die einen Spreadsheet Find oeffnenswert machen",
    noteOneLabel: "Sneakers",
    noteOneTitle: "Die Form kommt vor dem Logo.",
    noteOneText:
      "Ein Paar kann im Thumbnail gut aussehen und trotzdem wegen Toe Box, Ferse oder Sohlenhoehe falsch wirken. Starke Sugargoo Spreadsheet Eintraege helfen, diese Details zu pruefen, bevor du den Haul darum baust.",
    noteTwoLabel: "Hoodies",
    noteTwoTitle: "Gute Basics sind oft leise.",
    noteTwoText:
      "Gewicht, Aermelfall, Wash, Reissverschluss und Rippung sagen mehr als eine laute Grafik. Ein Hoodie, der den Klick wert ist, verbessert einen simplen Fit und fuellt nicht nur eine Tabellenzeile.",
    noteThreeLabel: "Outerwear",
    noteThreeTitle: "Die Schicht muss Wetter und Fit tragen.",
    noteThreeText:
      "Bei Jacken fallen billige Details schnell auf: flache Kragen, schwache Buendchen, duenne Steppung, seltsame Taschen. Ein guter Sugargoo Index zeigt Layer, die ihre Form behalten.",
    faqEyebrow: "Direkte Antworten",
    faqTitle: "Fragen vor dem naechsten Produkt-Tab",
    faqOneQ: "Was ist anders als bei einem zufaelligen Sugargoo Spreadsheet?",
    faqOneA:
      "Er ist auf echtes Browsing ausgelegt: Kategorie-Shortcuts, Outfit-Nutzen, QC-relevante Details und weniger schwache Links.",
    faqTwoQ: "Warum hilft das bei Sugargoo Spreadsheet Suchen?",
    faqTwoA:
      "Wer nach Sugargoo Spreadsheet sucht, will meist schnell relevante Finds statt eine Wand gemischter Links. Diese Seite trennt Sneaker, Hoodies, Jacken und Accessoires klar.",
    faqThreeQ: "Wie bewerte ich einen Find vor dem Haul?",
    faqThreeA:
      "Starte mit Silhouette und Material. Danach pruefe QC-Zonen: Naehte, Print-Platzierung, Wash, Sohlenform, Reissverschluss und ob das Teil auch ohne Logo funktioniert.",
    footerText: "Unabhaengiger Streetwear Index. Verfuegbarkeit und Preise koennen sich aendern.",
    footerCta: "Street Style oeffnen",
    openFind: "Oeffnen",
    productSneakersTitle: "Daily Sneaker mit QC-Signalen",
    productSneakersType: "Sneaker",
    productSneakersCopy:
      "Runner, Low Profiles und Skate Shapes fuer wiederholtes Tragen. Pruefe Toe Shape, Ferse, Sohlenhoehe und ob das Paar ohne lautes Styling funktioniert.",
    productSneakersTags: ["QC Shape", "Daily", "Sohlen"],
    productHoodiesTitle: "Hoodies fuer simple Fits",
    productHoodiesType: "Hoodies",
    productHoodiesCopy:
      "Washed Fleece, Zip-ups und schwere Blanks, die vor dem Logo nuetzlich sein muessen. Aermelfall, Rippung und Stoffgewicht entscheiden den Pick.",
    productHoodiesTags: ["Washed Fleece", "Zip-ups", "Layering"],
    productJacketsTitle: "Outerwear mit echter Form",
    productJacketsType: "Jacken",
    productJacketsCopy:
      "Shells, Bomber, Puffer und Workwear Layer nach Kragenform, Buendchen, Taschenplatzierung und Sitz ueber einem Hoodie ausgewaehlt.",
    productJacketsTags: ["Silhouette", "Saison", "Textur"],
    productAccessoriesTitle: "Accessoires, die den Haul abrunden",
    productAccessoriesType: "Accessoires",
    productAccessoriesCopy:
      "Caps, Taschen, Guertel und Socken, die einen einfachen Haul bewusster wirken lassen. Gute kleine Teile bringen Textur, Proportion oder Nutzen.",
    productAccessoriesTags: ["Caps", "Taschen", "Finish"],
  },
  es: {
    navHome: "Inicio",
    navCategories: "Categorias",
    navFinds: "Hallazgos",
    navGuide: "Guia",
    eyebrow: "Picks de Sugargoo spreadsheet con mirada de comprador streetwear",
    heroTitle: "Un Sugargoo spreadsheet mas claro para hallazgos streetwear",
    heroText:
      "Usa este indice como punto de partida antes de abrir otro producto. Sneakers, hoodies, chaquetas y accesorios estan ordenados por uso real y detalles QC que importan en un haul.",
    heroCta: "Visitar Street Style",
    heroSecondary: "Explorar hallazgos",
    metricFinds: "streetwear finds",
    metricAccess: "rutas rapidas",
    metricQc: "notas QC",
    visualMainLabel: "01 / Rotacion streetwear",
    visualMainTitle: "Sneakers, algodon lavado, capas limpias, accesorios utiles.",
    visualSmallLabel: "QC watch",
    visualSmallTitle: "Shape, costuras, lavado, suela.",
    visualNoteLabel: "No es un volcado de links.",
    visualNoteText: "Un punto de partida claro para compradores Sugargoo que van a Street Style.",
    categoriesEyebrow: "Por rol en el haul",
    categoriesTitle: "Ve directo a la pieza que de verdad estas buscando",
    catSneakersLabel: "Sneakers",
    catHoodiesLabel: "Hoodies",
    catJacketsLabel: "Chaquetas",
    catAccessoriesLabel: "Accesorios",
    catSneakers: "Pares diarios, runners retro, shapes skate y suelas sensibles al QC",
    catHoodies: "Fleece lavado, zip-ups, blanks pesados y fits faciles de layer",
    catJackets: "Shells, puffers, bombers y capas workwear con silueta real",
    catAccessories: "Bolsos, gorras, cinturones, calcetines y detalles que cierran un haul",
    findsEyebrow: "Edicion actual",
    findsTitle: "Rutas streetwear pensadas para outfits reales",
    guideEyebrow: "Flujo de compra",
    guideTitle: "Usa el indice como buyer, no como coleccionista de links",
    guideText:
      "Empieza por la parte del outfit que falta y juzga cada find por material, shape, riesgo QC y si seguira funcionando despues del primer uso.",
    stepOne: "Elige la categoria que de verdad sumarias al proximo haul.",
    stepTwo: "Compara silueta, material, precio y prioridad QC.",
    stepThree: "Abre Street Style solo cuando el find tenga un rol claro en el outfit.",
    notesEyebrow: "Notas de compra",
    notesTitle: "Los checks que hacen que un find del spreadsheet valga abrirse",
    noteOneLabel: "Sneakers",
    noteOneTitle: "La forma importa antes que el logo.",
    noteOneText:
      "Un par puede verse bien en miniatura y fallar por la puntera, el talon o la altura de la suela. Las buenas entradas de Sugargoo spreadsheet ayudan a revisar esos detalles antes de armar el haul alrededor.",
    noteTwoLabel: "Hoodies",
    noteTwoTitle: "Un buen basico suele ser discreto.",
    noteTwoText:
      "Peso, caida de manga, lavado, cremallera y ribbing dicen mas que un grafico grande. Un hoodie que vale el clic mejora un fit simple, no solo ocupa otra fila.",
    noteThreeLabel: "Outerwear",
    noteThreeTitle: "La capa tiene que cargar clima y fit.",
    noteThreeText:
      "En chaquetas los detalles baratos aparecen rapido: cuellos planos, punos debiles, acolchado fino, bolsillos raros. Un buen indice Sugargoo apunta a capas que mantienen la silueta.",
    faqEyebrow: "Respuestas directas",
    faqTitle: "Preguntas utiles antes de abrir otro producto",
    faqOneQ: "Que cambia frente a un Sugargoo spreadsheet cualquiera?",
    faqOneA:
      "Esta pensado para como la gente compra de verdad: atajos por categoria, uso en outfit, detalles QC y menos links de baja senal.",
    faqTwoQ: "Por que ayuda en busquedas de Sugargoo spreadsheet?",
    faqTwoA:
      "Quien busca Sugargoo spreadsheet normalmente quiere llegar rapido a finds relevantes, no a una pared de links mezclados. Aqui sneakers, hoodies, chaquetas y accesorios quedan separados.",
    faqThreeQ: "Como juzgo un find antes de sumarlo al haul?",
    faqThreeA:
      "Empieza por silueta y material. Luego revisa zonas QC: costuras, placement del print, lavado, forma de suela, cremallera y si la pieza funciona sin logo.",
    footerText: "Indice streetwear independiente. Disponibilidad y precios pueden cambiar.",
    footerCta: "Abrir Street Style",
    openFind: "Abrir",
    productSneakersTitle: "Sneakers daily con senales QC",
    productSneakersType: "Sneakers",
    productSneakersCopy:
      "Runners, perfiles bajos y shapes skate para usar muchas veces. Revisa puntera, talon, altura de suela y si el par funciona sin styling ruidoso.",
    productSneakersTags: ["Shape QC", "Daily", "Suelas"],
    productHoodiesTitle: "Hoodies que sostienen un fit simple",
    productHoodiesType: "Hoodies",
    productHoodiesCopy:
      "Fleece lavado, zip-ups y blanks pesados que deben ser utiles antes que el logo. Caida de manga, ribbing y peso de tela deciden el pick.",
    productHoodiesTags: ["Fleece lavado", "Zip-ups", "Layering"],
    productJacketsTitle: "Outerwear con forma real",
    productJacketsType: "Chaquetas",
    productJacketsCopy:
      "Shells, bombers, puffers y capas workwear elegidas por cuello, punos, bolsillos y como cae la chaqueta encima de un hoodie.",
    productJacketsTags: ["Silueta", "Temporada", "Textura"],
    productAccessoriesTitle: "Accesorios que cierran el haul",
    productAccessoriesType: "Accesorios",
    productAccessoriesCopy:
      "Gorras, bolsos, cinturones y calcetines que hacen que un haul basico se sienta intencional. Las mejores piezas pequenas suman textura, proporcion o utilidad.",
    productAccessoriesTags: ["Gorras", "Bolsos", "Final"],
  },
  it: {
    navHome: "Home",
    navCategories: "Categorie",
    navFinds: "Finds",
    navGuide: "Guida",
    eyebrow: "Pick Sugargoo spreadsheet con occhio da buyer streetwear",
    heroTitle: "Un Sugargoo spreadsheet piu chiaro per find streetwear",
    heroText:
      "Usa questo indice come punto di partenza prima di aprire un altro prodotto. Sneakers, hoodie, giacche e accessori sono ordinati per uso reale e dettagli QC importanti nel haul.",
    heroCta: "Visita Street Style",
    heroSecondary: "Esplora finds",
    metricFinds: "streetwear finds",
    metricAccess: "percorsi rapidi",
    metricQc: "note QC",
    visualMainLabel: "01 / Rotazione streetwear",
    visualMainTitle: "Sneakers, cotone washed, layer puliti, accessori utili.",
    visualSmallLabel: "QC watch",
    visualSmallTitle: "Shape, cuciture, wash, suola.",
    visualNoteLabel: "Non un dump casuale di link.",
    visualNoteText: "Un punto di partenza chiaro per shopper Sugargoo verso Street Style.",
    categoriesEyebrow: "Per ruolo nel haul",
    categoriesTitle: "Vai subito alla parte del haul che stai davvero cercando",
    catSneakersLabel: "Sneakers",
    catHoodiesLabel: "Hoodies",
    catJacketsLabel: "Giacche",
    catAccessoriesLabel: "Accessori",
    catSneakers: "Pares daily, runner retro, shape skate e suole sensibili al QC",
    catHoodies: "Fleece washed, zip-up, blanks pesanti e fit facili da layer",
    catJackets: "Shell, puffer, bomber e layer workwear con vera silhouette",
    catAccessories: "Borse, cappelli, cinture, calze e dettagli che chiudono il haul",
    findsEyebrow: "Edit attuale",
    findsTitle: "Percorsi streetwear pensati per outfit reali",
    guideEyebrow: "Workflow shopping",
    guideTitle: "Usa l'indice come un buyer, non come un raccoglitore di link",
    guideText:
      "Parti dal pezzo che manca all'outfit e giudica ogni find per materiale, shape, rischio QC e utilita dopo il primo wear.",
    stepOne: "Scegli la categoria che aggiungeresti davvero al prossimo haul.",
    stepTwo: "Confronta silhouette, materiale, prezzo e priorita QC.",
    stepThree: "Apri Street Style solo quando il find ha un ruolo chiaro nel fit.",
    notesEyebrow: "Note acquisto",
    notesTitle: "I controlli che rendono un find dello spreadsheet degno di apertura",
    noteOneLabel: "Sneakers",
    noteOneTitle: "La forma viene prima del logo.",
    noteOneText:
      "Una sneaker puo sembrare giusta in thumbnail e poi risultare sbagliata per toe box, tallone o altezza suola. Le buone voci Sugargoo spreadsheet aiutano a controllare quei dettagli prima di costruirci il haul.",
    noteTwoLabel: "Hoodies",
    noteTwoTitle: "Un buon basic di solito e silenzioso.",
    noteTwoText:
      "Peso, caduta manica, lavaggio, zip e costine dicono piu di un grande grafico. Un hoodie che vale il clic migliora un fit semplice, non riempie solo una riga.",
    noteThreeLabel: "Outerwear",
    noteThreeTitle: "Il layer deve reggere meteo e fit.",
    noteThreeText:
      "Nelle giacche i dettagli economici si vedono presto: colli piatti, polsini deboli, quilting sottile, tasche strane. Un buon indice Sugargoo porta verso layer che mantengono forma.",
    faqEyebrow: "Risposte dirette",
    faqTitle: "Domande utili prima di aprire un altro prodotto",
    faqOneQ: "Cosa cambia rispetto a un Sugargoo spreadsheet casuale?",
    faqOneA:
      "E pensato per come le persone cercano davvero: scorciatoie per categoria, uso nell'outfit, dettagli QC e meno link a basso segnale.",
    faqTwoQ: "Perche aiuta nelle ricerche Sugargoo spreadsheet?",
    faqTwoA:
      "Chi cerca Sugargoo spreadsheet di solito vuole arrivare in fretta a find rilevanti, non a un muro di link misti. Qui sneakers, hoodie, giacche e accessori restano separati.",
    faqThreeQ: "Come giudico un find prima di aggiungerlo al haul?",
    faqThreeA:
      "Parti da silhouette e materiale. Poi guarda zone QC: cuciture, placement della stampa, lavaggio, forma suola, zip e se il pezzo funziona senza logo.",
    footerText: "Indice streetwear indipendente. Disponibilita e prezzi possono cambiare.",
    footerCta: "Apri Street Style",
    openFind: "Apri",
    productSneakersTitle: "Sneakers daily con segnali QC",
    productSneakersType: "Sneakers",
    productSneakersCopy:
      "Runner, profili bassi e shape skate da usare spesso. Controlla toe shape, tallone, altezza suola e se il paio funziona senza styling rumoroso.",
    productSneakersTags: ["Shape QC", "Daily", "Suole"],
    productHoodiesTitle: "Hoodies per fit semplici",
    productHoodiesType: "Hoodies",
    productHoodiesCopy:
      "Fleece washed, zip-up e blanks pesanti che devono essere utili prima del logo. Caduta manica, costine e peso tessuto decidono il pick.",
    productHoodiesTags: ["Fleece washed", "Zip-up", "Layering"],
    productJacketsTitle: "Outerwear con forma vera",
    productJacketsType: "Giacche",
    productJacketsCopy:
      "Shell, bomber, puffer e layer workwear scelti per collo, polsini, tasche e come la giacca cade sopra un hoodie.",
    productJacketsTags: ["Silhouette", "Stagione", "Texture"],
    productAccessoriesTitle: "Accessori che chiudono il haul",
    productAccessoriesType: "Accessori",
    productAccessoriesCopy:
      "Cappelli, borse, cinture e calze che rendono un haul basic piu intenzionale. I migliori piccoli pezzi aggiungono texture, proporzione o utilita.",
    productAccessoriesTags: ["Cappelli", "Borse", "Finish"],
  },
  nl: {
    navHome: "Home",
    navCategories: "Categorieen",
    navFinds: "Finds",
    navGuide: "Gids",
    eyebrow: "Sugargoo spreadsheet picks met een streetwear buyer blik",
    heroTitle: "Een duidelijkere Sugargoo spreadsheet voor streetwear finds.",
    heroText:
      "Gebruik deze index als scherper startpunt voordat je nog een producttab opent. Sneakers, hoodies, jackets en accessoires zijn gegroepeerd rond outfitgebruik en QC-details die tellen in een haul.",
    heroCta: "Bezoek Street Style",
    heroSecondary: "Bekijk finds",
    metricFinds: "streetwear finds",
    metricAccess: "snelle routes",
    metricQc: "QC notities",
    visualMainLabel: "01 / Street rotation",
    visualMainTitle: "Sneakers, gewassen katoen, cleane layers, nuttige accessoires.",
    visualSmallLabel: "QC watch",
    visualSmallTitle: "Shape, stitching, wash, zool.",
    visualNoteLabel: "Geen willekeurige linkdump.",
    visualNoteText: "Een duidelijk startpunt voor Sugargoo shoppers richting Street Style.",
    categoriesEyebrow: "Op haul-rol",
    categoriesTitle: "Ga direct naar het deel van je haul dat je echt zoekt",
    catSneakersLabel: "Sneakers",
    catHoodiesLabel: "Hoodies",
    catJacketsLabel: "Jackets",
    catAccessoriesLabel: "Accessoires",
    catSneakers: "Daily pairs, retro runners, skate shapes en QC-gevoelige zolen",
    catHoodies: "Gewassen fleece, zip-ups, zware blanks en makkelijke layering fits",
    catJackets: "Shells, puffers, bombers en workwear layers met echte silhouette",
    catAccessories: "Tassen, caps, riemen, sokken en details die een haul afmaken",
    findsEyebrow: "Huidige edit",
    findsTitle: "Streetwear routes gebouwd rond echt outfitgebruik",
    guideEyebrow: "Shopping workflow",
    guideTitle: "Gebruik de index als buyer, niet als linkverzamelaar",
    guideText:
      "Begin met het deel dat je outfit mist en beoordeel elke find op materiaal, shape, QC-risico en of hij na de eerste wear nog werkt.",
    stepOne: "Kies de categorie die je echt aan je volgende haul zou toevoegen.",
    stepTwo: "Vergelijk silhouette, materiaal, prijsniveau en QC-prioriteit.",
    stepThree: "Open Street Style alleen wanneer de find een duidelijke rol in een outfit heeft.",
    notesEyebrow: "Koopnotities",
    notesTitle: "De checks die een spreadsheet find het openen waard maken",
    noteOneLabel: "Sneakers",
    noteOneTitle: "Vorm komt voor het logo.",
    noteOneText:
      "Een paar kan goed lijken in een thumbnail en toch verkeerd voelen door de toe box, hielcurve of zoolhoogte. Sterke Sugargoo spreadsheet entries helpen die details te checken voordat je de haul eromheen bouwt.",
    noteTwoLabel: "Hoodies",
    noteTwoTitle: "Goede basics zijn meestal rustig.",
    noteTwoText:
      "Gewicht, mouwval, wash, ritslijn en ribbing zeggen meer dan een luide graphic. Een hoodie die het klikken waard is, maakt een simpele fit beter en vult niet alleen een spreadsheetrij.",
    noteThreeLabel: "Outerwear",
    noteThreeTitle: "De layer moet weer en fit dragen.",
    noteThreeText:
      "Bij jackets zie je goedkope details snel: platte kragen, zwakke cuffs, dunne quilting, vreemde zakken. Een nuttige Sugargoo index wijst naar layers die vorm houden.",
    faqEyebrow: "Directe antwoorden",
    faqTitle: "Vragen voordat je nog een product opent",
    faqOneQ: "Wat maakt dit anders dan een willekeurige Sugargoo spreadsheet?",
    faqOneA:
      "Hij is gebouwd rond hoe mensen echt shoppen: categorie-shortcuts, outfitgebruik, QC-gevoelige details en minder links met lage waarde.",
    faqTwoQ: "Waarom helpt dit bij Sugargoo spreadsheet zoekopdrachten?",
    faqTwoA:
      "Wie Sugargoo spreadsheet zoekt, wil meestal snel naar relevante finds, niet naar een muur gemixte links. Hier blijven sneakers, hoodies, jackets en accessoires gescheiden.",
    faqThreeQ: "Hoe beoordeel ik een find voordat hij in mijn haul gaat?",
    faqThreeA:
      "Begin met silhouet en materiaal. Check daarna QC-gevoelige plekken: stitching, print placement, wash, zoolvorm, ritskwaliteit en of het stuk werkt zonder logo.",
    footerText: "Onafhankelijke streetwear index. Beschikbaarheid en prijzen kunnen veranderen.",
    footerCta: "Open Street Style",
    openFind: "Open find",
    productSneakersTitle: "Daily sneakers met QC-signalen",
    productSneakersType: "Sneakers",
    productSneakersCopy:
      "Runners, lage profielen en skate shapes voor herhaald dragen. Check toe shape, hielcurve, zoolhoogte en of het paar werkt zonder luide styling.",
    productSneakersTags: ["QC shape", "Daily", "Zolen"],
    productHoodiesTitle: "Hoodies die een simpele fit dragen",
    productHoodiesType: "Hoodies",
    productHoodiesCopy:
      "Gewassen fleece, zip-ups en zware blanks die nuttig moeten zijn voordat het logo telt. Mouwval, ribbing en stofgewicht bepalen de pick.",
    productHoodiesTags: ["Gewassen fleece", "Zip-ups", "Layering"],
    productJacketsTitle: "Outerwear met echte vorm",
    productJacketsType: "Jackets",
    productJacketsCopy:
      "Shells, bombers, puffers en workwear layers gekozen op kraagvorm, cuffs, zakplaatsing en hoe de jas over een hoodie valt.",
    productJacketsTags: ["Silhouette", "Seizoen", "Textuur"],
    productAccessoriesTitle: "Accessoires die de haul afmaken",
    productAccessoriesType: "Accessoires",
    productAccessoriesCopy:
      "Caps, tassen, riemen en sokken die een basic haul bewuster maken. De beste kleine stukken voegen textuur, proportie of nut toe.",
    productAccessoriesTags: ["Caps", "Tassen", "Finish"],
  },
  pt: {
    navHome: "Home",
    navCategories: "Categorias",
    navFinds: "Achados",
    navGuide: "Guia",
    eyebrow: "Picks Sugargoo spreadsheet com olhar de buyer streetwear",
    heroTitle: "Um Sugargoo spreadsheet mais claro para streetwear finds.",
    heroText:
      "Use este index como ponto de partida antes de abrir outro produto. Sneakers, hoodies, jackets e acessorios ficam agrupados por uso real e detalhes QC que importam no haul.",
    heroCta: "Visitar Street Style",
    heroSecondary: "Ver achados",
    metricFinds: "streetwear finds",
    metricAccess: "rotas rapidas",
    metricQc: "notas QC",
    visualMainLabel: "01 / Rotacao streetwear",
    visualMainTitle: "Sneakers, algodao washed, layers limpos, acessorios uteis.",
    visualSmallLabel: "QC watch",
    visualSmallTitle: "Shape, costura, wash, sola.",
    visualNoteLabel: "Nao e um monte aleatorio de links.",
    visualNoteText: "Um ponto de partida claro para compradores Sugargoo indo ao Street Style.",
    categoriesEyebrow: "Navegue por funcao no outfit",
    categoriesTitle: "Va direto para a parte do haul que voce realmente esta buscando",
    catSneakersLabel: "Sneakers",
    catHoodiesLabel: "Hoodies",
    catJacketsLabel: "Jackets",
    catAccessoriesLabel: "Acessorios",
    catSneakers: "Pares diarios, retro runners, shapes skate e solas sensiveis a QC",
    catHoodies: "Fleece washed, zip-ups, blanks pesados e fits faceis de layer",
    catJackets: "Shells, puffers, bombers e layers workwear com silhueta real",
    catAccessories: "Bolsas, caps, cintos, meias e detalhes que fecham o haul",
    findsEyebrow: "Edicao atual",
    findsTitle: "Rotas streetwear feitas para outfits reais",
    guideEyebrow: "Fluxo de compra",
    guideTitle: "Use o index como buyer, nao como colecionador de links",
    guideText:
      "Comece pela parte que falta no outfit e julgue cada find por material, shape, risco QC e se ainda funciona depois do primeiro uso.",
    stepOne: "Escolha a categoria que voce realmente adicionaria ao proximo haul.",
    stepTwo: "Compare silhueta, material, nivel de preco e prioridade QC.",
    stepThree: "Abra Street Style apenas quando o find tiver um papel claro no outfit.",
    notesEyebrow: "Notas de compra",
    notesTitle: "Os checks que fazem um find do spreadsheet valer o clique",
    noteOneLabel: "Sneakers",
    noteOneTitle: "O shape vem antes do logo.",
    noteOneText:
      "Um par pode parecer certo na miniatura e ainda ficar estranho por causa da toe box, curva do calcanhar ou altura da sola. Boas entradas Sugargoo spreadsheet ajudam a revisar esses detalhes antes de montar o haul em volta.",
    noteTwoLabel: "Hoodies",
    noteTwoTitle: "Bons basics normalmente sao discretos.",
    noteTwoText:
      "Peso, queda da manga, wash, linha do ziper e ribbing dizem mais que um grafico grande. Um hoodie que vale abrir melhora um fit simples, nao so preenche outra linha.",
    noteThreeLabel: "Outerwear",
    noteThreeTitle: "A layer precisa segurar clima e fit.",
    noteThreeText:
      "Em jackets, detalhes baratos aparecem rapido: golas planas, punhos fracos, quilting fino, bolsos estranhos. Um bom index Sugargoo aponta para layers que seguram a silhueta.",
    faqEyebrow: "Respostas diretas",
    faqTitle: "Perguntas antes de abrir outro produto",
    faqOneQ: "O que muda em relacao a uma Sugargoo spreadsheet aleatoria?",
    faqOneA:
      "Ele foi feito para como as pessoas compram de verdade: atalhos por categoria, uso no outfit, detalhes QC e menos links de baixo sinal.",
    faqTwoQ: "Por que isso ajuda em buscas por Sugargoo spreadsheet?",
    faqTwoA:
      "Quem busca Sugargoo spreadsheet normalmente quer chegar rapido a finds relevantes, nao a uma parede de links misturados. Aqui sneakers, hoodies, jackets e acessorios ficam separados.",
    faqThreeQ: "Como julgar um find antes de colocar no haul?",
    faqThreeA:
      "Comece por silhueta e material. Depois veja pontos sensiveis de QC: costura, print placement, wash, formato da sola, ziper e se a peca funciona sem depender de logo.",
    footerText: "Index streetwear independente. Disponibilidade e precos podem mudar.",
    footerCta: "Abrir Street Style",
    openFind: "Abrir find",
    productSneakersTitle: "Sneakers daily com sinais QC",
    productSneakersType: "Sneakers",
    productSneakersCopy:
      "Runners, perfis baixos e shapes skate para usar varias vezes. Confira toe shape, calcanhar, altura da sola e se o par funciona sem styling barulhento.",
    productSneakersTags: ["Shape QC", "Daily", "Solas"],
    productHoodiesTitle: "Hoodies que seguram um fit simples",
    productHoodiesType: "Hoodies",
    productHoodiesCopy:
      "Fleece washed, zip-ups e blanks pesados que precisam ser uteis antes do logo. Queda da manga, ribbing e peso do tecido decidem o pick.",
    productHoodiesTags: ["Fleece washed", "Zip-ups", "Layering"],
    productJacketsTitle: "Outerwear com forma real",
    productJacketsType: "Jackets",
    productJacketsCopy:
      "Shells, bombers, puffers e layers workwear escolhidos por gola, punhos, bolsos e como a jaqueta cai sobre um hoodie.",
    productJacketsTags: ["Silhueta", "Sazonal", "Textura"],
    productAccessoriesTitle: "Acessorios que fecham o haul",
    productAccessoriesType: "Acessorios",
    productAccessoriesCopy:
      "Caps, bolsas, cintos e meias que fazem um haul basico parecer intencional. As melhores pecas pequenas adicionam textura, proporcao ou utilidade.",
    productAccessoriesTags: ["Caps", "Bolsas", "Final"],
  },
};

const products = [
  {
    title: "Daily sneakers with QC tells",
    titleKey: "productSneakersTitle",
    type: "Sneakers",
    typeKey: "productSneakersType",
    slug: "sneakers",
    image: "/assets/find-sneakers-green.png",
    imageAlt: "Green performance sneaker find from a Sugargoo spreadsheet streetwear list",
    copy: "Runners, low profiles, and skate shapes that earn repeat wear. Check toe shape, heel curve, outsole height, and whether the pair still works without loud styling.",
    copyKey: "productSneakersCopy",
    tags: ["QC shape", "Daily wear", "Soles"],
    tagsKey: "productSneakersTags",
  },
  {
    title: "Hoodies that carry a simple fit",
    titleKey: "productHoodiesTitle",
    type: "Hoodies",
    typeKey: "productHoodiesType",
    slug: "hoodies",
    image: "/assets/find-hoodie-cream.png",
    imageAlt: "Cream hoodie streetwear find from a Sugargoo spreadsheet category",
    copy: "Washed fleece, zip-ups, and heavyweight blanks that should feel useful before the logo matters. Sleeve drop, ribbing, and fabric weight decide the pick.",
    copyKey: "productHoodiesCopy",
    tags: ["Washed fleece", "Zip-ups", "Layering"],
    tagsKey: "productHoodiesTags",
  },
  {
    title: "Outerwear with real shape",
    titleKey: "productJacketsTitle",
    type: "Jackets",
    typeKey: "productJacketsType",
    slug: "jackets",
    image: "/assets/find-jacket-white-black.png",
    imageAlt: "White and black jacket find for Sugargoo spreadsheet QC notes",
    copy: "Shells, bombers, puffers, and workwear layers selected for collar shape, cuff strength, pocket placement, and how the jacket sits over a hoodie.",
    copyKey: "productJacketsCopy",
    tags: ["Silhouette", "Seasonal", "Texture"],
    tagsKey: "productJacketsTags",
  },
  {
    title: "Accessories that finish the haul",
    titleKey: "productAccessoriesTitle",
    type: "Accessories",
    typeKey: "productAccessoriesType",
    slug: "accessories",
    image: "/assets/find-accessories-silver.png",
    imageAlt: "Silver bracelet and ring accessories from a Sugargoo spreadsheet finds list",
    copy: "Caps, bags, belts, and socks that make a basic haul feel intentional. The best small pieces add texture, proportion, or utility without stealing the outfit.",
    copyKey: "productAccessoriesCopy",
    tags: ["Caps", "Bags", "Finish"],
    tagsKey: "productAccessoriesTags",
  },
];

const languageSelect = document.querySelector("#languageSelect");
const themeToggle = document.querySelector("#themeToggle");
const productGrid = document.querySelector("#productGrid");

function getStoredValue(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Some browser privacy modes block localStorage; the page should still work.
  }
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get("lang")?.toLowerCase();
  const savedLang = getStoredValue("lang")?.toLowerCase();
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  return [queryLang, savedLang, browserLang].find((lang) => translations[lang]) || "en";
}

function setLanguage(lang) {
  const safeLang = translations[lang] ? lang : "en";
  const dictionary = translations[safeLang];
  document.documentElement.lang = safeLang;
  setStoredValue("lang", safeLang);

  if (languageSelect) {
    languageSelect.value = safeLang;
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  renderProducts(dictionary);
}

function renderProducts(dictionary) {
  if (!productGrid) {
    return;
  }

  const cards = products.map((product) => {
    const productTitle = dictionary[product.titleKey] || product.title;
    const productType = dictionary[product.typeKey] || product.type;
    const productCopy = dictionary[product.copyKey] || product.copy;
    const productTags = dictionary[product.tagsKey] || product.tags;
    const article = document.createElement("article");
    article.className = "product-card";

    const media = document.createElement("div");
    media.className = "product-media";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.imageAlt;
    image.loading = "lazy";
    image.width = 800;
    image.height = 600;

    const type = document.createElement("span");
    type.textContent = productType;

    media.append(image, type);

    const content = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = productTitle;
    const copy = document.createElement("p");
    copy.textContent = productCopy;
    content.append(title, copy);

    const tags = document.createElement("div");
    tags.className = "tags";
    productTags.forEach((tag) => {
      const tagNode = document.createElement("span");
      tagNode.textContent = tag;
      tags.append(tagNode);
    });

    const link = document.createElement("a");
    link.className = "button primary promo-link";
    link.href = `${CATEGORY_URL_BASE}${encodeURIComponent(product.slug)}`;
    link.target = "_blank";
    link.rel = "noopener sponsored";
    link.textContent = dictionary.openFind;

    article.append(media, content, tags, link);
    return article;
  });

  productGrid.replaceChildren(...cards);
  configurePromoLinks();
}

function configurePromoLinks() {
  document.querySelectorAll('a[href^="https://streetstyle.maisonlooks.com/"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener sponsored";
  });
}

function setTheme(theme) {
  const safeTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = safeTheme;
  setStoredValue("theme", safeTheme);

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", safeTheme === "dark" ? "#151719" : "#f6f1e8");
  }
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(current);
  });
}

setTheme(getStoredValue("theme") || "light");
setLanguage(getInitialLanguage());
configurePromoLinks();
