// 10 media items: 5 videos + 5 images
const MEDIA = [
  { type: 'video', src: 'movie.mp4', title: 'Another Year, More Reasons to Pareshan You 😏' },
  { type: 'image', src: 'bhoot.jpeg', title: 'The Iconic Side-Eye Moment🤣' },
  { type: 'video', src: 'movie2.mp4', title: 'Birthday Memories for Aap 💖' },
  { type: 'image', src: 'dii.jpg', title: 'Aap + Bhaiya = Perfect Duo 🫶' },
  { type: 'video', src: 'movie3.mp4', title: 'Midnight Mood Check 😝' },
  { type: 'image', src: 'dii2.jpg', title: 'The Iconic Leavers Day' },
  { type: 'video', src: 'movie4.mp4', title: 'When ChatGPT Chose My Team 😉' },
  { type: 'image', src: 'dii3.jpeg', title: 'Aap Wearing My Gift 😎' },
  { type: 'video', src: 'movie5.mp4', title: 'World’s Best Sister,No Debate' },
  { type: 'image', src: 'dii4.jpeg', title: 'Ghibli Sweet Moment' },
];

let currentIndex = 0;

// DOM elements
const splash = document.getElementById('splash');
const tapBtn = document.getElementById('tapBtn');
const browse = document.getElementById('browse');
const grid = document.getElementById('grid');
const playerWrap = document.getElementById('playerWrap');
const player = document.getElementById('player');
const backBtn = document.getElementById('backBtn');
const skipBtn = document.getElementById('skipBtn');
const finalBtn = document.getElementById('finalBtn');

// Typing effect for splash screen
const typedText = 'Happy Birthday Meri Pyari Behn ❤️';
let i = 0;
function typeEffect() {
  if (i < typedText.length) {
    document.getElementById('typed').innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Switch screens
function show(screen) {
  document
    .querySelectorAll('.screen')
    .forEach((s) => s.classList.remove('active'));
  screen.classList.add('active');
}

// Start button
tapBtn.addEventListener('click', () => {
  show(browse);
  renderGrid();
});

// Render grid
function renderGrid() {
  grid.innerHTML = '';
  MEDIA.forEach((m, idx) => {
    const card = document.createElement('div');
    card.className = 'card';

    if (m.type === 'video') {
      card.innerHTML = `<video src="${m.src}" muted autoplay loop></video><h3>${m.title}</h3>`;
    } else {
      card.innerHTML = `<img src="${m.src}" alt="${m.title}"><h3>${m.title}</h3>`;
    }

    card.onclick = () => startPlayer(idx);
    grid.appendChild(card);
  });
}

// Player
function startPlayer(index) {
  currentIndex = index;
  show(playerWrap);
  loadMedia(MEDIA[currentIndex]);
}

function loadMedia(m) {
  player.innerHTML = '';
  if (m.type === 'video') {
    const vid = document.createElement('video');
    vid.src = m.src;
    vid.autoplay = true;
    vid.controls = false;
    vid.onended = () => nextMedia();
    player.appendChild(vid);
  } else {
    const img = document.createElement('img');
    img.src = m.src;
    player.appendChild(img);
    setTimeout(() => nextMedia(), 3000);
  }
}

function nextMedia() {
  currentIndex++;
  if (currentIndex >= MEDIA.length) {
    show(browse);
  } else {
    loadMedia(MEDIA[currentIndex]);
  }
}

// Controls
backBtn.onclick = () => show(browse);
skipBtn.onclick = nextMedia;

// Final surprise button
finalBtn.onclick = () => {
  window.location.href = 'final.html';
};
