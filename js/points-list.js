import { points } from "./app.js";

const pointsList = document.querySelector('.points-list');


const createPointElement = (point) => {
  const pointTemolate = document.querySelector('#point').content.querySelector('.point-block');
  const pointElement = pointTemolate.cloneNode(true);

  pointElement.querySelector('.point_title').textContent = point.title;
  pointElement.querySelector('.point_comment').textContent = point.description;

  pointsList.appendChild(pointElement);
};

export {createPointElement};