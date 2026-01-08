let index = 0;
const slider = document.querySelector(".slider");
const music = document.getElementById("bgMusic");

/* NEXT SLIDE */
function next(e) {
  heartTransition(e, () => {
    index++;
    slider.style.transform = `translateX(-${index * 100}vw)`;

    if (index === 1) {
      music.volume = 0;
      music.play();
      fadeInMusic();
    }
  });
}

/* FORCE GO TO FINAL SLIDE */
function goFinal(e) {
  heartTransition(e, () => {
    const totalSlides = document.querySelectorAll(".slide").length;
    index = totalSlides - 1;
    slider.style.transform = `translateX(-${index * 100}vw)`;
  });
}

/* ANSWER HEART POP */
function answer(e) {
  burstHearts(e.clientX, e.clientY);
}

/* INSTAGRAM */
function openInsta(e) {
  heartTransition(e, () => {
    window.open(
      "https://www.instagram.com/shivam_bharti_723/",
      "_blank"
    );
  });
}

/* HEART TRANSITION */
function heartTransition(e, callback) {
  const x = e.clientX;
  const y = e.clientY;

  const big = document.createElement("div");
  big.className = "big-heart";
  big.innerHTML = "❤️";
  big.style.left = x + "px";
  big.style.top = y + "px";
  document.body.appendChild(big);

  setTimeout(() => {
    big.remove();
    burstHearts(x, y);
    callback();
  }, 900);
}

/* HEART BURST */
function burstHearts(x, y) {
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.setProperty("--dx", `${Math.random() * 180 - 90}px`);
    h.style.setProperty("--dy", `${Math.random() * -180}px`);
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 1200);
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

/* BACKGROUND PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const dots = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 0.5,
  d: Math.random() * 0.4 + 0.2
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  dots.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(draw);
}
draw();
