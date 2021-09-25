document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("aside").classList.toggle("opened");
  this.classList.toggle("menuShown");
});
