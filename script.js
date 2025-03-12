const liveButton = document.querySelector(".live-btn");
const disabledButtons = document.querySelectorAll(".disabled-btn");

disabledButtons.forEach((button) => {
  button.disabled = true;
});

liveButton.addEventListener("click", () => {
  window.open("https://skylinearchitects.netlify.app/");
});
