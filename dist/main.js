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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/accessDOMElem.js":
/*!*********************************!*\
  !*** ./source/accessDOMElem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _determineSibNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./determineSibNum */ \"./source/determineSibNum.js\");\n\r\n\r\nconst accessDOMElem = (elem) => {\r\n  const sibsNum = Object(_determineSibNum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(elem);\r\n\r\n  let siblingsArr = [];\r\n  const getByClass = (e) => (document.getElementsByClassName(e));\r\n  sibsNum.forEach((e) => {\r\n    siblingsArr.push(getByClass(\"game-tile\")[e]);\r\n  });\r\n  return siblingsArr;\r\n\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (accessDOMElem);\n\n//# sourceURL=webpack:///./source/accessDOMElem.js?");

/***/ }),

/***/ "./source/determineMatchedSib.js":
/*!***************************************!*\
  !*** ./source/determineMatchedSib.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accessDOMElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessDOMElem */ \"./source/accessDOMElem.js\");\n\r\n\r\n\r\nconst determinMatchedSiblings = (matchedSiblings, targetBack) => {\r\n  if (toString.call(matchedSiblings) === \"[object Array]\") {\r\n    let siblings = [];\r\n    const length = matchedSiblings.length;\r\n    matchedSiblings.forEach((e) => {\r\n\r\n      siblings.push(...Object(_accessDOMElem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e));\r\n\r\n    });\r\n\r\n    siblings.forEach((sibs) => {\r\n\r\n      if (sibs.style.background === targetBack) {\r\n        if (!matchedSiblings.includes(sibs)) {\r\n\r\n          matchedSiblings.push(sibs);\r\n\r\n        }\r\n      }\r\n      if (length !== matchedSiblings.length) {\r\n        determinMatchedSiblings(matchedSiblings, targetBack);\r\n      }\r\n    });\r\n    return matchedSiblings;\r\n  }\r\n  else {\r\n    return false;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (determinMatchedSiblings);\n\n//# sourceURL=webpack:///./source/determineMatchedSib.js?");

/***/ }),

