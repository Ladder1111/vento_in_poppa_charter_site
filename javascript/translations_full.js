/**
 * =====================================================
 * SISTEMA MULTILINGUA COMPLETO - VENTO IN POPPA CHARTER
 * Versione 3.1 - CON PRESERVAZIONE ICONE
 * =====================================================
 * Lingue supportate: IT (default), EN, ES
 * Sistema: Preserva icone Bootstrap durante traduzione
 *
 * CORREZIONI applicate in questa versione:
 *  - Aggiunto menu mobile (navMobileTours / About / Faq / Contact)
 *  - Aggiunto skipLink
 *  - Aggiunto hamburger_label (aria-label del bottone hamburger)
 *  - Corretto keyMap: acceptBtn, rejectBtn, heroText, heroBtn,
 *    tourTitle, tourSubtitle, capriBadge, aboutMainTitle,
 *    q1/a1/q2/a2/q3/a3  →  tutti allineati agli id reali dell'HTML
 *  - Aggiunte traduzione EN/ES per ogni nuova chiave
 * =====================================================
 */

/* ==================== DIZIONARIO TRADUZIONI ====================*/
const translationsData = {
  // ==================== ITALIANO (DEFAULT) ====================
  it: {
    // --- Skip link accessibilità ---
    skip_link: "Vai al contenuto principale",

    // --- Cookie banner ---
    cookie_text: "Questo sito utilizza solo cookie tecnici per impostare la lingua di navigazione. Non vengono utilizzati altri tipi di cookie.",
    cookie_more_info: "Maggiori informazioni",
    cookie_accept: "Chiudi",
    cookie_reject: "Rifiuta",

    // --- Navigazione desktop ---
    nav_tours: "Tour",
    nav_about: "Chi siamo",
    nav_faq: "FAQ",
    nav_contact: "Contatti",

    // --- Navigazione mobile ---
    nav_mobile_tours: "Tour",
    nav_mobile_about: "Chi siamo",
    nav_mobile_faq: "FAQ",
    nav_mobile_contact: "Contatti",
    hamburger_label: "Apri menu mobile",

    // --- Hero ---
    hero_title: "Tour in Barca da Sorrento a Capri e Costiera Amalfitana",
    hero_subtitle: "Esplora le meraviglie del Golfo di Napoli con i nostri tour esclusivi in piccoli gruppi. Skipper esperti, partenze giornaliere, esperienza indimenticabile!",
    hero_cta: "Scopri i tour",

    // --- Sezione Tour ---
    tours_title: "I Nostri Tour in Barca dalla Penisola Sorrentina",
    tours_subtitle: "Piccoli gruppi max 7 persone, partenze giornaliere da Sorrento, prelievo disponibile e assistenza dedicata per tutta la durata dell'escursione.",
    badge_bestseller: "🔥 Più venduto",
    duration_label: "Durata:",
    max_label: "Max:",

    // Tour – Capri
    capri_title: "Tour Capri in Barca: Grotta Azzurra e Faraglioni",
    capri_desc: "Esplora l'isola di Capri in barca con visita alla Grotta Azzurra, giro completo dei Faraglioni e soste bagno nelle acque cristalline. Tour completo di 7-8 ore.",
    capri_price: "799 €",

    // Tour – Sunset
    sunset_title: "Sunset Experience - Tour al Tramonto da Sorrento",
    sunset_desc: "Vivi un'esperienza romantica unica con il nostro tour al tramonto. Navigazione lungo la costa sorrentina mentre il sole si tuffa nel mare, con aperitivo incluso.",
    sunset_price: "299 €",

    // Tour – Amalfi
    amalfi_title: "Tour Costiera Amalfitana in Barca: Positano, Amalfi e Grotte",
    amalfi_desc: "Scopri la bellezza della Costiera Amalfitana dal mare. Tour di 5-6 ore con soste a Positano, Amalfi, Praiano e visita alle grotte marine più suggestive.",
    amalfi_price: "899 €",

    // --- Sezione About ---
    about_badge: "La Nostra Storia",
    about_title: "Passione per il Mare dal 2023 - Skipper Locali Esperti",
    about_intro: "La storia di Vento In Poppa Charter inizia nel 2023, dalla felice intuizione di persone già inserite nella realtà marinaria sorrentina, appassionate del mare ed entusiaste del proprio lavoro.",
    about_full: "Il nostro equipaggio è composto da guide e capitani locali che conoscono profondamente la Penisola Sorrentina, Capri e la Costiera Amalfitana. Questa conoscenza approfondita ci consente di offrire esperienze autentiche e personalizzate, consentendo ai visitatori di scoprire i segreti nascosti e gli angoli più affascinanti del Golfo di Napoli. Offriamo itinerari flessibili che possono essere adattati alle preferenze dei nostri clienti: esplorare grotte marine, fare soste bagno in acque cristalline o semplicemente godersi il paesaggio mozzafiato.",

    // --- Sezione FAQ ---
    faq_title: "Domande Frequenti sui Tour in Barca da Sorrento",
    faq_intro: "Risposte alle domande più comuni sui nostri tour in barca da Sorrento verso Capri, Costiera Amalfitana e Penisola Sorrentina.",
    faq_q1: "Quante persone ci sono in barca durante i tour?",
    faq_a1: "I tour condivisi sono pensati per piccoli gruppi (massimo 7 persone), così da garantire comfort a bordo ed un'esperienza più autentica rispetto alle escursioni di massa. Offriamo anche tour privati per chi desidera un'esperienza esclusiva.",
    faq_q2: "Cosa succede in caso di maltempo durante il tour?",
    faq_a2: "La sicurezza dei nostri passeggeri è la nostra massima priorità. In caso di maltempo o condizioni marine avverse, potremmo dover cancellare o riprogrammare il tour. In tal caso, ti contatteremo per fornirti opzioni alternative o per il rimborso completo.",
    faq_q3: "È necessario saper nuotare per partecipare ai tour?",
    faq_a3: "Non è strettamente necessario saper nuotare, ma è consigliato per godersi le soste bagno. A bordo sono presenti giubbotti di salvataggio per tutti i passeggeri e il nostro skipper monitora costantemente la sicurezza di tutti.",

    // --- Sezione Contatti ---
    contact_title: "Contattaci per Prenotare il Tuo Tour",
    contact_intro: "Siamo qui per rispondere a tutte le tue domande e aiutarti a organizzare l'escursione perfetta da Sorrento.",
    support_247: "Assistenza Dedicata 7 Giorni su 7",
    team_available: "Il nostro team è sempre disponibile per aiutarti a scegliere il tour perfetto e rispondere a tutte le tue domande su Capri, Costiera Amalfitana e Penisola Sorrentina.",

    // Contatti – carte
    call_label: "Chiamaci Ora",
    call_text: "Parlaci direttamente al telefono al numero +39 331 616 6512 per informazioni immediate sui tour",
    call_btn: "Chiamaci",
    whatsapp_label: "WhatsApp",
    whatsapp_text: "Chatta con noi per preventivi personalizzati e informazioni rapide sui tour disponibili",
    whatsapp_btn: "Apri chat",
    email_label: "Email",
    email_text: "Inviaci una email a ventoinpoppacharter@gmail.com per richieste dettagliate sui nostri tour",
    email_btn: "Invia email",

    // Contatti – social
    follow_title: "Seguici sui Social Media",
    follow_text: "Condividiamo ogni giorno foto, video e storie dal mare. Unisciti alla nostra community di amanti delle escursioni in barca!",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",

    // Contatti – info cards
    embarkation_label: "Punto di Imbarco",
    port_label: "Porto di Sorrento - Marina Piccola",
    location_info: "Penisola Sorrentina, Provincia di Napoli, Campania",
    accessibility_info: "Facilmente raggiungibile in auto, treno o bus da Napoli",
    response_times_label: "Orari di Risposta",
    days_label: "Lunedì - Domenica",
    hours_label: "09:00 - 20:00",
    avg_response_label: "Tempo medio di risposta: 1-2 ore",

    // --- Footer ---
    footer_brand: "Vento in Poppa Charter",
    footer_desc: "Escursioni di gruppo e tour privati in barca da Sorrento, Napoli e Penisola Sorrentina verso Capri e Costiera Amalfitana. Esperienze autentiche con skipper locali esperti dal 2023.",
    footer_tours_title: "I Nostri Tour",
    footer_capri: "Tour Capri",
    footer_sunset: "Sunset Experience",
    footer_amalfi: "Costiera Amalfitana",
    footer_contacts_title: "Contatti",
    footer_phone: "+39 331 616 6512",
    footer_email: "ventoinpoppacharter@gmail.com",
    footer_address: "Marina Piccola, Porto di Sorrento (NA)",
    footer_social_title: "Social Media",

    // --- Footer bottom ---
    copyright: "© 2025 Vento in Poppa Charter – Tutti i diritti riservati | P.IVA 12345678901 |",
    privacy_link: "Privacy Policy",
    cookie_link: "Cookie Policy",

    // --- Meta / SEO (usati direttamente in setLang) ---
    page_title: "Tour Barca Sorrento Capri | Escursioni Costiera Amalfitana",
    meta_description: "Escursioni in barca da Sorrento a Capri e Costiera Amalfitana. Piccoli gruppi max 7 persone, skipper locali esperti. Prenota il tuo tour ⛵ Dal 2023.",
    meta_keywords: "escursioni barca Sorrento, tour Capri, Costiera Amalfitana boat tour, gite in barca Napoli, charter Penisola Sorrentina",

    // ==================== TOUR PAGES (data-translate) ====================
    // Hero eyebrow
    "hero.eyebrow": "Esperienza Premium · Tour Privato",
    "hero.eyebrow.sunset": "Esperienza Romantica · Aperitivo Incluso",
    "hero.eyebrow.amalfi": "Esperienza Premium · Tour Privato",

    // Tour titles (per pagina)
    "tour.capri.title": "Tour Capri in Barca: Grotta Azzurra e Faraglioni",
    "tour.sunset.title": "Sunset Experience – Tour al Tramonto da Sorrento",
    "tour.amalfi.title": "Tour Costiera Amalfitana: Positano, Amalfi e Praiano",

    // Hero price pills
    "tour.capri.price.amount": "Da €799",
    "tour.capri.price.duration": "7-8 ore",
    "tour.capri.price.people": "Max 7 passeggeri",
    "tour.sunset.price.amount": "Da €299",
    "tour.sunset.price.duration": "2-3 ore",
    "tour.sunset.price.people": "Max 7 passeggeri",
    "tour.amalfi.price.amount": "Da €899",
    "tour.amalfi.price.duration": "5-6 ore",
    "tour.amalfi.price.people": "Max 7 passeggeri",
    "tour.price.people": "Max 7 passeggeri",

    // Sezioni
    "section.description": "Descrizione del Tour",
    "section.itinerary": "Itinerario dell'Escursione",
    "content.itinerary.intro": "Scopri il percorso completo della tua esperienza in barca, dalla partenza fino al rientro al porto.",

    // Info box (Prezzo, Durata, Passeggeri)
    "info.price.label": "Prezzo",
    "info.price.value": "Da €299",
    "info.duration.label": "Durata",
    "info.duration.value": "2-3 ore",
    "info.people.label": "Passeggeri",
    "info.people.value": "Max 7 persone",

    // Pulsante prenotazione
    "button.book": "Prenota su WhatsApp",

    // CTA micro-copy
    "cta.microcopy.capri": "Risposta in 1-2 ore · Nessun pagamento online richiesto",
    "cta.microcopy.sunset": "Risposta in 1-2 ore · Aperitivo incluso · Cancellazione gratuita 48h",
    "cta.microcopy.amalfi": "Risposta in 1-2 ore · Cancellazione gratuita 48h · Skipper locale incluso",

    // Cosa è incluso
    "included.title": "Cosa è Incluso",
    "included.skipper": "Skipper professionale bilingue",
    "included.private": "Barca privata (max 7 persone)",
    "included.drinks": "Bevande a bordo",
    "included.snacks": "Snack e frutta fresca",
    "included.towels": "Asciugamani",

    // Cosa NON è incluso
    "notincluded.title": "Non Incluso",
    "notincluded.lunch": "Pranzo / Cena",
    "notincluded.transfer": "Transfer per il porto",
    "notincluded.tax": "Tasse di sbarco / portuali",
    "notincluded.bluegrotto": "Biglietto Grotta Azzurra (€18/persona)",

    // Cosa portare
    "tobring.title": "Cosa Portare",
    "tobring.swimsuit": "Costume da bagno",
    "tobring.camera": "Macchina fotografica",
    "tobring.hat": "Cappello",
    "tobring.sunglasses": "Occhiali da sole",
    "tobring.sunscreen": "Crema solare",

    // Trust bar
    "trust.cancellation.title": "Cancellazione gratuita",
    "trust.cancellation.sub": "fino a 48h prima",
    "trust.private.title": "Tour privato",
    "trust.private.sub": "solo il tuo gruppo",
    "trust.skipper.title": "Skipper bilingue",
    "trust.skipper.sub": "Italiano e inglese",
    "trust.response.title": "Risposta veloce",
    "trust.response.sub": "entro 1-2 ore",
    "trust.aperitivo.title": "Aperitivo incluso",
    "trust.aperitivo.sub": "a bordo al tramonto",

    // Mobile sticky CTA bar
    "cta.call": "Chiama",
    "cta.whatsapp.short": "Prenota su WhatsApp",

    // Final CTA section
    "final.cta.title.capri": "Pronto a salpare per Capri?",
    "final.cta.title.sunset": "Vuoi vivere il tramonto sul Golfo di Napoli?",
    "final.cta.title.amalfi": "Pronto a esplorare la Costiera Amalfitana?",
    "final.cta.desc.capri": "Risposta su WhatsApp entro 1-2 ore · Cancellazione gratuita fino a 48h prima · Skipper locale incluso",
    "final.cta.desc.sunset": "Risposta su WhatsApp entro 1-2 ore · Cancellazione gratuita fino a 48h prima · Aperitivo incluso",
    "final.cta.desc.amalfi": "Risposta su WhatsApp entro 1-2 ore · Cancellazione gratuita fino a 48h prima · Skipper locale incluso",
    "final.cta.whatsapp": "Prenota su WhatsApp",
    "final.cta.call": "Chiama Ora",
    "final.cta.trust": "Nessun pagamento online richiesto · Prenotazione confermata via messaggio",

    // Related tours section
    "related.title": "Altri Tour in Barca dalla Penisola Sorrentina",
    "related.subtitle": "Scopri le altre esperienze di Vento in Poppa Charter da Sorrento.",

    // Timeline - badge "Facoltativo"
    "timeline.optional": "Facoltativo",

    // ==================== TIMELINE - CAPRI ====================
    "timeline.departure.title": "Partenza dal Porto",
    "timeline.departure.desc": "Incontro con lo skipper all'orario concordato. Porti disponibili: Sorrento, Castellammare, Marina di Stabia, Massa Lubrense, Nerano, Positano, Amalfi.",
    "timeline.coast.title": "Esplorazione Costa Sorrentina",
    "timeline.coast.desc": "Ammira le scogliere mozzafiato e le acque cristalline della penisola mentre navighiamo verso Capri.",
    "timeline.navigation.title": "Navigazione verso Capri",
    "timeline.navigation.desc": "Attraverso il Mar Tirreno con il nostro skipper professionista e bilingue, godendo della brezza marina.",
    "timeline.bluegrotto.title": "Grotta Azzurra",
    "timeline.bluegrotto.desc": "Visita alla famosa Grotta Azzurra, uno spettacolo naturale unico al mondo. Il biglietto (€18/persona) non è incluso.",
    "timeline.lighthouse.title": "Faro di Punta Carena",
    "timeline.lighthouse.desc": "Ammira il secondo faro più importante d'Italia con le sue acque turchesi e cristalline.",
    "timeline.greenwhite.title": "Grotta Verde e Grotta Bianca",
    "timeline.greenwhite.desc": "Due grotte spettacolari con riflessi di luce indimenticabili.",
    "timeline.faraglioni.title": "Faraglioni di Capri",
    "timeline.faraglioni.desc": "Giro completo dei celebri Faraglioni, simbolo dell'isola.",
    "timeline.marinapiccola.title": "Marina Piccola",
    "timeline.marinapiccola.desc": "Sosta nella celebre baia con vista sui Faraglioni.",
    "timeline.tiberio.title": "Villa Jovis e Salto di Tiberio",
    "timeline.tiberio.desc": "Ammira dal mare i resti della villa dell'imperatore Tiberio.",
    "timeline.swim.title": "Sosta Bagno",
    "timeline.swim.desc": "Tuffo nelle acque cristalline di Capri.",
    "timeline.lunch.title": "Pranzo (facoltativo)",
    "timeline.lunch.desc": "Possibilità di pranzo a bordo o in un ristorante locale a Marina Grande.",
    "timeline.return.title": "Rientro al porto",
    "timeline.return.desc": "Rientro tranquillo al porto di partenza.",

    // ==================== TIMELINE - SUNSET ====================
    "timeline.apero.title": "Aperitivo al Tramonto",
    "timeline.apero.desc": "Brindisi a bordo mentre il sole si tuffa nel Golfo di Napoli.",
    "timeline.bays.title": "Baie e calette nascoste",
    "timeline.bays.desc": "Esploriamo le piccole baie della Penisola Sorrentina al tramonto.",
    "timeline.swimming.title": "Sosta Bagno al Tramonto",
    "timeline.swimming.desc": "Tuffo nelle acque dorate del tramonto.",
    "timeline.prolung.title": "Prolungamento serale (facoltativo)",
    "timeline.prolung.desc": "Possibilità di estendere il tour fino al cielo stellato.",

    // ==================== TIMELINE - AMALFI ====================
    "timeline.positano.title": "Positano dal mare",
    "timeline.positano.desc": "Ammira le case colorate di Positano a picco sul mare.",
    "timeline.freetime.positano": "Tempo libero a Positano",
    "timeline.freetime.positano.desc": "Sosta a Positano per una passeggiata o un caffè.",
    "timeline.praiano.title": "Praiano e grotte marine",
    "timeline.praiano.desc": "Esploriamo le grotte naturali di Praiano.",
    "timeline.galli.title": "Isole Li Galli",
    "timeline.galli.desc": "Le isole mitiche delle sirene, raccontate da Omero.",
    "timeline.amalfi.title": "Amalfi e il Duomo dal mare",
    "timeline.amalfi.desc": "Vista panoramica sulla storica Repubblica Marinara.",
    "timeline.freetime.amalfi": "Tempo libero ad Amalfi",
    "timeline.freetime.amalfi.desc": "Sosta ad Amalfi per esplorare il borgo.",
    "timeline.conca.title": "Conca dei Marini",
    "timeline.conca.desc": "Pittoresco borgo affacciato sul mare.",
    "timeline.smeraldo.title": "Grotta dello Smeraldo",
    "timeline.smeraldo.desc": "La celebre grotta dai riflessi smeraldo.",

    // Descrizione tour generica (paragrafi)
    "content.desc1": "Un'esperienza unica dal mare con skipper locale e barca privata. Massima libertà di scegliere soste e itinerari.",
    "content.desc2": "Tour pensato per piccoli gruppi (max 7 persone) per garantire comfort, privacy e un'esperienza autentica della Penisola Sorrentina."
  },

  // ==================== INGLESE ====================
  en: {
    // --- Skip link accessibilità ---
    skip_link: "Skip to main content",

    // --- Cookie banner ---
    cookie_text: "This site uses only technical cookies to set the browsing language. No other types of cookies are used.",
    cookie_more_info: "More information",
    cookie_accept: "Close",
    cookie_reject: "Reject",

    // --- Navigazione desktop ---
    nav_tours: "Tours",
    nav_about: "About us",
    nav_faq: "FAQ",
    nav_contact: "Contact",

    // --- Navigazione mobile ---
    nav_mobile_tours: "Tours",
    nav_mobile_about: "About us",
    nav_mobile_faq: "FAQ",
    nav_mobile_contact: "Contact",
    hamburger_label: "Open mobile menu",

    // --- Hero ---
    hero_title: "Boat Tours from Sorrento to Capri and the Amalfi Coast",
    hero_subtitle: "Explore the wonders of the Gulf of Naples with our exclusive small-group tours. Expert skippers, daily departures, an unforgettable experience!",
    hero_cta: "Discover tours",

    // --- Sezione Tour ---
    tours_title: "Our Boat Tours from the Sorrento Peninsula",
    tours_subtitle: "Small groups of max 7 people, daily departures from Sorrento, pickup available and dedicated assistance throughout the excursion.",
    badge_bestseller: "🔥 Best seller",
    duration_label: "Duration:",
    max_label: "Max:",

    // Tour – Capri
    capri_title: "Capri Boat Tour: Blue Grotto and Faraglioni",
    capri_desc: "Explore the island of Capri by boat with a visit to the Blue Grotto, a full tour of the Faraglioni and swimming stops in crystal-clear waters. Full 7-8 hour tour.",
    capri_price: "€799",

    // Tour – Sunset
    sunset_title: "Sunset Experience – Sunset Tour from Sorrento",
    sunset_desc: "Live a truly unique romantic experience with our sunset tour. Cruise along the Sorrento coast as the sun dives into the sea, with an aperitif included.",
    sunset_price: "€299",

    // Tour – Amalfi
    amalfi_title: "Amalfi Coast Boat Tour: Positano, Amalfi and Caves",
    amalfi_desc: "Discover the beauty of the Amalfi Coast from the sea. A 5-6 hour tour with stops in Positano, Amalfi, Praiano and visits to the most spectacular sea caves.",
    amalfi_price: "€899",

    // --- Sezione About ---
    about_badge: "Our Story",
    about_title: "Passion for the Sea since 2023 – Expert Local Skippers",
    about_intro: "The story of Vento In Poppa Charter begins in 2023, from the happy intuition of people already immersed in the Sorrento maritime world, passionate about the sea and enthusiastic about their work.",
    about_full: "Our crew is made up of local guides and captains who know the Sorrento Peninsula, Capri and the Amalfi Coast inside and out. This in-depth knowledge allows us to offer authentic and personalised experiences, enabling visitors to discover hidden secrets and the most fascinating corners of the Gulf of Naples. We offer flexible itineraries that can be tailored to our guests' preferences: exploring sea caves, swimming in crystal-clear waters or simply soaking in the breathtaking scenery.",

    // --- Sezione FAQ ---
    faq_title: "Frequently Asked Questions about Boat Tours from Sorrento",
    faq_intro: "Answers to the most common questions about our boat tours from Sorrento to Capri, the Amalfi Coast and the Sorrento Peninsula.",
    faq_q1: "How many people are on the boat during the tours?",
    faq_a1: "Shared tours are designed for small groups (a maximum of 7 people) to guarantee comfort on board and a more authentic experience compared to mass excursions. We also offer private tours for those who desire an exclusive experience.",
    faq_q2: "What happens in case of bad weather during the tour?",
    faq_a2: "The safety of our passengers is our top priority. In case of bad weather or adverse sea conditions, we may have to cancel or reschedule the tour. In that case, we will contact you to offer alternative options or a full refund.",
    faq_q3: "Is it necessary to know how to swim to join the tours?",
    faq_a3: "It is not strictly necessary to know how to swim, but it is recommended to enjoy the swimming stops. Life jackets are available on board for all passengers and our skipper constantly monitors everyone's safety.",

    // --- Sezione Contatti ---
    contact_title: "Contact Us to Book Your Tour",
    contact_intro: "We are here to answer all your questions and help you organise the perfect excursion from Sorrento.",
    support_247: "Dedicated Support 7 Days a Week",
    team_available: "Our team is always available to help you choose the perfect tour and answer all your questions about Capri, the Amalfi Coast and the Sorrento Peninsula.",

    // Contatti – carte
    call_label: "Call Us Now",
    call_text: "Talk to us directly by phone at +39 331 616 6512 for immediate information about tours",
    call_btn: "Call us",
    whatsapp_label: "WhatsApp",
    whatsapp_text: "Chat with us for personalised quotes and quick information about available tours",
    whatsapp_btn: "Open chat",
    email_label: "Email",
    email_text: "Send us an email at ventoinpoppacharter@gmail.com for detailed requests about our tours",
    email_btn: "Send email",

    // Contatti – social
    follow_title: "Follow Us on Social Media",
    follow_text: "We share photos, videos and stories from the sea every day. Join our community of boat excursion lovers!",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",

    // Contatti – info cards
    embarkation_label: "Embarkation Point",
    port_label: "Port of Sorrento – Marina Piccola",
    location_info: "Sorrento Peninsula, Province of Naples, Campania",
    accessibility_info: "Easily reachable by car, train or bus from Naples",
    response_times_label: "Response Times",
    days_label: "Monday – Sunday",
    hours_label: "09:00 – 20:00",
    avg_response_label: "Average response time: 1-2 hours",

    // --- Footer ---
    footer_brand: "Vento in Poppa Charter",
    footer_desc: "Group excursions and private boat tours from Sorrento, Naples and the Sorrento Peninsula to Capri and the Amalfi Coast. Authentic experiences with expert local skippers since 2023.",
    footer_tours_title: "Our Tours",
    footer_capri: "Capri Tour",
    footer_sunset: "Sunset Experience",
    footer_amalfi: "Amalfi Coast",
    footer_contacts_title: "Contacts",
    footer_phone: "+39 331 616 6512",
    footer_email: "ventoinpoppacharter@gmail.com",
    footer_address: "Marina Piccola, Port of Sorrento (NA)",
    footer_social_title: "Social Media",

    // --- Footer bottom ---
    copyright: "© 2025 Vento in Poppa Charter – All rights reserved | VAT 12345678901 |",
    privacy_link: "Privacy Policy",
    cookie_link: "Cookie Policy",

    // --- Meta / SEO ---
    page_title: "Boat Tours Sorrento Capri | Amalfi Coast Excursions",
    meta_description: "Boat excursions from Sorrento to Capri and the Amalfi Coast. Small groups max 7 people, expert local skippers. Book your tour ⛵ Since 2023.",
    meta_keywords: "Sorrento boat excursions, Capri tour, Amalfi Coast boat tour, Naples boat trips, Sorrento Peninsula charter",

    // ==================== TOUR PAGES (data-translate) ====================
    "hero.eyebrow": "Premium Experience · Private Tour",
    "hero.eyebrow.sunset": "Romantic Experience · Aperitif Included",
    "hero.eyebrow.amalfi": "Premium Experience · Private Tour",

    "tour.capri.title": "Capri Boat Tour: Blue Grotto and Faraglioni",
    "tour.sunset.title": "Sunset Experience – Sunset Tour from Sorrento",
    "tour.amalfi.title": "Amalfi Coast Boat Tour: Positano, Amalfi and Praiano",

    "tour.capri.price.amount": "From €799",
    "tour.capri.price.duration": "7-8 hours",
    "tour.capri.price.people": "Max 7 guests",
    "tour.sunset.price.amount": "From €299",
    "tour.sunset.price.duration": "2-3 hours",
    "tour.sunset.price.people": "Max 7 guests",
    "tour.amalfi.price.amount": "From €899",
    "tour.amalfi.price.duration": "5-6 hours",
    "tour.amalfi.price.people": "Max 7 guests",
    "tour.price.people": "Max 7 guests",

    "section.description": "Tour Description",
    "section.itinerary": "Tour Itinerary",
    "content.itinerary.intro": "Discover the full route of your boat experience, from departure to return to port.",

    "info.price.label": "Price",
    "info.price.value": "From €299",
    "info.duration.label": "Duration",
    "info.duration.value": "2-3 hours",
    "info.people.label": "Guests",
    "info.people.value": "Max 7 people",

    "button.book": "Book on WhatsApp",

    "cta.microcopy.capri": "Reply in 1-2 hours · No online payment required",
    "cta.microcopy.sunset": "Reply in 1-2 hours · Aperitif included · Free cancellation 48h",
    "cta.microcopy.amalfi": "Reply in 1-2 hours · Free cancellation 48h · Local skipper included",

    "included.title": "What's Included",
    "included.skipper": "Professional bilingual skipper",
    "included.private": "Private boat (max 7 people)",
    "included.drinks": "Drinks on board",
    "included.snacks": "Snacks and fresh fruit",
    "included.towels": "Towels",

    "notincluded.title": "Not Included",
    "notincluded.lunch": "Lunch / Dinner",
    "notincluded.transfer": "Port transfer",
    "notincluded.tax": "Landing / Port fees",
    "notincluded.bluegrotto": "Blue Grotto ticket (€18/person)",

    "tobring.title": "What to Bring",
    "tobring.swimsuit": "Swimsuit",
    "tobring.camera": "Camera",
    "tobring.hat": "Hat",
    "tobring.sunglasses": "Sunglasses",
    "tobring.sunscreen": "Sunscreen",

    "trust.cancellation.title": "Free cancellation",
    "trust.cancellation.sub": "up to 48h before",
    "trust.private.title": "Private tour",
    "trust.private.sub": "only your group",
    "trust.skipper.title": "Bilingual skipper",
    "trust.skipper.sub": "Italian and English",
    "trust.response.title": "Fast response",
    "trust.response.sub": "within 1-2 hours",
    "trust.aperitivo.title": "Aperitif included",
    "trust.aperitivo.sub": "on board at sunset",

    "cta.call": "Call",
    "cta.whatsapp.short": "Book on WhatsApp",

    "final.cta.title.capri": "Ready to set sail for Capri?",
    "final.cta.title.sunset": "Want to experience sunset on the Gulf of Naples?",
    "final.cta.title.amalfi": "Ready to explore the Amalfi Coast?",
    "final.cta.desc.capri": "Reply on WhatsApp within 1-2 hours · Free cancellation up to 48h before · Local skipper included",
    "final.cta.desc.sunset": "Reply on WhatsApp within 1-2 hours · Free cancellation up to 48h before · Aperitif included",
    "final.cta.desc.amalfi": "Reply on WhatsApp within 1-2 hours · Free cancellation up to 48h before · Local skipper included",
    "final.cta.whatsapp": "Book on WhatsApp",
    "final.cta.call": "Call Now",
    "final.cta.trust": "No online payment required · Booking confirmed via message",

    "related.title": "Other Boat Tours from the Sorrento Peninsula",
    "related.subtitle": "Discover the other experiences offered by Vento in Poppa Charter from Sorrento.",

    "timeline.optional": "Optional",

    // Timeline - Capri
    "timeline.departure.title": "Departure from the Port",
    "timeline.departure.desc": "Meet the skipper at the agreed time. Available ports: Sorrento, Castellammare, Marina di Stabia, Massa Lubrense, Nerano, Positano, Amalfi.",
    "timeline.coast.title": "Exploring the Sorrento Coast",
    "timeline.coast.desc": "Admire the breathtaking cliffs and crystal-clear waters of the peninsula as we sail to Capri.",
    "timeline.navigation.title": "Navigation to Capri",
    "timeline.navigation.desc": "Across the Tyrrhenian Sea with our professional bilingual skipper, enjoying the sea breeze.",
    "timeline.bluegrotto.title": "Blue Grotto",
    "timeline.bluegrotto.desc": "Visit the famous Blue Grotto, a unique natural spectacle. The ticket (€18/person) is not included.",
    "timeline.lighthouse.title": "Punta Carena Lighthouse",
    "timeline.lighthouse.desc": "Admire Italy's second most important lighthouse with its turquoise crystal-clear waters.",
    "timeline.greenwhite.title": "Green Grotto and White Grotto",
    "timeline.greenwhite.desc": "Two spectacular caves with unforgettable light reflections.",
    "timeline.faraglioni.title": "Faraglioni of Capri",
    "timeline.faraglioni.desc": "Full tour of the famous Faraglioni, symbol of the island.",
    "timeline.marinapiccola.title": "Marina Piccola",
    "timeline.marinapiccola.desc": "Stop at the famous bay with views of the Faraglioni.",
    "timeline.tiberio.title": "Villa Jovis and Tiberius' Leap",
    "timeline.tiberio.desc": "Admire from the sea the ruins of Emperor Tiberius' villa.",
    "timeline.swim.title": "Swim Stop",
    "timeline.swim.desc": "Dive into the crystal-clear waters of Capri.",
    "timeline.lunch.title": "Lunch (optional)",
    "timeline.lunch.desc": "Option to have lunch on board or at a local restaurant in Marina Grande.",
    "timeline.return.title": "Return to port",
    "timeline.return.desc": "Quiet return to the port of departure.",

    // Timeline - Sunset
    "timeline.apero.title": "Sunset Aperitif",
    "timeline.apero.desc": "Toast on board while the sun dives into the Gulf of Naples.",
    "timeline.bays.title": "Hidden bays and coves",
    "timeline.bays.desc": "We explore the small bays of the Sorrento Peninsula at sunset.",
    "timeline.swimming.title": "Sunset Swim Stop",
    "timeline.swimming.desc": "Dive into the golden waters of sunset.",
    "timeline.prolung.title": "Evening extension (optional)",
    "timeline.prolung.desc": "Option to extend the tour to admire the starry sky.",

    // Timeline - Amalfi
    "timeline.positano.title": "Positano from the sea",
    "timeline.positano.desc": "Admire the colorful houses of Positano overlooking the sea.",
    "timeline.freetime.positano": "Free time in Positano",
    "timeline.freetime.positano.desc": "Stop at Positano for a stroll or a coffee.",
    "timeline.praiano.title": "Praiano and sea caves",
    "timeline.praiano.desc": "We explore the natural caves of Praiano.",
    "timeline.galli.title": "Li Galli Islands",
    "timeline.galli.desc": "The mythical islands of the sirens, told by Homer.",
    "timeline.amalfi.title": "Amalfi and the Cathedral from the sea",
    "timeline.amalfi.desc": "Panoramic view of the historic Maritime Republic.",
    "timeline.freetime.amalfi": "Free time in Amalfi",
    "timeline.freetime.amalfi.desc": "Stop in Amalfi to explore the village.",
    "timeline.conca.title": "Conca dei Marini",
    "timeline.conca.desc": "Picturesque village overlooking the sea.",
    "timeline.smeraldo.title": "Emerald Grotto",
    "timeline.smeraldo.desc": "The famous grotto with emerald reflections.",

    "content.desc1": "A unique experience from the sea with a local skipper and private boat. Full freedom to choose stops and itineraries.",
    "content.desc2": "Tour designed for small groups (max 7 people) to ensure comfort, privacy, and an authentic experience of the Sorrento Peninsula."
  },

  // ==================== SPAGNOLO ====================
  es: {
    // --- Skip link accessibilità ---
    skip_link: "Ir al contenido principal",

    // --- Cookie banner ---
    cookie_text: "Este sitio utiliza únicamente cookies técnicas para configurar el idioma de navegación. No se utilizan otros tipos de cookies.",
    cookie_more_info: "Más información",
    cookie_accept: "Cerrar",
    cookie_reject: "Rechazar",

    // --- Navigazione desktop ---
    nav_tours: "Tours",
    nav_about: "Sobre nosotros",
    nav_faq: "Preguntas frecuentes",
    nav_contact: "Contacto",

    // --- Navigazione mobile ---
    nav_mobile_tours: "Tours",
    nav_mobile_about: "Sobre nosotros",
    nav_mobile_faq: "Preguntas frecuentes",
    nav_mobile_contact: "Contacto",
    hamburger_label: "Abrir menú móvil",

    // --- Hero ---
    hero_title: "Tours en Barco desde Sorrento a Capri y la Costa Amalfitana",
    hero_subtitle: "Explora las maravillas del Golfo de Nápoles con nuestros tours exclusivos en grupos pequeños. Patrones expertos, salidas diarias, ¡una experiencia inolvidable!",
    hero_cta: "Descubre los tours",

    // --- Sezione Tour ---
    tours_title: "Nuestros Tours en Barco desde la Península de Sorrento",
    tours_subtitle: "Grupos pequeños de máximo 7 personas, salidas diarias desde Sorrento, recogida disponible y asistencia dedicada durante toda la excursión.",
    badge_bestseller: "🔥 Más vendido",
    duration_label: "Duración:",
    max_label: "Máx:",

    // Tour – Capri
    capri_title: "Tour en Barco a Capri: Gruta Azul y Faraglioni",
    capri_desc: "Explora la isla de Capri en barco con visita a la Gruta Azul, un recorrido completo de los Faraglioni y paradas para nadar en aguas cristalinas. Tour completo de 7-8 horas.",
    capri_price: "799 €",

    // Tour – Sunset
    sunset_title: "Experiencia al Atardecer – Tour desde Sorrento",
    sunset_desc: "Vive una experiencia romántica única con nuestro tour al atardecer. Navegación a lo largo de la costa sorrentina mientras el sol se sumerge en el mar, con aperitivo incluido.",
    sunset_price: "299 €",

    // Tour – Amalfi
    amalfi_title: "Tour en Barco por la Costa Amalfitana: Positano, Amalfi y Cuevas",
    amalfi_desc: "Descubre la belleza de la Costa Amalfitana desde el mar. Tour de 5-6 horas con paradas en Positano, Amalfi, Praiano y visita a las cuevas marinas más impresionantes.",
    amalfi_price: "899 €",

    // --- Sezione About ---
    about_badge: "Nuestra Historia",
    about_title: "Pasión por el Mar desde 2023 – Patrones Locales Expertos",
    about_intro: "La historia de Vento In Poppa Charter comienza en 2023, de la feliz intuición de personas ya inmersas en la realidad marítima de Sorrento, apasionadas por el mar y entusiastas de su trabajo.",
    about_full: "Nuestro equipo está compuesto por guías y capitanes locales que conocen a la perfección la Península de Sorrento, Capri y la Costa Amalfitana. Este conocimiento profundo nos permite ofrecer experiencias auténticas y personalizadas, permitiendo a los visitantes descubrir los secretos ocultos y los rincones más fascinantes del Golfo de Nápoles. Ofrecemos itinerarios flexibles que se pueden adaptar a las preferencias de nuestros clientes: explorar cuevas marinas, hacer paradas para nadar en aguas cristalinas o simplemente disfrutar del impresionante paisaje.",

    // --- Sezione FAQ ---
    faq_title: "Preguntas Frecuentes sobre Tours en Barco desde Sorrento",
    faq_intro: "Respuestas a las preguntas más comunes sobre nuestros tours en barco desde Sorrento hacia Capri, la Costa Amalfitana y la Península de Sorrento.",
    faq_q1: "¿Cuántas personas hay en el barco durante los tours?",
    faq_a1: "Los tours compartidos están diseñados para grupos pequeños (máximo 7 personas) para garantizar comodidad a bordo y una experiencia más auténtica en comparación con las excursiones masivas. También ofrecemos tours privados para quienes desean una experiencia exclusiva.",
    faq_q2: "¿Qué sucede en caso de mal tiempo durante el tour?",
    faq_a2: "La seguridad de nuestros pasajeros es nuestra máxima prioridad. En caso de mal tiempo o condiciones marinas adversas, podríamos tener que cancelar o reprogramar el tour. En ese caso, nos pondremos en contacto con usted para ofrecer opciones alternativas o un reembolso completo.",
    faq_q3: "¿Es necesario saber nadar para participar en los tours?",
    faq_a3: "No es estrictamente necesario saber nadar, pero se recomienda para disfrutar de las paradas para nadar. A bordo hay chalecos salvavidas para todos los pasajeros y nuestro patrón monitorea constantemente la seguridad de todos.",

    // --- Sezione Contatti ---
    contact_title: "Contáctanos para Reservar su Tour",
    contact_intro: "Estamos aquí para responder todas sus preguntas y ayudarle a organizar la excursión perfecta desde Sorrento.",
    support_247: "Asistencia Dedicada 7 Días a la Semana",
    team_available: "Nuestro equipo está siempre disponible para ayudarle a elegir el tour perfecto y responder todas sus preguntas sobre Capri, la Costa Amalfitana y la Península de Sorrento.",

    // Contatti – carte
    call_label: "Llámenos Ahora",
    call_text: "Hable con nosotros directamente por teléfono al +39 331 616 6512 para información inmediata sobre los tours",
    call_btn: "Llámenos",
    whatsapp_label: "WhatsApp",
    whatsapp_text: "Chatea con nosotros para presupuestos personalizados e información rápida sobre los tours disponibles",
    whatsapp_btn: "Abrir chat",
    email_label: "Email",
    email_text: "Envíenos un correo electrónico a ventoinpoppacharter@gmail.com para solicitudes detalladas sobre nuestros tours",
    email_btn: "Enviar correo",

    // Contatti – social
    follow_title: "Síguenos en las Redes Sociales",
    follow_text: "Compartimos fotos, videos e historias del mar todos los días. ¡Únete a nuestra comunidad de amantes de las excursiones en barco!",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",

    // Contatti – info cards
    embarkation_label: "Punto de Embarque",
    port_label: "Puerto de Sorrento – Marina Piccola",
    location_info: "Península de Sorrento, Provincia de Nápoles, Campania",
    accessibility_info: "Fácilmente accesible en coche, tren o autobús desde Nápoles",
    response_times_label: "Horarios de Respuesta",
    days_label: "Lunes – Domingo",
    hours_label: "09:00 – 20:00",
    avg_response_label: "Tiempo medio de respuesta: 1-2 horas",

    // --- Footer ---
    footer_brand: "Vento in Poppa Charter",
    footer_desc: "Excursiones grupales y tours privados en barco desde Sorrento, Nápoles y la Península de Sorrento hacia Capri y la Costa Amalfitana. Experiencias auténticas con patrones locales expertos desde 2023.",
    footer_tours_title: "Nuestros Tours",
    footer_capri: "Tour Capri",
    footer_sunset: "Experiencia al Atardecer",
    footer_amalfi: "Costa Amalfitana",
    footer_contacts_title: "Contactos",
    footer_phone: "+39 331 616 6512",
    footer_email: "ventoinpoppacharter@gmail.com",
    footer_address: "Marina Piccola, Puerto de Sorrento (NA)",
    footer_social_title: "Redes Sociales",

    // --- Footer bottom ---
    copyright: "© 2025 Vento in Poppa Charter – Todos los derechos reservados | NIF 12345678901 |",
    privacy_link: "Política de Privacidad",
    cookie_link: "Política de Cookies",

    // --- Meta / SEO ---
    page_title: "Tours en Barco Sorrento Capri | Excursiones Costa Amalfitana",
    meta_description: "Excursiones en barco desde Sorrento a Capri y la Costa Amalfitana. Grupos pequeños máx 7 personas, patrones locales expertos. Reserva tu tour ⛵ Desde 2023.",
    meta_keywords: "excursiones barco Sorrento, tour Capri, Costa Amalfitana paseo barco, viajes barco Nápoles, charter Península Sorrento",

    // ==================== TOUR PAGES (data-translate) ====================
    "hero.eyebrow": "Experiencia Premium · Tour Privado",
    "hero.eyebrow.sunset": "Experiencia Romántica · Aperitivo Incluido",
    "hero.eyebrow.amalfi": "Experiencia Premium · Tour Privado",

    "tour.capri.title": "Tour en Barco a Capri: Gruta Azul y Faraglioni",
    "tour.sunset.title": "Sunset Experience – Tour al Atardecer desde Sorrento",
    "tour.amalfi.title": "Tour Costa Amalfitana: Positano, Amalfi y Praiano",

    "tour.capri.price.amount": "Desde €799",
    "tour.capri.price.duration": "7-8 horas",
    "tour.capri.price.people": "Máx 7 personas",
    "tour.sunset.price.amount": "Desde €299",
    "tour.sunset.price.duration": "2-3 horas",
    "tour.sunset.price.people": "Máx 7 personas",
    "tour.amalfi.price.amount": "Desde €899",
    "tour.amalfi.price.duration": "5-6 horas",
    "tour.amalfi.price.people": "Máx 7 personas",
    "tour.price.people": "Máx 7 personas",

    "section.description": "Descripción del Tour",
    "section.itinerary": "Itinerario del Tour",
    "content.itinerary.intro": "Descubre el recorrido completo de tu experiencia en barco, desde la salida hasta el regreso al puerto.",

    "info.price.label": "Precio",
    "info.price.value": "Desde €299",
    "info.duration.label": "Duración",
    "info.duration.value": "2-3 horas",
    "info.people.label": "Pasajeros",
    "info.people.value": "Máx 7 personas",

    "button.book": "Reservar por WhatsApp",

    "cta.microcopy.capri": "Respuesta en 1-2 horas · Sin pago online requerido",
    "cta.microcopy.sunset": "Respuesta en 1-2 horas · Aperitivo incluido · Cancelación gratuita 48h",
    "cta.microcopy.amalfi": "Respuesta en 1-2 horas · Cancelación gratuita 48h · Patrón local incluido",

    "included.title": "Qué Incluye",
    "included.skipper": "Patrón profesional bilingüe",
    "included.private": "Barco privado (máx 7 personas)",
    "included.drinks": "Bebidas a bordo",
    "included.snacks": "Snacks y fruta fresca",
    "included.towels": "Toallas",

    "notincluded.title": "No Incluido",
    "notincluded.lunch": "Almuerzo / Cena",
    "notincluded.transfer": "Transfer al puerto",
    "notincluded.tax": "Tasas portuarias",
    "notincluded.bluegrotto": "Entrada Gruta Azul (€18/persona)",

    "tobring.title": "Qué Llevar",
    "tobring.swimsuit": "Bañador",
    "tobring.camera": "Cámara",
    "tobring.hat": "Sombrero",
    "tobring.sunglasses": "Gafas de sol",
    "tobring.sunscreen": "Protector solar",

    "trust.cancellation.title": "Cancelación gratuita",
    "trust.cancellation.sub": "hasta 48h antes",
    "trust.private.title": "Tour privado",
    "trust.private.sub": "solo tu grupo",
    "trust.skipper.title": "Patrón bilingüe",
    "trust.skipper.sub": "Italiano e inglés",
    "trust.response.title": "Respuesta rápida",
    "trust.response.sub": "en 1-2 horas",
    "trust.aperitivo.title": "Aperitivo incluido",
    "trust.aperitivo.sub": "a bordo al atardecer",

    "cta.call": "Llamar",
    "cta.whatsapp.short": "Reservar por WhatsApp",

    "final.cta.title.capri": "¿Listo para zarpar hacia Capri?",
    "final.cta.title.sunset": "¿Quieres vivir el atardecer en el Golfo de Nápoles?",
    "final.cta.title.amalfi": "¿Listo para explorar la Costa Amalfitana?",
    "final.cta.desc.capri": "Respuesta por WhatsApp en 1-2 horas · Cancelación gratuita hasta 48h antes · Patrón local incluido",
    "final.cta.desc.sunset": "Respuesta por WhatsApp en 1-2 horas · Cancelación gratuita hasta 48h antes · Aperitivo incluido",
    "final.cta.desc.amalfi": "Respuesta por WhatsApp en 1-2 horas · Cancelación gratuita hasta 48h antes · Patrón local incluido",
    "final.cta.whatsapp": "Reservar por WhatsApp",
    "final.cta.call": "Llamar Ahora",
    "final.cta.trust": "Sin pago online requerido · Reserva confirmada por mensaje",

    "related.title": "Otros Tours en Barco desde la Península de Sorrento",
    "related.subtitle": "Descubre las otras experiencias de Vento in Poppa Charter desde Sorrento.",

    "timeline.optional": "Opcional",

    // Timeline - Capri
    "timeline.departure.title": "Salida desde el Puerto",
    "timeline.departure.desc": "Encuentro con el patrón a la hora acordada. Puertos disponibles: Sorrento, Castellammare, Marina di Stabia, Massa Lubrense, Nerano, Positano, Amalfi.",
    "timeline.coast.title": "Exploración Costa Sorrentina",
    "timeline.coast.desc": "Admira los impresionantes acantilados y las aguas cristalinas de la península mientras navegamos hacia Capri.",
    "timeline.navigation.title": "Navegación hacia Capri",
    "timeline.navigation.desc": "A través del Mar Tirreno con nuestro patrón profesional bilingüe, disfrutando de la brisa marina.",
    "timeline.bluegrotto.title": "Gruta Azul",
    "timeline.bluegrotto.desc": "Visita a la famosa Gruta Azul, un espectáculo natural único en el mundo. La entrada (€18/persona) no está incluida.",
    "timeline.lighthouse.title": "Faro de Punta Carena",
    "timeline.lighthouse.desc": "Admira el segundo faro más importante de Italia con sus aguas turquesas y cristalinas.",
    "timeline.greenwhite.title": "Gruta Verde y Gruta Blanca",
    "timeline.greenwhite.desc": "Dos grutas espectaculares con reflejos de luz inolvidables.",
    "timeline.faraglioni.title": "Faraglioni de Capri",
    "timeline.faraglioni.desc": "Recorrido completo de los famosos Faraglioni, símbolo de la isla.",
    "timeline.marinapiccola.title": "Marina Piccola",
    "timeline.marinapiccola.desc": "Parada en la famosa bahía con vista a los Faraglioni.",
    "timeline.tiberio.title": "Villa Jovis y Salto de Tiberio",
    "timeline.tiberio.desc": "Admira desde el mar los restos de la villa del emperador Tiberio.",
    "timeline.swim.title": "Parada de Baño",
    "timeline.swim.desc": "Zambullida en las aguas cristalinas de Capri.",
    "timeline.lunch.title": "Almuerzo (opcional)",
    "timeline.lunch.desc": "Posibilidad de almorzar a bordo o en un restaurante local en Marina Grande.",
    "timeline.return.title": "Regreso al puerto",
    "timeline.return.desc": "Regreso tranquilo al puerto de partida.",

    // Timeline - Sunset
    "timeline.apero.title": "Aperitivo al Atardecer",
    "timeline.apero.desc": "Brindis a bordo mientras el sol se sumerge en el Golfo de Nápoles.",
    "timeline.bays.title": "Bahías y calas escondidas",
    "timeline.bays.desc": "Exploramos las pequeñas bahías de la Península de Sorrento al atardecer.",
    "timeline.swimming.title": "Parada de Baño al Atardecer",
    "timeline.swimming.desc": "Zambullida en las aguas doradas del atardecer.",
    "timeline.prolung.title": "Extensión nocturna (opcional)",
    "timeline.prolung.desc": "Posibilidad de extender el tour para admirar el cielo estrellado.",

    // Timeline - Amalfi
    "timeline.positano.title": "Positano desde el mar",
    "timeline.positano.desc": "Admira las casas coloridas de Positano sobre el mar.",
    "timeline.freetime.positano": "Tiempo libre en Positano",
    "timeline.freetime.positano.desc": "Parada en Positano para un paseo o un café.",
    "timeline.praiano.title": "Praiano y grutas marinas",
    "timeline.praiano.desc": "Exploramos las grutas naturales de Praiano.",
    "timeline.galli.title": "Islas Li Galli",
    "timeline.galli.desc": "Las míticas islas de las sirenas, narradas por Homero.",
    "timeline.amalfi.title": "Amalfi y la Catedral desde el mar",
    "timeline.amalfi.desc": "Vista panorámica de la histórica República Marinera.",
    "timeline.freetime.amalfi": "Tiempo libre en Amalfi",
    "timeline.freetime.amalfi.desc": "Parada en Amalfi para explorar el pueblo.",
    "timeline.conca.title": "Conca dei Marini",
    "timeline.conca.desc": "Pintoresco pueblo frente al mar.",
    "timeline.smeraldo.title": "Gruta Esmeralda",
    "timeline.smeraldo.desc": "La famosa gruta con reflejos esmeralda.",

    "content.desc1": "Una experiencia única desde el mar con patrón local y barco privado. Total libertad para elegir paradas e itinerarios.",
    "content.desc2": "Tour pensado para grupos pequeños (máx 7 personas) para garantizar comodidad, privacidad y una experiencia auténtica de la Península de Sorrento."
  }
};

