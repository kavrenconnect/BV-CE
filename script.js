
const carBrand = document.querySelector(".bars");
const nav = document.querySelector("nav");

carBrand.addEventListener("click", () => {
  nav.classList.toggle("toggled");
});
