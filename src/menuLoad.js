import { createCard } from "./createCard";

function menuLoad() {
  // Get menu

  const main = document.querySelector(".main");
  main.childNodes.forEach((child) => main.removeChild(child));

  const cheesePie = createCard(
    "Cheese pie",
    "$8.99",
    null,
    "../src/images/cheese-pie.webp"
  );

  main.appendChild(cheesePie);
}

export { menuLoad };
