const hamburgerMenu = document.querySelector(".hamburger");

const mobileNav = document.querySelector(".mobile_nav");

const closeBtn = document.querySelector(".close");

hamburgerMenu.addEventListener("click", toggleMobileNav);

function toggleMobileNav() {
  mobileNav.style.display = "block";
  hamburgerMenu.style.display = "none";
  closeBtn.style.display = "block";
}

closeBtn.addEventListener("click", hideMobileNav);

function hideMobileNav() {
  mobileNav.style.display = "none";
  hamburgerMenu.style.display = "block";
  closeBtn.style.display = "none";
}
