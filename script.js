// 6 media items: 3 videos + 3 images
const MEDIA = [
  {
    type: 'video',
    src: 'media/video1.mp4',
    thumb: 'media/thumb1.jpg',
    title: 'Trip Memory',
  },
  {
    type: 'image',
    src: 'media/photo1.jpg',
    thumb: 'media/photo1-thumb.jpg',
    title: 'Funny Moment',
  },
  {
    type: 'video',
    src: 'media/video2.mp4',
    thumb: 'media/thumb2.jpg',
    title: 'Birthday Flashback',
  },
  {
    type: 'image',
    src: 'media/photo2.jpg',
    thumb: 'media/photo2-thumb.jpg',
    title: 'Childhood',
  },
  {
    type: 'video',
    src: 'media/video3.mp4',
    thumb: 'media/thumb3.jpg',
    title: 'Family Fun',
  },
  {
    type: 'image',
    src: 'media/photo3.jpg',
    thumb: 'media/photo3-thumb.jpg',
    title: 'Best Smile',
  },
];

let currentIndex = 0;

// DOM Elements
const splash = document.getElementById('splash');
const tapBtn = document.getElementById('tapBtn');
const browse = document.getElementById('browse');
const grid = document.getElementById('grid');
const playerWrap = document.getElementById('playerWrap');
const player = document.getElementById('player');
const backBtn = document.getElementById('backBtn');
const skipBtn = document.getElementById('skipBtn');
const final = document.getElementById('final');
const finalBtn = document.getElementById('finalBtn');

// typing effect
const typedText = 'Happy Birthday Sister 💙';
let i = 0;
function typeEffect() {
  if (i < typedText.length) {
    document.getElementById('typed').innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// switch screens
function show(screen) {
  document
    .querySelectorAll('.screen')
    .forEach((s) => s.classList.remove('active'));
  screen.classList.add('active');
}

// start experience
function startExperience() {
  show(browse);
  renderGrid();
}

// attach tap/click anywhere on splash or button
tapBtn.addEventListener('click', startExperience);
splash.addEventListener('click', startExperience);
splash.addEventListener('touchstart', startExperience);

// render grid
function renderGrid() {
  grid.innerHTML = '';
  MEDIA.forEach((m, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
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
  player.innerHTML = '';
  if (m.type === 'video') {
    const vid = document.createElement('video');
    vid.src = m.src;
    vid.autoplay = true;
    vid.muted = true; // autoplay unlock
    vid.playsInline = true;
    vid.controls = false;
    vid.onended = () => nextMedia();
    player.appendChild(vid);
    vid
      .play()
      .then(() => {
        vid.muted = false;
      })
      .catch(() => {});
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
    show(final);
  } else {
    loadMedia(MEDIA[currentIndex]);
  }
}

// buttons
backBtn.onclick = () => show(browse);
skipBtn.onclick = nextMedia;
finalBtn.onclick = () => {
  window.location.href = 'final.html'; // redirect to your final message page
};
