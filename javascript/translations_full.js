/**
 * =====================================================
 * SISTEMA MULTILINGUA COMPLETO - VENTO IN POPPA CHARTER
 * Versione 3.0 - CON PRESERVAZIONE ICONE
 * =====================================================
 * Lingue supportate: IT (default), EN, ES
 * Elementi tradotti: 90+
 * Sistema: Preserva icone Bootstrap durante traduzione
 */
/* ==================== DIZIONARIO TRADUZIONI ====================*/
const translationsData = {
  // ==================== ITALIANO (DEFAULT) ====================
  it: {
    skip_link: "Skip Link per accessibilità",
    cookie_text: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il traffico sul sito.",
    cookie_more_info: "Maggiori informazioni",
    cookie_accept: "Accetta",
    cookie_reject: "Rifiuta",
    nav_tours: "Tour",
    nav_about: "Chi siamo",
    nav_faq: "FAQ",
    nav_contact: "Contatti",
    hero_title: "Scopri le meraviglie della costiera con Vento in Poppa",
    hero_subtitle: "Esplora un mondo di meraviglie! Scopri i luoghi più straordinari con noi!",
    hero_cta: "Scopri i tour",
    tours_title: "I nostri tour più amati",
    tours_subtitle: "Piccoli gruppi, partenze giornaliere, prelievo disponibile e assistenza dedicata per tutta la durata dell'escursione.",
    badge_bestseller: "🔥 Più venduto",
    duration_label: "⏱ Durata:",
    max_label: "👥 Max:",
    capri_title: "Esperienza a Capri",
    capri_desc: "Le grotte sono bocche spalancate che raccontano storie solo a chi si avventura ad esplorarle.",
    capri_price: "799 €",
    sunset_title: "Sunset Experience",
    sunset_desc: "Salpa con noi mentre il sole si tuffa nel mare, tingendo il cielo di tonalità calde e avvolgenti.",
    sunset_price: "299 €",
    amalfi_title: "Costiera Amalfitana",
    amalfi_desc: "Se è vero che un paesaggio è uno stato d'animo, allora preparati alla felicità!",
    amalfi_price: "899 €",
    about_badge: "La Nostra Storia",
    about_title: "Passione per il mare dal 2023",
    about_intro: "La storia di Vento In Poppa Charter inizia nel 2023, dalla felice intuizione di persone già inserite nella realtà marinaria sorrentina, appassionate del mare ed entusiaste del proprio lavoro.",
    about_full: "Il nostro equipaggio è composto da guide e capitani locali che conoscono profondamente la zona. Questa conoscenza approfondita ci consente di offrire esperienze autentiche e personalizzate, consentendo ai visitatori di scoprire i segreti nascosti e gli angoli più affascinanti della Penisola Sorrentina e di Capri. Inoltre comprendiamo che ogni viaggiatore ha esigenze e interessi diversi. Offriamo itinerari flessibili che possono essere adattati alle preferenze dei nostri clienti. Che si tratti di esplorare grotte marine, fare un bagno in acque cristalline o semplicemente godersi il paesaggio, possiamo personalizzare il tour per soddisfare le aspettative di ciascun cliente.",
    faq_title: "Domande frequenti",
    faq_intro: "Risposte alle domande più comuni sui nostri tour in barca da Sorrento, Napoli e Penisola Sorrentina.",
    faq_q1: "Quante persone ci sono in barca?",
    faq_a1: "I tour condivisi sono pensati per piccoli gruppi (massimo 7 persone), così da garantire comfort a bordo ed un'esperienza più autentica rispetto alle escursioni di massa. Offriamo anche tour privati per chi desidera un'esperienza esclusiva.",
    faq_q2: "Cosa succede in caso di maltempo?",
    faq_a2: "La sicurezza dei nostri passeggeri è la nostra massima priorità. In caso di maltempo o condizioni marine avverse, potremmo dover cancellare o riprogrammare il tour. In tal caso, ti contatteremo per fornirti opzioni alternative o per il rimborso.",
    faq_q3: "È necessario saper nuotare?",
    faq_a3: "Non è strettamente necessario, ma consigliato per godersi le soste bagno. A bordo sono presenti giubbotti di salvataggio per tutti i passeggeri e il nostro skipper monitora costantemente la sicurezza di tutti.",
    contact_title: "Contattaci",
    contact_intro: "Siamo qui per rispondere a tutte le tue domande e aiutarti a organizzare l'escursione perfetta.",
    support_247: "Assistenza Dedicata 7 Giorni su 7",
    team_available: "Il nostro team è sempre disponibile per aiutarti a scegliere il tour perfetto e rispondere a tutte le tue domande su Capri, Costiera Amalfitana e Penisola Sorrentina.",
    call_label: "Chiamaci Ora",
    call_text: "Parlaci direttamente al telefono al numero +39 081 123 4567 per informazioni immediate sui tour",
    call_btn: "Chiamaci",
    whatsapp_label: "WhatsApp",
    whatsapp_text: "Chatta con noi per preventivi personalizzati e informazioni rapide sui tour disponibili",
    whatsapp_btn: "Apri chat",
    email_label: "Email",
    email_text: "Inviaci una email a info@ventoinpoppa.com per richieste dettagliate sui nostri tour",
    email_btn: "Invia email",
    follow_title: "Seguici sui Social Media",
    follow_text: "Condividiamo ogni giorno foto, video e storie dal mare. Unisciti alla nostra community di amanti delle escursioni in barca!",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",
    embarkation_label: "Punto di Imbarco",
    port_label: "Porto di Sorrento - Marina Piccola",
    location_info: "Penisola Sorrentina, Provincia di Napoli, Campania",
    accessibility_info: "Facilmente raggiungibile in auto, treno o bus da Napoli",
    response_times_label: "Orari di Risposta",
    days_label: "Lunedì - Domenica",
    hours_label: "09:00 - 20:00",
    avg_response_label: "Tempo medio di risposta: 1-2 ore",
    footer_brand: "Vento in Poppa Charter",
    footer_desc: "Escursioni di gruppo e tour privati in barca da Sorrento, Napoli e Penisola Sorrentina verso Capri e Costiera Amalfitana. Esperienze autentiche con skipper locali esperti dal 2023.",
    footer_tours_title: "I Nostri Tour",
    footer_capri: "Tour Capri",
    footer_sunset: "Sunset Experience",
    footer_amalfi: "Costiera Amalfitana",
    footer_contacts_title: "Contatti",
    footer_phone: "+39 081 123 4567",
    footer_email: "info@ventoinpoppa.com",
    footer_address: "Marina Piccola, Porto di Sorrento (NA)",
    footer_social_title: "Social Media",
    copyright: "© 2025 Vento in Poppa Charter – Tutti i diritti riservati | P.IVA 12345678901 |",
    privacy_link: "Privacy Policy",
    cookie_link: "Cookie Policy",
    page_title: "Tour Barca Sorrento Capri | Escursioni Costiera Amalfitana",
    meta_description: "Escursioni in barca da Sorrento a Capri e Costiera Amalfitana. Piccoli gruppi max 7 persone, skipper locali esperti. Prenota il tuo tour ⛵ Dal 2023.",
    meta_keywords: "escursioni barca Sorrento, tour Capri, Costiera Amalfitana boat tour, gite in barca Napoli, charter Penisola Sorrentina"
  },

  // ==================== INGLESE ====================
  en: {
    skip_link: "Skip Link for accessibility",
    cookie_text: "We use cookies to improve your browsing experience and analyze website traffic.",
    cookie_more_info: "More information",
    cookie_accept: "Accept",
    cookie_reject: "Reject",
    nav_tours: "Tours",
    nav_about: "About us",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    hero_title: "Discover the wonders of the coast with Vento in Poppa",
    hero_subtitle: "Explore a world of wonders! Discover the most extraordinary places with us!",
    hero_cta: "Discover tours",
    tours_title: "Our most beloved tours",
    tours_subtitle: "Small groups, daily departures, pickup available and dedicated assistance throughout the excursion.",
    badge_bestseller: "🔥 Best seller",
    duration_label: "⏱ Duration:",
    max_label: "👥 Max:",
    capri_title: "Capri Experience",
    capri_desc: "Caves are gaping mouths that tell stories only to those who dare to explore them.",
    capri_price: "€799",
    sunset_title: "Sunset Experience",
    sunset_desc: "Set sail with us as the sun dives into the sea, painting the sky in warm and enveloping hues.",
    sunset_price: "€299",
    amalfi_title: "Amalfi Coast",
    amalfi_desc: "If it's true that a landscape is a state of mind, then prepare yourself for happiness!",
    amalfi_price: "€899",
    about_badge: "Our Story",
    about_title: "Passion for the sea since 2023",
    about_intro: "The story of Vento In Poppa Charter begins in 2023, from the happy intuition of people already immersed in the Sorrento maritime reality, passionate about the sea and enthusiastic about their work.",
    about_full: "Our crew is composed of local guides and captains who have deep knowledge of the area. This in-depth knowledge allows us to offer authentic and personalized experiences, enabling visitors to discover hidden secrets and the most fascinating corners of the Sorrento Peninsula and Capri. Additionally, we understand that every traveler has different needs and interests. We offer flexible itineraries that can be adapted to our clients' preferences. Whether it's exploring sea caves, swimming in crystal-clear waters, or simply enjoying the scenery, we can customize the tour to meet each client's expectations.",
    faq_title: "Frequently Asked Questions",
    faq_intro: "Answers to the most common questions about our boat tours from Sorrento, Naples and the Sorrento Peninsula.",
    faq_q1: "How many people are on the boat?",
    faq_a1: "Shared tours are designed for small groups (maximum 7 people) to ensure comfort on board and a more authentic experience compared to mass excursions. We also offer private tours for those who want an exclusive experience.",
    faq_q2: "What happens in case of bad weather?",
    faq_a2: "The safety of our passengers is our top priority. In case of bad weather or adverse marine conditions, we may need to cancel or reschedule the tour. In that case, we will contact you to provide alternative options or a refund.",
    faq_q3: "Is it necessary to know how to swim?",
    faq_a3: "It's not strictly necessary, but recommended to enjoy the swimming stops. Life jackets are available on board for all passengers and our skipper constantly monitors everyone's safety.",
    contact_title: "Contact us",
    contact_intro: "We are here to answer all your questions and help you organize the perfect excursion.",
    support_247: "Dedicated Support 7 Days a Week",
    team_available: "Our team is always available to help you choose the perfect tour and answer all your questions about Capri, the Amalfi Coast and the Sorrento Peninsula.",
    call_label: "Call Us Now",
    call_text: "Talk to us directly by phone at +39 081 123 4567 for immediate information about tours",
    call_btn: "Call us",
    whatsapp_label: "WhatsApp",
    whatsapp_text: "Chat with us for personalized quotes and quick information about available tours",
    whatsapp_btn: "Open chat",
    email_label: "Email",
    email_text: "Send us an email at info@ventoinpoppa.com for detailed requests about our tours",
    email_btn: "Send email",
    follow_title: "Follow us on Social Media",
    follow_text: "We share photos, videos and stories from the sea every day. Join our community of boat excursion lovers!",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",
    embarkation_label: "Embarkation Point",
    port_label: "Port of Sorrento - Marina Piccola",
    location_info: "Sorrento Peninsula, Province of Naples, Campania",
    accessibility_info: "Easily accessible by car, train or bus from Naples",
    response_times_label: "Response Times",
    days_label: "Monday - Sunday",
    hours_label: "09:00 - 20:00",
    avg_response_label: "Average response time: 1-2 hours",
    footer_brand: "Vento in Poppa Charter",
    footer_desc: "Group excursions and private boat tours from Sorrento, Naples and Sorrento Peninsula to Capri and Amalfi Coast. Authentic experiences with expert local skippers since 2023.",
    footer_tours_title: "Our Tours",
    footer_capri: "Capri Tour",
    footer_sunset: "Sunset Experience",
    footer_amalfi: "Amalfi Coast",
    footer_contacts_title: "Contacts",
    footer_phone: "+39 081 123 4567",
    footer_email: "info@ventoinpoppa.com",
    footer_address: "Marina Piccola, Port of Sorrento (NA)",
    footer_social_title: "Social Media",
    copyright: "© 2025 Vento in Poppa Charter – All rights reserved | VAT 12345678901 |",
    privacy_link: "Privacy Policy",
    cookie_link: "Cookie Policy",
    page_title: "Boat Tours Sorrento Capri | Amalfi Coast Excursions",
    meta_description: "Boat excursions from Sorrento to Capri and Amalfi Coast. Small groups max 7 people, expert local skippers. Book your tour ⛵ Since 2023.",
    meta_keywords: "Sorrento boat excursions, Capri tour, Amalfi Coast boat tour, Naples boat trips, Sorrento Peninsula charter"
  },

  // ==================== SPAGNOLO ====================
  es: {
    skip_link: "Enlace de salto para accesibilidad",
    cookie_text: "Utilizamos cookies para mejorar su experiencia de navegación y analizar el tráfico del sitio web.",
    cookie_more_info: "Más información",
    cookie_accept: "Aceptar",
    cookie_reject: "Rechazar",
    nav_tours: "Tours",
    nav_about: "Sobre nosotros",
    nav_faq: "Preguntas frecuentes",
    nav_contact: "Contacto",
    hero_title: "Descubre las maravillas de la costa con Vento in Poppa",
    hero_subtitle: "¡Explora un mundo de maravillas! ¡Descubre los lugares más extraordinarios con nosotros!",
    hero_cta: "Descubre los tours",
    tours_title: "Nuestros tours más queridos",
    tours_subtitle: "Grupos pequeños, salidas diarias, recogida disponible y asistencia dedicada durante toda la excursión.",
    badge_bestseller: "🔥 Más vendido",
    duration_label: "⏱ Duración:",
    max_label: "👥 Máx:",
    capri_title: "Experiencia en Capri",
    capri_desc: "Las cuevas son bocas abiertas que cuentan historias solo a quienes se atreven a explorarlas.",
    capri_price: "799 €",
    sunset_title: "Experiencia al Atardecer",
    sunset_desc: "Navega con nosotros mientras el sol se sumerge en el mar, pintando el cielo con tonos cálidos y envolventes.",
    sunset_price: "299 €",
    amalfi_title: "Costa Amalfitana",
    amalfi_desc: "Si es cierto que un paisaje es un estado de ánimo, ¡entonces prepárate para la felicidad!",
    amalfi_price: "899 €",
    about_badge: "Nuestra Historia",
    about_title: "Pasión por el mar desde 2023",
    about_intro: "La historia de Vento In Poppa Charter comienza en 2023, de la feliz intuición de personas ya inmersas en la realidad marítima de Sorrento, apasionadas por el mar y entusiastas de su trabajo.",
    about_full: "Nuestro equipo está compuesto por guías y capitanes locales que conocen profundamente la zona. Este conocimiento profundo nos permite ofrecer experiencias auténticas y personalizadas, permitiendo a los visitantes descubrir secretos ocultos y los rincones más fascinantes de la Península de Sorrento y Capri. Además, entendemos que cada viajero tiene necesidades e intereses diferentes. Ofrecemos itinerarios flexibles que pueden adaptarse a las preferencias de nuestros clientes. Ya sea explorando cuevas marinas, nadando en aguas cristalinas o simplemente disfrutando del paisaje, podemos personalizar el tour para cumplir con las expectativas de cada cliente.",
    faq_title: "Preguntas frecuentes",
    faq_intro: "Respuestas a las preguntas más comunes sobre nuestros tours en barco desde Sorrento, Nápoles y la Península de Sorrento.",
    faq_q1: "¿Cuántas personas hay en el barco?",
    faq_a1: "Los tours compartidos están diseñados para grupos pequeños (máximo 7 personas) para garantizar comodidad a bordo y una experiencia más auténtica en comparación con las excursiones masivas. También ofrecemos tours privados para quienes desean una experiencia exclusiva.",
    faq_q2: "¿Qué sucede en caso de mal tiempo?",
    faq_a2: "La seguridad de nuestros pasajeros es nuestra máxima prioridad. En caso de mal tiempo o condiciones marinas adversas, podríamos necesitar cancelar o reprogramar el tour. En ese caso, nos pondremos en contacto con usted para proporcionar opciones alternativas o un reembolso.",
    faq_q3: "¿Es necesario saber nadar?",
    faq_a3: "No es estrictamente necesario, pero se recomienda para disfrutar de las paradas para nadar. Hay chalecos salvavidas disponibles a bordo para todos los pasajeros y nuestro patrón monitorea constantemente la seguridad de todos.",
    contact_title: "Contáctanos",
    contact_intro: "Estamos aquí para responder todas sus preguntas y ayudarlo a organizar la excursión perfecta.",
    support_247: "Asistencia Dedicada 7 Días a la Semana",
    team_available: "Nuestro equipo está siempre disponible para ayudarlo a elegir el tour perfecto y responder todas sus preguntas sobre Capri, la Costa Amalfitana y la Península de Sorrento.",
    call_label: "Llámenos Ahora",
    call_text: "Hable con nosotros directamente por teléfono al +39 081 123 4567 para información inmediata sobre los tours",
    call_btn: "Llámenos",
    whatsapp_label: "WhatsApp",
    whatsapp_text: "Chatea con nosotros para presupuestos personalizados e información rápida sobre los tours disponibles",
    whatsapp_btn: "Abrir chat",
    email_label: "Email",
    email_text: "Envíenos un email a info@ventoinpoppa.com para solicitudes detalladas sobre nuestros tours",
    email_btn: "Enviar email",
    follow_title: "Síguenos en las Redes Sociales",
    follow_text: "Compartimos fotos, videos e historias del mar todos los días. ¡Únete a nuestra comunidad de amantes de las excursiones en barco!",
    facebook: "Facebook",
    instagram: "Instagram",
    tiktok: "TikTok",
    embarkation_label: "Punto de Embarque",
    port_label: "Puerto de Sorrento - Marina Piccola",
    location_info: "Península de Sorrento, Provincia de Nápoles, Campania",
    accessibility_info: "Fácilmente accesible en coche, tren o autobús desde Nápoles",
    response_times_label: "Horarios de Respuesta",
    days_label: "Lunes - Domingo",
    hours_label: "09:00 - 20:00",
    avg_response_label: "Tiempo promedio de respuesta: 1-2 horas",
    footer_brand: "Vento in Poppa Charter",
    footer_desc: "Excursiones grupales y tours privados en barco desde Sorrento, Nápoles y la Península de Sorrento hacia Capri y la Costa Amalfitana. Experiencias auténticas con patrones locales expertos desde 2023.",
    footer_tours_title: "Nuestros Tours",
    footer_capri: "Tour Capri",
    footer_sunset: "Experiencia al Atardecer",
    footer_amalfi: "Costa Amalfitana",
    footer_contacts_title: "Contactos",
    footer_phone: "+39 081 123 4567",
    footer_email: "info@ventoinpoppa.com",
    footer_address: "Marina Piccola, Puerto de Sorrento (NA)",
    footer_social_title: "Redes Sociales",
    copyright: "© 2025 Vento in Poppa Charter – Todos los derechos reservados | NIF 12345678901 |",
    privacy_link: "Política de Privacidad",
    cookie_link: "Política de Cookies",
    page_title: "Tours en Barco Sorrento Capri | Excursiones Costa Amalfitana",
    meta_description: "Excursiones en barco desde Sorrento a Capri y Costa Amalfitana. Grupos pequeños máx 7 personas, patrones locales expertos. Reserva tu tour ⛵ Desde 2023.",
    meta_keywords: "excursiones barco Sorrento, tour Capri, Costa Amalfitana paseo barco, viajes barco Nápoles, charter Península Sorrento"
  }
};

