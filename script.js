// 10 media items: 5 videos + 5 images
const MEDIA = [
  { type: "video", src: "media/video1.mp4", thumb: "media/thumb1.jpg", title: "Video Memory 1" },
  { type: "image", src: "media/photo1.jpg", thumb: "media/photo1-thumb.jpg", title: "Photo Memory 1" },
  { type: "video", src: "media/video2.mp4", thumb: "media/thumb2.jpg", title: "Video Memory 2" },
  { type: "image", src: "media/photo2.jpg", thumb: "media/photo2-thumb.jpg", title: "Photo Memory 2" },
  { type: "video", src: "media/video3.mp4", thumb: "media/thumb3.jpg", title: "Video Memory 3" },
  { type: "image", src: "media/photo3.jpg", thumb: "media/photo3-thumb.jpg", title: "Photo Memory 3" },
  { type: "video", src: "media/video4.mp4", thumb: "media/thumb4.jpg", title: "Video Memory 4" },
  { type: "image", src: "media/photo4.jpg", thumb: "media/photo4-thumb.jpg", title: "Photo Memory 4" },
  { type: "video", src: "media/video5.mp4", thumb: "media/thumb5.jpg", title: "Video Memory 5" },
  { type: "image", src: "media/photo5.jpg", thumb: "media/photo5-thumb.jpg", title: "Photo Memory 5" },
];

let currentIndex = 0;

// DOM
const splash = document.getElementById("splash");
const tapBtn = document.getElementById("tapBtn");
const browse = document.getElementById("browse");
const grid = document.getElementById("grid");
const playerWrap = document.getElementById("playerWrap");
const player = document.getElementById("player");
const backBtn = document.getElementById("backBtn");
const skipBtn = document.getElementById("skipBtn");
const finalBtn = document.getElementById("finalBtn");

// typing effect
const typedText = "Happy Birthday Sister 💙";
let i = 0;
function typeEffect() {
  if (i < typedText.length) {
    document.getElementById("typed").innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// switch screens
function show(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

// start
tapBtn.addEventListener("click", () => {
  show(browse);
  renderGrid();
});

// render grid
function renderGrid() {
  grid.innerHTML = "";
  MEDIA.forEach((m, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${m.thumb}" alt="${m.title}"><h3>${m.title}</h3>`;
    card.onclick = () => startPlayer(idx);
    grid.appendChild(card);
  });
}

// player
function startPlayer(index) {
  currentIndex = index;
  show(playerWrap);
  loadMedia(MEDIA[currentIndex]);
}
function loadMedia(m) {
  player.innerHTML = "";
  if (m.type === "video") {
    const vid = document.createElement("video");
    vid.src = m.src;
    vid.autoplay = true;
    vid.controls = false;
    vid.onended = () => nextMedia();
    player.appendChild(vid);
  } else {
    const img = document.createElement("img");
    img.src = m.src;
    player.appendChild(img);
    setTimeout(() => nextMedia(), 3000);
  }
}
function nextMedia() {
  currentIndex++;
  if (currentIndex >= MEDIA.length) {
    show(browse); // return to grid after finishing all
  } else {
    loadMedia(MEDIA[currentIndex]);
  }
}
backBtn.onclick = () => show(browse);
skipBtn.onclick = nextMedia;

// final button → redirect
finalBtn.onclick = () => {
  window.location.href = "final.html";
};
