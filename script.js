/* script.js – SafePass AIATUS */
const revealEls = document.querySelectorAll(
  '.kyc-col, .mfa-card, .id-feature, .sig-step, .live-feature, .voice-feature, .sig-trust-item, .feature-pill, .id-auth-detail, .trust-badge-wrap'
);
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach(el => io.observe(el));
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 18px rgba(13, 27, 75, 0.16)'
    : 'none';
});
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger?.addEventListener('click', () => {
  mainNav?.classList.toggle('open');
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mainNav?.classList.remove('open');
    }
  });
});