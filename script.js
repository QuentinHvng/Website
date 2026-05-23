const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuButton.textContent = "Close";
  } else {
    menuButton.textContent = "Menu";
  }
});

const links = navLinks.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.textContent = "Menu";
  });
});