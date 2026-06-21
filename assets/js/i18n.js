(function () {
  const LANG_KEY = 'lang';

  const translations = {
    en: {
      'hero.name': 'Jhony S <br><span class="highlight">Zapata S</span>',
      'hero.badge': 'Systems Engineer & Software Developer',
      'hero.expertise_prefix': 'Expertise in',
      'hero.rotating': ['API Integrations', 'Web Development', 'Software Engineering', 'Consulting', 'Implementation'],
      'hero.cta_contact': 'Contact me',
      'hero.cta_work': 'My work',
      'nav.home': 'Home',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.life': 'About Me',
      'nav.contact': 'Contact',
    },
    es: {
      'hero.name': 'Jhony S <br><span class="highlight">Zapata S</span>',
      'hero.badge': 'Ingeniero de Sistemas y Desarrollador de Software',
      'hero.expertise_prefix': 'Con experiencia en',
      'hero.rotating': ['Integraciones de API', 'Desarrollo Web', 'Ingeniería de Software', 'Consultoría', 'Implementación'],
      'hero.cta_contact': 'Contáctame',
      'hero.cta_work': 'Mi trabajo',
      'nav.home': 'Inicio',
      'nav.experience': 'Experiencia',
      'nav.skills': 'Habilidades',
      'nav.life': 'Sobre Mí',
      'nav.contact': 'Contacto',
    }
  };

  let currentLang = localStorage.getItem(LANG_KEY) || 'en';

  function getTranslations(lang) {
    return translations[lang] || translations.en;
  }

  function applyLanguage(lang, rotatingTextInstance) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    const t = getTranslations(lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) {
        if (el.dataset.i18nHtml !== undefined) {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    if (rotatingTextInstance && rotatingTextInstance.element && t['hero.rotating']) {
      rotatingTextInstance.phrases = t['hero.rotating'];
      rotatingTextInstance.index = 0;
      rotatingTextInstance.element.textContent = t['hero.rotating'][0];
    }

    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('data-lang', lang === 'en' ? 'es' : 'en');
    });

    document.documentElement.lang = lang;
  }

  window.initI18n = function (rotatingTextInstance) {
    applyLanguage(currentLang, rotatingTextInstance);

    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.lang-toggle');
      if (btn) {
        const nextLang = btn.getAttribute('data-lang');
        applyLanguage(nextLang, rotatingTextInstance);
      }
    });
  };
})();
