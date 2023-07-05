# SPA (single page application) - basics
it's a training project in which 
I wanted to recreate a simple Single Page Aplication where I simulate the page change while remaining on the same page without a framework.


## Screenshots

![image](https://github.com/MrMax01/SPA-basics/assets/135627515/e8d309e6-55c9-4413-9a3d-b36f7c965bb4)


## Demo

<a href="mrmax01.github.io/SPA-basics/" >SPA Here</a>


## 🛠 Skills
 HTML, CSS, javascript, History API


## Algorithm
For each link in the menu I put a listenEvent on the click.

I prevent the default behavior on clicking a link.

I take the target of the link which indicates the name of the page it should load.

I remove the .active class on the page which represents me the currently active page.

I add .active to the target page.

I push the URL with the name of the target page --> ex. index.html/#contact

I listen for the 'popstate' in order to change the page even going back a page.

I target the correct page and remove the .active class on the previous page for activate it in the current page.
## Usage/Examples

```javascript
import Component from 'my-project'

const app = {
  pages: [],
  init: () => {
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

  poppin: (event) => {
    console.log(location.hash, "popstate event");
    let hash = location.hash.replace("#", "");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(hash).classList.add("active");

    document.getElementById(hash).dispatchEvent(app.show);
  },
};

document.addEventListener("DOMContentLoaded", app.init);
```


## Authors

- [@Massimo](https://www.github.com/MrMax01)

