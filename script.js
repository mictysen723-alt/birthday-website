let index = 0;
const slider = document.querySelector('.slider');
const music = document.getElementById('bgMusic');

function next() {
  index++;
  slider.style.transform = `translateX(-${index * 100}vw)`;

  if (index === 1) {
    music.volume = 0;
    music.play();
    fadeInMusic();
  }
}

function answer(choice) {
  const response = document.getElementById("response");
  const messages = {
    1: "Even a simple yes from you means more to me than you know.",
    2: "That certainty in your heart makes me feel so safe with you.",
    3: "Absolutely — that confidence touches my heart deeply.",
    4: "Yes, like crazy ❤️\n\nThat’s the kind of love that makes distance feel temporary."
  };
  response.textContent = messages[choice];
  response.style.opacity = 1;
}

function reply() {
  const text = encodeURIComponent(
    "I saw your birthday website 🥺❤️ It made me smile so much."
  );
  window.open(`https://wa.me/1234567890?text=${text}`, "_blank");
}

function restart() {
  index = 0;
  slider.style.transform = "translateX(0)";
}

function fadeInMusic() {
  let v = 0;
  const fade = setInterval(() => {
    if (v < 0.5) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(fade);
  }, 200);
}

/* Celebration hearts */
function celebrate() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "1.5rem";
    heart.style.animation = "floatUp 3s ease forwards";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

/* Background particles */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

const dots = Array.from({ length: 45 }, () => ({
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
