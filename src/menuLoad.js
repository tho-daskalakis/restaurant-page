import { clearMain } from "./clearMain";
import { createCard } from "./createCard";

function menuLoad() {
  clearMain();

  const main = document.querySelector(".main");

  const cheesePie = createCard(
    "Cheese pie",
    "$8.99",
    null,
    "../src/images/cheese-pie.webp"
  );

  const spinachPie = createCard(
    "Spinach pie",
    "$8.99",
    null,
    "../src/images/spinach-cheese-pie.webp"
  );

  const batzinaPie = createCard(
    "Batzina pie",
    "$6.99",
    null,
    "../src/images/batzina-pie.avif"
  );

  const lazyPie = createCard(
    "Lazy cheese pie",
    "$6.99",
    null,
    "../src/images/lazy-cheese-pie.avif"
  );

  main.appendChild(cheesePie);
  main.appendChild(spinachPie);
  main.appendChild(batzinaPie);
  main.appendChild(lazyPie);
}

export { menuLoad };
