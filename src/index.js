import './index.css';

const refreshButton = document.querySelector('.Refresh');
const displayData = document.querySelector('.table');
const AddScoreAndUserForm = document.querySelector('.form');

const APIkey = 'MbnuI7zAKorwnEuale8c';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${APIkey}/scores/`;

refreshButton.addEventListener('click', () => {
  fetch(url,
    {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      displayData.innerHTML = '';
      data.result.forEach((data) => {
        console.log(data);
        const row = document.createElement('tr');
        const name = document.createElement('td');
        name.innerHTML = data.user;
        const score = document.createElement('td');
        score.innerHTML = data.score;
        row.appendChild(name);
        row.appendChild(score);
        displayData.appendChild(row);
      });
    });
});

AddScoreAndUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(AddScoreAndUserForm);
  const userAndScoreArray = [...formData];
  const userValue = userAndScoreArray[0][1];
  const scoreValue = userAndScoreArray[1][1];

  const userScoreObject = {
    user: userValue,
    score: scoreValue,
  };

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScoreObject),
  })
    .then((ele) => ele.json());
});
