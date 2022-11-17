// Imports
import './style.css';
import { save, refresh } from './modules/leaderboard.js';

// Get relevant elements from the DOM
const form = document.querySelector('form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scores = document.getElementById('scores');
const refreshBtn = document.getElementById('refresh');

// Call refresh function on page load to display leaderboard scores
// refresh();

// Add event listener to form to call the save function with form input on submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  save(name.value, score.value);
  form.reset();
});

// Add event listener to refresh button to call the refresh function
refreshBtn.addEventListener('click', () => {
  scores.innerHTML = '';
  refresh();
});
