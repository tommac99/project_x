import ConfettiGenerator from "confetti-js";

const confettiElement = document.getElementById('my-canvas');

const initConfetti = () => {
  const confettiSettings = { target: confettiElement };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

const toggleConfetti = () => {
  confettiElement.classList.toggle('hide');
}

export { initConfetti, toggleConfetti }

