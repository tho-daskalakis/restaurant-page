/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialLoad": () => (/* binding */ initialLoad)
/* harmony export */ });
function initialLoad() {
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
/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ "./src/initialLoad.js");


(0,_initialLoad__WEBPACK_IMPORTED_MODULE_0__.initialLoad)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUV1Qjs7Ozs7OztVQzFHdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUMseURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRpYWxMb2FkKCkge1xuICAvLyBDbGFzc2VzXG5cbiAgY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IodGl0bGVUZXh0LCBib2R5VGV4dCkge1xuICAgICAgdGhpcy50aXRsZVRleHQgPSB0aXRsZVRleHQ7XG4gICAgICB0aGlzLmJvZHlUZXh0ID0gYm9keVRleHQ7XG4gICAgfVxuXG4gICAgZ2V0IGNhcmQoKSB7XG4gICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XG4gICAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlVGV4dDtcblxuICAgICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2FyZEJvZHkuY2xhc3NMaXN0LmFkZChcImNhcmQtYm9keVwiKTtcbiAgICAgIGNhcmRCb2R5LnRleHRDb250ZW50ID0gdGhpcy5ib2R5VGV4dDtcblxuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG5cbiAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbiAgfVxuXG4gIGNsYXNzIG5hdkxpbmsge1xuICAgIGNvbnN0cnVjdG9yKGhyZWYsIHRleHRDb250ZW50KSB7XG4gICAgICB0aGlzLmhyZWYgPSBocmVmO1xuICAgICAgdGhpcy50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIH1cblxuICAgIGdldCBsaW5rKCkge1xuICAgICAgY29uc3QgbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbC5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgbC50ZXh0Q29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XG5cbiAgICAgIHJldHVybiBsO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBET00gZWxlbWVudHNcblxuICAvLyBOYXYtbGlua3NcblxuICBjb25zdCBob21lTGluayA9IG5ldyBuYXZMaW5rKFwiI1wiLCBcIkhvbWVcIikubGluaztcbiAgY29uc3QgbWVudUxpbmsgPSBuZXcgbmF2TGluayhcIiNcIiwgXCJNZW51XCIpLmxpbms7XG4gIGNvbnN0IGFib3V0TGluayA9IG5ldyBuYXZMaW5rKFwiI1wiLCBcIkFib3V0XCIpLmxpbms7XG5cbiAgY29uc3QgaG9tZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBhYm91dEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGhvbWVJdGVtLmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuICBhYm91dEl0ZW0uYXBwZW5kQ2hpbGQoYWJvdXRMaW5rKTtcblxuICBjb25zdCBoZWFkTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGhlYWRMaW5rcy5jbGFzc0xpc3QuYWRkKFwidWwtbGlua3NcIik7XG4gIGhlYWRMaW5rcy5hcHBlbmRDaGlsZChob21lSXRlbSk7XG4gIGhlYWRMaW5rcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIGhlYWRMaW5rcy5hcHBlbmRDaGlsZChhYm91dEl0ZW0pO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICBjb25zdCB0aXRsZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGl0bGVQLnRleHRDb250ZW50ID0gXCJUcmFkaXRpb25hbCBncmVlayBwaWVzXCI7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlUCk7XG5cbiAgLy8gTmF2IGJhclxuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuICBuYXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIG5hdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG5hdi5hcHBlbmRDaGlsZChoZWFkTGlua3MpO1xuXG4gIC8vIE1haW5cblxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXCJPcmlnaW5hbCBmbGF2b3JzIG9ubHkhXCIsIFwiQ2hlY2sgb3V0IG91ciBtZW51Li4uXCIpLmNhcmQ7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgLy8gRm9vdGVyXG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlclAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyUC50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5XCI7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJQKTtcblxuICAvLyBQYWdlIHN0cnVjdHVyZVxuICBjb25zdCBob2x5R3JhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob2x5R3JhaWwuY2xhc3NMaXN0LmFkZChcImhvbHktZ3JhaWxcIik7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChuYXYpO1xuICBob2x5R3JhaWwuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGhvbHlHcmFpbC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChob2x5R3JhaWwpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsTG9hZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsTG9hZCB9IGZyb20gXCIuL2luaXRpYWxMb2FkXCI7XG5cbmluaXRpYWxMb2FkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=