document.addEventListener("DOMContentLoaded", function(){

  // Active Nav Link Highlight
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");

function activateNavLink() {
  let currentSectionId = "";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 150 && rect.bottom >= 150) {
      currentSectionId = section.id;
    }
  });

  // যদি একদম নিচে চলে যাও (last section fix)
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
    currentSectionId = sections[sections.length - 1].id;
  }

  navLinksAll.forEach(link => {
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


  // Scroll Reveal Animation 
  const revealSections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  });

  revealSections.forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
  });


  // Page scroll progress 
  const progressBar = document.querySelector(".scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = scrollPercent + "%";
  });

});