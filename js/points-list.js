import { points } from "./app.js";

const pointsList = document.querySelector('.points-list');
const pointsItems = pointsList.children;

const createPointElement = (point) => {
  const pointTemolate = document.querySelector('#point').content.querySelector('.point-block');
  const pointElement = pointTemolate.cloneNode(true);

  pointElement.querySelector('.point_title').textContent = point.title;
  pointElement.querySelector('.point_comment').textContent = point.description;
  pointElement.querySelector('.point_lat').textContent = point.lat;
  pointElement.querySelector('.point_lng').textContent = point.lng;

  pointsList.appendChild(pointElement);
};



export {createPointElement};

