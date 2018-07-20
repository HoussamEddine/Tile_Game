/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/accessDOMElem.js":
/*!******************************!*\
  !*** ./src/accessDOMElem.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _determineSibNum = __webpack_require__(/*! ./determineSibNum */ \"./src/determineSibNum.js\");\n\nvar _determineSibNum2 = _interopRequireDefault(_determineSibNum);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar accessDOMElem = function accessDOMElem(elem) {\n  var sibsNum = (0, _determineSibNum2.default)(elem);\n\n  var siblingsArr = [];\n  var getByClass = function getByClass(e) {\n    return document.getElementsByClassName(e);\n  };\n  sibsNum.forEach(function (e) {\n    siblingsArr.push(getByClass(\"game-tile\")[e]);\n  });\n  return siblingsArr;\n};\n\nexports.default = accessDOMElem;\n\n//# sourceURL=webpack:///./src/accessDOMElem.js?");

/***/ }),

/***/ "./src/determineMatchedSib.js":
/*!************************************!*\
  !*** ./src/determineMatchedSib.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _accessDOMElem = __webpack_require__(/*! ./accessDOMElem */ \"./src/accessDOMElem.js\");\n\nvar _accessDOMElem2 = _interopRequireDefault(_accessDOMElem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar determinMatchedSiblings = function determinMatchedSiblings(matchedSiblings, targetBack) {\n  if (toString.call(matchedSiblings) === \"[object Array]\") {\n    var siblings = [];\n    var length = matchedSiblings.length;\n    matchedSiblings.forEach(function (e) {\n\n      siblings.push.apply(siblings, _toConsumableArray((0, _accessDOMElem2.default)(e)));\n    });\n\n    siblings.forEach(function (sibs) {\n\n      if (sibs.style.background === targetBack) {\n        if (!matchedSiblings.includes(sibs)) {\n\n          matchedSiblings.push(sibs);\n        }\n      }\n      if (length !== matchedSiblings.length) {\n        determinMatchedSiblings(matchedSiblings, targetBack);\n      }\n    });\n    return matchedSiblings;\n  } else {\n    return false;\n  }\n};\n\nexports.default = determinMatchedSiblings;\n\n//# sourceURL=webpack:///./src/determineMatchedSib.js?");

/***/ }),

