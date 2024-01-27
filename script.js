document.querySelector('.header--mobile-menu').addEventListener('click', animateBars);

/* MOBILE MENU ELEMENTS */
let header = document.querySelector('.header');
let background = document.querySelector('#background');
let bar1 = document.querySelector('.mobile-bars1');
let bar2 = document.querySelector('.mobile-bars2');
let bar3 = document.querySelector('.mobile-bars3');
let nav =  document.querySelector('#nav');
let link =  document.querySelector('.nav--link');

/* SWITCH LANGUAGE*/
const flagsElement = document.querySelector("#flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for(const textToChange of textsToChange) {
    // console.log(textsToChange);
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
  console.log(texts);
}

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
})

/* DARK MODE ELEMENTS */
let btnDark = document.querySelector("#dark");
let aboutMe = document.querySelector('.about-me');
let projects = document.querySelector('.projects');
let cta = document.querySelector('.cta');
let nav2 = document.querySelector('.nav2');
let homeTitles = document.querySelector('.home--titles');
let btnDownload = document.querySelector('.btn--download');

// PROJECT REDIRECTIONS 
let btnLive = document.querySelector('#light');
let btnLive2 = document.querySelector('#light2');
let btnLive3 = document.querySelector('#light3');
let btnLive4 = document.querySelector('#light4');

let btnCode = document.querySelector('#code1');
let btnCode2 = document.querySelector('#code2');
let btnCode3 = document.querySelector('#code3');
let btnCode4 = document.querySelector('#code4');

// SOCIAL MEDIA REDIRECTION
let media = document.querySelector('#linked');
let media2 = document.querySelector('#linked2');
let media3 = document.querySelector('#linked3');
let media4 = document.querySelector('#linked4');

btnDark.addEventListener("click", changeBackground);
// check.addEventListener("click", changeLanguage);

function animateBars() {
  bar1.classList.toggle('activebars-menu-1');
  bar2.classList.toggle('activebars-menu-2');
  bar3.classList.toggle('activebars-menu-3');
  nav.classList.toggle('active-navigation-nav');
  nav.classList.toggle('nav');
  // background.classList.toggle('scale');
}

// links behaviour in the mobile menu 
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const href = link.getAttribute("href");

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      bar1.classList.toggle('activebars-menu-1');
      bar2.classList.toggle('activebars-menu-2');
      bar3.classList.toggle('activebars-menu-3');
      nav.classList.toggle('active-navigation-nav');
      nav.classList.toggle('nav');
      background.classList.toggle('scale');
    }

})});

function changeBackground() {
  btnDark.classList.toggle("active");
  // header 
  header.classList.toggle("light");
  homeTitles.classList.toggle("light");
  btnDownload.classList.toggle("light");
  //about me 
  aboutMe.classList.toggle("light");
  //projects
  projects.classList.toggle("light");
  btnLive.classList.toggle("light");
  btnLive2.classList.toggle("light");
  btnLive3.classList.toggle("light");
  btnLive4.classList.toggle("light");
  btnCode.classList.toggle("light");
  btnCode2.classList.toggle("light");
  btnCode3.classList.toggle("light");
  btnCode4.classList.toggle("light");
  // footer 
  media.classList.toggle("light");
  media2.classList.toggle("light");
  media3.classList.toggle("light");
  media4.classList.toggle("light");
  cta.classList.toggle("light");
  nav2.classList.toggle("light");
}