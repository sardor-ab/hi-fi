const navbar = document.querySelector(".navbar-nav");
const mobile_menuTogglerContainer = document.querySelector(
  ".mobile_menuTogglerContainer"
);
const mobile_menuToggler = document.querySelector(".mobile_menuToggler");
const aside_container = document.querySelector(".aside_container");
const aside = document.querySelector(".aside");

const navItems = ["About", "Services", "Clients", "Blog", "Contact"];

// let isAsideOpen = false;

navItems.forEach((navItem) => {
  const listItem = document.createElement("li");

  listItem.classList.add("navItem");

  const item = document.createElement("a");

  item.classList.add("nav-link", "px-3", "py-2");
  item.innerText = navItem;
  item.href = "#";

  listItem.append(item);

  navbar.append(listItem);
});

navItems.forEach((navItem) => {
  const listItem = document.createElement("li");

  listItem.classList.add("navItem", "text-center");

  const item = document.createElement("a");

  item.classList.add("nav-link", "px-3", "py-2");
  item.innerText = navItem;
  item.href = "#";

  listItem.append(item);

  aside.append(listItem);
});

const handleToogle = () => {
  const isAsideOpen = mobile_menuToggler.classList.contains("open");
  //   if (mobile_menuToggler.classList.contains("open")) {
  if (isAsideOpen) {
    mobile_menuToggler.classList.remove("open");
    aside_container.classList.remove("open");
  } else {
    mobile_menuToggler.classList.add("open");
    aside_container.classList.add("open");
  }
};

mobile_menuTogglerContainer.addEventListener("click", handleToogle);
