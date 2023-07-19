window.addEventListener("keydown", (e) => {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keys = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (audio == null) return;
  audio.currentTime = 0;
  audio.play();

  console.log(keys);

  keys.classList.add("playing");

  keys.addEventListener("transitionend", (e) =>
    keys.classList.remove("playing")
  );
});
