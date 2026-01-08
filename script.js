let index = 0;
const slider = document.querySelector(".slider");
const music = document.getElementById("bgMusic");

/* SMOOTH ROMANTIC TRANSITION */
function romanticTransition(callback) {
  const overlay = document.createElement("div");
  overlay.className = "fade-overlay";
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add("active"), 10);

  floatHearts();

  setTimeout(() => {
    callback();
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 800);
  }, 900);
}

/* NEXT SLIDE */
function next(e) {
  romanticTransition(() => {
    index++;
    slider.style.transform = `translateX(-${index * 100}vw)`;

    if (index === 1) {
      music.volume = 0;
      music.play();
      fadeInMusic();
    }
  });
}

/* FINAL SLIDE */
function goFinal(e) {
  romanticTransition(() => {
    const total = document.querySelectorAll(".slide").length;
    index = total - 1;
    slider.style.transform = `translateX(-${index * 100}vw)`;
  });
}

/* ANSWERS WITH MESSAGE */
function answer(choice) {
  const response = document.getElementById("response");
  const messages = {
    1: "Even a simple yes from you means more to me than you know.",
    2: "That certainty makes my heart feel safe with you.",
    3: "Absolutely — that confidence touches my heart deeply.",
    4: "Yes, like crazy ❤️ — that’s the kind of love I cherish."
  };
  response.textContent = messages[choice];
  response.style.opacity = 1;
}

/* FLOATING HEARTS */
function floatHearts() {
  for (let i = 0; i < 6; i++) {
    const h = document.createElement("div");
    h.className = "soft-heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * window.innerWidth + "px";
    h.style.bottom = "0px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2000);
  }
}

/* INSTAGRAM */
function openInsta(e) {
  romanticTransition(() => {
    window.open("https://www.instagram.com/shivam_bharti_723/", "_blank");
  });
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
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
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
