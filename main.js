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

/* Formspree: envío con fetch + mensajes en pantalla */
const form = document.getElementById('contact-form');
const hint = document.getElementById('form-hint');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hint.textContent = 'Enviando...';

    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (resp.ok) {
        form.reset();
        hint.textContent = '✅ ¡Gracias! Te responderé en breve.';
      } else {
        hint.textContent = '❌ Ocurrió un error. Escribime directo a lautaroruisoto2007@gmail.com.';
      }
    } catch (err) {
      hint.textContent = '⚠️ Error de conexión. Probá más tarde o escribime por WhatsApp.';
    }
  });
}


/* Intersection Observer reveal */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .steps li, .tile, .about__card, details').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Reveal effect styles injected inline to avoid an extra CSS file
const style = document.createElement('style');
style.textContent = `.reveal{opacity:0; transform:translateY(12px); transition:opacity .5s ease, transform .5s ease}.reveal.in{opacity:1; transform:none}`;
document.head.appendChild(style);
