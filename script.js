let index = 0;
const slider = document.querySelector('.slider');
const music = document.getElementById('bgMusic');

/* SLIDE NAV */
function next(e) {
  heartBurst(e);
  index++;
  slider.style.transform = `translateX(-${index * 100}vw)`;

  if (index === 1) {
    music.volume = 0;
    music.play();
    fadeInMusic();
  }
}

/* ANSWERS */
function answer(choice, e) {
  heartBurst(e);
  const response = document.getElementById("response");
  const messages = {
    1: "Even a simple yes from you means more to me than you know.",
    2: "That certainty makes my heart feel safe.",
    3: "Absolutely… that confidence touches me deeply.",
    4: "Yes, like crazy ❤️ — that kind of love is rare."
  };
  response.textContent = messages[choice];
  response.style.opacity = 1;
}

/* INSTAGRAM REPLY */
function reply(e) {
  heartBurst(e);
  window.open("https://www.instagram.com/shivam_bharti_723/", "_blank");
}

/* HEART BURST ANIMATION */
function heartBurst(e) {
  const x = e.clientX;
  const y = e.clientY;

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.animationDelay = `${Math.random() * 0.3}s`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }
}

/* MUSIC FADE */
function fadeInMusic() {
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.5) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 200);
}

/* PARTICLES */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const dots = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 0.5,
  d: Math.random() * 0.4 + 0.2
}));

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  dots.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(draw);
}
draw();
