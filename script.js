/* ========= HERO PARALLAX ========= */
window.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelector(".hero-content").style.transform =
    `translate(${x}px, ${y}px)`;
});

/* ========= CARDS 3D TILT ========= */
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;

    const glow = card.querySelector(".card-glow");
    glow.style.setProperty("--x", `${x}px`);
    glow.style.setProperty("--y", `${y}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

/* ========= SCROLL REVEAL PREMIUM ========= */
const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".card, .photo, .luxury-text, .luxury-box, .contact-box").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px) scale(.96)";
  el.style.transition = "all .8s cubic-bezier(.2,.8,.2,1)";
  reveal.observe(el);
});

document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0) scale(1)";
  });
});

/* ========= GALERIA PARALLAX SUAVE LIMITADO ========= */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax").forEach(img => {
    const rect = img.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = (windowHeight - rect.top) / windowHeight;
      const offset = Math.min(25, Math.max(-25, progress * 20 - 10));
      img.style.transform = `translateY(${offset}px)`;
    }
  });
});
