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
})

//RESET FORM ON SUBMISSION

function resetForm() {
  let form = document.querySelector(".js-form");

  form.addEventListener("submit", () => {
    setTimeout(() => {
      form.reset();
    },1000);
  });
}

resetForm();
