document.querySelectorAll(".navigation ul li:not(.highlight)").forEach((li) =>
  li.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
  })
);

document.querySelector(".twistie").addEventListener("click", () => {
  document
    .querySelectorAll(".navigation ul li:not(:first-child)")
    .forEach((li) => li.classList.toggle("hidden"));
});
