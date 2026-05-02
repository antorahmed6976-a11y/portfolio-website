document.addEventListener("DOMContentLoaded", function () {
  // Active Nav Link Highlight
  const sections = document.querySelectorAll("section");
  const navLinksAll = document.querySelectorAll(".nav-links a");

  function activateNavLink() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSectionId = section.id;
      }
    });

    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
      currentSectionId = sections[sections.length - 1].id;
    }

    navLinksAll.forEach((link) => {
      link.classList.remove("active-link");

      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active-link");
      }
    });
  }

  window.addEventListener("scroll", activateNavLink);

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  //Typing animation
  const typingElement = document.querySelector(".typing");

  const words = ["Frontend Developer", "UI Designer", "JavaScript Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000);
      }
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }

  typeEffect();

  // Project Modal
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close-btn");
  const projectButtons = document.querySelectorAll(".project-card button");

  
projectButtons.forEach(button => {
  button.addEventListener("click", function() {
    const card = this.parentElement;
    const title = card.querySelector("h3").textContent;
    const description = card.querySelector("p").textContent;

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


  // Form validation
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill all fields!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("⚠️ Please enter a valid email!");
      return;
    }
    formMessage.style.display = "block";
    form.reset();
  });

  // Scroll Reveal Animation
  const revealSections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  revealSections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // Page scroll progress
  const progressBar = document.querySelector(".scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
  });
});
