function loadHomePage() {
  // Classes

  class Card {
    constructor(titleText, bodyText) {
      this.titleText = titleText;
      this.bodyText = bodyText;
    }

    get card() {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardTitle = document.createElement("div");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = this.titleText;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.textContent = this.bodyText;

      card.appendChild(cardTitle);
      card.appendChild(cardBody);

      return card;
    }
  }

  class navLink {
    constructor(href, textContent) {
      this.href = href;
      this.textContent = textContent;
    }

    get link() {
      const l = document.createElement("a");
      l.href = this.href;
      l.textContent = this.textContent;

      return l;
    }
  }

  // Create DOM elements

  // Nav-links

  const homeLink = new navLink("#", "Home").link;
  const menuLink = new navLink("#", "Menu").link;
  const aboutLink = new navLink("#", "About").link;

  const homeItem = document.createElement("li");
  const menuItem = document.createElement("li");
  const aboutItem = document.createElement("li");
  homeItem.appendChild(homeLink);
  menuItem.appendChild(menuLink);
  aboutItem.appendChild(aboutLink);

  const headLinks = document.createElement("ul");
  headLinks.classList.add("ul-links");
  headLinks.appendChild(homeItem);
  headLinks.appendChild(menuItem);
  headLinks.appendChild(aboutItem);

  const title = document.createElement("div");
  title.classList.add("title");
  const titleP = document.createElement("p");
  titleP.textContent = "Traditional greek pies";
  title.appendChild(titleP);

  // Nav bar

  const nav = document.createElement("div");
  nav.classList.add("nav");
  nav.appendChild(document.createElement("div"));
  nav.appendChild(title);
  nav.appendChild(headLinks);

  // Main

  const card = new Card("Original flavors only!", "Check out our menu...").card;

  const main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(card);

  // Footer

  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerP = document.createElement("p");
  footerP.textContent = "Developed by";
  footer.appendChild(footerP);

  // Page structure
  const holyGrail = document.createElement("div");
  holyGrail.classList.add("holy-grail");
  holyGrail.appendChild(nav);
  holyGrail.appendChild(main);
  holyGrail.appendChild(footer);

  const content = document.querySelector("#content");

  content.appendChild(holyGrail);
}

export { loadHomePage };
