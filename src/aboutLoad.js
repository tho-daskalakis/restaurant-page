import { clearMain } from "./clearMain";
import { createCard } from "./createCard";

function aboutLoad() {
  clearMain();

  const main = document.querySelector(".main");
  const aboutCard = createCard("About us...", null, "Tel: +12 3456 7890", null);

  main.appendChild(aboutCard);
}

export { aboutLoad };
