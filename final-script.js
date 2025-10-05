const message = `My Dear Sister 💙,

Happy Birthday meri pyari dii 🥰❤️
Aap meri life ki sabse badi blessing ho, ek gift by God jo meri zindagi mein sabse precious hai 🥺❤️.
As much as I can say, still words will never be enough for what you mean to me ❤️.
Aap meri champion behn ho, mera jigra ho aap 🥰🥺❤️.
Time aane pe choti don bhi jab aap mujhe danti ho 🙄🥰 aur aap mera support aur motivation system ho 🥺❤️.
Aap hamesha khush raho, best health mein raho aur Allah aapko sirf khushiyan de 🥰❤️.
I pray ke aap apne saare sapne pure karo aur har step pe success pao 🥺❤️.
Hum dono bhai behn hamesha ek dusre ko pareshan karte rehte hain aur yeh aisi hi hamesha chalta rahega 😅🥰❤️.
Beshak hum Tom & Jerry ki tarah ek dusre ko pareshan karte hain, aur honestly aapko pareshan karna is the best feeling in the world 🥰🤣😝.
Dukh, dard ya khushi, har haal mein hum dono ek dusre ke saath rahenge 🥰❤️.
Honestly, you mean the world to me 🌍❤️.As your bhaiya, I’m so proud that aap meri behn ho 🥺❤️.
Jo bhi ho jaaye, main hamesha aapke saath rahunga 🥰❤️.
Aur haan dii… aaj ka din toh special hai, lekin asli gift toh yeh hai ke aapko aaj double pareshan karunga 🤣🤣🥰❤️.`;

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
s
