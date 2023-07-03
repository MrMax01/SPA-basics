document.addEventListener("DOMContentLoaded", () => {
  //   history.pushState(null, "title", "Home");
});

// document.addEventListener("click", (event) => {
//   event.preventDefault();
// });
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelectorAll("div").forEach((box) => {
      box.classList.remove("active");
    });
    let pageName = event.currentTarget.href;
    console.log(pageName.split("/").pop());
    document.getElementById(pageName.split("/").pop()).classList.add("active");
  });
});
