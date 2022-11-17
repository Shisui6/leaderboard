// Get relevant elements from the DOM
const scores = document.getElementById('scores');

// URL to be used in fetch requests
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.API_KEY}/scores/`;

/*
Async function to fetch all scores from leaderboard API and sort in descending order.
Scores are then appended to the DOM
*/
export const refresh = async () => {
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
