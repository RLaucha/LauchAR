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

/* Simple form handler: validates and opens mailto as fallback */
const form = document.querySelector('.form');
const hint = document.getElementById('form-hint');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nombre = data.get('nombre');
    const email = data.get('email');
    const mensaje = data.get('mensaje');
    if (!nombre || !email || !mensaje) {
      hint.textContent = 'Completá todos los campos.';
      return;
    }
    // mailto fallback
    const subject = encodeURIComponent('Nueva consulta desde el sitio');
    const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`);
    window.location.href = `mailto:hello@tusitio.com.ar?subject=${subject}&body=${body}`;
    hint.textContent = 'Abriendo tu cliente de email...';
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
