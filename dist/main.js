/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './player.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext('2d');\n  var soundOn = document.getElementById(\"sound-off\");\n  soundOn.style.display = 'none';\n  var soundOff = document.getElementById(\"sound-on\");\n  soundOff.style.display = 'none';\n  document.getElementById('play').addEventListener('click', function (e) {\n    e.preventDefault();\n    var ctx = canvas.getContext('2d');\n    document.getElementById('menu').style.display = 'none';\n    document.getElementById('canvas').style.display = 'flex';\n    window.game = game;\n    var player = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './player.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n    var game = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(canvas, player);\n    var music = new Audio('src/assets/SpongeBob_Credits_Audio.mp3');\n    game.startGame();\n    game.update(ctx);\n    music.play();\n    document.addEventListener('keydown', player.keyDown);\n    document.addEventListener('mousemove', player.mouseMove);\n    soundOn.style.display = 'none';\n    soundOff.style.display = 'block';\n    soundOn.addEventListener(\"click\", function (e) {\n      music.muted = false;\n      soundOn.style.display = \"none\";\n      soundOff.style.display = \"block\";\n    });\n    soundOff.addEventListener(\"click\", function (e) {\n      music.muted = true;\n      soundOff.style.display = \"none\";\n      soundOn.style.display = \"block\";\n    });\n  });\n  document.getElementById('restart-button').addEventListener('click', function (e) {\n    window.location.reload();\n  });\n  document.getElementById('replay-button').addEventListener('click', function (e) {\n    window.location.reload();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFELEVBQU87QUFDdkVFLElBQUFBLE1BQU0sQ0FBQ1csUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxHQUZEO0FBSUF4QixFQUFBQSxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNGLGdCQUF6QyxDQUEwRCxPQUExRCxFQUFtRSxVQUFDUyxDQUFELEVBQU87QUFDdEVFLElBQUFBLE1BQU0sQ0FBQ1csUUFBUCxDQUFnQkMsTUFBaEI7QUFDSCxHQUZEO0FBSUgsQ0ExREQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdmaXNobGl0dGxlZmlzaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCJcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3Qgc291bmRPbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291bmQtb2ZmXCIpO1xuICAgIHNvdW5kT24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgY29uc3Qgc291bmRPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdW5kLW9uXCIpO1xuICAgIHNvdW5kT2ZmLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5nYW1lID0gZ2FtZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgcGxheWVyKTtcbiAgICAgICAgY29uc3QgbXVzaWMgPSBuZXcgQXVkaW8oJ3NyYy9hc3NldHMvU3BvbmdlQm9iX0NyZWRpdHNfQXVkaW8ubXAzJyk7XG4gICAgICAgIFxuICAgICAgICBnYW1lLnN0YXJ0R2FtZSgpO1xuICAgICAgICBnYW1lLnVwZGF0ZShjdHgpO1xuICAgICAgICBtdXNpYy5wbGF5KClcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgcGxheWVyLmtleURvd24pO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBwbGF5ZXIubW91c2VNb3ZlKTsgXG4gICAgICAgIFxuICAgICAgICBzb3VuZE9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgc291bmRPZmYuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcblxuICAgICAgICBzb3VuZE9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIG11c2ljLm11dGVkID0gZmFsc2VcbiAgICAgICAgICAgIHNvdW5kT24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgc291bmRPZmYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc291bmRPZmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgbXVzaWMubXV0ZWQgPSB0cnVlXG4gICAgICAgICAgICBzb3VuZE9mZi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBzb3VuZE9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pO1xuXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXBsYXktYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkgXG4gICAgfSlcblxufSk7XG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwic291bmRPbiIsInN0eWxlIiwiZGlzcGxheSIsInNvdW5kT2ZmIiwiZSIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiZ2FtZSIsInBsYXllciIsIm11c2ljIiwiQXVkaW8iLCJzdGFydEdhbWUiLCJ1cGRhdGUiLCJwbGF5Iiwia2V5RG93biIsIm1vdXNlTW92ZSIsIm11dGVkIiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdmaXNobGl0dGxlZmlzaC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;