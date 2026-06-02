/* script.js – SafePass AIATUS */
// ── Scroll reveal ──────────────────────────────
const revealEls=document.querySelectorAll(`.kyc-col, .mfa-card, .id-feature, .sig-step, .live-feature, .voice-feature, .sig-trust-item, .feature-pill, .id-auth-detail, .trust-badge-wrap`);revealEls.forEach(el=>el.classList.add(`reveal`));const io=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{e.isIntersecting&&(setTimeout(()=>e.target.classList.add(`visible`),i*60),io.unobserve(e.target))})},{threshold:.12});revealEls.forEach(el=>io.observe(el));
// ── Sticky header shadow ───────────────────────
const header=document.querySelector(`.site-header`);window.addEventListener(`scroll`,()=>{header&&(header.style.boxShadow=window.scrollY>10?`0 4px 18px rgba(13, 27, 75, 0.16)`:`none`)});
// ── Mobile hamburger ───────────────────────────
const hamburger=document.getElementById(`hamburger`),mainNav=document.getElementById(`mainNav`);
// ── Smooth anchor scroll ───────────────────────
hamburger?.addEventListener(`click`,()=>{mainNav?.classList.toggle(`open`)}),document.querySelectorAll(`a[href^="#"]`).forEach(a=>{a.addEventListener(`click`,e=>{let target=document.querySelector(a.getAttribute(`href`));target&&(e.preventDefault(),target.scrollIntoView({behavior:`smooth`,block:`start`}),mainNav?.classList.remove(`open`))})});