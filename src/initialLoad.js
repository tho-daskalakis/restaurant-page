import { aboutLoad } from './aboutLoad';
import { createCard } from './createCard';
import { homeLoad } from './homeLoad';
import { menuLoad } from './menuLoad';

function initialLoad() {
  // Classes

  class navLink {
    constructor(href, textContent) {
      this.href = href;
      this.textContent = textContent;
    }

    get link() {
      const l = document.createElement('a');
      l.href = this.href;
      l.textContent = this.textContent;

      return l;
    }
  }

  // Create DOM elements

  // Nav-links

  const homeLink = new navLink('#', 'Home').link;
  homeLink.addEventListener('click', homeLoad);
  const menuLink = new navLink('#', 'Menu').link;
  menuLink.addEventListener('click', menuLoad);
  const aboutLink = new navLink('#', 'About').link;
  aboutLink.addEventListener('click', aboutLoad);

  const homeItem = document.createElement('li');
  const menuItem = document.createElement('li');
  const aboutItem = document.createElement('li');
  homeItem.appendChild(homeLink);
  menuItem.appendChild(menuLink);
  aboutItem.appendChild(aboutLink);

  const headLinks = document.createElement('ul');
  headLinks.classList.add('ul-links');
  headLinks.appendChild(homeItem);
  headLinks.appendChild(menuItem);
  headLinks.appendChild(aboutItem);

  const title = document.createElement('div');
  title.classList.add('title');
  const titleP = document.createElement('p');
  titleP.textContent = 'Traditional greek pies';
  title.appendChild(titleP);

  // Nav bar

  const nav = document.createElement('div');
  nav.classList.add('nav');
  nav.appendChild(document.createElement('div'));
  nav.appendChild(title);
  nav.appendChild(headLinks);

  // Main

  const homeCard = createCard(
    'Try our famous local cuisine!',
    null,
    'Check out the menu...',
    null
  );

  const main = document.createElement('div');
  main.classList.add('main');
  main.appendChild(homeCard);

  // Footer

  const footer = document.createElement('div');
  footer.classList.add('footer');
  const footerP = document.createElement('p');
  footerP.textContent = 'Developed by';
  footerP.innerHTML +=
    '<a href="https://github.com/tho-daskalakis">tho-daskalakis</a>';
  footer.appendChild(footerP);

  // Page structure
  const holyGrail = document.createElement('div');
  holyGrail.classList.add('holy-grail');
  holyGrail.appendChild(nav);
  holyGrail.appendChild(main);
  holyGrail.appendChild(footer);

  const content = document.querySelector('#content');

  content.appendChild(holyGrail);
}

export { initialLoad };
