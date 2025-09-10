const message = `Dear Sister 💙,

Wishing you the happiest of birthdays!
You are not only my sister but also my best friend.
I’m so grateful for all the memories we’ve created,
and I can’t wait for the adventures still to come.
May this year bring you endless joy, love, and success.

With love always ❤️`;

const typedMessageEl = document.getElementById('typedMessage');

// Word-by-word typing animation
function typeWords(text, element, speed = 150) {
  const words = text.split(' ');
  let i = 0;
  function typing() {
    if (i < words.length) {
      element.textContent += (i === 0 ? '' : ' ') + words[i];
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Start typing animation
typeWords(message, typedMessageEl);

// Confetti effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  d: Math.random() * 0.5 + 0.5,
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'var(--turquoise)';
  pieces.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  update();
}

function update() {
  pieces.forEach((p) => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 20);

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