// ==================== MAPPA ID ELEMENTI → CHIAVI TRADUZIONE ====================
// Ogni chiave sinistra = id="" dell'elemento nel DOM dell'HTML
// Ogni valore destra  = chiave nel dizionario translationsData[lang]
const translationKeyMap = {

  // --- Skip link ---
  "skipLink":                 "skip_link",

  // --- Cookie banner ---
  "cookieText":               "cookie_text",
  "cookieMoreInfo":           "cookie_more_info",
  "acceptBtn":                "cookie_accept",       // ← corretto (era cookieAcceptBtn)
  "rejectBtn":                "cookie_reject",       // ← corretto (era cookieRejectBtn)

  // --- Navigazione desktop ---
  "navTours":                 "nav_tours",
  "navAbout":                 "nav_about",
  "navFaq":                   "nav_faq",
  "navContact":               "nav_contact",

  // --- Navigazione mobile ---                      // ← NUOVO blocco
  "navMobileTours":           "nav_mobile_tours",
  "navMobileAbout":           "nav_mobile_about",
  "navMobileFaq":             "nav_mobile_faq",
  "navMobileContact":         "nav_mobile_contact",

  // --- Hero ---
  "heroTitle":                "hero_title",
  "heroText":                 "hero_subtitle",       // ← corretto (era heroSubtitle)
  "heroBtn":                  "hero_cta",            // ← corretto (era heroCta)

  // --- Sezione Tour ---
  "tourTitle":                "tours_title",         // ← corretto (era toursTitle)
  "tourSubtitle":             "tours_subtitle",      // ← corretto (era toursSubtitle)
  "capriBadge":               "badge_bestseller",    // ← corretto (era badgeBestseller)
  "durationLabel":            "duration_label",
  "maxLabel":                 "max_label",

  // Tour – Capri
  "capriTitle":               "capri_title",
  "capriDesc":                "capri_desc",
  "capriPrice":               "capri_price",

  // Tour – Sunset
  "sunsetTitle":              "sunset_title",
  "sunsetDesc":               "sunset_desc",
  "sunsetPrice":              "sunset_price",

  // Tour – Amalfi
  "amalfiTitle":              "amalfi_title",
  "amalfiDesc":               "amalfi_desc",
  "amalfiPrice":              "amalfi_price",

  // --- Sezione About ---
  "aboutBadge":               "about_badge",
  "aboutMainTitle":           "about_title",         // ← corretto (era aboutTitle)
  "aboutIntro":               "about_intro",
  "aboutFull":                "about_full",

  // --- Sezione FAQ ---
  "faqTitle":                 "faq_title",
  "faqIntro":                 "faq_intro",
  "q1":                       "faq_q1",              // ← corretto (era faqQ1)
  "a1":                       "faq_a1",              // ← corretto (era faqA1)
  "q2":                       "faq_q2",              // ← corretto (era faqQ2)
  "a2":                       "faq_a2",              // ← corretto (era faqA2)
  "q3":                       "faq_q3",              // ← corretto (era faqQ3)
  "a3":                       "faq_a3",              // ← corretto (era faqA3)

  // --- Sezione Contatti ---
  "contactTitle":             "contact_title",
  "contactIntro":             "contact_intro",
  "support247":               "support_247",
  "teamAvailable":            "team_available",

  // Contatti – carte
  "callUsLabel":              "call_label",
  "callUsText":               "call_text",
  "callUsBtn":                "call_btn",
  "whatsappLabel":            "whatsapp_label",
  "whatsappText":             "whatsapp_text",
  "whatsappBtn":              "whatsapp_btn",
  "emailLabel":               "email_label",
  "emailText":                "email_text",
  "emailBtn":                 "email_btn",

  // Contatti – social
  "followUsTitle":            "follow_title",
  "followUsText":             "follow_text",
  "facebookText":             "facebook",
  "instagramText":            "instagram",
  "tiktokText":               "tiktok",

  // Contatti – info cards
  "embarkationLabel":         "embarkation_label",
  "portLabel":                "port_label",
  "locationInfo":             "location_info",
  "accessibilityInfo":        "accessibility_info",
  "responseTimesLabel":       "response_times_label",
  "daysLabel":                "days_label",
  "hoursLabel":               "hours_label",
  "avgResponseLabel":         "avg_response_label",

  // --- Footer ---
  "footerBrand":              "footer_brand",
  "footerDesc":               "footer_desc",
  "footerToursTitle":         "footer_tours_title",
  "footerCapri":              "footer_capri",
  "footerSunset":             "footer_sunset",
  "footerAmalfi":             "footer_amalfi",
  "footerContactsTitle":      "footer_contacts_title",
  "footerPhone":              "footer_phone",
  "footerEmail":              "footer_email",
  "footerAddress":            "footer_address",
  "footerSocialTitle":        "footer_social_title",

  // --- Footer bottom ---
  "copyright":                "copyright",
  "privacyLink":              "privacy_link",
  "cookieLink":               "cookie_link"
};

