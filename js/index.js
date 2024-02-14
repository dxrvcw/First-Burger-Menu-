const burger_menu = document.querySelector(".burger__menu-wrapper");
const burger_btn = document.querySelector(".header__menu-btn");
const burger_btn_icon = document.querySelector(".header__navicon");

burger_btn.addEventListener("click", () => {
  burger_menu.classList.toggle("active");
  burger_btn_icon.classList.toggle("active");
});
