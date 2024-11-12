const liveBtn = document.querySelector(".live-btn");

const disabledBtn = document.querySelector("#disabled-btn");

disabledBtn.disabled = true;

liveBtn.addEventListener("click", () => {
  window.open("https://skylinearchitects.netlify.app/");
});