/***/ "./source/determineSibNum.js":
/*!***********************************!*\
  !*** ./source/determineSibNum.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst determineSibNum = (elem) => {\r\n\r\n  let columnNumOfClickedElem = Number(elem.getAttribute(\"data-column\")),\r\n    rowNumOfClickedElem = Number(elem.getAttribute(\"data-row\")),\r\n    number = Number(elem.getAttribute(\"data-number\")),\r\n    siblingsArr = [];\r\n\r\n  siblingsArr = [\r\n    number - 6,\r\n    number - 1,\r\n    number + 1,\r\n    number + 6\r\n  ];\r\n\r\n  if ((rowNumOfClickedElem === 1)) {\r\n    if ((columnNumOfClickedElem !== 1) && (columnNumOfClickedElem !== 6)) {\r\n\r\n      siblingsArr = [\r\n        number - 1,\r\n        number + 1,\r\n        number + 6\r\n      ]\r\n    } else {\r\n\r\n      siblingsArr = [\r\n        number + 1,\r\n        number + 6\r\n      ]\r\n    }\r\n  }\r\n  if ((rowNumOfClickedElem === 6)) {\r\n    if ((columnNumOfClickedElem !== 1) && (columnNumOfClickedElem !== 6)) {\r\n\r\n      siblingsArr = [\r\n        number - 6,\r\n        number - 1,\r\n        number + 1,\r\n      ]\r\n    } else {\r\n\r\n      siblingsArr = [\r\n\r\n        number - 6,\r\n        number + 1\r\n      ]\r\n    }\r\n  }\r\n  if (columnNumOfClickedElem === 1) {\r\n    if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {\r\n\r\n      siblingsArr = [\r\n        number - 6,\r\n        number + 1,\r\n        number + 6\r\n      ]\r\n    }\r\n\r\n  }\r\n  if (columnNumOfClickedElem === 6) {\r\n    if (rowNumOfClickedElem !== 1 && rowNumOfClickedElem !== 6) {\r\n\r\n      siblingsArr = [\r\n        number - 6,\r\n        number - 1,\r\n        number + 6\r\n      ]\r\n    }\r\n    else if (rowNumOfClickedElem === 1) {\r\n\r\n      siblingsArr = [\r\n        number - 1,\r\n        number + 6\r\n      ]\r\n\r\n    } else {\r\n      siblingsArr = [\r\n        number - 6,\r\n        number - 1,\r\n      ]\r\n    }\r\n  }\r\n  return siblingsArr;\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (determineSibNum);\n\n//# sourceURL=webpack:///./source/determineSibNum.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _determineSibNum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./determineSibNum */ \"./source/determineSibNum.js\");\n/* harmony import */ var _determineMatchedSib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./determineMatchedSib */ \"./source/determineMatchedSib.js\");\n\r\n\r\n\r\n(function(gb) {\r\n  const document = gb.document,\r\n    gameBoard = document.getElementById(\"game-board\"),\r\n    backgrounds = [\"#d04141\", \"#5e88d4\", \"#aabd86\"];\r\n\r\n  let gameTiles,\r\n    gameTilesArr = [],\r\n    mainTile,\r\n    selectedElems,\r\n    score = 0,\r\n    bestScore = 0;\r\n\r\n  const init = () => {\r\n    let row = 1,\r\n      column = 1;\r\n\r\n    if (gameTiles === undefined) {\r\n      gameTiles = document.createElement(\"div\");\r\n    }\r\n    if (gameTilesArr.length !== 0) {\r\n      gameTilesArr = [];\r\n    }\r\n    for (let i = 0; i < 36; i++) {\r\n      const randomNumFromOneToThree = Math.floor(Math.random() * 3),\r\n        gameTile = document.createElement(\"div\");\r\n      gameTile.className = \"game-tile\";\r\n      if (column === 7) {\r\n        column = 1;\r\n        row++;\r\n      }\r\n\r\n      gameTile.dataset.column = column;\r\n      gameTile.dataset.row = row;\r\n      gameTile.dataset.number = i;\r\n      gameTile.style.background = backgrounds[randomNumFromOneToThree];\r\n      gameTiles.appendChild(gameTile);\r\n      gameTiles.setAttribute(\"id\", \"game-tiles\");\r\n      gameBoard.appendChild(gameTiles);\r\n      gameTilesArr.push(gameTile);\r\n      column++;\r\n      if (i === 0) {\r\n        mainTile = document.getElementsByClassName(\"game-tile\")[0];\r\n        mainTile.classList.add(\"game-tile-origin\");\r\n      }\r\n      selectedElems = [mainTile];\r\n    }\r\n    gameTilesArr.forEach(e => {\r\n      e.addEventListener(\"click\", e => handleClick(e));\r\n    });\r\n    return gameTilesArr;\r\n  };\r\n\r\n  const clean = () => {\r\n    gameTilesArr.forEach(e => {\r\n      e.parentNode.removeChild(e);\r\n    });\r\n    init();\r\n  };\r\n\r\n  const handleClick = function(ev) {\r\n    score++;\r\n    const clickedElem = ev.target,\r\n      tileClickedBakground = clickedElem.style.background,\r\n      mainTileBackground = mainTile.style.background,\r\n      gameScore = document.querySelector(\"#score h1\"),\r\n      gameBestScore = document.querySelector(\"#score #best-score\");\r\n\r\n    if (mainTileBackground !== tileClickedBakground) {\r\n      mainTile.style.background = tileClickedBakground;\r\n    }\r\n    selectedElems = Object(_determineMatchedSib__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n      selectedElems,\r\n      tileClickedBakground\r\n    );\r\n    selectedElems.forEach(e => {\r\n      e.style.background = tileClickedBakground;\r\n      e.style.border = \"0\";\r\n    });\r\n    const shouldClean = gameTilesArr.every(e => {\r\n      return e.style.background === tileClickedBakground;\r\n    });\r\n    if (shouldClean) {\r\n      bestScore === 0 ? (bestScore = score) : bestScore;\r\n      if (score < bestScore) {\r\n        bestScore = score;\r\n      }\r\n      score = 0;\r\n      clean();\r\n    }\r\n    gameScore.innerHTML = `SCORE: \\n ${score}`;\r\n    gameBestScore.innerHTML = `BEST SCORE: \\n ${bestScore}`;\r\n  };\r\n  init();\r\n\r\n  /***** automated Player *****/\r\n\r\n  // const automatedPlayer = () => {\r\n  //   let randomNumfromZeroToThirtyFive = Math.floor(Math.random() * 36),\r\n  //     randomElem = gameTilesArr[randomNumfromZeroToThirtyFive];\r\n  //   if (randomElem.fireEvent) {\r\n  //     randomElem.fireEvent(\"on\", \"click\");\r\n  //   } else {\r\n  //     const event = document.createEvent(\"MouseEvents\");\r\n  //     event.initEvent(\"click\", true, false);\r\n  //     randomElem.dispatchEvent(event);\r\n  //   }\r\n  // };\r\n  // setInterval(automatedPlayer, 10);\r\n})(window);\r\n\n\n//# sourceURL=webpack:///./source/index.js?");

/***/ })

/******/ });