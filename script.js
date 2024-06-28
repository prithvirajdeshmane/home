const hamburgerMenuLinks = document.querySelector(".hamburger-menu-links");
const hamburgerIcon = document.querySelector(".hamburger-icon");

function toggleMenu() {
  hamburgerMenuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

function collapseMenu() {
  hamburgerMenuLinks.classList.remove("open");
  hamburgerIcon.classList.remove("open");
}
