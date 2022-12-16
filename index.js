const body = document.getElementById("body");
const navbar = document.querySelector(".navbar-nav");
const mobile_menuTogglerContainer = document.querySelector(
  ".mobile_menuTogglerContainer"
);
const mobile_menuToggler = document.querySelector(".mobile_menuToggler");
const aside_container = document.querySelector(".aside_container");
const aside = document.querySelector(".aside");
const work_containerRightContent = document.querySelector(
  ".work_containerRightContent"
);

const navItems = ["About", "Services", "Clients", "Blog", "Contact"];
const workImages = [1, 2, 3, 4];

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

workImages.forEach((workImage) => {
  const image = document.createElement("div");
  image.classList.add("work_image");
  image.style.backgroundImage = `url(./assets/work_${workImage}.png)`;
  image.style.backgroundSize = "cover";
  image.style.backgroundRepeat = "no-repeat";

  if (workImage == 2) {
    image.style.position = "relative";

    const circle = document.createElement("div");

    circle.classList.add("circle", "d-none", "d-md-flex");

    image.append(circle);
  }

  if (workImage == 3) {
    image.style.position = "relative";

    const semi_circle = document.createElement("div");

    semi_circle.classList.add("semiCircle", "d-none", "d-md-flex");

    image.append(semi_circle);
  }

  if (workImage == 4) {
    image.style.position = "relative";

    const dots = document.createElement("img");

    dots.src = "./assets/extra_dotGrid.png";

    dots.classList.add("extraDots", "d-none", "d-md-flex");

    image.append(dots);
  }

  work_containerRightContent.append(image);
});

const handleToogle = () => {
  const isAsideOpen = mobile_menuToggler.classList.contains("open");
  //   if (mobile_menuToggler.classList.contains("open")) {
  if (isAsideOpen) {
    body.style.overflow = "scroll";
    mobile_menuToggler.classList.remove("open");
    aside_container.classList.remove("open");
  } else {
    body.style.overflow = "hidden";
    mobile_menuToggler.classList.add("open");
    aside_container.classList.add("open");
  }
};

mobile_menuTogglerContainer.addEventListener("click", handleToogle);
