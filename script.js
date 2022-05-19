const activateDropdownMenu = document.querySelectorAll("[data-active]");
const mobileMenuToggle = document.querySelector(".mobile__menu__toggle");
const closeMobileMenuToggle = document.querySelector(
  ".close__mobile__menu__toggle"
);
const navbar = document.querySelector(".nav__bar");

function toggleDropdownMenu(container, toggleContainer, dataset) {
  if (dataset.active === "false") {
    dataset.active = "true";
    container.classList.remove("inactive");
    container.classList.add("active");
    toggleContainer.classList.add("active");
  } else {
    dataset.active = "false";
    container.classList.remove("active");
    container.classList.add("inactive");
    toggleContainer.classList.remove("active");
  }
}

function handleDropdownMenu(e) {
  console.log(this.dataset.menu);
  if (this.dataset.menu === "features") {
    const subMenuContainer = document.querySelector(".submenu__container");
    const submenuToggle = document.querySelector(".submenu__toggle");
    toggleDropdownMenu(subMenuContainer, submenuToggle, this.dataset);
  } else {
    const subMenuContainer = document.querySelector(
      ".submenu__container__of__company"
    );
    const submenuToggle = document.querySelector(
      ".submenu__toggle__of__company"
    );
    toggleDropdownMenu(subMenuContainer, submenuToggle, this.dataset);
  }
}

function openMobileMenu() {
  navbar.classList.add("expandable");
}

function closeMobileMenu() {
  navbar.classList.remove("expandable");
}

activateDropdownMenu.forEach((dd) =>
  dd.addEventListener("click", handleDropdownMenu)
);
mobileMenuToggle.addEventListener("click", openMobileMenu);
closeMobileMenuToggle.addEventListener("click", closeMobileMenu);
