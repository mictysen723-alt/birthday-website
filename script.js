body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(120deg, #ff9a9e, #fad0c4);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card {
  background: white;
  padding: 30px;
  max-width: 360px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  display: none;
}

.card.active {
  display: block;
}

h1 {
  color: #ff5e8a;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
}

button {
  margin-top: 20px;
  padding: 12px 25px;
  border: none;
  background: #ff5e8a;
  color: white;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}

.fade {
  animation: fadeIn 1s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Floating hearts */
.hearts::before {
  content: "💖 💕 💗 💘 💞";
  position: absolute;
  animation: float 10s linear infinite;
  font-size: 2rem;
  opacity: 0.6;
}

@keyframes float {
  0% { top: 100%; left: 10%; }
  100% { top: -20%; left: 80%; }
}
