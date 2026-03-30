/* ==================== REDIRECT 404 → HOMEPAGE ==================== */
(function() {
  var validPages = ['', '/', '/index.html', '/tour_amalfi', '/tour_amalfi/', '/tour_amalfi/index.html', '/tour_sunset', '/tour_sunset/', '/tour_sunset/index.html', '/tour_capri', '/tour_capri/', '/tour_capri/index.html'];
  var path = window.location.pathname;
  // Rimuove eventuale base path del deploy (es. /nome-repo/)
  var repoBase = document.querySelector('base') ? new URL(document.querySelector('base').href).pathname : '/';
  var relativePath = path.startsWith(repoBase) ? path.slice(repoBase.length - 1) : path;
  if (!validPages.includes(relativePath)) {
    window.location.replace(repoBase);
  }
})();

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
    percorso = percorso.replace(/^\/+|\/+$/g, '');
    
    // Ottiene il percorso base dal pathname corrente
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const basePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '';
    
    window.location.href = `${basePath}/${percorso}/`;
}
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
    
    /* ==================== SCROLL TO HASH ON PAGE LOAD ==================== */
    (function() {
      // Disabilita il comportamento predefinito del browser
      if (window.location.hash && 'scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      
      function scrollToHash() {
        const hash = window.location.hash;
        if (!hash) return false;
        
        const target = document.querySelector(hash);
        if (!target) return false;
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        return true;
      }
      
      // Se c'è un hash nell'URL, scrolla all'elemento
      if (window.location.hash) {
        // Forza scroll in cima prima
        window.scrollTo(0, 0);
        
        // Tentativi multipli per trovare l'elemento
        let attempts = 0;
        const maxAttempts = 15;
        
        function tryScroll() {
          attempts++;
          if (scrollToHash()) {
            return; // Successo
          }
          if (attempts < maxAttempts) {
            setTimeout(tryScroll, 200);
          }
        }
        
        // Inizia dopo un breve delay
        setTimeout(tryScroll, 100);
      }
      
      // Gestisci i cambiamenti di hash (navigazione interna)
      window.addEventListener('hashchange', function() {
        setTimeout(scrollToHash, 50);
      });
    })();