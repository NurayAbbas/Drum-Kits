const container = document.querySelector(".container");
const kits = ["Snare", "Kick", "Crash", "Tom"];
kits.forEach((kit) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = kit;
  btn.style.backgroundImage = "url(imgs/" + kit + ".png.jpg)";
  container.appendChild(btn);
  const audio = document.createElement("audio");
  audio.src = "sounds/" + kit + ".mp3";
  container.appendChild(audio);
  btn.addEventListener("click", (e) => {
    audio.play();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0,1)) {
      audio.play();
      btn.style.transform = "scale(.9)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 100);
    }
  });
});
