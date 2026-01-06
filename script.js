document.getElementById('surpriseBtn').addEventListener('click', function() {
  document.getElementById('surpriseText').style.display = 'block';
});

// Countdown Timer - Set to January 15th, 2026
const nextReunionDate = new Date("2026-01-15T00:00:00").getTime();

let countdownFunction = setInterval(function() {
  let now = new Date().getTime();
  let distance = nextReunionDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("timer").innerHTML = "It's time to be together! 🎉";
  }
}, 1000);
