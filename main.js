document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      var heroSection = document.querySelector(".hero-section");
      if (window.scrollY > heroSection.offsetTop + heroSection.offsetHeight) {
        header.classList.add("header-scroll");
      } else {
        header.classList.remove("header-scroll");
      }
    });
  });


