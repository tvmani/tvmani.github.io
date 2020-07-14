var App =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: uiOps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math_operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math_operation */ "./math_operation.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "uiOps", function() { return _math_operation__WEBPACK_IMPORTED_MODULE_0__; });



/***/ }),

/***/ "./math_operation.js":
/*!***************************!*\
  !*** ./math_operation.js ***!
  \***************************/
/*! exports provided: ui, scoreMark, registerUser, replenish, isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreMark", function() { return scoreMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replenish", function() { return replenish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony import */ var _model_Evaluator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Evaluator */ "./model/Evaluator.js");
/* harmony import */ var _ui_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_tools */ "./ui_tools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ui", function() { return _ui_tools__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random */ "./random.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var startTime = new Date();
var totalCorrect = 0;
var totalIncorrect = 0;
var welcomeMessage = '';
var lastSubmissionTime;
var sid = '';

function yourNameKeyboardHandler() {
  var input = document.getElementById('yourName');
  input.focus();
  input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('submit_name').click();
    }
  });
}

function answerKeyboardHandler() {
  var answer = document.getElementById('answer');

  if (answer && answer.addEventListener) {
    answer.addEventListener('keydown', tabAndEnterHandler, false);
    answer.addEventListener('keypress', isNumber, true);
  }
}

function tabAndEnterHandler(e) {
  var KEYCODE_TAB = 9;
  var KEYCODE_ENTER = 13;

  if (e.keyCode === KEYCODE_TAB || e.keyCode === KEYCODE_ENTER) {
    if (document.getElementById('answer').value && document.getElementById('answer').value.length >= 1) {
      e.preventDefault();
      document.getElementById('submitAnswer').click();
    } else {
      console.log('Tab usage without input!');
      e.preventDefault();
    }
  }
}

function startPractice() {
  document.getElementById('welcomeMessage').innerHTML = welcomeMessage;
  document.getElementById('main').style.visibility = 'visible';
  document.getElementById('summary').innerHTML = '';
  document.getElementById('totalQuestionsPracticed').innerHTML = 'Total Questions Practiced:  0';
  /* If someone doesn't cloes this window, but still using it! */

  var staleResults = document.getElementById('practicedResults').rows.length;

  if (staleResults > 1) {
    for (var i = 0; i < staleResults - 1; i++) {
      document.getElementById('practicedResults').deleteRow(-1);
    }
  }
}

function finalizeSubmit() {
  document.getElementById('answer').click();
  document.getElementById('answer').focus(); //document.getElementById('answer').scrollIntoView();
}

window.addEventListener('load', function (_event) {
  replenish();
  answerKeyboardHandler();
  yourNameKeyboardHandler();
});

function scoreMark(question) {
  if (document.getElementById('answer').value && document.getElementById('answer').value.length >= 1) {//do nothing..
  } else {
    console.log('enter usage without input!');
    return false;
  }

  if (_model_Evaluator__WEBPACK_IMPORTED_MODULE_0__["default"].evaluateQuestion(question)) {
    totalCorrect++;
  } else {
    totalIncorrect++;
  }

  _ui_tools__WEBPACK_IMPORTED_MODULE_1__["default"].appendResult(question);
  replenish();
  lastSubmissionTime = new Date();
  var diff = Math.abs(lastSubmissionTime - startTime);
  var elapsedTime = Math.floor(diff / 1000);
  var errorRatio = totalIncorrect / (totalCorrect + totalIncorrect) * 100;
  var priorQuestion = JSON.parse(localStorage.getItem(sid));
  localStorage.setItem(sid, JSON.stringify([question].concat(_toConsumableArray(priorQuestion))));
  var result = "Correct => ".concat(totalCorrect, "<br/>Incorrect => ").concat(totalIncorrect);

  if (errorRatio > 0.001) {
    result = "".concat(result, "<br/>Error ratio :: ").concat(errorRatio.toFixed(2), "%");
  }

  lastSubmissionTime = new Date();
  var speed = Math.floor(elapsedTime / totalCorrect);
  var speedResult = "<br/>Speed = ".concat(speed, ", Number of seconds per question. Lower the better!");
  document.getElementById('totalQuestionsPracticed').innerHTML = "Total Questions Practiced:  ".concat(totalCorrect + totalIncorrect);
  document.getElementById('summary').innerHTML = "".concat(result, "<br/>").concat(speedResult);
  finalizeSubmit();
}
function registerUser(studentId) {
  var defaultDetails = {
    studentId: studentId,
    sessions: []
  };
  var priorPracticeDetails = localStorage.getItem(studentId.toLowerCase());
  var sessionTime = new Date().toISOString();
  sid = "Practice_".concat(studentId, "@").concat(sessionTime);

  if (priorPracticeDetails) {
    welcomeMessage = "<b>".concat(studentId, " is amazing person!</b> ").concat(studentId, " practices like champion!<br/>Start time : ").concat(sessionTime);
  } else {
    welcomeMessage = "<b>Hi! ".concat(studentId, ", you are courageous!</b> 1000 miles journey begins with single step!<br/>Start time : ").concat(sessionTime);
  }

  startPractice();

  if (!priorPracticeDetails) {
    priorPracticeDetails = defaultDetails;
  } else {
    priorPracticeDetails = JSON.parse(priorPracticeDetails);
  }

  priorPracticeDetails.sessions.push(sid);
  localStorage.setItem(sid, JSON.stringify([]));
  var studentDetails = {
    sessions: priorPracticeDetails.sessions,
    studentId: studentId
  };
  localStorage.setItem(studentDetails.studentId.toLowerCase(), JSON.stringify(studentDetails));
  document.getElementById('answer').focus();
}
function replenish() {
  var max = parseInt(document.getElementById('maxInput').value, 10);
  var randomNumber = _random__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomIntInclusiveWithExceptions(3, max, [10]);
  var secondRandomNumber = _random__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomIntInclusive(3, max, [10]);
  _ui_tools__WEBPACK_IMPORTED_MODULE_1__["default"].populateNewQuestion(randomNumber, secondRandomNumber);
}
function isNumber(event) {
  var TAB_KEY = 9;
  var evt = event || window.event;
  var charCode = event.which ? event.which : event.keyCode;

  if (event.keyCode === TAB_KEY) {
    return tabHandler(event);
  }

  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }

  return true;
}

