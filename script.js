document.addEventListener("DOMContentLoaded", function () {
  // Scroll functionality
  window.addEventListener("scroll", function () {
    // Sticky Navbar
    if (window.scrollY > 20) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }

    // Scroll Up Button
    if (window.scrollY > 500) {
      document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
      document.querySelector(".scroll-up-btn").classList.remove("show");
    }
  });

  // Prevent right-click context menu
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  // Disable F12, Ctrl+U, Ctrl+I, Ctrl+J, Ctrl+S keys
  document.addEventListener("keydown", function (event) {
    if (
      event.ctrlKey &&
      (event.key === "u" ||
        event.key === "U" ||
        event.key === "i" ||
        event.key === "I" ||
        event.key === "j" ||
        event.key === "J" ||
        event.key === "s" ||
        event.key === "S")
    ) {
      event.preventDefault();
    }
    if (event.key === "F12") {
      event.preventDefault();
    }
  });

  // Scroll up button functionality
  document
    .querySelector(".scroll-up-btn")
    .addEventListener("click", function () {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.documentElement.style.scrollBehavior = "auto";
    });

  // Smooth scrolling for navbar links
  document.querySelectorAll(".navbar .menu li a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  });

  // Toggle the navbar menu
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".navbar .menu").classList.toggle("active");
    document.querySelector(".menu-btn i").classList.toggle("active");
  });

  // Typing effect for text (vanilla JavaScript for Typed.js)
  // eslint-disable-next-line no-undef
  new Typed(".typing", {
    strings: ["Learner", "Developer", "Creator", "Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // eslint-disable-next-line no-undef
  new Typed(".typing-2", {
    strings: ["Learner", "Developer", "Creator", "Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel for the image slider (vanilla JavaScript)
  const owl = document.querySelector(".carousel");
  const items = owl.querySelectorAll(".item");

  let currentIndex = 0;
  let autoplay = true;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  }

  // Set autoplay
  setInterval(() => {
    if (autoplay) {
      nextSlide();
    }
  }, 2000); // Change slide every 2 seconds

  // Initialize the first slide
  showSlide(currentIndex);

  // Add event listeners for navigation buttons (if present)
  document
    .querySelector(".carousel .prev")
    .addEventListener("click", prevSlide);
  document
    .querySelector(".carousel .next")
    .addEventListener("click", nextSlide);
});
