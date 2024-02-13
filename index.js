let mainImages = document.querySelector("#mainImage");

let width = window.innerWidth;

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
