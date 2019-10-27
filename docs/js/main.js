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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tools_Shooter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/Shooter.js */ \"./src/tools/Shooter.js\");\n\n\nvar shooter = new _tools_Shooter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/app.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar Shooter = function Shooter() {\n  this.gameScreen = document.querySelector('.game-screen');\n  this.ball = document.createElement('div');\n  this.btnStart = document.querySelector('.menu__btn--start');\n  this.btnStop = document.querySelector('.menu__btn--stop');\n  this.cross = document.querySelector('.crosshair');\n  this.fallenBalls = 0;\n  this.shootDownBalls = 0;\n  this.init();\n};\n\nShooter.prototype.init = function () {\n  this.crosshair();\n  this.start();\n}; //When the user clicks button 'start'\n\n\nShooter.prototype.start = function () {\n  var _this = this;\n\n  this.btnStart.addEventListener('click', function () {\n    _this.btnStart.disabled = true;\n    _this.btnStop.disabled = false;\n\n    _this.addBalls();\n  });\n}; //When the user clicks button 'stop'\n\n\nShooter.prototype.stop = function (interval) {\n  var _this2 = this;\n\n  this.btnStop.addEventListener('click', function () {\n    _this2.btnStart.disabled = false;\n    _this2.btnStop.disabled = true;\n    clearInterval(interval);\n\n    _this2.ball.style.setProperty('transform', 'translateY(-180px)');\n  });\n}; //Crosshair\n\n\nShooter.prototype.crosshair = function () {\n  var _this3 = this;\n\n  this.gameScreen.addEventListener('mousemove', function (e) {\n    var positionX = e.pageX - _this3.gameScreen.offsetLeft - _this3.cross.offsetWidth / 2;\n    var positionY = e.pageY - _this3.gameScreen.offsetTop - _this3.cross.offsetHeight / 2;\n\n    _this3.cross.style.setProperty('transform', \"translate(\".concat(positionX, \"px, \").concat(positionY, \"px)\"));\n  });\n}; //Add moving balls\n\n\nShooter.prototype.addBalls = function () {\n  if (this.ball.classList.contains('ball') === false) {\n    this.ball.classList.add('ball');\n    this.ball.style.setProperty('transform', \"translateY(-\".concat(this.cross.offsetHeight * 2, \"px)\"));\n    this.ballAddingInterval();\n    this.hitBall();\n    this.stop(this.interval);\n  } else {\n    this.ballAddingInterval();\n    this.stop(this.interval);\n  }\n}; //Move ball\n\n\nShooter.prototype.ballMove = function (ballRespX) {\n  this.ball.animate([// keyframes\n  {\n    transform: \"translate(\".concat(this.gameScreen.offsetWidth * ballRespX, \"px, -\").concat(this.cross.offsetHeight * 2, \"px)\")\n  }, {\n    transform: \"translate(\".concat(this.gameScreen.offsetWidth * ballRespX, \"px, \").concat(this.gameScreen.offsetHeight, \"px)\")\n  }], {\n    // timing options\n    duration: 1000,\n    iterations: 1\n  });\n}; //Method responsible for interval which adds ball\n\n\nShooter.prototype.ballAddingInterval = function () {\n  var _this4 = this;\n\n  var fallenBalls = document.querySelector('#fallenBalls');\n  this.interval = setInterval(function () {\n    _this4.gameScreen.appendChild(_this4.ball);\n\n    var ballRespX = Math.random(); //Ball never will apear pose game screen\n\n    if (ballRespX > 0.92) {\n      ballRespX -= 0.09;\n    }\n\n    _this4.ball.style.setProperty('transform', \"translateX(\".concat(_this4.gameScreen.offsetWidth * ballRespX, \"px)\"));\n\n    _this4.ballMove(ballRespX);\n\n    _this4.fallenBalls += 1; //After every 'resp' of ball cout fallenBalls+=1\n\n    fallenBalls.innerHTML = _this4.fallenBalls;\n  }, 1000);\n}; //Method responsible for behavior of application when we try to shoot the ball\n\n\nShooter.prototype.hitBall = function () {\n  var _this5 = this;\n\n  var shootDownBalls = document.querySelector('#shootDownBalls');\n  this.ball.addEventListener('click', function () {\n    _this5.gameScreen.removeChild(_this5.ball);\n\n    _this5.shootDownBalls += 1;\n    shootDownBalls.innerHTML = _this5.shootDownBalls;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shooter);\n\n//# sourceURL=webpack:///./src/tools/Shooter.js?");

/***/ })

/******/ });