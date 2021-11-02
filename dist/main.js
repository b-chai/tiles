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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\nvar game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ndocument.addEventListener('DOMContentLoaded', function () {\n  game.createGame(5);\n  game.createButtons();\n  console.log(game);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLElBQU1DLElBQUksR0FBRyxJQUFJRCxxREFBSixFQUFiO0FBQ0FFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQUk7QUFDOUNGLEVBQUFBLElBQUksQ0FBQ0csVUFBTCxDQUFnQixDQUFoQjtBQUNBSCxFQUFBQSxJQUFJLENBQUNJLGFBQUw7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFDSCxDQUpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGlsZXMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+e1xyXG4gICAgZ2FtZS5jcmVhdGVHYW1lKDUpXHJcbiAgICBnYW1lLmNyZWF0ZUJ1dHRvbnMoKVxyXG4gICAgY29uc29sZS5sb2coZ2FtZSlcclxufSkiXSwibmFtZXMiOlsiR2FtZSIsImdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVHYW1lIiwiY3JlYXRlQnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/scripts/tile.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.board = [];\n  }\n\n  _createClass(Game, [{\n    key: \"createGame\",\n    value: function createGame(num) {\n      var grid = document.querySelector('.grid');\n      var row = num;\n      var col = num;\n      var gridArray = [];\n\n      for (var i = 0; i < row; i++) {\n        var seperator = document.createElement(\"div\");\n        seperator.className = \"divTableRow\";\n        grid.appendChild(seperator);\n        var rowArray = [];\n\n        for (var j = 0; j < col; j++) {\n          var tile = new _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n          if (i === 0 && j === 0) {\n            var startPiece = tile.playerTile();\n            seperator.appendChild(startPiece);\n            rowArray.push(tile);\n          } else {\n            var piece = tile.randomTile();\n            seperator.appendChild(piece);\n            rowArray.push(tile);\n          }\n        }\n\n        gridArray.push(rowArray);\n      }\n\n      this.board = gridArray;\n    }\n  }, {\n    key: \"createButtons\",\n    value: function createButtons() {\n      var selector = document.querySelector('.color-buttons');\n      var playerTile = this.board[0][0];\n      var button1 = document.createElement('button');\n      var button2 = document.createElement('button');\n      var button3 = document.createElement('button');\n      var button4 = document.createElement('button');\n      button1.className = 'red';\n\n      button1.onclick = function () {\n        playerTile.color = \"red\";\n        console.log(playerTile);\n      };\n\n      button2.className = 'blue';\n      button3.className = 'green';\n      button4.className = 'orange';\n      selector.appendChild(button1);\n      selector.appendChild(button2);\n      selector.appendChild(button3);\n      selector.appendChild(button4);\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0lBRU1DO0FBQ0Ysa0JBQWE7QUFBQTs7QUFFVCxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNIOzs7O1dBRUQsb0JBQVdDLEdBQVgsRUFBZTtBQUNYLFVBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxVQUFNQyxHQUFHLEdBQUdKLEdBQVo7QUFDQSxVQUFNSyxHQUFHLEdBQUdMLEdBQVo7QUFFQSxVQUFJTSxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFpQkEsQ0FBQyxHQUFHSCxHQUFyQixFQUEyQkcsQ0FBQyxFQUE1QixFQUErQjtBQUMzQixZQUFJQyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRCxRQUFBQSxTQUFTLENBQUNFLFNBQVYsR0FBc0IsYUFBdEI7QUFDQVQsUUFBQUEsSUFBSSxDQUFDVSxXQUFMLENBQWlCSCxTQUFqQjtBQUVBLFlBQUlJLFFBQVEsR0FBRyxFQUFmOztBQUNBLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBaUJBLENBQUMsR0FBR1IsR0FBckIsRUFBMkJRLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsY0FBTUMsSUFBSSxHQUFHLElBQUlqQixnREFBSixFQUFiOztBQUVBLGNBQUlVLENBQUMsS0FBSyxDQUFOLElBQVdNLENBQUMsS0FBSyxDQUFyQixFQUF1QjtBQUNuQixnQkFBSUUsVUFBVSxHQUFHRCxJQUFJLENBQUNFLFVBQUwsRUFBakI7QUFDQVIsWUFBQUEsU0FBUyxDQUFDRyxXQUFWLENBQXNCSSxVQUF0QjtBQUNBSCxZQUFBQSxRQUFRLENBQUNLLElBQVQsQ0FBY0gsSUFBZDtBQUNILFdBSkQsTUFJSztBQUNELGdCQUFJSSxLQUFLLEdBQUdKLElBQUksQ0FBQ0ssVUFBTCxFQUFaO0FBQ0FYLFlBQUFBLFNBQVMsQ0FBQ0csV0FBVixDQUFzQk8sS0FBdEI7QUFDQU4sWUFBQUEsUUFBUSxDQUFDSyxJQUFULENBQWNILElBQWQ7QUFDSDtBQUNKOztBQUNEUixRQUFBQSxTQUFTLENBQUNXLElBQVYsQ0FBZUwsUUFBZjtBQUNIOztBQUNELFdBQUtiLEtBQUwsR0FBYU8sU0FBYjtBQUNIOzs7V0FFRCx5QkFBZTtBQUNYLFVBQU1jLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBakI7QUFDQSxVQUFNYSxVQUFVLEdBQUcsS0FBS2pCLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFuQjtBQUVBLFVBQUlzQixPQUFPLEdBQUduQixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLFVBQUlhLE9BQU8sR0FBR3BCLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsVUFBSWMsT0FBTyxHQUFHckIsUUFBUSxDQUFDTyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxVQUFJZSxPQUFPLEdBQUd0QixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUVBWSxNQUFBQSxPQUFPLENBQUNYLFNBQVIsR0FBb0IsS0FBcEI7O0FBQ0FXLE1BQUFBLE9BQU8sQ0FBQ0ksT0FBUixHQUFrQixZQUFJO0FBQ2xCVCxRQUFBQSxVQUFVLENBQUNVLEtBQVgsR0FBbUIsS0FBbkI7QUFDQUMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlaLFVBQVo7QUFDSCxPQUhEOztBQUlBTSxNQUFBQSxPQUFPLENBQUNaLFNBQVIsR0FBb0IsTUFBcEI7QUFDQWEsTUFBQUEsT0FBTyxDQUFDYixTQUFSLEdBQW9CLE9BQXBCO0FBQ0FjLE1BQUFBLE9BQU8sQ0FBQ2QsU0FBUixHQUFvQixRQUFwQjtBQUVBVSxNQUFBQSxRQUFRLENBQUNULFdBQVQsQ0FBcUJVLE9BQXJCO0FBQ0FELE1BQUFBLFFBQVEsQ0FBQ1QsV0FBVCxDQUFxQlcsT0FBckI7QUFDQUYsTUFBQUEsUUFBUSxDQUFDVCxXQUFULENBQXFCWSxPQUFyQjtBQUNBSCxNQUFBQSxRQUFRLENBQUNULFdBQVQsQ0FBcUJhLE9BQXJCO0FBQ0g7Ozs7OztBQUdMLCtEQUFlMUIsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL1RpbGVzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaWxlIGZyb20gJy4vdGlsZS5qcydcclxuXHJcbmNsYXNzIEdhbWV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICB0aGlzLmJvYXJkID0gW11cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVHYW1lKG51bSl7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkJylcclxuICAgICAgICBjb25zdCByb3cgPSBudW1cclxuICAgICAgICBjb25zdCBjb2wgPSBudW1cclxuXHJcbiAgICAgICAgbGV0IGdyaWRBcnJheSA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgcm93IDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHNlcGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICAgICAgc2VwZXJhdG9yLmNsYXNzTmFtZSA9IFwiZGl2VGFibGVSb3dcIlxyXG4gICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKHNlcGVyYXRvcilcclxuXHJcbiAgICAgICAgICAgIGxldCByb3dBcnJheSA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwIDsgaiA8IGNvbCA7IGorKyApe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IG5ldyBUaWxlKClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBqID09PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRQaWVjZSA9IHRpbGUucGxheWVyVGlsZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VwZXJhdG9yLmFwcGVuZENoaWxkKHN0YXJ0UGllY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh0aWxlKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBpZWNlID0gdGlsZS5yYW5kb21UaWxlKClcclxuICAgICAgICAgICAgICAgICAgICBzZXBlcmF0b3IuYXBwZW5kQ2hpbGQocGllY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCh0aWxlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdyaWRBcnJheS5wdXNoKHJvd0FycmF5KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJvYXJkID0gZ3JpZEFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQnV0dG9ucygpe1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yLWJ1dHRvbnMnKVxyXG4gICAgICAgIGNvbnN0IHBsYXllclRpbGUgPSB0aGlzLmJvYXJkWzBdWzBdXHJcblxyXG4gICAgICAgIGxldCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBsZXQgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgbGV0IGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGxldCBidXR0b240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgICAgICAgYnV0dG9uMS5jbGFzc05hbWUgPSAncmVkJ1xyXG4gICAgICAgIGJ1dHRvbjEub25jbGljayA9ICgpPT57XHJcbiAgICAgICAgICAgIHBsYXllclRpbGUuY29sb3IgPSBcInJlZFwiXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllclRpbGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbjIuY2xhc3NOYW1lID0gJ2JsdWUnXHJcbiAgICAgICAgYnV0dG9uMy5jbGFzc05hbWUgPSAnZ3JlZW4nXHJcbiAgICAgICAgYnV0dG9uNC5jbGFzc05hbWUgPSAnb3JhbmdlJ1xyXG5cclxuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChidXR0b24xKVxyXG4gICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGJ1dHRvbjIpXHJcbiAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoYnV0dG9uMylcclxuICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChidXR0b240KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lIl0sIm5hbWVzIjpbIlRpbGUiLCJHYW1lIiwiYm9hcmQiLCJudW0iLCJncmlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicm93IiwiY29sIiwiZ3JpZEFycmF5IiwiaSIsInNlcGVyYXRvciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsInJvd0FycmF5IiwiaiIsInRpbGUiLCJzdGFydFBpZWNlIiwicGxheWVyVGlsZSIsInB1c2giLCJwaWVjZSIsInJhbmRvbVRpbGUiLCJzZWxlY3RvciIsImJ1dHRvbjEiLCJidXR0b24yIiwiYnV0dG9uMyIsImJ1dHRvbjQiLCJvbmNsaWNrIiwiY29sb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/tile.js":
/*!*****************************!*\
  !*** ./src/scripts/tile.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tile = /*#__PURE__*/function () {\n  function Tile() {\n    _classCallCheck(this, Tile);\n\n    var TILES = ['red', 'blue', 'green', 'orange'];\n    var randomColor = Math.floor(Math.random() * TILES.length);\n    this.color = TILES[randomColor];\n    this.player = false;\n  }\n\n  _createClass(Tile, [{\n    key: \"playerTile\",\n    value: function playerTile() {\n      this.player = true;\n      var tile = document.createElement(\"div\");\n      tile.className = \"tile \".concat(this.color);\n      return tile;\n    }\n  }, {\n    key: \"randomTile\",\n    value: function randomTile() {\n      var tile = document.createElement(\"div\");\n      tile.className = \"tile \".concat(this.color);\n      return tile;\n    }\n  }]);\n\n  return Tile;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDRixrQkFBYTtBQUFBOztBQUNULFFBQU1DLEtBQUssR0FBRyxDQUFDLEtBQUQsRUFBTyxNQUFQLEVBQWMsT0FBZCxFQUFzQixRQUF0QixDQUFkO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixLQUFLLENBQUNLLE1BQWpDLENBQXBCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhTixLQUFLLENBQUNDLFdBQUQsQ0FBbEI7QUFDQSxTQUFLTSxNQUFMLEdBQWMsS0FBZDtBQUNIOzs7O1dBRUQsc0JBQVk7QUFDUixXQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUVBLFVBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQUYsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLGtCQUF5QixLQUFLTCxLQUE5QjtBQUNBLGFBQU9FLElBQVA7QUFDSDs7O1dBRUQsc0JBQVk7QUFDUixVQUFJQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0csU0FBTCxrQkFBeUIsS0FBS0wsS0FBOUI7QUFDQSxhQUFPRSxJQUFQO0FBQ0g7Ozs7OztBQUdMLCtEQUFlVCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGlsZXMvLi9zcmMvc2NyaXB0cy90aWxlLmpzPzBlYmQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGlsZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc3QgVElMRVMgPSBbJ3JlZCcsJ2JsdWUnLCdncmVlbicsJ29yYW5nZSddXHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ29sb3IgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBUSUxFUy5sZW5ndGgpXHJcbiAgICAgICAgdGhpcy5jb2xvciA9IFRJTEVTW3JhbmRvbUNvbG9yXTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyVGlsZSgpe1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gdHJ1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICAgIHRpbGUuY2xhc3NOYW1lID0gYHRpbGUgJHt0aGlzLmNvbG9yfWBcclxuICAgICAgICByZXR1cm4gdGlsZVxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVRpbGUoKXtcclxuICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICB0aWxlLmNsYXNzTmFtZSA9IGB0aWxlICR7dGhpcy5jb2xvcn1gXHJcbiAgICAgICAgcmV0dXJuIHRpbGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlsZSJdLCJuYW1lcyI6WyJUaWxlIiwiVElMRVMiLCJyYW5kb21Db2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImNvbG9yIiwicGxheWVyIiwidGlsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/tile.js\n");

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