/***/ }),

/***/ "./model/AnswerTips.js":
/*!*****************************!*\
  !*** ./model/AnswerTips.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return explanation; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function explainMultiplication(_ref) {
  var _ref2 = _toArray(_ref),
      a = _ref2[0],
      b = _ref2[1],
      rest = _ref2.slice(2);

  var tens = Math.floor(b / 10) * 10;
  var ones = Math.floor(b % 10);
  var tensMultiples = tens * a;
  var onesMultiples = ones * a;
  var tensString = "".concat(tens, " x ").concat(a, " = ").concat(tens * a);
  var onesString = "".concat(ones, " x ").concat(a, " = ").concat(ones * a);
  var total = "".concat(tensMultiples, " + ").concat(onesMultiples, " = ").concat(tensMultiples + onesMultiples);
  return ones != 0 ? "".concat(onesString, "<br>").concat(tensString, "<br>").concat(total) : "".concat(tensString, "<br>").concat(total);
}

function explanation(mathOperations, inputs) {
  var numbers = _toConsumableArray(inputs);

  numbers.sort(function (a, b) {
    return a - b;
  });

  if (mathOperations === 'multiplication') {
    if (numbers[1] > 10 && numbers[0] < 10) {
      return explainMultiplication(numbers);
    }

    if (numbers[1] > 10 && numbers[0] > 10) {
      return explainMultiplication([numbers[1], numbers[0]]);
    }
  }

  return '';
}

/***/ }),

/***/ "./model/Evaluator.js":
/*!****************************!*\
  !*** ./model/Evaluator.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Evaluator; });
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function countBy(input) {
  var a = input.reduce(function (acc, curr) {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {});
  return a;
}

;
var operations = {
  addition: function addition(a, b) {
    return a + b;
  },
  multiplication: function multiplication(a, b) {
    return a * b;
  },
  subtraction: function subtraction(a, b) {
    return a - b;
  },
  division: function division(a, b) {
    return a / b;
  }
};

var Evaluator = /*#__PURE__*/function () {
  function Evaluator(name) {
    _classCallCheck(this, Evaluator);

    this.name = name;
  }

  _createClass(Evaluator, null, [{
    key: "answer",
    value: function answer(question) {
      var func = operations[question.operation];
      return func(question.firstNum, question.secondNum);
    }
  }, {
    key: "evaluateQuestion",
    value: function evaluateQuestion(question) {
      var func = operations[question.operation];
      return func(question.firstNum, question.secondNum) === question.submittedAnswer;
    }
  }, {
    key: "evaluate",
    value: function evaluate(_ref) {
      var _ref2 = _toArray(_ref),
          questions = _ref2.slice(0);

      var filteredWins = questions.filter(function (q) {
        return q.operation === 'multiplication';
      }).filter(function (q) {
        return q.firstNum * q.secondNum == q.submittedAnswer;
      }).map(function (q) {
        return [q.firstNum, q.secondNum];
      });
      var wins = typeof filteredWins !== 'undefined' ? [].concat.apply([], filteredWins) : [];
      var filteredNeedPractice = questions.filter(function (q) {
        return q.operation === 'multiplication';
      }).filter(function (q) {
        return q.firstNum * q.secondNum !== q.submittedAnswer;
      }).map(function (q) {
        return [q.firstNum, q.secondNum];
      });
      var needPractice = typeof filteredNeedPractice !== 'undefined' ? [].concat.apply([], filteredNeedPractice) : [];
      var summary = {
        wins: countBy(wins),
        needPractice: countBy(needPractice)
      };
      return summary;
    }
  }]);

  return Evaluator;
}();



/***/ }),

/***/ "./model/Question.js":
/*!***************************!*\
  !*** ./model/Question.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Question; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function Question(firstNum, secondNum, operation, submittedAnswer, submissionTime) {
  _classCallCheck(this, Question);

  this.firstNum = firstNum;
  this.secondNum = secondNum;
  this.operation = operation;
  this.submittedAnswer = submittedAnswer;
  this.submissionTime = submissionTime;
};



/***/ }),

/***/ "./random.js":
/*!*******************!*\
  !*** ./random.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Random; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Random = /*#__PURE__*/function () {
  function Random() {
    _classCallCheck(this, Random);
  }

  _createClass(Random, null, [{
    key: "getRandomIntInclusive",

    /**
     * Credit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     * @param {*} min
     * @param {*} max
     */
    value: function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    }
  }, {
    key: "getRandomIntInclusiveWithExceptions",
    value: function getRandomIntInclusiveWithExceptions(min, max) {
      var result = this.getRandomIntInclusive(min, max);

      for (var _len = arguments.length, excludes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        excludes[_key - 2] = arguments[_key];
      }

      return excludes.indexOf(result) == -1 ? result : this.getRandomIntInclusiveWithExceptions(min, max, excludes);
    }
  }]);

  return Random;
}();



