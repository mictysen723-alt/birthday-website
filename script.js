let index = 0;
const slider = document.querySelector('.slider');
const music = document.getElementById('bgMusic');
const lockedSlide = document.querySelector('.locked');

/* Slide navigation */
function next() {
  index++;
  slider.style.transform = `translateX(-${index * 100}vw)`;

  if (index === 1) {
    music.volume = 0;
    music.play();
    fadeInMusic();
  }
}

/* Unlock final slide */
function unlock() {
  index++;
  lockedSlide.style.opacity = 1;
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

/* Music fade */
function fadeInMusic() {
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

/* Particles */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  d: Math.random() * 0.5 + 0.2
}));

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(drawParticles);
}

drawParticles();