// ==================== FUNZIONE PRINCIPALE: CAMBIO LINGUA ====================
/**
 * Cambia la lingua del sito PRESERVANDO le icone Bootstrap
 * @param {string} lang - Codice lingua ('it', 'en', 'es')
 */
function setLang(lang) {
  // Validazione lingua
  if (!translationsData[lang]) {
    console.error(`❌ Lingua non supportata: ${lang}`);
    return;
  }

  const t = translationsData[lang];

  // ==================== META TAG & TITLE ====================
  document.title = t.page_title;
  document.documentElement.lang = lang;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.meta_description);

  const metaKeys = document.querySelector('meta[name="keywords"]');
  if (metaKeys) metaKeys.setAttribute('content', t.meta_keywords);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t.page_title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t.meta_description);

  // ==================== ARIA-LABEL: hamburger ====================
  const hamburger = document.getElementById('hamburgerBtn');
  if (hamburger && t.hamburger_label) {
    hamburger.setAttribute('aria-label', t.hamburger_label);
  }

  // ==================== HELPER: sostituisce testo preservando icone ====================
  const applyTranslation = (element, text) => {
    if (!element || text == null) return;

    // Meta tag: usa setAttribute
    if (element.tagName === 'META') {
      element.setAttribute('content', text);
      return;
    }

    const iconElement = element.querySelector('i.bi');

    if (iconElement) {
      const iconHTML = iconElement.outerHTML;
      if (element.firstChild && element.firstChild.nodeType === Node.ELEMENT_NODE &&
          element.firstChild.tagName === 'I') {
        element.innerHTML = iconHTML + ' ' + text;
      } else {
        const textNodes = Array.from(element.childNodes).filter(
          node => node.nodeType === Node.TEXT_NODE
        );
        if (textNodes.length > 0) {
          textNodes.forEach(node => {
            if (node.textContent.trim()) {
              node.textContent = text;
            }
          });
        } else {
          element.textContent = '';
          element.appendChild(iconElement.cloneNode(true));
          element.appendChild(document.createTextNode(' ' + text));
        }
      }
    } else {
      element.textContent = text;
    }
  };

  // ==================== TRADUZIONE ELEMENTI DOM via id ====================
  Object.entries(translationKeyMap).forEach(([elementId, translationKey]) => {
    const element = document.getElementById(elementId);
    if (!element || !t[translationKey]) return;
    applyTranslation(element, t[translationKey]);
  });

  // ==================== TRADUZIONE ELEMENTI DOM via data-translate ====================
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (!key) return;
    // Cerca prima per chiave dottata (es. "trust.cancellation.title"),
    // poi la versione con underscore (es. "trust_cancellation_title") per compatibilità
    const value = t[key] !== undefined ? t[key] : t[key.replace(/\./g, '_')];
    if (value === undefined) return;
    applyTranslation(element, value);
  });

  // ==================== ARIA-LABEL via data-translate-aria ====================
  document.querySelectorAll('[data-translate-aria]').forEach(element => {
    const key = element.getAttribute('data-translate-aria');
    if (!key) return;
    const value = t[key] !== undefined ? t[key] : t[key.replace(/\./g, '_')];
    if (value !== undefined) {
      element.setAttribute('aria-label', value);
    }
  });

  // ==================== BOTTONI LINGUA ====================
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });

  // ==================== SALVA PREFERENZA ====================
  localStorage.setItem('preferredLang', lang);
}

// ==================== INIZIALIZZAZIONE ====================
/**
 * Inizializza il sistema multilingua al caricamento
 */
function initializeLanguage() {
  // Carica lingua salvata o usa ITALIANO come default
  const savedLang = localStorage.getItem('preferredLang') || 'it';

  // Applica la lingua
  setLang(savedLang);

  // Aggiungi event listener ai bottoni lingua
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const selectedLang = this.dataset.lang;
      setLang(selectedLang);
    });
  });
}

// ==================== AUTO-START ====================
// Avvia automaticamente quando il DOM è pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
  // DOM già caricato
  initializeLanguage();
}

// Esporta funzione globale per uso manuale
window.setLanguage = setLang;