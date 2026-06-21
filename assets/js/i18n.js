(function () {
  const LANG_KEY = 'lang';

  const translations = {
    en: {
      'hero.name': 'JHONY S <span>ZAPATA S</span>',
      'hero.badge': 'Systems Engineer & Software Developer',
      'hero.expertise_prefix': 'Expertise in',
      'hero.rotating': ['API Integrations', 'Web Development', 'Software Engineering', 'Consulting', 'Implementation', 'Automation'],
      'hero.cta_contact': 'Contact me',
      'hero.cta_work': 'My work',
      'hero.service1_title': 'API Integrations',
      'hero.service1_desc': 'SaaS and legacy systems integrations, Rest/Soap, ERP, CRM',
      'hero.service2_title': 'Web Environment',
      'hero.service2_desc': 'Scalable and modern business applications, web sites and SEO.',
      'hero.service3_title': 'Software Consulting',
      'hero.service3_desc': 'Architecture and technical guidance.',
      'hero.service4_title': 'Implementation',
      'hero.service4_desc': 'Deployment, support and training.',
      'experience.title': 'Experience',
      'experience.intro': 'I\'ve worked on software solutions across multiple industries, building integrations, business applications, process automation, and web platforms that support real-world operations and growth.',
      'experience.tourism_title': 'Tourism',
      'experience.tourism_sub': 'Integrations of tour operators',
      'experience.tourism_desc': 'Worked for the tourism industry building integrations with operators around the world, providing support and fixing issues.',
      'experience.tracing_title': 'Tracing Software',
      'experience.tracing_sub': 'Product traceability and operation integrations',
      'experience.tracing_desc': 'Worked for the oils production industry, cement plants, rice industry and other factories building traceability systems for inputs and outputs.',
      'experience.automation_title': 'Process Automation',
      'experience.automation_sub': 'ERP integrations & APIs',
      'experience.automation_desc': 'Worked with Siesa ERP and CRM, SAP, databases, SQL jobs and API integrations to automate business processes.',
      'experience.requirements_title': 'Software Requirements',
      'experience.requirements_sub': 'Analysis & documentation',
      'experience.requirements_desc': 'Worked in analysis and specification of software requirements, collaborating with customers to define architecture patterns.',
      'experience.gamification_title': 'Gamification',
      'experience.gamification_sub': 'Component design & development',
      'experience.gamification_desc': 'Built a gamification system designing and developing engaging components.',
      'experience.web_title': 'Web Development',
      'experience.web_sub': 'Websites, landing pages & components',
      'experience.web_desc': 'I develop websites with SEO and web components using modern frameworks and tools.',
      'skills.title': 'Skills & Tools',
      'skills.intro': 'Tools, technologies, and frameworks I work with.',
      'skills.group1': 'Languages & Frameworks',
      'skills.group2': 'Databases',
      'skills.group3': 'Tools & Platforms',
      'skills.group4': 'AI & Productivity',
      'about.title': 'About me',
      'about.intro': 'Outside of code, here\'s what keeps me going.',
      'about.card1_title': 'Always Learning',
      'about.card1_desc': 'Beyond software, I enjoy creating projects, learning new things and sharing knowledge with others.',
      'about.card2_title': 'Training',
      'about.card2_desc': 'I like to train and stay active. Rugby is one of my passions — I play with Lobos Rugby Club.',
      'about.card3_title': 'Be Human',
      'about.card3_desc': 'Building, learning and sharing are part of who I am, both professionally and through personal projects.',
      'contact.title': 'Contact',
      'contact.heading': 'Let\'s talk',
      'contact.intro': 'Have a project in mind or just want to say hi? I\'d love to hear from you.',
      'contact.label_name': 'Full Name',
      'contact.placeholder_name': 'Your full name',
      'contact.label_email': 'Email',
      'contact.placeholder_email': 'Your email',
      'contact.label_phone': 'Contact Number',
      'contact.placeholder_phone': 'Your phone number',
      'contact.label_message': 'Message',
      'contact.placeholder_message': 'Write something...',
      'contact.btn_send': 'Send Message',
      'nav.home': 'Home',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.life': 'About Me',
      'nav.contact': 'Contact',
    },
    es: {
      'hero.name': 'JHONY S <span>ZAPATA S</span>',
      'hero.badge': 'Ingeniero de Sistemas y Desarrollador de Software',
      'hero.expertise_prefix': 'Con experiencia en',
      'hero.rotating': ['Integraciones con APIs', 'Desarrollo Web', 'Ingeniería de Software', 'Consultoría', 'Implementación', 'Automatización'],
      'hero.cta_contact': 'Contáctame',
      'hero.cta_work': 'Mi trabajo',
      'hero.service1_title': 'Integraciones con APIs',
      'hero.service1_desc': 'Integraciones SaaS y sistemas heredados, Rest/Soap, ERP, CRM',
      'hero.service2_title': 'Entorno Web',
      'hero.service2_desc': 'Aplicaciones empresariales modernas y escalables, sitios web y SEO.',
      'hero.service3_title': 'Consultoría de Software',
      'hero.service3_desc': 'Arquitectura y guía técnica.',
      'hero.service4_title': 'Implementación',
      'hero.service4_desc': 'Despliegue, soporte y capacitación.',
      'experience.title': 'Experiencia',
      'experience.intro': 'He trabajado en soluciones de software en múltiples industrias, desarrollando integraciones, aplicaciones empresariales, automatización de procesos y plataformas web que respaldan operaciones y crecimiento reales.',
      'experience.tourism_title': 'Turismo',
      'experience.tourism_sub': 'Integraciones de operadores turísticos',
      'experience.tourism_desc': 'Trabajé para la industria turística creando integraciones con operadores de todo el mundo, brindando soporte y resolviendo problemas.',
      'experience.tracing_title': 'Software de Trazabilidad',
      'experience.tracing_sub': 'Trazabilidad de productos e integraciones operativas',
      'experience.tracing_desc': 'Trabajé para la industria petrolera, plantas de cemento, industria arrocera y otras fábricas construyendo sistemas de trazabilidad para insumos y productos.',
      'experience.automation_title': 'Automatización de Procesos',
      'experience.automation_sub': 'Integraciones ERP y APIs',
      'experience.automation_desc': 'Trabajé con ERP Siesa y CRM, SAP, bases de datos, trabajos SQL e integraciones de API para automatizar procesos empresariales.',
      'experience.requirements_title': 'Requisitos de Software',
      'experience.requirements_sub': 'Análisis y documentación',
      'experience.requirements_desc': 'Trabajé en análisis y especificación de requisitos de software, colaborando con clientes para definir patrones de arquitectura.',
      'experience.gamification_title': 'Gamificación',
      'experience.gamification_sub': 'Diseño y desarrollo de componentes',
      'experience.gamification_desc': 'Construí un sistema de gamificación diseñando y desarrollando componentes atractivos.',
      'experience.web_title': 'Desarrollo Web',
      'experience.web_sub': 'Sitios web, landing pages y componentes',
      'experience.web_desc': 'Desarrollo sitios web con SEO y componentes web utilizando frameworks y herramientas modernas.',
      'skills.title': 'Habilidades y Herramientas',
      'skills.intro': 'Herramientas, tecnologías y frameworks con los que trabajo.',
      'skills.group1': 'Lenguajes y Frameworks',
      'skills.group2': 'Bases de Datos',
      'skills.group3': 'Herramientas y Plataformas',
      'skills.group4': 'IA y Productividad',
      'about.title': 'Sobre mí',
      'about.intro': 'Fuera del código, esto es lo que me mantiene en movimiento.',
      'about.card1_title': 'Siempre Aprendiendo',
      'about.card1_desc': 'Más allá del software, disfruto crear proyectos, aprender cosas nuevas y compartir conocimiento con otras personas.',
      'about.card2_title': 'Entrenamiento',
      'about.card2_desc': 'Me gusta entrenar y mantenerme activo. El rugby es una de mis pasiones — juego en Lobos Rugby Club.',
      'about.card3_title': 'Ser Humano',
      'about.card3_desc': 'Construir, aprender y compartir son actividades que me acompañan tanto en el ámbito profesional como en mis proyectos personales.',
      'contact.title': 'Contacto',
      'contact.heading': 'Hablemos',
      'contact.intro': '¿Tienes un proyecto en mente o solo quieres saludar? Me encantaría saber de ti.',
      'contact.label_name': 'Nombre Completo',
      'contact.placeholder_name': 'Tu nombre completo',
      'contact.label_email': 'Correo Electrónico',
      'contact.placeholder_email': 'Tu correo electrónico',
      'contact.label_phone': 'Número de Contacto',
      'contact.placeholder_phone': 'Tu número de teléfono',
      'contact.label_message': 'Mensaje',
      'contact.placeholder_message': 'Escribe algo...',
      'contact.btn_send': 'Enviar Mensaje',
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
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else if (el.dataset.i18nHtml !== undefined) {
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