/***/ "./src/determineSibNum.js":
/*!********************************!*\
  !*** ./src/determineSibNum.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar determineSibNum = function determineSibNum(elem) {\n\n  var columnNumOfClickedElem = Number(elem.getAttribute(\"data-column\")),\n      rowNumOfClickedElem = Number(elem.getAttribute(\"data-row\")),\n      number = Number(elem.getAttribute(\"data-number\")),\n      siblingsArr = [];\n\n  siblingsArr = [number - 6, number - 1, number + 1, number + 6];\n\n  if (rowNumOfClickedElem === 1) {\n    if (columnNumOfClickedElem !== 1 && columnNumOfClickedElem !== 6) {\n\n      siblingsArr = [number - 1, number + 1, number + 6];\n    } else {\n\n      siblingsArr = [number + 1, number + 6];\n    }\n  }\n  if (rowNumOfClickedElem === 6) {\n    if (columnNumOfClickedElem !== 1 && columnNumOfClickedElem !== 6) {\n\n      siblingsArr = [number - 6, number - 1, number + 1];\n    } else {\n\n      siblingsArr = [number - 6, number + 1];\n    }\n  }\n  if (columnNumOfClickedElem === 1) {\n    if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {\n\n      siblingsArr = [number - 6, number + 1, number + 6];\n    }\n  }\n  if (columnNumOfClickedElem === 6) {\n    if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {\n\n      siblingsArr = [number - 6, number - 1, number + 6];\n    } else if (rowNumOfClickedElem === 1) {\n\n      siblingsArr = [number - 1, number + 6];\n    } else {\n      siblingsArr = [number - 6, number - 1];\n    }\n  }\n  return siblingsArr;\n};\n\nexports.default = determineSibNum;\n\n//# sourceURL=webpack:///./src/determineSibNum.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _determineSibNum = __webpack_require__(/*! ./determineSibNum */ \"./src/determineSibNum.js\");\n\nvar _determineSibNum2 = _interopRequireDefault(_determineSibNum);\n\nvar _determineMatchedSib = __webpack_require__(/*! ./determineMatchedSib */ \"./src/determineMatchedSib.js\");\n\nvar _determineMatchedSib2 = _interopRequireDefault(_determineMatchedSib);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function (gb) {\n\n  var document = gb.document,\n      gameBoard = document.getElementById(\"game-board\"),\n      backgrounds = ['#d04141', \"#5e88d4\", \"#aabd86\"];\n\n  var gameTiles = void 0,\n      gameTilesArr = [],\n      mainTile = void 0,\n      selectedElems = void 0,\n      score = 0,\n      bestScore = 0;\n\n  var init = function init() {\n\n    var row = 1,\n        column = 1;\n\n    if (gameTiles === undefined) {\n      gameTiles = document.createElement(\"div\");\n    }\n    if (gameTilesArr.length !== 0) {\n      gameTilesArr = [];\n    }\n    for (var i = 0; i < 36; i++) {\n      var randomNumFromOneToThree = Math.floor(Math.random() * 3),\n          gameTile = document.createElement(\"div\");\n      gameTile.className = \"game-tile\";\n      if (column === 7) {\n        column = 1;\n        row++;\n      }\n\n      gameTile.dataset.column = column;\n      gameTile.dataset.row = row;\n      gameTile.dataset.number = i;\n      gameTile.style.background = backgrounds[randomNumFromOneToThree];\n      gameTiles.appendChild(gameTile);\n      gameTiles.setAttribute(\"id\", \"game-tiles\");\n      gameBoard.appendChild(gameTiles);\n      gameTilesArr.push(gameTile);\n      column++;\n      if (i === 0) {\n        mainTile = document.getElementsByClassName(\"game-tile\")[0];\n        mainTile.classList.add(\"game-tile-origin\");\n      }\n      selectedElems = [mainTile];\n    }\n    gameTilesArr.forEach(function (e) {\n      e.addEventListener(\"click\", function (e) {\n        return handleClick(e);\n      });\n    });\n    return gameTilesArr;\n  };\n\n  var clean = function clean() {\n    gameTilesArr.forEach(function (e) {\n      e.parentNode.removeChild(e);\n    });\n    init();\n  };\n\n  var handleClick = function handleClick(ev) {\n    score++;\n    var clickedElem = ev.target,\n        tileClickedBakground = clickedElem.style.background,\n        mainTileBackground = mainTile.style.background,\n        gameScore = document.querySelector(\"#score h1\"),\n        gameBestScore = document.querySelector(\"#score #best-score\");\n\n    if (mainTileBackground !== tileClickedBakground) {\n      mainTile.style.background = tileClickedBakground;\n    }\n    selectedElems = (0, _determineMatchedSib2.default)(selectedElems, tileClickedBakground);\n    selectedElems.forEach(function (e) {\n      e.style.background = tileClickedBakground;\n      e.style.border = \"0\";\n    });\n    var shouldClean = gameTilesArr.every(function (e) {\n      return e.style.background === tileClickedBakground;\n    });\n    if (shouldClean) {\n      bestScore === 0 ? bestScore = score : bestScore;\n      if (score < bestScore) {\n        bestScore = score;\n      }\n      score = 0;\n      clean();\n    }\n    gameScore.innerHTML = 'SCORE: \\n ' + score;\n    gameBestScore.innerHTML = 'BEST SCORE: \\n ' + bestScore;\n  };\n  init();\n\n  /***** automated Player *****/\n\n  // const automatedPlayer = () => {\n  //   let randomNumfromZeroToThirtyFive = Math.floor(Math.random() * 36),\n  //     randomElem = gameTilesArr[randomNumfromZeroToThirtyFive];\n  //   if (randomElem.fireEvent) {\n  //     randomElem.fireEvent(\"on\", \"click\");\n  //   } else {\n  //     const event = document.createEvent(\"MouseEvents\");\n  //     event.initEvent(\"click\", true, false);\n  //     randomElem.dispatchEvent(event);\n  //   }\n  // };\n  // setInterval(automatedPlayer, 10);\n})(window);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });