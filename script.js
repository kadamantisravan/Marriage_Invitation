// Set target date
const targetDate = new Date("Nov 26, 2025 11:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    timer.innerHTML = "The event has started! 🎊";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}, 1000);
