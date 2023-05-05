// Get the hamburger button and mobile menu
const menuToggle = document.querySelectorAll("#menu-toggle");
const mobileMenu = document.querySelectorAll("#mobile-menu");
const topNavBar = document.querySelectorAll(".top-nav-bar");

const open_icon = document.querySelectorAll(".open-icon");
const close_icon = document.querySelectorAll(".close-icon");

const navbar_true_fixed = document.querySelectorAll(".navbar-true-fixed");
const body = document.querySelector("body");

// Add a click event listener to the hamburger button
menuToggle.forEach((menu, index) => {
  menu.addEventListener("click", function () {
    // Toggle the "hidden" class on the mobile menu
    mobileMenu[index].classList.toggle("hidden");
    // navbar_true_fixed.classList.toggle("fixed");
    topNavBar[index].classList.toggle("after:!bg-black/0");

    open_icon[index].classList.toggle("hidden");
    close_icon[index].classList.toggle("hidden");

    body.classList.toggle("overflow-hidden");
  });
});

// Hide the mobile menu when a link is clicked
mobileMenu.forEach((mobileMenu_item, index) => {
  mobileMenu_item.querySelectorAll("a").forEach((link, index) => {
    link.addEventListener("click", function () {
      mobileMenu[index].classList.add("hidden");
    });
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    //lg: 1024px in tailwind
    // execute code here
    mobileMenu.forEach((mobileMenu_item, index) => {
      if (!mobileMenu_item.classList.contains("hidden")) {
        mobileMenu_item.classList.add("hidden");
        // navbar_true_fixed.classList.remove("fixed");
        topNavBar[index].classList.add("after:!bg-black/0");

        open_icon[index].classList.remove("hidden");
        close_icon[index].classList.add("hidden");

        body.classList.remove("overflow-hidden");
      }
    });
  }
});

const navBar = document.querySelector(".navbar");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > heroSection.offsetHeight) {
    navBar.classList.remove("hidden");
  } else {
    navBar.classList.add("hidden");
  }
});

// for before and after slider to work
const slider = document.querySelector("#image-comparison-slider");
const sliderImgWrapper = document.querySelector(
  "#image-comparison-slider .img-wrapper"
);
const sliderHandle = document.querySelector("#image-comparison-slider .handle");

slider.addEventListener("mousemove", sliderMouseMove);
slider.addEventListener("touchmove", sliderMouseMove);

function sliderMouseMove(event) {
  if (isSliderLocked) return;

  const sliderLeftX = slider.offsetLeft;
  const sliderWidth = slider.clientWidth;
  const sliderHandleWidth = sliderHandle.clientWidth;

  let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
  if (mouseX < 0) mouseX = 0;
  else if (mouseX > sliderWidth) mouseX = sliderWidth;

  sliderImgWrapper.style.width = `${((1 - mouseX / sliderWidth) * 100).toFixed(
    4
  )}%`;
  sliderHandle.style.left = `calc(${((mouseX / sliderWidth) * 100).toFixed(
    4
  )}% - ${sliderHandleWidth / 2}px)`;
}

let isSliderLocked = false;

slider.addEventListener("mousedown", sliderMouseDown);
slider.addEventListener("touchstart", sliderMouseDown);
slider.addEventListener("mouseup", sliderMouseUp);
slider.addEventListener("touchend", sliderMouseUp);
slider.addEventListener("mouseleave", sliderMouseLeave);

function sliderMouseDown(event) {
  if (isSliderLocked) isSliderLocked = false;
  sliderMouseMove(event);
}

function sliderMouseUp() {
  if (!isSliderLocked) isSliderLocked = true;
}

function sliderMouseLeave() {
  if (isSliderLocked) isSliderLocked = false;
}
