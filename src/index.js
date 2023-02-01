import './index.css';

import dataArray from './modules/data.js';

const table = document.querySelector('.table');

dataArray.forEach((data) => {
  const row = document.createElement('tr');
  const name = document.createElement('td');
  name.innerHTML = data.name;
  const score = document.createElement('td');
  score.innerHTML = data.score;
  row.appendChild(name);
  row.appendChild(score);
  table.appendChild(row);
  return table;
});