/***/ }),

/***/ "./ui_tools.js":
/*!*********************!*\
  !*** ./ui_tools.js ***!
  \*********************/
/*! exports provided: populateNewQuestion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "populateNewQuestion", function() { return populateNewQuestion; });
/* harmony import */ var _model_Question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Question */ "./model/Question.js");
/* harmony import */ var _model_Evaluator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Evaluator */ "./model/Evaluator.js");
/* harmony import */ var _model_AnswerTips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/AnswerTips */ "./model/AnswerTips.js");




function createQuestion() {
  var firstNum = document.getElementById("firstNumGen").innerHTML;
  var secondNum = document.getElementById("secondNumGen").innerHTML;
  return new _model_Question__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(firstNum, 10), parseInt(secondNum, 10), document.getElementById('operations').value, parseInt(formPractice.answer.value, 10), new Date());
}

function appendResult(question) {
  var x = document.getElementById('practicedResults').insertRow(1);
  x.insertCell(0).innerHTML = question.firstNum;
  x.insertCell(1).innerHTML = question.secondNum;
  x.insertCell(2).innerHTML = question.submittedAnswer;
  x.insertCell(3).innerHTML = _model_Evaluator__WEBPACK_IMPORTED_MODULE_1__["default"].answer(question);
  x.insertCell(4).innerHTML = Object(_model_AnswerTips__WEBPACK_IMPORTED_MODULE_2__["default"])(question.operation, [question.firstNum, question.secondNum]);
  x.insertCell(5).innerHTML = _model_Evaluator__WEBPACK_IMPORTED_MODULE_1__["default"].evaluateQuestion(question);
  populateEmptyResult();
}

function populateNewQuestion(randomNumber, secondRandomNumber) {
  if (document.getElementById('operations').value == 'subtraction') {
    var input = [randomNumber, secondRandomNumber];
    input.sort(function (a, b) {
      return a - b;
    });
    document.getElementById('firstNumGen').innerHTML = input[1];
    document.getElementById('secondNumGen').innerHTML = input[0];
    return;
  }

  if (document.getElementById('operations').value == 'division') {
    var _input = [randomNumber, secondRandomNumber];

    _input.sort(function (a, b) {
      return a - b;
    });

    document.getElementById('firstNumGen').innerHTML = _input[1] * _input[0];
    document.getElementById('secondNumGen').innerHTML = _input[0];
    return;
  }

  document.getElementById('answer').value = '';
  document.getElementById('firstNumGen').innerHTML = randomNumber;
  document.getElementById('secondNumGen').innerHTML = secondRandomNumber;
}

function populateEmptyResult() {
  if (formPractice && formPractice.answer) {
    formPractice.answer.value = '';
  }
}

