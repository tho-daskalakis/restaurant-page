/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutLoad.js":
/*!**************************!*\
  !*** ./src/aboutLoad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutLoad": () => (/* binding */ aboutLoad)
/* harmony export */ });
/* harmony import */ var _clearMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearMain */ "./src/clearMain.js");
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");



function aboutLoad() {
  (0,_clearMain__WEBPACK_IMPORTED_MODULE_0__.clearMain)();

  const main = document.querySelector(".main");
  const aboutCard = (0,_createCard__WEBPACK_IMPORTED_MODULE_1__.createCard)("About us...", null, "Tel: +12 3456 7890", null);

  main.appendChild(aboutCard);
}




/***/ }),

/***/ "./src/clearMain.js":
/*!**************************!*\
  !*** ./src/clearMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearMain": () => (/* binding */ clearMain)
/* harmony export */ });
function clearMain() {
  const main = document.querySelector(".main");
  [...main.childNodes].forEach((child) => main.removeChild(child));
}




/***/ }),

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

/***/ "./src/homeLoad.js":
/*!*************************!*\
  !*** ./src/homeLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _clearMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearMain */ "./src/clearMain.js");
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");



function homeLoad() {
  (0,_clearMain__WEBPACK_IMPORTED_MODULE_0__.clearMain)();
  const main = document.querySelector(".main");

  const homeCard = (0,_createCard__WEBPACK_IMPORTED_MODULE_1__.createCard)(
    "Try our famous local cuisine!",
    null,
    "Check out the menu...",
    null
  );

  main.appendChild(homeCard);
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
/* harmony import */ var _aboutLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutLoad */ "./src/aboutLoad.js");
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");
/* harmony import */ var _homeLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeLoad */ "./src/homeLoad.js");
/* harmony import */ var _menuLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuLoad */ "./src/menuLoad.js");





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
  homeLink.addEventListener("click", _homeLoad__WEBPACK_IMPORTED_MODULE_2__.homeLoad);
  const menuLink = new navLink("#", "Menu").link;
  menuLink.addEventListener("click", _menuLoad__WEBPACK_IMPORTED_MODULE_3__.menuLoad);
  const aboutLink = new navLink("#", "About").link;
  aboutLink.addEventListener("click", _aboutLoad__WEBPACK_IMPORTED_MODULE_0__.aboutLoad);

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

  const homeCard = (0,_createCard__WEBPACK_IMPORTED_MODULE_1__.createCard)(
    "Try our famous local cuisine!",
    null,
    "Check out the menu...",
    null
  );

  const main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(homeCard);

  // Footer

  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerP = document.createElement("p");
  footerP.textContent = "Developed by";
  footerP.innerHTML +=
    '<a href="https://github.com/tho-daskalakis">tho-daskalakis</a>';
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
/* harmony import */ var _clearMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearMain */ "./src/clearMain.js");
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCard */ "./src/createCard.js");



