/* Menu toggle with ARIA state */
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', !expanded);
    menu.setAttribute('aria-expanded', !expanded);
    menu.toggleAttribute('aria-expanded');
  });
}

/* Formspree AJAX form handler */
const form = document.querySelector('.form');
const hint = document.getElementById('form-hint');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    
    if (!data.get('nombre') || !data.get('email') || !data.get('mensaje')) {
      hint.textContent = 'Completá todos los campos.';
      return;
    }

    const submitBtn = document.getElementById('cta-form-submit');
    const textOriginal = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    hint.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      if (response.ok) {
        hint.textContent = '¡Mensaje enviado con éxito! Me pondré en contacto pronto.';
        form.reset();
      } else {
        hint.textContent = 'Hubo un error al enviar el mensaje. Intentá de nuevo.';
      }
    } catch (error) {
      hint.textContent = 'Hubo un error al enviar el mensaje. Intentá de nuevo.';
    } finally {
      submitBtn.textContent = textOriginal;
      submitBtn.disabled = false;
    }
  });
}

/* GSAP Animations */
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  // Hero: Logo scale
  tl.from('.brand img', {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });

  // Hero: Title stagger
  tl.from('.hero__title .word', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  }, "-=0.4");

  // Hero: Subtitle and CTA fade in
  tl.from('.hero__subtitle, .hero__cta', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, "-=0.2");

  // Magnetic Buttons
  gsap.utils.toArray('.btn--primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)', overwrite: 'auto' });
    });
  });

  // Dynamic Header Scroll Progress
  gsap.to('.header-progress', {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.1
    }
  });

  // Animated Counters
  gsap.utils.toArray('.stat__num').forEach(num => {
    const text = num.innerText;
    const match = text.match(/^([^\d]*)(\d+)([^\d]*)$/);
    if (match) {
      const pre = match[1];
      const val = parseInt(match[2], 10);
      const post = match[3];
      const obj = { v: 0 };
      
      gsap.to(obj, {
        v: val,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: num,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        onUpdate: () => {
          num.innerText = pre + Math.floor(obj.v) + post;
        }
      });
    }
  });

  // Scroll Animations for .reveal elements using batch for staggering
  gsap.set('.reveal', { y: 50, opacity: 0 }); // Initial state
  
  ScrollTrigger.batch('.reveal', {
    start: 'top 85%',
    onEnter: batch => gsap.to(batch, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      overwrite: true
    })
  });

  // Mobile Sticky CTA
  gsap.set('.sticky-cta-mobile', { scale: 0 });
  gsap.to('.sticky-cta-mobile', {
    scale: 1,
    duration: 0.5,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: document.body,
      start: '300px top',
      toggleActions: 'play none none reverse'
    }
  });
}
