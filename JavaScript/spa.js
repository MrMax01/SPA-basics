const app = {
  pages: [],
  show: new Event("show"),
  init: () => {
    app.pages = document.querySelectorAll(".page");
    app.pages.forEach((pg) => {
      pg.addEventListener("show", app.pageShown);
    });
    document.querySelectorAll("nav-link").forEach((link) => {
      link.addEventListener("click", app.navigation);
    });
    history.replaceState({}, "Home", "#home");
    window.addEventListener("popstate", app.poppin);
  },
  navigation: (event) => {
    event.preventDefault();
    let currentPage = event.target.getAttribute("data-target");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(currentPage).classList.add("active");
    history.pushState({}, currentPage, `#${currentPage}`);
  },
  pageShown: (event) => {},
  poppin: (event) => {
    console.log(location.hash, "popstate event");
  },
};

document.addEventListener("DOMContentLoaded", app.init);
