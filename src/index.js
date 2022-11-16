import './style.css';

const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const refresh = async () => {
  try {
    const response = await fetch(`${BASE_URL}games/${process.env.API_KEY}/scores/`);
    if (response.ok) {
      const json = await response.json();
      console.log(json);
    }
  } catch (error) {
    console.log(error);
  }
};

const save = async (user, score) => {
  const data = JSON.stringify({
    user,
    score,
  });

  try {
    const response = await fetch(`${BASE_URL}games/${process.env.API_KEY}/scores/`, {
      method: 'POST',
      body: data,
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json);
    }
  } catch (error) {
    console.log(error);
  }
};