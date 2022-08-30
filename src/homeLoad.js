import { clearMain } from "./clearMain";
import { createCard } from "./createCard";

function homeLoad() {
  clearMain();
  const main = document.querySelector(".main");

  const homeCard = createCard(
    "Try our famous local cuisine!",
    null,
    "Check out the menu...",
    null
  );

  main.appendChild(homeCard);
}

export { homeLoad };
