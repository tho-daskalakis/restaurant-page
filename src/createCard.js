class Card {
  constructor(titleText, price, bodyText, imgPath) {
    this.titleText = titleText;
    this.price = price;
    this.bodyText = bodyText;
    this.imgPath = imgPath;
  }

  get card() {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");

    const titleText = document.createElement("p");
    titleText.textContent = this.titleText;
    cardTitle.appendChild(titleText);

    const cardPrice = document.createElement("p");
    cardPrice.textContent = this.price;
    cardTitle.appendChild(cardPrice);

    card.appendChild(cardTitle);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    if (this.bodyText) {
      cardBody.textContent = this.bodyText;
    }

    if (this.imgPath) {
      const img = document.createElement("img");
      img.setAttribute("src", this.imgPath);
      cardBody.appendChild(img);
    }

    card.appendChild(cardBody);

    return card;
  }
}

function createCard(titleText, price, bodyText, imgPath) {
  return new Card(titleText, price, bodyText, imgPath).card;
}

export { createCard };