var uiTools = {
  createQuestion: createQuestion,
  appendResult: appendResult,
  populateNewQuestion: populateNewQuestion
};
/* harmony default export */ __webpack_exports__["default"] = (uiTools);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvQW5zd2VyVGlwcy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9tb2RlbC9FdmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIiwid2VicGFjazovL0FwcC8uL3VpX3Rvb2xzLmpzIl0sIm5hbWVzIjpbInN0YXJ0VGltZSIsIkRhdGUiLCJ0b3RhbENvcnJlY3QiLCJ0b3RhbEluY29ycmVjdCIsIndlbGNvbWVNZXNzYWdlIiwibGFzdFN1Ym1pc3Npb25UaW1lIiwic2lkIiwieW91ck5hbWVLZXlib2FyZEhhbmRsZXIiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwiYW5zd2VyS2V5Ym9hcmRIYW5kbGVyIiwiYW5zd2VyIiwidGFiQW5kRW50ZXJIYW5kbGVyIiwiaXNOdW1iZXIiLCJlIiwiS0VZQ09ERV9UQUIiLCJLRVlDT0RFX0VOVEVSIiwidmFsdWUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic3RhcnRQcmFjdGljZSIsImlubmVySFRNTCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInN0YWxlUmVzdWx0cyIsInJvd3MiLCJpIiwiZGVsZXRlUm93IiwiZmluYWxpemVTdWJtaXQiLCJ3aW5kb3ciLCJfZXZlbnQiLCJyZXBsZW5pc2giLCJzY29yZU1hcmsiLCJxdWVzdGlvbiIsIkV2YWx1YXRvciIsImV2YWx1YXRlUXVlc3Rpb24iLCJ1aVRvb2xzIiwiYXBwZW5kUmVzdWx0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJlbGFwc2VkVGltZSIsImZsb29yIiwiZXJyb3JSYXRpbyIsInByaW9yUXVlc3Rpb24iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlc3VsdCIsInRvRml4ZWQiLCJzcGVlZCIsInNwZWVkUmVzdWx0IiwicmVnaXN0ZXJVc2VyIiwic3R1ZGVudElkIiwiZGVmYXVsdERldGFpbHMiLCJzZXNzaW9ucyIsInByaW9yUHJhY3RpY2VEZXRhaWxzIiwidG9Mb3dlckNhc2UiLCJzZXNzaW9uVGltZSIsInRvSVNPU3RyaW5nIiwicHVzaCIsInN0dWRlbnREZXRhaWxzIiwibWF4IiwicGFyc2VJbnQiLCJyYW5kb21OdW1iZXIiLCJSYW5kb20iLCJnZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyIsInNlY29uZFJhbmRvbU51bWJlciIsImdldFJhbmRvbUludEluY2x1c2l2ZSIsInBvcHVsYXRlTmV3UXVlc3Rpb24iLCJUQUJfS0VZIiwiZXZ0IiwiY2hhckNvZGUiLCJ3aGljaCIsInRhYkhhbmRsZXIiLCJleHBsYWluTXVsdGlwbGljYXRpb24iLCJhIiwiYiIsInJlc3QiLCJ0ZW5zIiwib25lcyIsInRlbnNNdWx0aXBsZXMiLCJvbmVzTXVsdGlwbGVzIiwidGVuc1N0cmluZyIsIm9uZXNTdHJpbmciLCJ0b3RhbCIsImV4cGxhbmF0aW9uIiwibWF0aE9wZXJhdGlvbnMiLCJpbnB1dHMiLCJudW1iZXJzIiwic29ydCIsImNvdW50QnkiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwib3BlcmF0aW9ucyIsImFkZGl0aW9uIiwibXVsdGlwbGljYXRpb24iLCJzdWJ0cmFjdGlvbiIsImRpdmlzaW9uIiwibmFtZSIsImZ1bmMiLCJvcGVyYXRpb24iLCJmaXJzdE51bSIsInNlY29uZE51bSIsInN1Ym1pdHRlZEFuc3dlciIsInF1ZXN0aW9ucyIsImZpbHRlcmVkV2lucyIsImZpbHRlciIsInEiLCJtYXAiLCJ3aW5zIiwiY29uY2F0IiwiYXBwbHkiLCJmaWx0ZXJlZE5lZWRQcmFjdGljZSIsIm5lZWRQcmFjdGljZSIsInN1bW1hcnkiLCJRdWVzdGlvbiIsInN1Ym1pc3Npb25UaW1lIiwibWluIiwiY2VpbCIsInJhbmRvbSIsImV4Y2x1ZGVzIiwiaW5kZXhPZiIsImNyZWF0ZVF1ZXN0aW9uIiwiZm9ybVByYWN0aWNlIiwieCIsImluc2VydFJvdyIsImluc2VydENlbGwiLCJwb3B1bGF0ZUVtcHR5UmVzdWx0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsSUFBSUMsSUFBSixFQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLElBQUlD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LElBQU4sQ0FBVyxVQUFDZCxDQUFELEVBQUdDLENBQUg7QUFBQSxhQUFVRCxDQUFDLEdBQUNDLENBQVo7QUFBQSxLQUFYOztBQUNBL0UsWUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDbUIsU0FBdkMsR0FBbURyQixNQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVdBLE1BQUssQ0FBQyxDQUFELENBQW5FO0FBQ0FDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q21CLFNBQXhDLEdBQW9EckIsTUFBSyxDQUFDLENBQUQsQ0FBekQ7QUFDQTtBQUNEOztBQUNEQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NjLEtBQWxDLEdBQTBDLEVBQTFDO0FBQ0FmLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q21CLFNBQXZDLEdBQW1EOEMsWUFBbkQ7QUFDQWxFLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q21CLFNBQXhDLEdBQW9EaUQsa0JBQXBEO0FBQ0Q7O0FBRUQsU0FBUzhELG1CQUFULEdBQStCO0FBQzdCLE1BQUdKLFlBQVksSUFBSUEsWUFBWSxDQUFDdEgsTUFBaEMsRUFBd0M7QUFDdENzSCxnQkFBWSxDQUFDdEgsTUFBYixDQUFvQk0sS0FBcEIsR0FBNEIsRUFBNUI7QUFDRDtBQUNGOztBQUVELElBQU1vQixPQUFPLEdBQUc7QUFBRTJGLGdCQUFjLEVBQWRBLGNBQUY7QUFBa0IxRixjQUFZLEVBQVpBLFlBQWxCO0FBQWdDbUMscUJBQW1CLEVBQW5CQTtBQUFoQyxDQUFoQjtBQUVlcEMsc0VBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdWlPcHMgZnJvbSAnLi9tYXRoX29wZXJhdGlvbic7XG5cbmV4cG9ydCB7IHVpT3BzIH07XG4iLCJpbXBvcnQgRXZhbHVhdG9yIGZyb20gJy4vbW9kZWwvRXZhbHVhdG9yJztcbmltcG9ydCB1aVRvb2xzIGZyb20gJy4vdWlfdG9vbHMnO1xuaW1wb3J0IFJhbmRvbSBmcm9tICcuL3JhbmRvbSc7XG5cbmNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5sZXQgdG90YWxDb3JyZWN0ID0gMDtcbmxldCB0b3RhbEluY29ycmVjdCA9IDA7XG5sZXQgd2VsY29tZU1lc3NhZ2UgPSAnJztcbmxldCBsYXN0U3VibWlzc2lvblRpbWU7XG5sZXQgc2lkPScnO1xuXG5mdW5jdGlvbiB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ck5hbWUnKTtcbiAgaW5wdXQuZm9jdXMoKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0X25hbWUnKS5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuc3dlcktleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgYW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpO1xuICBpZiAoYW5zd2VyICYmIGFuc3dlci5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJBbmRFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBpc051bWJlciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFiQW5kRW50ZXJIYW5kbGVyKGUpIHtcbiAgY29uc3QgS0VZQ09ERV9UQUIgPSA5O1xuICBjb25zdCBLRVlDT0RFX0VOVEVSID0gMTM7XG4gIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREVfVEFCIHx8IGUua2V5Q29kZSA9PT0gS0VZQ09ERV9FTlRFUikge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QW5zd2VyJykuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1RhYiB1c2FnZSB3aXRob3V0IGlucHV0IScpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFByYWN0aWNlKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZU1lc3NhZ2UnKS5pbm5lckhUTUwgPSB3ZWxjb21lTWVzc2FnZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxRdWVzdGlvbnNQcmFjdGljZWQnKS5pbm5lckhUTUwgPSAnVG90YWwgUXVlc3Rpb25zIFByYWN0aWNlZDogIDAnO1xuICAvKiBJZiBzb21lb25lIGRvZXNuJ3QgY2xvZXMgdGhpcyB3aW5kb3csIGJ1dCBzdGlsbCB1c2luZyBpdCEgKi9cbiAgY29uc3Qgc3RhbGVSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5yb3dzLmxlbmd0aDtcbiAgaWYgKHN0YWxlUmVzdWx0cyA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWxlUmVzdWx0cyAtIDE7IGkrKykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5kZWxldGVSb3coLTEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZVN1Ym1pdCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLmNsaWNrKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5mb2N1cygpO1xuICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5zY3JvbGxJbnRvVmlldygpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChfZXZlbnQpID0+IHtcbiAgcmVwbGVuaXNoKCk7XG4gIGFuc3dlcktleWJvYXJkSGFuZGxlcigpO1xuICB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpO1xufSk7XG5cblxuZXhwb3J0IHsgdWlUb29scyBhcyB1aSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gc2NvcmVNYXJrKHF1ZXN0aW9uKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgLy9kbyBub3RoaW5nLi5cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZW50ZXIgdXNhZ2Ugd2l0aG91dCBpbnB1dCEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKEV2YWx1YXRvci5ldmFsdWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uKSkge1xuICAgIHRvdGFsQ29ycmVjdCsrO1xuICB9IGVsc2Uge1xuICAgIHRvdGFsSW5jb3JyZWN0Kys7XG4gIH1cbiAgdWlUb29scy5hcHBlbmRSZXN1bHQocXVlc3Rpb24pO1xuICByZXBsZW5pc2goKTtcbiAgbGFzdFN1Ym1pc3Npb25UaW1lID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGxhc3RTdWJtaXNzaW9uVGltZSAtIHN0YXJ0VGltZSk7XG4gIGNvbnN0IGVsYXBzZWRUaW1lID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gIGNvbnN0IGVycm9yUmF0aW8gPSAodG90YWxJbmNvcnJlY3QgLyAodG90YWxDb3JyZWN0ICsgdG90YWxJbmNvcnJlY3QpKSAqIDEwMDtcblxuICBjb25zdCBwcmlvclF1ZXN0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzaWQpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2lkLCBKU09OLnN0cmluZ2lmeShbcXVlc3Rpb24sIC4uLnByaW9yUXVlc3Rpb25dKSk7XG5cbiAgbGV0IHJlc3VsdCA9IGBDb3JyZWN0ID0+ICR7dG90YWxDb3JyZWN0fTxici8+SW5jb3JyZWN0ID0+ICR7dG90YWxJbmNvcnJlY3R9YDtcbiAgaWYgKGVycm9yUmF0aW8gPiAwLjAwMSkge1xuICAgIHJlc3VsdCA9IGAke3Jlc3VsdH08YnIvPkVycm9yIHJhdGlvIDo6ICR7ZXJyb3JSYXRpby50b0ZpeGVkKDIpfSVgO1xuICB9XG4gIGxhc3RTdWJtaXNzaW9uVGltZT0gbmV3IERhdGUoKTtcbiAgY29uc3Qgc3BlZWQgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gdG90YWxDb3JyZWN0KTtcbiAgY29uc3Qgc3BlZWRSZXN1bHQgPSBgPGJyLz5TcGVlZCA9ICR7c3BlZWR9LCBOdW1iZXIgb2Ygc2Vjb25kcyBwZXIgcXVlc3Rpb24uIExvd2VyIHRoZSBiZXR0ZXIhYDtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxRdWVzdGlvbnNQcmFjdGljZWQnKS5pbm5lckhUTUwgPSBgVG90YWwgUXVlc3Rpb25zIFByYWN0aWNlZDogICR7dG90YWxDb3JyZWN0ICsgdG90YWxJbmNvcnJlY3R9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS5pbm5lckhUTUwgPSBgJHtyZXN1bHR9PGJyLz4ke3NwZWVkUmVzdWx0fWA7XG4gIGZpbmFsaXplU3VibWl0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclVzZXIoc3R1ZGVudElkKSB7XG4gIGNvbnN0IGRlZmF1bHREZXRhaWxzID0ge1xuICAgIHN0dWRlbnRJZCxcbiAgICBzZXNzaW9uczogW10sXG4gIH07XG4gIGxldCBwcmlvclByYWN0aWNlRGV0YWlscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0dWRlbnRJZC50b0xvd2VyQ2FzZSgpKTtcblxuICBsZXQgc2Vzc2lvblRpbWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gIHNpZCA9IGBQcmFjdGljZV8ke3N0dWRlbnRJZH1AJHtzZXNzaW9uVGltZX1gO1xuXG4gIGlmIChwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHdlbGNvbWVNZXNzYWdlID0gYDxiPiR7c3R1ZGVudElkfSBpcyBhbWF6aW5nIHBlcnNvbiE8L2I+ICR7c3R1ZGVudElkfSBwcmFjdGljZXMgbGlrZSBjaGFtcGlvbiE8YnIvPlN0YXJ0IHRpbWUgOiAke3Nlc3Npb25UaW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgd2VsY29tZU1lc3NhZ2UgPSBgPGI+SGkhICR7c3R1ZGVudElkfSwgeW91IGFyZSBjb3VyYWdlb3VzITwvYj4gMTAwMCBtaWxlcyBqb3VybmV5IGJlZ2lucyB3aXRoIHNpbmdsZSBzdGVwITxici8+U3RhcnQgdGltZSA6ICR7c2Vzc2lvblRpbWV9YDtcbiAgfVxuICBzdGFydFByYWN0aWNlKCk7XG4gIGlmICghcHJpb3JQcmFjdGljZURldGFpbHMpIHtcbiAgICBwcmlvclByYWN0aWNlRGV0YWlscyA9IGRlZmF1bHREZXRhaWxzO1xuICB9IGVsc2Uge1xuICAgIHByaW9yUHJhY3RpY2VEZXRhaWxzID0gSlNPTi5wYXJzZShwcmlvclByYWN0aWNlRGV0YWlscyk7XG4gIH1cbiAgcHJpb3JQcmFjdGljZURldGFpbHMuc2Vzc2lvbnMucHVzaChzaWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzaWQsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgY29uc3Qgc3R1ZGVudERldGFpbHMgPSB7IHNlc3Npb25zOiBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucywgc3R1ZGVudElkIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIHN0dWRlbnREZXRhaWxzLnN0dWRlbnRJZC50b0xvd2VyQ2FzZSgpLFxuICAgIEpTT04uc3RyaW5naWZ5KHN0dWRlbnREZXRhaWxzKSxcbiAgKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuZm9jdXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxlbmlzaCgpIHtcbiAgY29uc3QgbWF4ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heElucHV0JykudmFsdWUsIDEwKTtcbiAgY29uc3QgcmFuZG9tTnVtYmVyID0gUmFuZG9tLmdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKDMsIG1heCwgWzEwXSk7XG4gIGNvbnN0IHNlY29uZFJhbmRvbU51bWJlciA9IFJhbmRvbS5nZXRSYW5kb21JbnRJbmNsdXNpdmUoMywgbWF4LCBbMTBdKTtcbiAgdWlUb29scy5wb3B1bGF0ZU5ld1F1ZXN0aW9uKHJhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGV2ZW50KSB7XG4gIGNvbnN0IFRBQl9LRVk9OTtcbiAgY29uc3QgZXZ0ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICBjb25zdCBjaGFyQ29kZSA9IGV2ZW50LndoaWNoID8gZXZlbnQud2hpY2ggOiBldmVudC5rZXlDb2RlO1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWSkge1xuICAgIHJldHVybiB0YWJIYW5kbGVyKGV2ZW50KTtcbiAgfVxuICBpZiAoY2hhckNvZGUgPiAzMSAmJiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0iLCJmdW5jdGlvbiBleHBsYWluTXVsdGlwbGljYXRpb24oW2EsIGIsIC4uLnJlc3RdKSB7XG4gIGNvbnN0IHRlbnMgPSBNYXRoLmZsb29yKGIgLyAxMCkgKiAxMDtcbiAgY29uc3Qgb25lcyA9IE1hdGguZmxvb3IoYiAlIDEwKTtcbiAgY29uc3QgdGVuc011bHRpcGxlcyA9IHRlbnMgKiBhO1xuICBjb25zdCBvbmVzTXVsdGlwbGVzID0gb25lcyAqIGE7XG4gIGNvbnN0IHRlbnNTdHJpbmcgPSBgJHt0ZW5zfSB4ICR7YX0gPSAke3RlbnMgKiBhfWA7XG4gIGNvbnN0IG9uZXNTdHJpbmcgPSBgJHtvbmVzfSB4ICR7YX0gPSAke29uZXMgKiBhfWA7XG4gIGNvbnN0IHRvdGFsID0gYCR7dGVuc011bHRpcGxlc30gKyAke29uZXNNdWx0aXBsZXN9ID0gJHtcbiAgICB0ZW5zTXVsdGlwbGVzICsgb25lc011bHRpcGxlc31gO1xuICByZXR1cm4gb25lcyAhPSAwXG4gICAgPyBgJHtvbmVzU3RyaW5nfTxicj4ke3RlbnNTdHJpbmd9PGJyPiR7dG90YWx9YFxuICAgIDogYCR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBsYW5hdGlvbihtYXRoT3BlcmF0aW9ucywgaW5wdXRzKSB7XG4gIGNvbnN0IG51bWJlcnMgPSBbLi4uaW5wdXRzXTtcbiAgbnVtYmVycy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGlmIChtYXRoT3BlcmF0aW9ucyA9PT0gJ211bHRpcGxpY2F0aW9uJykge1xuICAgIGlmIChudW1iZXJzWzFdID4gMTAgJiYgbnVtYmVyc1swXSA8IDEwKSB7XG4gICAgICByZXR1cm4gZXhwbGFpbk11bHRpcGxpY2F0aW9uKG51bWJlcnMpO1xuICAgIH0gaWYgKG51bWJlcnNbMV0gPiAxMCAmJiBudW1iZXJzWzBdID4gMTApIHtcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24oW251bWJlcnNbMV0sIG51bWJlcnNbMF1dKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4iLCJmdW5jdGlvbiBjb3VudEJ5KGlucHV0KSB7XG4gIGNvbnN0IGEgPSBpbnB1dC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgIGlmICh0eXBlb2YgYWNjW2N1cnJdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWNjW2N1cnJdID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW2N1cnJdICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIGE7XG59O1xuXG5cbmNvbnN0IG9wZXJhdGlvbnMgPSB7XG4gIGFkZGl0aW9uOiAoYSwgYikgPT4gYSArIGIsXG4gIG11bHRpcGxpY2F0aW9uOiAoYSwgYikgPT4gYSAqIGIsXG4gIHN1YnRyYWN0aW9uOiAoYSwgYikgPT4gYSAtIGIsXG4gIGRpdmlzaW9uOiAoYSwgYikgPT4gYSAvIGIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmFsdWF0b3Ige1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBhbnN3ZXIocXVlc3Rpb24pIHtcbiAgICBjb25zdCBmdW5jID0gb3BlcmF0aW9uc1txdWVzdGlvbi5vcGVyYXRpb25dO1xuICAgIHJldHVybiBmdW5jKHF1ZXN0aW9uLmZpcnN0TnVtLCBxdWVzdGlvbi5zZWNvbmROdW0pO1xuICB9XG5cbiAgc3RhdGljIGV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pIHtcbiAgICBjb25zdCBmdW5jID0gb3BlcmF0aW9uc1txdWVzdGlvbi5vcGVyYXRpb25dO1xuICAgIHJldHVybiBmdW5jKHF1ZXN0aW9uLmZpcnN0TnVtLCBxdWVzdGlvbi5zZWNvbmROdW0pID09PSBxdWVzdGlvbi5zdWJtaXR0ZWRBbnN3ZXI7XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGUoWy4uLnF1ZXN0aW9uc10pIHtcbiAgICBjb25zdCBmaWx0ZXJlZFdpbnMgPSBxdWVzdGlvbnNcbiAgICAgIC5maWx0ZXIoKHEpID0+IHEub3BlcmF0aW9uID09PSAnbXVsdGlwbGljYXRpb24nKVxuICAgICAgLmZpbHRlcigocSkgPT4gcS5maXJzdE51bSAqIHEuc2Vjb25kTnVtID09IHEuc3VibWl0dGVkQW5zd2VyKVxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XG5cbiAgICBjb25zdCB3aW5zID0gKHR5cGVvZiBmaWx0ZXJlZFdpbnMgIT09ICd1bmRlZmluZWQnKSA/IFtdLmNvbmNhdC5hcHBseShbXSwgZmlsdGVyZWRXaW5zKSA6IFtdO1xuXG4gICAgY29uc3QgZmlsdGVyZWROZWVkUHJhY3RpY2UgPSBxdWVzdGlvbnNcbiAgICAgIC5maWx0ZXIoKHEpID0+IHEub3BlcmF0aW9uID09PSAnbXVsdGlwbGljYXRpb24nKVxuICAgICAgLmZpbHRlcigocSkgPT4gcS5maXJzdE51bSAqIHEuc2Vjb25kTnVtICE9PSBxLnN1Ym1pdHRlZEFuc3dlcilcbiAgICAgIC5tYXAoKHEpID0+IFtxLmZpcnN0TnVtLCBxLnNlY29uZE51bV0pO1xuXG4gICAgY29uc3QgbmVlZFByYWN0aWNlID0gKHR5cGVvZiBmaWx0ZXJlZE5lZWRQcmFjdGljZSAhPT0gJ3VuZGVmaW5lZCcpID8gW10uY29uY2F0LmFwcGx5KFtdLCBmaWx0ZXJlZE5lZWRQcmFjdGljZSkgOiBbXTtcblxuICAgIGNvbnN0IHN1bW1hcnkgPSB7XG4gICAgICB3aW5zOiBjb3VudEJ5KHdpbnMpLFxuICAgICAgbmVlZFByYWN0aWNlOiBjb3VudEJ5KG5lZWRQcmFjdGljZSksXG4gICAgfTtcbiAgICByZXR1cm4gc3VtbWFyeTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzICBRdWVzdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0TnVtLCBzZWNvbmROdW0sIG9wZXJhdGlvbiwgc3VibWl0dGVkQW5zd2VyLCBzdWJtaXNzaW9uVGltZSkge1xuICAgIHRoaXMuZmlyc3ROdW0gPSBmaXJzdE51bTtcbiAgICB0aGlzLnNlY29uZE51bSA9IHNlY29uZE51bTtcbiAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICB0aGlzLnN1Ym1pdHRlZEFuc3dlciA9IHN1Ym1pdHRlZEFuc3dlcjtcbiAgICB0aGlzLnN1Ym1pc3Npb25UaW1lID0gc3VibWlzc2lvblRpbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbSB7XG4gIC8qKlxuICAgKiBDcmVkaXQgOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3JhbmRvbVxuICAgKiBAcGFyYW0geyp9IG1pblxuICAgKiBAcGFyYW0geyp9IG1heFxuICAgKi9cbiAgc3RhdGljIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8gVGhlIG1heGltdW0gaXMgaW5jbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgfVxuXG4gIHN0YXRpYyBnZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyhtaW4sIG1heCwgLi4uZXhjbHVkZXMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCk7XG4gICAgcmV0dXJuIGV4Y2x1ZGVzLmluZGV4T2YocmVzdWx0KSA9PSAtMSA/IHJlc3VsdCA6IHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlV2l0aEV4Y2VwdGlvbnMobWluLCBtYXgsIGV4Y2x1ZGVzKTtcbiAgfVxufSIsImltcG9ydCBRdWVzdGlvbiBmcm9tICcuL21vZGVsL1F1ZXN0aW9uJztcbmltcG9ydCBFdmFsdWF0b3IgZnJvbSAnLi9tb2RlbC9FdmFsdWF0b3InO1xuaW1wb3J0IGV4cGxhbmF0aW9uIGZyb20gJy4vbW9kZWwvQW5zd2VyVGlwcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uKCkge1xuXG4gIGNvbnN0IGZpcnN0TnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdE51bUdlblwiKS5pbm5lckhUTUw7XG4gIGNvbnN0IHNlY29uZE51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2Vjb25kTnVtR2VuXCIpLmlubmVySFRNTDtcblxuICByZXR1cm4gbmV3IFF1ZXN0aW9uKFxuICAgIHBhcnNlSW50KGZpcnN0TnVtLCAxMCksXG4gICAgcGFyc2VJbnQoc2Vjb25kTnVtLCAxMCksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZSxcbiAgICBwYXJzZUludChmb3JtUHJhY3RpY2UuYW5zd2VyLnZhbHVlLCAxMCksXG4gICAgbmV3IERhdGUoKVxuICApO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRSZXN1bHQocXVlc3Rpb24pIHtcbiAgY29uc3QgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmFjdGljZWRSZXN1bHRzJykuaW5zZXJ0Um93KDEpO1xuICB4Lmluc2VydENlbGwoMCkuaW5uZXJIVE1MID0gcXVlc3Rpb24uZmlyc3ROdW07XG4gIHguaW5zZXJ0Q2VsbCgxKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5zZWNvbmROdW07XG4gIHguaW5zZXJ0Q2VsbCgyKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5zdWJtaXR0ZWRBbnN3ZXI7XG4gIHguaW5zZXJ0Q2VsbCgzKS5pbm5lckhUTUwgPSBFdmFsdWF0b3IuYW5zd2VyKHF1ZXN0aW9uKTtcbiAgeC5pbnNlcnRDZWxsKDQpLmlubmVySFRNTCA9IGV4cGxhbmF0aW9uKHF1ZXN0aW9uLm9wZXJhdGlvbiwgW3F1ZXN0aW9uLmZpcnN0TnVtLCBxdWVzdGlvbi5zZWNvbmROdW1dKTtcbiAgeC5pbnNlcnRDZWxsKDUpLmlubmVySFRNTCA9IEV2YWx1YXRvci5ldmFsdWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uKTtcbiAgcG9wdWxhdGVFbXB0eVJlc3VsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVOZXdRdWVzdGlvbihyYW5kb21OdW1iZXIsIHNlY29uZFJhbmRvbU51bWJlcikge1xuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlcmF0aW9ucycpLnZhbHVlID09ICdzdWJ0cmFjdGlvbicpIHtcbiAgICBjb25zdCBpbnB1dCA9IFtyYW5kb21OdW1iZXIsIHNlY29uZFJhbmRvbU51bWJlcl07XG4gICAgaW5wdXQuc29ydCgoYSxiKSA9PiAoYS1iKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0TnVtR2VuJykuaW5uZXJIVE1MID0gaW5wdXRbMV07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLmlubmVySFRNTCA9IGlucHV0WzBdO1xuICAgIHJldHVybjtcbiAgfVxuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlcmF0aW9ucycpLnZhbHVlID09ICdkaXZpc2lvbicpIHtcbiAgICBjb25zdCBpbnB1dCA9IFtyYW5kb21OdW1iZXIsIHNlY29uZFJhbmRvbU51bWJlcl07XG4gICAgaW5wdXQuc29ydCgoYSxiKSA9PiAoYS1iKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0TnVtR2VuJykuaW5uZXJIVE1MID0gaW5wdXRbMV0gKiBpbnB1dFswXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kTnVtR2VuJykuaW5uZXJIVE1MID0gaW5wdXRbMF07XG4gICAgcmV0dXJuO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS5pbm5lckhUTUwgPSByYW5kb21OdW1iZXI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmROdW1HZW4nKS5pbm5lckhUTUwgPSBzZWNvbmRSYW5kb21OdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlRW1wdHlSZXN1bHQoKSB7XG4gIGlmKGZvcm1QcmFjdGljZSAmJiBmb3JtUHJhY3RpY2UuYW5zd2VyKSB7XG4gICAgZm9ybVByYWN0aWNlLmFuc3dlci52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmNvbnN0IHVpVG9vbHMgPSB7IGNyZWF0ZVF1ZXN0aW9uLCBhcHBlbmRSZXN1bHQsIHBvcHVsYXRlTmV3UXVlc3Rpb24gfTtcblxuZXhwb3J0IGRlZmF1bHQgdWlUb29scztcbiJdLCJzb3VyY2VSb290IjoiIn0=