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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nvar game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log(\"loaded\");\n  console.log(game);\n  game.createGame();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJRCxxREFBSixFQUFiO0FBQ0FFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQUk7QUFDOUNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQUEsRUFBQUEsSUFBSSxDQUFDSyxVQUFMO0FBQ0gsQ0FKRCIsInNvdXJjZXMiOlsid2VicGFjazovL1RpbGVzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXHJcblxyXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoKVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PntcclxuICAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpXHJcbiAgICBjb25zb2xlLmxvZyhnYW1lKVxyXG4gICAgZ2FtZS5jcmVhdGVHYW1lKClcclxufSkiXSwibmFtZXMiOlsiR2FtZSIsImdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/scripts/tile.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n  }\n\n  _createClass(Game, [{\n    key: \"createGame\",\n    value: function createGame() {\n      var grid = document.querySelector('.grid');\n      var row = 4;\n      var col = 4;\n\n      for (var i = 0; i < row; i++) {\n        var seperator = document.createElement(\"div\");\n        seperator.className = \"divTableRow\";\n        grid.appendChild(seperator);\n\n        for (var j = 0; j < col; j++) {\n          var tile = new _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n          seperator.appendChild(tile.randomTile());\n        }\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBRU1DO0FBQ0Ysa0JBQWE7QUFBQTtBQUVaOzs7O1dBRUQsc0JBQVk7QUFDUixVQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLENBQVo7QUFDQSxVQUFNQyxHQUFHLEdBQUcsQ0FBWjs7QUFFQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWlCQSxDQUFDLEdBQUdGLEdBQXJCLEVBQTJCRSxDQUFDLEVBQTVCLEVBQStCO0FBQzNCLFlBQUlDLFNBQVMsR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FELFFBQUFBLFNBQVMsQ0FBQ0UsU0FBVixHQUFzQixhQUF0QjtBQUNBUixRQUFBQSxJQUFJLENBQUNTLFdBQUwsQ0FBaUJILFNBQWpCOztBQUNBLGFBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBaUJBLENBQUMsR0FBR04sR0FBckIsRUFBMkJNLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsY0FBTUMsSUFBSSxHQUFHLElBQUliLGdEQUFKLEVBQWI7QUFDQVEsVUFBQUEsU0FBUyxDQUFDRyxXQUFWLENBQXNCRSxJQUFJLENBQUNDLFVBQUwsRUFBdEI7QUFDSDtBQUVKO0FBRUo7Ozs7OztBQUdMLCtEQUFlYixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGlsZXMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbGUgZnJvbSAnLi90aWxlLmpzJ1xyXG5cclxuY2xhc3MgR2FtZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWUoKXtcclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQnKVxyXG4gICAgICAgIGNvbnN0IHJvdyA9IDRcclxuICAgICAgICBjb25zdCBjb2wgPSA0XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgcm93IDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHNlcGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgc2VwZXJhdG9yLmNsYXNzTmFtZSA9IFwiZGl2VGFibGVSb3dcIlxyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNlcGVyYXRvcilcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDAgOyBqIDwgY29sIDsgaisrICl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gbmV3IFRpbGUoKVxyXG4gICAgICAgICAgICAgICAgc2VwZXJhdG9yLmFwcGVuZENoaWxkKHRpbGUucmFuZG9tVGlsZSgpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWUiXSwibmFtZXMiOlsiVGlsZSIsIkdhbWUiLCJncmlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiY29sIiwiaSIsInNlcGVyYXRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImoiLCJ0aWxlIiwicmFuZG9tVGlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/tile.js":
/*!*****************************!*\
  !*** ./src/scripts/tile.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tile = /*#__PURE__*/function () {\n  function Tile() {\n    _classCallCheck(this, Tile);\n\n    var TILES = ['red', 'blue', 'green', 'orange'];\n    var randomColor = Math.floor(Math.random() * TILES.length);\n    this.color = TILES[randomColor];\n    this.player = false;\n  }\n\n  _createClass(Tile, [{\n    key: \"randomTile\",\n    value: function randomTile() {\n      var tile = document.createElement(\"div\");\n      tile.className = \"tile \".concat(this.color);\n      console.log(tile);\n      return tile;\n    }\n  }]);\n\n  return Tile;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDRixrQkFBYTtBQUFBOztBQUNULFFBQU1DLEtBQUssR0FBRyxDQUFDLEtBQUQsRUFBTyxNQUFQLEVBQWMsT0FBZCxFQUFzQixRQUF0QixDQUFkO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixLQUFLLENBQUNLLE1BQWpDLENBQXBCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhTixLQUFLLENBQUNDLFdBQUQsQ0FBbEI7QUFDQSxTQUFLTSxNQUFMLEdBQWMsS0FBZDtBQUNIOzs7O1dBRUQsc0JBQVk7QUFDUixVQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0csU0FBTCxrQkFBeUIsS0FBS0wsS0FBOUI7QUFDQU0sTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQSxhQUFPQSxJQUFQO0FBQ0g7Ozs7OztBQUdMLCtEQUFlVCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGlsZXMvLi9zcmMvc2NyaXB0cy90aWxlLmpzPzBlYmQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc3QgVElMRVMgPSBbJ3JlZCcsJ2JsdWUnLCdncmVlbicsJ29yYW5nZSddXHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBUSUxFUy5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5jb2xvciA9IFRJTEVTW3JhbmRvbUNvbG9yXTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tVGlsZSgpe1xyXG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHRpbGUuY2xhc3NOYW1lID0gYHRpbGUgJHt0aGlzLmNvbG9yfWBcclxuICAgICAgICBjb25zb2xlLmxvZyh0aWxlKVxyXG4gICAgICAgIHJldHVybiB0aWxlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbGUiXSwibmFtZXMiOlsiVGlsZSIsIlRJTEVTIiwicmFuZG9tQ29sb3IiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjb2xvciIsInBsYXllciIsInRpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tile.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UaWxlcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;