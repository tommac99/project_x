import { initConfetti, toggleConfetti } from './plugins/initConfetti.js';

initConfetti();

const btn = document.querySelector('.btn');
btn.addEventListener('click', toggleConfetti)
