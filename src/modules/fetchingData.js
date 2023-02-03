// const dataArray = [
//   {
//     name: 'name:',
//     score: '100',
//   },
//   {
//     name: 'name:',
//     score: '20',
//   },
//   {
//     name: 'name:',
//     score: '10',
//   },
//   {
//     name: 'name:',
//     score: '70',
//   },
//   {
//     name: 'name:',
//     score: '80',
//   },
// ];

// export default dataArray;

const refreshButton = document.querySelector('.Refresh');
const displayData = document.querySelector('.table');

const apikey = 'MbnuI7zAKorwnEuale8c';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apikey}/scores/`;

refreshButton.addEventListener('click', () => {
  fetch(url,
    {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => {
      displayData.innerHTML = '';
      data.results.forEach((data) => {
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
