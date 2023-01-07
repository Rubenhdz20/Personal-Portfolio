document.querySelector('.header--mobile-menu').addEventListener('click', animateBars);

let header = document.querySelector('.header');
let background = document.querySelector('#background');
let bar1 = document.querySelector('.mobile-bars1');
let bar2 = document.querySelector('.mobile-bars2');
let bar3 = document.querySelector('.mobile-bars3');
let nav =  document.querySelector('#nav');
let link =  document.querySelector('.nav--link');

function animateBars() {
    bar1.classList.toggle('activebars-menu-1');
    bar2.classList.toggle('activebars-menu-2');
    bar3.classList.toggle('activebars-menu-3');
    nav.classList.toggle('active-navigation-nav');
    nav.classList.toggle('nav');
    background.classList.toggle('scale');
}

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const href = link.getAttribute("href");

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      bar1.classList.toggle('activebars-menu-1');
      bar2.classList.toggle('activebars-menu-2');
      bar3.classList.toggle('activebars-menu-3');
      nav.classList.toggle('active-navigation-nav');
      nav.classList.toggle('nav');
      background.classList.toggle('scale');
    }

})});