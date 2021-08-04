const hamburger = document.getElementById("nav-hamburger");
const nav = document.getElementById("header-2");
const close = document.getElementById("close");
const sandwich = document.getElementById("sandwich");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-show");
  sandwich.style.display = sandwich.style.display == "none" ? "flex" : "none";
  close.style.display = close.style.display == "flex" ? "none" : "flex";
});
