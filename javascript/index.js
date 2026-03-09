/* ==================== SLIDER ==================== */
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.add('fade-out');
  setTimeout(() => {
    slides[currentSlide].classList.remove('active', 'fade-out');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 800);
}

setInterval(nextSlide, 6000);

function vaiAPagina(percorso) {
    // Rimuove eventuali slash iniziali o finali
    percorso = percorso.replace(/^\\/+|\\/+$/g, '');
    
    // Ottiene il percorso base dal pathname corrente
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const basePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '';
    
    window.location.href = `${basePath}/${percorso}/`;
}

/* ==================== PAGINA NON TROVATA - CHECK ==================== */
function checkPageExists() {
    // Controlla se esiste un elemento principale della pagina (adatta i selettori al tuo HTML)
    const pageExists = document.querySelector('main') || 
                      document.querySelector('.content') || 
                      document.querySelector('#main-content') ||
                      document.querySelector('body > *:first-child:not(.header):not(header)');
    
    if (!pageExists && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        // Reindirizza all'homepage dopo un breve delay per evitare loop
        setTimeout(() => {
            window.location.href = '/';
        }, 100);
    }
}

// Esegui il controllo quando il DOM è pronto
document.addEventListener('DOMContentLoaded', checkPageExists);

/* ==================== SCROLL REVEAL ==================== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale').forEach(el => {
    observer.observe(el);
  });
});

/* ==================== MOBILE MENU ==================== */
function toggleMenu() {
  const mobile = document.getElementById('navMobile');
  const hamburger = document.querySelector('.hamburger');
  const isOpen = mobile.style.display === 'flex';
  mobile.style.display = isOpen ? 'none' : 'flex';
  hamburger.setAttribute('aria-expanded', !isOpen);
}

/* ==================== FAQ ==================== */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('open');
      faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

/* ==================== COOKIE BANNER ==================== */
const cookieBanner = document.getElementById('cookieBanner');
const cookieKey = 'vp_cookie_choice';

function showCookieBanner() {
  if (!localStorage.getItem(cookieKey)) {
    setTimeout(() => {
      cookieBanner.classList.add('active');
    }, 1000);
  }
}

function handleCookie(accepted) {
  localStorage.setItem(cookieKey, accepted ? 'accepted' : 'declined');
  cookieBanner.classList.remove('active');
}

showCookieBanner();

/* ==================== SMOOTH SCROLL ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#privacy' && href !== '#cookies') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});
