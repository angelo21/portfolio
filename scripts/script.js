<<<<<<< HEAD
//FUNCTIONALITY FOR INFO BOX DISAPPERING ON SCROLL

let header = document.querySelector(".header__info");
let scrollDown = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > scrollDown) {
    header.classList.add("header__info--hidden");
  } else {
    header.classList.remove("header__info--hidden");
  }
  
  scrollDown = window.pageYOffset;
});

//FUNCTIONALITY FOR STICKY NAVIGATION BAR



window.addEventListener("scroll", () => {
  let navBar = document.querySelector(".header__nav");

  if(window.pageYOffset >= 650) {
    navBar.classList.add("header__nav--sticky");
  } else {
    navBar.classList.remove("header__nav--sticky");
  }
=======
//FUNCTIONALITY FOR INFO BOX DISAPPERING ON SCROLL

let header = document.querySelector(".header__info");
let scrollDown = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > scrollDown) {
    header.classList.add("header__info--hidden");
  } else {
    header.classList.remove("header__info--hidden");
  }
  
  scrollDown = window.pageYOffset;
});

//FUNCTIONALITY FOR STICKY NAVIGATION BAR



window.addEventListener("scroll", () => {
  let navBar = document.querySelector(".header__nav");

  if(window.pageYOffset >= 650) {
    navBar.classList.add("header__nav--sticky");
  } else {
    navBar.classList.remove("header__nav--sticky");
  }
>>>>>>> db12f2b573c5cbce502f20346628466e3d40b68b
})