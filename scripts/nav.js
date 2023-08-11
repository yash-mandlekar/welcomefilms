const nav = document.querySelector("nav");
document.querySelector(".menu").addEventListener("click", function (e) {
  if (e.target.checked) {
    nav.style.left = "0";
  } else {
    nav.style.left = "-100%";
  }
});