function menuLoad() {
  (0,_clearMain__WEBPACK_IMPORTED_MODULE_0__.clearMain)();

  const main = document.querySelector(".main");

  const cheesePie = (0,_createCard__WEBPACK_IMPORTED_MODULE_1__.createCard)(
    "Cheese pie",
    "$8.99",
    null,
    "../src/images/cheese-pie.webp"
  );

  const spinachPie = (0,_createCard__WEBPACK_IMPORTED_MODULE_1__.createCard)(
    "Spinach pie",
    "$8.99",
    null,
    "../src/images/spinach-cheese-pie.webp"
  );

  const batzinaPie = (0,_createCard__WEBPACK_IMPORTED_MODULE_1__.createCard)(
    "Batzina pie",
    "$6.99",
    null,
    "../src/images/batzina-pie.avif"
  );

  const lazyPie = (0,_createCard__WEBPACK_IMPORTED_MODULE_1__.createCard)(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0U7O0FBRTFDO0FBQ0EsRUFBRSxxREFBUzs7QUFFWDtBQUNBLG9CQUFvQix1REFBVTs7QUFFOUI7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7OztBQ1pyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFcUI7Ozs7Ozs7Ozs7Ozs7OztBQ0xyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERrQjtBQUNFOztBQUUxQztBQUNBLEVBQUUscURBQVM7QUFDWDs7QUFFQSxtQkFBbUIsdURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCb0I7QUFDRTtBQUNKO0FBQ0E7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsK0NBQVE7QUFDN0M7QUFDQSxxQ0FBcUMsK0NBQVE7QUFDN0M7QUFDQSxzQ0FBc0MsaURBQVM7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsdURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRXVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHaUI7QUFDRTs7QUFFMUM7QUFDQSxFQUFFLHFEQUFTOztBQUVYOztBQUVBLG9CQUFvQix1REFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix1REFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix1REFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix1REFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7O1VDMUNwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRDOztBQUU1Qyx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyTWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWxMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlYXJNYWluIH0gZnJvbSBcIi4vY2xlYXJNYWluXCI7XG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY3JlYXRlQ2FyZFwiO1xuXG5mdW5jdGlvbiBhYm91dExvYWQoKSB7XG4gIGNsZWFyTWFpbigpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gIGNvbnN0IGFib3V0Q2FyZCA9IGNyZWF0ZUNhcmQoXCJBYm91dCB1cy4uLlwiLCBudWxsLCBcIlRlbDogKzEyIDM0NTYgNzg5MFwiLCBudWxsKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGFib3V0Q2FyZCk7XG59XG5cbmV4cG9ydCB7IGFib3V0TG9hZCB9O1xuIiwiZnVuY3Rpb24gY2xlYXJNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBbLi4ubWFpbi5jaGlsZE5vZGVzXS5mb3JFYWNoKChjaGlsZCkgPT4gbWFpbi5yZW1vdmVDaGlsZChjaGlsZCkpO1xufVxuXG5leHBvcnQgeyBjbGVhck1haW4gfTtcbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3Rvcih0aXRsZVRleHQsIHByaWNlLCBib2R5VGV4dCwgaW1nUGF0aCkge1xuICAgIHRoaXMudGl0bGVUZXh0ID0gdGl0bGVUZXh0O1xuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLmJvZHlUZXh0ID0gYm9keVRleHQ7XG4gICAgdGhpcy5pbWdQYXRoID0gaW1nUGF0aDtcbiAgfVxuXG4gIGdldCBjYXJkKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcblxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IHRoaXMudGl0bGVUZXh0O1xuICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgY29uc3QgY2FyZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2FyZFByaWNlLnRleHRDb250ZW50ID0gdGhpcy5wcmljZTtcbiAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQoY2FyZFByaWNlKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcblxuICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1ib2R5XCIpO1xuXG4gICAgaWYgKHRoaXMuYm9keVRleHQpIHtcbiAgICAgIGNhcmRCb2R5LnRleHRDb250ZW50ID0gdGhpcy5ib2R5VGV4dDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWdQYXRoKSB7XG4gICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCB0aGlzLmltZ1BhdGgpO1xuICAgICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQodGl0bGVUZXh0LCBwcmljZSwgYm9keVRleHQsIGltZ1BhdGgpIHtcbiAgcmV0dXJuIG5ldyBDYXJkKHRpdGxlVGV4dCwgcHJpY2UsIGJvZHlUZXh0LCBpbWdQYXRoKS5jYXJkO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDYXJkIH07XG4iLCJpbXBvcnQgeyBjbGVhck1haW4gfSBmcm9tIFwiLi9jbGVhck1haW5cIjtcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jcmVhdGVDYXJkXCI7XG5cbmZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICBjbGVhck1haW4oKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblxuICBjb25zdCBob21lQ2FyZCA9IGNyZWF0ZUNhcmQoXG4gICAgXCJUcnkgb3VyIGZhbW91cyBsb2NhbCBjdWlzaW5lIVwiLFxuICAgIG51bGwsXG4gICAgXCJDaGVjayBvdXQgdGhlIG1lbnUuLi5cIixcbiAgICBudWxsXG4gICk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChob21lQ2FyZCk7XG59XG5cbmV4cG9ydCB7IGhvbWVMb2FkIH07XG4iLCJpbXBvcnQgeyBhYm91dExvYWQgfSBmcm9tIFwiLi9hYm91dExvYWRcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jcmVhdGVDYXJkXCI7XG5pbXBvcnQgeyBob21lTG9hZCB9IGZyb20gXCIuL2hvbWVMb2FkXCI7XG5pbXBvcnQgeyBtZW51TG9hZCB9IGZyb20gXCIuL21lbnVMb2FkXCI7XG5cbmZ1bmN0aW9uIGluaXRpYWxMb2FkKCkge1xuICAvLyBDbGFzc2VzXG5cbiAgY2xhc3MgbmF2TGluayB7XG4gICAgY29uc3RydWN0b3IoaHJlZiwgdGV4dENvbnRlbnQpIHtcbiAgICAgIHRoaXMuaHJlZiA9IGhyZWY7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgZ2V0IGxpbmsoKSB7XG4gICAgICBjb25zdCBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICBsLnRleHRDb250ZW50ID0gdGhpcy50ZXh0Q29udGVudDtcblxuICAgICAgcmV0dXJuIGw7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIERPTSBlbGVtZW50c1xuXG4gIC8vIE5hdi1saW5rc1xuXG4gIGNvbnN0IGhvbWVMaW5rID0gbmV3IG5hdkxpbmsoXCIjXCIsIFwiSG9tZVwiKS5saW5rO1xuICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZUxvYWQpO1xuICBjb25zdCBtZW51TGluayA9IG5ldyBuYXZMaW5rKFwiI1wiLCBcIk1lbnVcIikubGluaztcbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1lbnVMb2FkKTtcbiAgY29uc3QgYWJvdXRMaW5rID0gbmV3IG5hdkxpbmsoXCIjXCIsIFwiQWJvdXRcIikubGluaztcbiAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhYm91dExvYWQpO1xuXG4gIGNvbnN0IGhvbWVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgYWJvdXRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBob21lSXRlbS5hcHBlbmRDaGlsZChob21lTGluayk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcbiAgYWJvdXRJdGVtLmFwcGVuZENoaWxkKGFib3V0TGluayk7XG5cbiAgY29uc3QgaGVhZExpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBoZWFkTGlua3MuY2xhc3NMaXN0LmFkZChcInVsLWxpbmtzXCIpO1xuICBoZWFkTGlua3MuYXBwZW5kQ2hpbGQoaG9tZUl0ZW0pO1xuICBoZWFkTGlua3MuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICBoZWFkTGlua3MuYXBwZW5kQ2hpbGQoYWJvdXRJdGVtKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgdGl0bGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlUC50ZXh0Q29udGVudCA9IFwiVHJhZGl0aW9uYWwgZ3JlZWsgcGllc1wiO1xuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVApO1xuXG4gIC8vIE5hdiBiYXJcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgbmF2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBuYXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBuYXYuYXBwZW5kQ2hpbGQoaGVhZExpbmtzKTtcblxuICAvLyBNYWluXG5cbiAgY29uc3QgaG9tZUNhcmQgPSBjcmVhdGVDYXJkKFxuICAgIFwiVHJ5IG91ciBmYW1vdXMgbG9jYWwgY3Vpc2luZSFcIixcbiAgICBudWxsLFxuICAgIFwiQ2hlY2sgb3V0IHRoZSBtZW51Li4uXCIsXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKGhvbWVDYXJkKTtcblxuICAvLyBGb290ZXJcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb290ZXJQLnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgYnlcIjtcbiAgZm9vdGVyUC5pbm5lckhUTUwgKz1cbiAgICAnPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aG8tZGFza2FsYWtpc1wiPnRoby1kYXNrYWxha2lzPC9hPic7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJQKTtcblxuICAvLyBQYWdlIHN0cnVjdHVyZVxuICBjb25zdCBob2x5R3JhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob2x5R3JhaWwuY2xhc3NMaXN0LmFkZChcImhvbHktZ3JhaWxcIik7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChuYXYpO1xuICBob2x5R3JhaWwuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChob2x5R3JhaWwpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsTG9hZCB9O1xuIiwiaW1wb3J0IHsgY2xlYXJNYWluIH0gZnJvbSBcIi4vY2xlYXJNYWluXCI7XG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY3JlYXRlQ2FyZFwiO1xuXG5mdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgY2xlYXJNYWluKCk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblxuICBjb25zdCBjaGVlc2VQaWUgPSBjcmVhdGVDYXJkKFxuICAgIFwiQ2hlZXNlIHBpZVwiLFxuICAgIFwiJDguOTlcIixcbiAgICBudWxsLFxuICAgIFwiLi4vc3JjL2ltYWdlcy9jaGVlc2UtcGllLndlYnBcIlxuICApO1xuXG4gIGNvbnN0IHNwaW5hY2hQaWUgPSBjcmVhdGVDYXJkKFxuICAgIFwiU3BpbmFjaCBwaWVcIixcbiAgICBcIiQ4Ljk5XCIsXG4gICAgbnVsbCxcbiAgICBcIi4uL3NyYy9pbWFnZXMvc3BpbmFjaC1jaGVlc2UtcGllLndlYnBcIlxuICApO1xuXG4gIGNvbnN0IGJhdHppbmFQaWUgPSBjcmVhdGVDYXJkKFxuICAgIFwiQmF0emluYSBwaWVcIixcbiAgICBcIiQ2Ljk5XCIsXG4gICAgbnVsbCxcbiAgICBcIi4uL3NyYy9pbWFnZXMvYmF0emluYS1waWUuYXZpZlwiXG4gICk7XG5cbiAgY29uc3QgbGF6eVBpZSA9IGNyZWF0ZUNhcmQoXG4gICAgXCJMYXp5IGNoZWVzZSBwaWVcIixcbiAgICBcIiQ2Ljk5XCIsXG4gICAgbnVsbCxcbiAgICBcIi4uL3NyYy9pbWFnZXMvbGF6eS1jaGVlc2UtcGllLmF2aWZcIlxuICApO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY2hlZXNlUGllKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChzcGluYWNoUGllKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChiYXR6aW5hUGllKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChsYXp5UGllKTtcbn1cblxuZXhwb3J0IHsgbWVudUxvYWQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdGlhbExvYWQgfSBmcm9tIFwiLi9pbml0aWFsTG9hZFwiO1xuXG5pbml0aWFsTG9hZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9