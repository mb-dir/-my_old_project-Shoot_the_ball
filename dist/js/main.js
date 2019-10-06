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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tools_Shooter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/Shooter.js */ \"./src/tools/Shooter.js\");\n\r\n\r\n\r\nconst shooter = new _tools_Shooter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/assets/img/ball.png":
/*!*********************************!*\
  !*** ./src/assets/img/ball.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ball.png\";\n\n//# sourceURL=webpack:///./src/assets/img/ball.png?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/style.scss?");

/***/ }),

/***/ "./src/tools/Shooter.js":
/*!******************************!*\
  !*** ./src/tools/Shooter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_img_ball_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/ball.png */ \"./src/assets/img/ball.png\");\n/* harmony import */ var _assets_img_ball_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_img_ball_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst Shooter = function(){\r\n    this.gameScreen = document.querySelector('.game-screen');\r\n    this.ball = _assets_img_ball_png__WEBPACK_IMPORTED_MODULE_0___default.a;\r\n    this.btnStart = document.querySelector('#start');\r\n    this.btnStop = document.querySelector('#stop');\r\n    this.score = document.querySelector('#score');\r\n\r\n    this.init();\r\n}\r\nShooter.prototype.init = function(){\r\n    this.crosshair();\r\n    this.addBalls();\r\n}\r\n\r\n//Crosshair\r\nShooter.prototype.crosshair = function(){\r\n\r\n    const crosshair = document.querySelector('.crosshair');\r\n\r\n    this.gameScreen.addEventListener('mousemove', (e)=>{\r\n        const positionX = e.pageX - this.gameScreen.offsetLeft - (crosshair.offsetWidth / 2);\r\n        const positionY = e.pageY - this.gameScreen.offsetTop - (crosshair.offsetHeight / 2);\r\n\r\n        crosshair.style.setProperty('transform', `translate(${positionX}px, ${positionY}px)`);\r\n    });\r\n}\r\n\r\n\r\n//Add moving balls\r\n\r\nShooter.prototype.addBalls = function(){\r\n    const ballWrap = document.createElement('div');\r\n    const ballImg = new Image();\r\n    ballImg.src = this.ball;\r\n    ballImg.classList.add('ball');\r\n\r\n    ballWrap.style.zIndex = '0';\r\n    ballWrap.appendChild(ballImg)\r\n\r\n    this.gameScreen.appendChild(ballWrap);\r\n\r\n    \r\n    let ballRespX = Math.random();\r\n    //Ball never will apear pose game screen\r\n    if (ballRespX > 0.92){\r\n        ballRespX -= 0.09;\r\n    }\r\n    console.log(ballRespX)\r\n    ballImg.style.setProperty('transform', `translateX(${this.gameScreen.offsetWidth * ballRespX}px)`)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shooter); \n\n//# sourceURL=webpack:///./src/tools/Shooter.js?");

/***/ })

/******/ });