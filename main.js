// Make navbar button to scroll into each section
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarLogo = document.querySelector(".navbar__logo");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY >= navbarHeight) {
    navbar.classList.add("navbar--dark");
    navbarLogo.classList.add("logo--white");
  } else {
    navbar.classList.remove("navbar--dark");
    navbarLogo.classList.remove("logo--white");
  }
});
// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
// Show "Arrow up" button when scrolling down
const arrowBtn = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});
arrowBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

// make buttons to filter the projects
const categories = document.querySelector(".work__categories");
const project = document.querySelector(".work__projects");
categories.addEventListener("click", (e) => {
  const target = e.target.dataset.filter;
  console.log(target);
});

// Project Filtering
const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  console.log(e.target);
  const filter = e.target.dataset.filter;

  // Remove selection from the previous item and
  const active = document.querySelector(".category__btn.selected");
  const target = e.target.nodeName === "BUTTON" && e.target;

  target.classList.add("selected");
  active.classList.remove("selected");

  if (filter === null) {
    return;
  }
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || project.dataset.type === filter) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectsContainer.classList.remove("anim-out");
  }, 200);
});
