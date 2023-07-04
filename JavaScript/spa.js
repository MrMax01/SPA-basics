const app = {
  pages: [],
  show: new Event("show"),
  init: () => {
    app.pages = document.querySelectorAll(".page");
    app.pages.forEach((pg) => {
      pg.addEventListener("show", app.pageShown);
    });
    document.querySelectorAll(".nav-link").forEach((link) => {
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
    document.getElementById(currentPage).dispatchEvent(app.show);
  },
  // ANIMAZIONI
  pageShown: (event) => {
    console.log("page");
    let h1 = event.target.querySelector("h1");
    h1.classList.add("big");
    setTimeout(() => {
      h1.classList.remove("big");
    }, 500);
  },
  poppin: (event) => {
    console.log(location.hash, "popstate event");
    let hash = location.hash.replace("#", "");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(hash).classList.add("active");

    // history.pushState({}, currentPage, `#${currentPage}`);
    document.getElementById(hash).dispatchEvent(app.show);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