// ==================== MAPPA ID ELEMENTI → CHIAVI TRADUZIONE ====================
const translationKeyMap = {
  // Cookie banner
  "cookieText": "cookie_text",
  "cookieMoreInfo": "cookie_more_info",
  "cookieAcceptBtn": "cookie_accept",
  "cookieRejectBtn": "cookie_reject",

  // Navigation
  "navTours": "nav_tours",
  "navAbout": "nav_about",
  "navFaq": "nav_faq",
  "navContact": "nav_contact",

  // Hero
  "heroTitle": "hero_title",
  "heroSubtitle": "hero_subtitle",
  "heroCta": "hero_cta",

  // Tours
  "toursTitle": "tours_title",
  "toursSubtitle": "tours_subtitle",
  "badgeBestseller": "badge_bestseller",
  "durationLabel": "duration_label",
  "maxLabel": "max_label",
  "capriTitle": "capri_title",
  "capriDesc": "capri_desc",
  "capriPrice": "capri_price",
  "sunsetTitle": "sunset_title",
  "sunsetDesc": "sunset_desc",
  "sunsetPrice": "sunset_price",
  "amalfiTitle": "amalfi_title",
  "amalfiDesc": "amalfi_desc",
  "amalfiPrice": "amalfi_price",

  // About
  "aboutBadge": "about_badge",
  "aboutTitle": "about_title",
  "aboutIntro": "about_intro",
  "aboutFull": "about_full",

  // FAQ
  "faqTitle": "faq_title",
  "faqIntro": "faq_intro",
  "faqQ1": "faq_q1",
  "faqA1": "faq_a1",
  "faqQ2": "faq_q2",
  "faqA2": "faq_a2",
  "faqQ3": "faq_q3",
  "faqA3": "faq_a3",

  // Contact
  "contactTitle": "contact_title",
  "contactIntro": "contact_intro",
  "support247": "support_247",
  "teamAvailable": "team_available",
  "callUsLabel": "call_label",
  "callUsText": "call_text",
  "callUsBtn": "call_btn",
  "whatsappLabel": "whatsapp_label",
  "whatsappText": "whatsapp_text",
  "whatsappBtn": "whatsapp_btn",
  "emailLabel": "email_label",
  "emailText": "email_text",
  "emailBtn": "email_btn",
  "followUsTitle": "follow_title",
  "followUsText": "follow_text",
  "facebookText": "facebook",
  "instagramText": "instagram",
  "tiktokText": "tiktok",
  "embarkationLabel": "embarkation_label",
  "portLabel": "port_label",
  "locationInfo": "location_info",
  "accessibilityInfo": "accessibility_info",
  "responseTimesLabel": "response_times_label",
  "daysLabel": "days_label",
  "hoursLabel": "hours_label",
  "avgResponseLabel": "avg_response_label",

  // Footer
  "footerBrand": "footer_brand",
  "footerDesc": "footer_desc",
  "footerToursTitle": "footer_tours_title",
  "footerCapri": "footer_capri",
  "footerSunset": "footer_sunset",
  "footerAmalfi": "footer_amalfi",
  "footerContactsTitle": "footer_contacts_title",
  "footerPhone": "footer_phone",
  "footerEmail": "footer_email",
  "footerAddress": "footer_address",
  "footerSocialTitle": "footer_social_title",
  "copyright": "copyright",
  "privacyLink": "privacy_link",
  "cookieLink": "cookie_link"
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

  // ==================== TRADUZIONE ELEMENTI DOM ====================
  Object.entries(translationKeyMap).forEach(([elementId, translationKey]) => {
    const element = document.getElementById(elementId);

    if (!element || !t[translationKey]) return;

    // Meta tag: usa setAttribute
    if (element.tagName === 'META') {
      element.setAttribute('content', t[translationKey]);
      return;
    }

    // ==================== PRESERVAZIONE ICONE ====================
    // Controlla se l'elemento contiene icone Bootstrap
    const iconElement = element.querySelector('i.bi');

    if (iconElement) {
      // ELEMENTO CON ICONA: preserva l'icona, cambia solo il testo
      const iconHTML = iconElement.outerHTML;

      // Se l'icona è all'inizio (es: <i></i> Testo)
      if (element.firstChild && element.firstChild.nodeType === Node.ELEMENT_NODE && 
          element.firstChild.tagName === 'I') {
        element.innerHTML = iconHTML + ' ' + t[translationKey];
      } 
      // Se l'icona è alla fine o nel mezzo
      else {
        // Cerca tutti i nodi di testo e sostituiscili
        const textNodes = Array.from(element.childNodes).filter(
          node => node.nodeType === Node.TEXT_NODE
        );

        if (textNodes.length > 0) {
          textNodes.forEach(node => {
            if (node.textContent.trim()) {
              node.textContent = t[translationKey];
            }
          });
        } else {
          // Fallback: sostituisci tutto preservando l'icona
          element.textContent = '';
          element.appendChild(iconElement.cloneNode(true));
          element.appendChild(document.createTextNode(' ' + t[translationKey]));
        }
      }
    } else {
      // ELEMENTO SENZA ICONA: sostituisci tutto il testo
      element.textContent = t[translationKey];
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

// ==================== DEBUG INFO ====================
