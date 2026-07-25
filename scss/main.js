const navbar = document.querySelector(".navbar");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navbarToggler = document.querySelector(".navbar-toggler");
const currentYear = document.querySelector("[data-current-year]");
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

const updateNavbar = () => {
  navbar?.classList.toggle("scrolled", window.scrollY > 12);
};

updateNavbar();
window.addEventListener("scroll", updateNavbar, { passive: true });

document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse?.classList.contains("show")) {
      navbarToggler?.click();
    }
  });
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const animatedElements = document.querySelectorAll("[data-reveal]");

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.rel = "noopener noreferrer";
});

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const project = (formData.get("project") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !project || !message) {
      formFeedback.textContent = "Merci de remplir tous les champs pour me transmettre votre demande.";
      return;
    }

    const subject = `Nouveau projet : ${project}`;
    const body = `Nom : ${name}\nEmail : ${email}\nProjet : ${project}\n\n${message}`;

    window.location.href = `mailto:nadamaan55555@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    formFeedback.textContent = "Merci pour votre message. Je vous réponds rapidement.";
    contactForm.reset();
  });
}

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("is-visible"));
}


