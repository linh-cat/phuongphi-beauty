// scroll navbar
window.addEventListener("scroll", function() {
  let navBar = this.document.querySelector(".navbar");
  if (this.window.pageYOffset > 0) {
    navBar.classList.add("black");
  } else {
    navBar.classList.remove("black");
  }
});
