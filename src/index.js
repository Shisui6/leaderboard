import './style.css';

const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/`;

// Get relevant elements from the DOM
const form = document.querySelector('form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scores = document.getElementById('scores');
const refreshBtn = document.getElementById('refresh');

const refresh = async () => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const json = await response.json();
      const sortedScores = json.result.sort((s1, s2) => {
        if (s1.score < s2.score) {
          return 1;
        }
        if (s1.score > s2.score) {
          return -1;
        }

        return 0;
      });
      sortedScores.forEach((item) => {
        const scoreElement = document.createElement('p');
        scoreElement.textContent = `${item.user}: ${item.score}`;
        scores.appendChild(scoreElement);
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

const save = async (user, score) => {
  const data = JSON.stringify({
    user,
    score,
  });

  try {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data,
    });
  } catch (error) {
    throw new Error(error);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  save(name.value, score.value);
  form.reset();
});

refreshBtn.addEventListener('click', () => {
  scores.innerHTML = '';
  refresh();
});

refresh();