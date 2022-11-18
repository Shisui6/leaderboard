import profile1 from '../images/profile1.png';
import profile2 from '../images/profile2.png';
import profile3 from '../images/profile3.png';
import profile4 from '../images/profile4.png';

// Get relevant elements from the DOM
const scores = document.getElementById('scores');
const loader = document.getElementById('skeleton-loader');
const empty = document.getElementById('empty-id');

// URL to be used in fetch requests
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/`;

// Array of profile images
const imageArr = [profile1, profile2, profile3, profile4];

/*
Async function to fetch all scores from leaderboard API and sort in descending order.
Scores are then appended to the DOM
*/
export const refresh = async () => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const json = await response.json();
      if (!json.result.length) {
        empty.classList.replace('hide', 'empty');
      } else {
        empty.classList.toggle('empty', 'hide');
      }
      let sortedScores = json.result.sort((s1, s2) => {
        if (s1.score < s2.score) {
          return 1;
        }
        if (s1.score > s2.score) {
          return -1;
        }

        return 0;
      });
      loader.classList.toggle('hide');
      let count = 0;
      sortedScores = sortedScores.map((item) => {
        count += 1;
        return {
          ...item,
          rank: count,
        };
      });
      sortedScores.forEach((item) => {
        const scoreElem = document.createElement('div');
        scoreElem.className = 'score';
        scoreElem.innerHTML = `
          <span>${item.rank}</span>
          <img alt='profile' class='profile'/>
          <p class="user">${item.user}</p>
          <p class="score-number">${item.score}</p>
        `;
        scoreElem.children[1].src = imageArr[Math.floor(Math.random() * 4)];
        scores.appendChild(scoreElem);
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// Async function to send form data to leaderboard api
export const save = async (user, score) => {
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
