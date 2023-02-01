import './index.css';

import data_array from "./modules/data";

const table = document.querySelector('.table');

data_array.forEach( (data) => {
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

