let mainImages = document.querySelector("#mainImage");

let width = window.innerWidth;
let body = document.querySelector("body");

console.log(width);

if (!mainImages) {
  console.log("main images not found");
} else {
  console.log("found");
}

if (width <= 410) {
  mainImages.src = "./assets/images/image-web-3-mobile.jpg";
} else {
  console.log("width is ok");
}

let menuContainer = document.querySelector(".mainMenu");

let menuOpen = document.querySelector("#menuButton");

menuOpen.addEventListener("click", () => {
  menuContainer.classList.add("menuActive");
});

let menuClose = document.querySelector(".menuClose");

menuClose.addEventListener("click", () => {
  menuContainer.classList.remove("menuActive");
});
