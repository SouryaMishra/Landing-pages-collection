const slideCount = document.querySelectorAll(".slide").length;
let dx = 0;

document.querySelector(".right").addEventListener("click", () => {
  dx--;
  if (dx < 0) dx = slideCount - 1;
  document.querySelector(".carousel").style.transform = `translateX(-${
    dx * 100
  }%)`;

  updateColors();
  toggleActiveCircle();
});

document.querySelector(".left").addEventListener("click", () => {
  dx++;
  if (dx > slideCount - 1) dx = 0;
  document.querySelector(".carousel").style.transform = `translateX(-${
    dx * 100
  }%)`;

  toggleActiveCircle();
  updateColors();
});

function toggleActiveCircle() {
  const activeCircle = document.querySelector(".circle.active");
  activeCircle.classList.remove("active");
  const circle = document.querySelector(`.circle[data-id = "${dx}"]`);
  circle.classList.add("active");
}

function updateColors() {
  const root = document.documentElement;
  const currentImage = document.querySelector(`img[data-id = "${dx}"]`);
  const imgBgColor = currentImage.getAttribute("data-bg");
  document.body.style.backgroundColor = imgBgColor;
  const isDarkTheme = imgBgColor === "#C5031C" || imgBgColor === "#37383A";

  if (isDarkTheme) {
    root.style.setProperty("--bg-color", "#40020e");
    root.style.setProperty("--font-color", "#ffffff");
  } else {
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--font-color", "#40020e");
  }
}
