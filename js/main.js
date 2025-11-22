/* ===================================================================
 * Main JS - Refactored for Modern Portfolio
 * =================================================================== */

(function () {
  "use strict";

  /* Initialize AOS (Animate On Scroll)
   * ------------------------------------------------------ */
  AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-out",
    delay: 100,
    once: true,
  });

  /* Mobile Menu
   * ------------------------------------------------------ */
  const header = document.querySelector(".s-header");
  const menuToggle = document.querySelector(".s-header__menu-toggle");
  const navWrap = document.querySelector(".s-header__nav-wrap");
  const navLinks = document.querySelectorAll(".s-header__nav a");

  // Toggle Menu
  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent click from bubbling to document
      header.classList.toggle("menu-open");
    });
  }

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
    });
  });

  // Close menu when clicking OUTSIDE of the menu
  document.addEventListener("click", (e) => {
    // Check if menu is open
    if (header.classList.contains("menu-open")) {
      // If click target is NOT inside navWrap AND NOT the toggle button
      if (!navWrap.contains(e.target) && !menuToggle.contains(e.target)) {
        header.classList.remove("menu-open");
      }
    }
  });

  /* Active Link Highlighting (Scroll Spy)
   * ------------------------------------------------------ */
  const sections = document.querySelectorAll(".target-section");
  const navLi = document.querySelectorAll(".s-header__nav li");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Offset of 150px to trigger active state slightly before reaching top
      if (scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("current");
      if (li.querySelector("a").getAttribute("href").includes(current)) {
        li.classList.add("current");
      }
    });

    /* Back to Top Button Visibility */
    const goTopBtn = document.querySelector(".go-top");
    if (scrollY > 500) {
      goTopBtn.classList.add("active");
    } else {
      goTopBtn.classList.remove("active");
    }
  });

  /* Smooth Scrolling for Anchor Links
   * ------------------------------------------------------ */
  document.querySelectorAll('a.smoothscroll[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        });
      }
    });
  });
})();
