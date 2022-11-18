// Imports
import './style.css';
import scoreImg from './images/score.png';
import trophyImg from './images/trophy.png';
import { save, refresh } from './modules/leaderboard.js';

// Get relevant elements from the DOM
const form = document.querySelector('form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scores = document.getElementById('scores');
const refreshBtn = document.getElementById('refresh');
const success = document.getElementById('success');
const loader = document.getElementById('skeleton-loader');
const scoreCard = document.getElementById('scorecard');
const trophy = document.getElementById('trophy');
const empty = document.getElementById('empty-id');

// Call refresh function on page load to display leaderboard scores
scoreCard.src = scoreImg;
trophy.src = trophyImg;
loader.classList.toggle('hide');
empty.classList.replace('empty', 'hide');
refresh();

// Add event listener to form to call the save function with form input on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  save(name.value, score.value);
  form.reset();
  success.classList.toggle('hide');
  setTimeout(() => {
    success.classList.toggle('hide');
  }, 2500);
});

// Add event listener to refresh button to call the refresh function
refreshBtn.addEventListener('click', () => {
  refreshBtn.classList.toggle('down');
  scores.innerHTML = '';
  loader.classList.toggle('hide');
  empty.classList.replace('empty', 'hide');
  refresh();
});
