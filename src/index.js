import './index.css';

const refreshButton = document.querySelector('.Refresh');
const displayData = document.querySelector('.table');
const AddScoreAndUserForm = document.querySelector('.form');
const recentScoreTitle = document.querySelector('.title');

let flashId;

const flashText = () => {
  recentScoreTitle.className = recentScoreTitle.className === 'title' ? 'my-title' : 'title';
};

const Change = () => {
  if (!flashId) {
    flashId = setInterval(flashText, 2);
  }
};

const stopTextColor = () => {
  clearInterval(flashId);
  flashId = null;
};

const APIkey = 'MbnuI7zAKorwnEuale8c';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${APIkey}/scores/`;

const getData = () => {
  fetch(url,
    {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      displayData.innerHTML = '';
      data.result.forEach((data) => {
        const row = document.createElement('tr');
        row.classList.add('table-row');
        const userIcon = document.createElement('td');
        userIcon.classList.add('icon-container');
        const icon = document.createElement('i');
        userIcon.appendChild(icon);
        icon.classList.add('icon-user');
        const name = document.createElement('td');
        name.classList.add('name-column');
        name.innerHTML = data.user;
        const score = document.createElement('td');
        score.innerHTML = data.score;
        row.appendChild(userIcon);
        row.appendChild(name);
        row.appendChild(score);
        displayData.appendChild(row);
      });
    });
};

const toBlackColor = () => { recentScoreTitle.style.color = 'black'; };

refreshButton.addEventListener('click', () => { stopTextColor(); toBlackColor(); getData(); });

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
  Change();
});

window.addEventListener('load', () => {
  Change();
});