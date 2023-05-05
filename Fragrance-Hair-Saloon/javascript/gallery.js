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

// filter-function
const filter_buttons = document.querySelectorAll(".filter-button");
// picture_container
const filter_picture = document.querySelectorAll(".filter-picture");
filter_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    filter_buttons.forEach((btn) => {
      btn.classList.remove("active-filter-button");
    });
    button.classList.add("active-filter-button");

    //picture filter
    filter_picture.forEach((picture_container) => {
      picture_container.classList.add("hidden");
    });
    filter_picture[index].classList.remove("hidden");
    //
  });
});
