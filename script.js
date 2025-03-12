const skyline = document.querySelector(".skyline");
const opalAndRouge = document.querySelector(".opal-and-rouge");
const sebastian = document.querySelector(".sebastian");

const disabledButtons = document.querySelectorAll(".disabled-btn");

disabledButtons.forEach((button) => {
  button.disabled = true;
});

skyline.addEventListener("click", () => {
  window.open("https://skylinearchitects.netlify.app/");
});

opalAndRouge.addEventListener("click", () => {
  window.open("https://opal-and-rouge.netlify.app/");
});

sebastian.addEventListener("click", () => {
  window.open("https://sebastian-nyberg.netlify.app/");
});
