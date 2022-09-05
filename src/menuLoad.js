import { clearMain } from './clearMain';
import { createCard } from './createCard';
import batzinaPieImage from './images/batzina-pie.avif';
import cheesePieImage from './images/cheese-pie.webp';
import lazyPieImage from './images/lazy-cheese-pie.avif';
import spinachPieImage from './images/spinach-cheese-pie.webp';

function menuLoad() {
  clearMain();

  const main = document.querySelector('.main');

  const cheesePie = createCard('Cheese pie', '$8.99', null, cheesePieImage);

  const spinachPie = createCard('Spinach pie', '$8.99', null, spinachPieImage);

  const batzinaPie = createCard('Batzina pie', '$6.99', null, batzinaPieImage);

  const lazyPie = createCard('Lazy cheese pie', '$6.99', null, lazyPieImage);

  main.appendChild(cheesePie);
  main.appendChild(spinachPie);
  main.appendChild(batzinaPie);
  main.appendChild(lazyPie);
}

export { menuLoad };
