const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const heroOne = document.getElementById("hero-item-1");
const heroTwo = document.getElementById("hero-item-2");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

let slideItems = document.getElementsByClassName("slide-item");

console.log(typeof slideItems);

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

const slideleft = () => {
  // get current slide
};

// const getCurrentSlide = () =>
//   slideItems.filter((el) => el.className === "current");

// getCurrentSlide();
