"use strict";

const carousel = document.getElementById("carousel-slider");
const carouselImages = document.querySelectorAll(".carousel-img img");
const prevBtn = document.getElementById("c-prev");
const nextBtn = document.getElementById("c-next");

let caroulselCounter = 4;
const imgSize = carouselImages[0].clientWidth + 20;

carousel.style.transform = `translateX(${-imgSize * caroulselCounter}px)`;

// Next and Prev Btn

nextBtn.addEventListener("click", () => {
  if (caroulselCounter >= carouselImages.length - 1) return;
  carousel.style.transition = `transform 0.1s ease-in-out`;
  caroulselCounter++;
  carousel.style.transform = `translateX(${-imgSize * caroulselCounter}px)`;
});
prevBtn.addEventListener("click", () => {
  if (caroulselCounter <= 0) return;
  carousel.style.transition = `transform 0.1s ease-in-out`;
  caroulselCounter--;
  carousel.style.transform = `translateX(${-imgSize * caroulselCounter}px)`;
});
console.log(imgSize);

carousel.addEventListener("transitionend", () => {
  console.log("stopped");
  if (carouselImages[caroulselCounter].id === "lastImg") {
    carousel.style.transition = "none";
    caroulselCounter = carouselImages.length - 3;
    carousel.style.transform = `translateX(${-imgSize * caroulselCounter}px)`;
  }
  if (carouselImages[caroulselCounter].id === "firstImg") {
    carousel.style.transition = "none";
    caroulselCounter = carouselImages.length - caroulselCounter;
    carousel.style.transform = `translateX(${-imgSize * caroulselCounter}px)`;
    console.log(caroulselCounter);
  }
  //   console.log(carouselImages[caroulselCounter].id);
  //   console.log(carouselImages[caroulselCounter].id);
});
