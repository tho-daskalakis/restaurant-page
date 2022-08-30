/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createCard.js":
/*!***************************!*\
  !*** ./src/createCard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
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




/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");
/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoad */ "./src/menuLoad.js");



function initialLoad() {
  // Classes

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
  menuLink.addEventListener("click", _menuLoad__WEBPACK_IMPORTED_MODULE_1__.menuLoad);
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

  const card = (0,_createCard__WEBPACK_IMPORTED_MODULE_0__.createCard)(
    "Original flavors only!",
    null,
    "Check out our menu...",
    null
  );

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




/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");


function menuLoad() {
  // Get menu

  const main = document.querySelector(".main");
  main.childNodes.forEach((child) => main.removeChild(child));

  const cheesePie = (0,_createCard__WEBPACK_IMPORTED_MODULE_0__.createCard)(
    "Cheese pie",
    "$8.99",
    null,
    "../src/images/cheese-pie.webp"
  );

  main.appendChild(cheesePie);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");


(0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRG9CO0FBQ0o7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQywrQ0FBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSx1REFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzFGbUI7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsdURBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVvQjs7Ozs7OztVQ2xCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUMseURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGl0bGVUZXh0LCBwcmljZSwgYm9keVRleHQsIGltZ1BhdGgpIHtcbiAgICB0aGlzLnRpdGxlVGV4dCA9IHRpdGxlVGV4dDtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgdGhpcy5ib2R5VGV4dCA9IGJvZHlUZXh0O1xuICAgIHRoaXMuaW1nUGF0aCA9IGltZ1BhdGg7XG4gIH1cblxuICBnZXQgY2FyZCgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlVGV4dDtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICAgIGNvbnN0IGNhcmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNhcmRQcmljZS50ZXh0Q29udGVudCA9IHRoaXMucHJpY2U7XG4gICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGNhcmRQcmljZSk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG5cbiAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZEJvZHkuY2xhc3NMaXN0LmFkZChcImNhcmQtYm9keVwiKTtcblxuICAgIGlmICh0aGlzLmJvZHlUZXh0KSB7XG4gICAgICBjYXJkQm9keS50ZXh0Q29udGVudCA9IHRoaXMuYm9keVRleHQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1nUGF0aCkge1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGhpcy5pbWdQYXRoKTtcbiAgICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGltZyk7XG4gICAgfVxuXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlVGV4dCwgcHJpY2UsIGJvZHlUZXh0LCBpbWdQYXRoKSB7XG4gIHJldHVybiBuZXcgQ2FyZCh0aXRsZVRleHQsIHByaWNlLCBib2R5VGV4dCwgaW1nUGF0aCkuY2FyZDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2FyZCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZUNhcmRcIjtcbmltcG9ydCB7IG1lbnVMb2FkIH0gZnJvbSBcIi4vbWVudUxvYWRcIjtcblxuZnVuY3Rpb24gaW5pdGlhbExvYWQoKSB7XG4gIC8vIENsYXNzZXNcblxuICBjbGFzcyBuYXZMaW5rIHtcbiAgICBjb25zdHJ1Y3RvcihocmVmLCB0ZXh0Q29udGVudCkge1xuICAgICAgdGhpcy5ocmVmID0gaHJlZjtcbiAgICAgIHRoaXMudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICB9XG5cbiAgICBnZXQgbGluaygpIHtcbiAgICAgIGNvbnN0IGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGwuaHJlZiA9IHRoaXMuaHJlZjtcbiAgICAgIGwudGV4dENvbnRlbnQgPSB0aGlzLnRleHRDb250ZW50O1xuXG4gICAgICByZXR1cm4gbDtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgRE9NIGVsZW1lbnRzXG5cbiAgLy8gTmF2LWxpbmtzXG5cbiAgY29uc3QgaG9tZUxpbmsgPSBuZXcgbmF2TGluayhcIiNcIiwgXCJIb21lXCIpLmxpbms7XG4gIGNvbnN0IG1lbnVMaW5rID0gbmV3IG5hdkxpbmsoXCIjXCIsIFwiTWVudVwiKS5saW5rO1xuICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudUxvYWQpO1xuICBjb25zdCBhYm91dExpbmsgPSBuZXcgbmF2TGluayhcIiNcIiwgXCJBYm91dFwiKS5saW5rO1xuXG4gIGNvbnN0IGhvbWVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgYWJvdXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBob21lSXRlbS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgYWJvdXRJdGVtLmFwcGVuZENoaWxkKGFib3V0TGluayk7XG5cbiAgY29uc3QgaGVhZExpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBoZWFkTGlua3MuY2xhc3NMaXN0LmFkZChcInVsLWxpbmtzXCIpO1xuICBoZWFkTGlua3MuYXBwZW5kQ2hpbGQoaG9tZUl0ZW0pO1xuICBoZWFkTGlua3MuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICBoZWFkTGlua3MuYXBwZW5kQ2hpbGQoYWJvdXRJdGVtKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgdGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlUC50ZXh0Q29udGVudCA9IFwiVHJhZGl0aW9uYWwgZ3JlZWsgcGllc1wiO1xuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVApO1xuXG4gIC8vIE5hdiBiYXJcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBuYXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoaGVhZExpbmtzKTtcblxuICAvLyBNYWluXG5cbiAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgXCJPcmlnaW5hbCBmbGF2b3JzIG9ubHkhXCIsXG4gICAgbnVsbCxcbiAgICBcIkNoZWNrIG91dCBvdXIgbWVudS4uLlwiLFxuICAgIG51bGxcbiAgKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAvLyBGb290ZXJcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb290ZXJQLnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgYnlcIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclApO1xuXG4gIC8vIFBhZ2Ugc3RydWN0dXJlXG4gIGNvbnN0IGhvbHlHcmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbHlHcmFpbC5jbGFzc0xpc3QuYWRkKFwiaG9seS1ncmFpbFwiKTtcbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKG5hdik7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChtYWluKTtcbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbHlHcmFpbCk7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxMb2FkIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY3JlYXRlQ2FyZFwiO1xuXG5mdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgLy8gR2V0IG1lbnVcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IG1haW4ucmVtb3ZlQ2hpbGQoY2hpbGQpKTtcblxuICBjb25zdCBjaGVlc2VQaWUgPSBjcmVhdGVDYXJkKFxuICAgIFwiQ2hlZXNlIHBpZVwiLFxuICAgIFwiJDguOTlcIixcbiAgICBudWxsLFxuICAgIFwiLi4vc3JjL2ltYWdlcy9jaGVlc2UtcGllLndlYnBcIlxuICApO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY2hlZXNlUGllKTtcbn1cblxuZXhwb3J0IHsgbWVudUxvYWQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsTG9hZFwiO1xuXG5pbml0aWFsTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9