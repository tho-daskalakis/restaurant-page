/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
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
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage */ "./src/loadHomePage.js");


(0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUV3Qjs7Ozs7OztVQzFHeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ044Qzs7QUFFOUMsMkRBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZEhvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gIC8vIENsYXNzZXNcblxuICBjbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZVRleHQsIGJvZHlUZXh0KSB7XG4gICAgICB0aGlzLnRpdGxlVGV4dCA9IHRpdGxlVGV4dDtcbiAgICAgIHRoaXMuYm9keVRleHQgPSBib2R5VGV4dDtcbiAgICB9XG5cbiAgICBnZXQgY2FyZCgpIHtcbiAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcblxuICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGVUZXh0O1xuXG4gICAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1ib2R5XCIpO1xuICAgICAgY2FyZEJvZHkudGV4dENvbnRlbnQgPSB0aGlzLmJvZHlUZXh0O1xuXG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcblxuICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgbmF2TGluayB7XG4gICAgY29uc3RydWN0b3IoaHJlZiwgdGV4dENvbnRlbnQpIHtcbiAgICAgIHRoaXMuaHJlZiA9IGhyZWY7XG4gICAgICB0aGlzLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgZ2V0IGxpbmsoKSB7XG4gICAgICBjb25zdCBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICBsLnRleHRDb250ZW50ID0gdGhpcy50ZXh0Q29udGVudDtcblxuICAgICAgcmV0dXJuIGw7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIERPTSBlbGVtZW50c1xuXG4gIC8vIE5hdi1saW5rc1xuXG4gIGNvbnN0IGhvbWVMaW5rID0gbmV3IG5hdkxpbmsoXCIjXCIsIFwiSG9tZVwiKS5saW5rO1xuICBjb25zdCBtZW51TGluayA9IG5ldyBuYXZMaW5rKFwiI1wiLCBcIk1lbnVcIikubGluaztcbiAgY29uc3QgYWJvdXRMaW5rID0gbmV3IG5hdkxpbmsoXCIjXCIsIFwiQWJvdXRcIikubGluaztcblxuICBjb25zdCBob21lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGFib3V0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgaG9tZUl0ZW0uYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gIGFib3V0SXRlbS5hcHBlbmRDaGlsZChhYm91dExpbmspO1xuXG4gIGNvbnN0IGhlYWRMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgaGVhZExpbmtzLmNsYXNzTGlzdC5hZGQoXCJ1bC1saW5rc1wiKTtcbiAgaGVhZExpbmtzLmFwcGVuZENoaWxkKGhvbWVJdGVtKTtcbiAgaGVhZExpbmtzLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgaGVhZExpbmtzLmFwcGVuZENoaWxkKGFib3V0SXRlbSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIGNvbnN0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZVAudGV4dENvbnRlbnQgPSBcIlRyYWRpdGlvbmFsIGdyZWVrIHBpZXNcIjtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVQKTtcblxuICAvLyBOYXYgYmFyXG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gIG5hdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgbmF2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbmF2LmFwcGVuZENoaWxkKGhlYWRMaW5rcyk7XG5cbiAgLy8gTWFpblxuXG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChcIk9yaWdpbmFsIGZsYXZvcnMgb25seSFcIiwgXCJDaGVjayBvdXQgb3VyIG1lbnUuLi5cIikuY2FyZDtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAvLyBGb290ZXJcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmb290ZXJQLnRleHRDb250ZW50ID0gXCJEZXZlbG9wZWQgYnlcIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclApO1xuXG4gIC8vIFBhZ2Ugc3RydWN0dXJlXG4gIGNvbnN0IGhvbHlHcmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbHlHcmFpbC5jbGFzc0xpc3QuYWRkKFwiaG9seS1ncmFpbFwiKTtcbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKG5hdik7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChtYWluKTtcbiAgaG9seUdyYWlsLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbHlHcmFpbCk7XG59XG5cbmV4cG9ydCB7IGxvYWRIb21lUGFnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9sb2FkSG9tZVBhZ2VcIjtcblxubG9hZEhvbWVQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=