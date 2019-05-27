document.addEventListener("DOMContentLoaded", function () {

  var items = [].slice.call(document.querySelectorAll(".item"));
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        var itemAtivo = document.querySelector(".item.active");
        if (itemAtivo) {
          itemAtivo.classList.remove("active");
          item.classList.add("active");
        } else {
          item.classList.add("active");
        }
      }
    });
  });

  // Scroll suave
  function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".to-scroll a[href^='#']");

    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  initScrollSuave();
});