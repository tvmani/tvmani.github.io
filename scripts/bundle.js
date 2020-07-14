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
    if (document.getElementById('answer').value && document.getElementById('answer').value.length > 1) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvQW5zd2VyVGlwcy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9tb2RlbC9FdmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIiwid2VicGFjazovL0FwcC8uL3VpX3Rvb2xzLmpzIl0sIm5hbWVzIjpbInN0YXJ0VGltZSIsIkRhdGUiLCJ0b3RhbENvcnJlY3QiLCJ0b3RhbEluY29ycmVjdCIsIndlbGNvbWVNZXNzYWdlIiwibGFzdFN1Ym1pc3Npb25UaW1lIiwic2lkIiwieW91ck5hbWVLZXlib2FyZEhhbmRsZXIiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwiYW5zd2VyS2V5Ym9hcmRIYW5kbGVyIiwiYW5zd2VyIiwidGFiQW5kRW50ZXJIYW5kbGVyIiwiaXNOdW1iZXIiLCJlIiwiS0VZQ09ERV9UQUIiLCJLRVlDT0RFX0VOVEVSIiwidmFsdWUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwic3RhcnRQcmFjdGljZSIsImlubmVySFRNTCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInN0YWxlUmVzdWx0cyIsInJvd3MiLCJpIiwiZGVsZXRlUm93IiwiZmluYWxpemVTdWJtaXQiLCJ3aW5kb3ciLCJfZXZlbnQiLCJyZXBsZW5pc2giLCJzY29yZU1hcmsiLCJxdWVzdGlvbiIsIkV2YWx1YXRvciIsImV2YWx1YXRlUXVlc3Rpb24iLCJ1aVRvb2xzIiwiYXBwZW5kUmVzdWx0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJlbGFwc2VkVGltZSIsImZsb29yIiwiZXJyb3JSYXRpbyIsInByaW9yUXVlc3Rpb24iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlc3VsdCIsInRvRml4ZWQiLCJzcGVlZCIsInNwZWVkUmVzdWx0IiwicmVnaXN0ZXJVc2VyIiwic3R1ZGVudElkIiwiZGVmYXVsdERldGFpbHMiLCJzZXNzaW9ucyIsInByaW9yUHJhY3RpY2VEZXRhaWxzIiwidG9Mb3dlckNhc2UiLCJzZXNzaW9uVGltZSIsInRvSVNPU3RyaW5nIiwicHVzaCIsInN0dWRlbnREZXRhaWxzIiwibWF4IiwicGFyc2VJbnQiLCJyYW5kb21OdW1iZXIiLCJSYW5kb20iLCJnZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyIsInNlY29uZFJhbmRvbU51bWJlciIsImdldFJhbmRvbUludEluY2x1c2l2ZSIsInBvcHVsYXRlTmV3UXVlc3Rpb24iLCJUQUJfS0VZIiwiZXZ0IiwiY2hhckNvZGUiLCJ3aGljaCIsInRhYkhhbmRsZXIiLCJleHBsYWluTXVsdGlwbGljYXRpb24iLCJhIiwiYiIsInJlc3QiLCJ0ZW5zIiwib25lcyIsInRlbnNNdWx0aXBsZXMiLCJvbmVzTXVsdGlwbGVzIiwidGVuc1N0cmluZyIsIm9uZXNTdHJpbmciLCJ0b3RhbCIsImV4cGxhbmF0aW9uIiwibWF0aE9wZXJhdGlvbnMiLCJpbnB1dHMiLCJudW1iZXJzIiwic29ydCIsImNvdW50QnkiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwib3BlcmF0aW9ucyIsImFkZGl0aW9uIiwibXVsdGlwbGljYXRpb24iLCJzdWJ0cmFjdGlvbiIsImRpdmlzaW9uIiwibmFtZSIsImZ1bmMiLCJvcGVyYXRpb24iLCJmaXJzdE51bSIsInNlY29uZE51bSIsInN1Ym1pdHRlZEFuc3dlciIsInF1ZXN0aW9ucyIsImZpbHRlcmVkV2lucyIsImZpbHRlciIsInEiLCJtYXAiLCJ3aW5zIiwiY29uY2F0IiwiYXBwbHkiLCJmaWx0ZXJlZE5lZWRQcmFjdGljZSIsIm5lZWRQcmFjdGljZSIsInN1bW1hcnkiLCJRdWVzdGlvbiIsInN1Ym1pc3Npb25UaW1lIiwibWluIiwiY2VpbCIsInJhbmRvbSIsImV4Y2x1ZGVzIiwiaW5kZXhPZiIsImNyZWF0ZVF1ZXN0aW9uIiwiZm9ybVByYWN0aWNlIiwieCIsImluc2VydFJvdyIsImluc2VydENlbGwiLCJwb3B1bGF0ZUVtcHR5UmVzdWx0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsSUFBSUMsSUFBSixFQUFsQjtBQUNBLElBQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLElBQUlD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LElBQU4sQ0FBVyxVQUFDZCxDQUFELEVBQUdDLENBQUg7QUFBQSxhQUFVRCxDQUFDLEdBQUNDLENBQVo7QUFBQSxLQUFYOztBQUNBL0UsWUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDbUIsU0FBdkMsR0FBbURyQixNQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVdBLE1BQUssQ0FBQyxDQUFELENBQW5FO0FBQ0FDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q21CLFNBQXhDLEdBQW9EckIsTUFBSyxDQUFDLENBQUQsQ0FBekQ7QUFDQTtBQUNEOztBQUNEQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NjLEtBQWxDLEdBQTBDLEVBQTFDO0FBQ0FmLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1Q21CLFNBQXZDLEdBQW1EOEMsWUFBbkQ7QUFDQWxFLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q21CLFNBQXhDLEdBQW9EaUQsa0JBQXBEO0FBQ0Q7O0FBRUQsU0FBUzhELG1CQUFULEdBQStCO0FBQzdCLE1BQUdKLFlBQVksSUFBSUEsWUFBWSxDQUFDdEgsTUFBaEMsRUFBd0M7QUFDdENzSCxnQkFBWSxDQUFDdEgsTUFBYixDQUFvQk0sS0FBcEIsR0FBNEIsRUFBNUI7QUFDRDtBQUNGOztBQUVELElBQU1vQixPQUFPLEdBQUc7QUFBRTJGLGdCQUFjLEVBQWRBLGNBQUY7QUFBa0IxRixjQUFZLEVBQVpBLFlBQWxCO0FBQWdDbUMscUJBQW1CLEVBQW5CQTtBQUFoQyxDQUFoQjtBQUVlcEMsc0VBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdWlPcHMgZnJvbSAnLi9tYXRoX29wZXJhdGlvbic7XG5cbmV4cG9ydCB7IHVpT3BzIH07XG4iLCJpbXBvcnQgRXZhbHVhdG9yIGZyb20gJy4vbW9kZWwvRXZhbHVhdG9yJztcbmltcG9ydCB1aVRvb2xzIGZyb20gJy4vdWlfdG9vbHMnO1xuaW1wb3J0IFJhbmRvbSBmcm9tICcuL3JhbmRvbSc7XG5cbmNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5sZXQgdG90YWxDb3JyZWN0ID0gMDtcbmxldCB0b3RhbEluY29ycmVjdCA9IDA7XG5sZXQgd2VsY29tZU1lc3NhZ2UgPSAnJztcbmxldCBsYXN0U3VibWlzc2lvblRpbWU7XG5sZXQgc2lkPScnO1xuXG5mdW5jdGlvbiB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ck5hbWUnKTtcbiAgaW5wdXQuZm9jdXMoKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0X25hbWUnKS5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuc3dlcktleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgYW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpO1xuICBpZiAoYW5zd2VyICYmIGFuc3dlci5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJBbmRFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBpc051bWJlciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFiQW5kRW50ZXJIYW5kbGVyKGUpIHtcbiAgY29uc3QgS0VZQ09ERV9UQUIgPSA5O1xuICBjb25zdCBLRVlDT0RFX0VOVEVSID0gMTM7XG4gIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREVfVEFCIHx8IGUua2V5Q29kZSA9PT0gS0VZQ09ERV9FTlRFUikge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRBbnN3ZXInKS5jbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnVGFiIHVzYWdlIHdpdGhvdXQgaW5wdXQhJyk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0UHJhY3RpY2UoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lTWVzc2FnZScpLmlubmVySFRNTCA9IHdlbGNvbWVNZXNzYWdlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1tYXJ5JykuaW5uZXJIVE1MID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFF1ZXN0aW9uc1ByYWN0aWNlZCcpLmlubmVySFRNTCA9ICdUb3RhbCBRdWVzdGlvbnMgUHJhY3RpY2VkOiAgMCc7XG4gIC8qIElmIHNvbWVvbmUgZG9lc24ndCBjbG9lcyB0aGlzIHdpbmRvdywgYnV0IHN0aWxsIHVzaW5nIGl0ISAqL1xuICBjb25zdCBzdGFsZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLnJvd3MubGVuZ3RoO1xuICBpZiAoc3RhbGVSZXN1bHRzID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhbGVSZXN1bHRzIC0gMTsgaSsrKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLmRlbGV0ZVJvdygtMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplU3VibWl0KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuY2xpY2soKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLmZvY3VzKCk7XG4gIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnNjcm9sbEludG9WaWV3KCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKF9ldmVudCkgPT4ge1xuICByZXBsZW5pc2goKTtcbiAgYW5zd2VyS2V5Ym9hcmRIYW5kbGVyKCk7XG4gIHlvdXJOYW1lS2V5Ym9hcmRIYW5kbGVyKCk7XG59KTtcblxuXG5leHBvcnQgeyB1aVRvb2xzIGFzIHVpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29yZU1hcmsocXVlc3Rpb24pIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS52YWx1ZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUubGVuZ3RoID49IDEpIHtcbiAgICAvL2RvIG5vdGhpbmcuLlxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdlbnRlciB1c2FnZSB3aXRob3V0IGlucHV0IScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoRXZhbHVhdG9yLmV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pKSB7XG4gICAgdG90YWxDb3JyZWN0Kys7XG4gIH0gZWxzZSB7XG4gICAgdG90YWxJbmNvcnJlY3QrKztcbiAgfVxuICB1aVRvb2xzLmFwcGVuZFJlc3VsdChxdWVzdGlvbik7XG4gIHJlcGxlbmlzaCgpO1xuICBsYXN0U3VibWlzc2lvblRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkaWZmID0gTWF0aC5hYnMobGFzdFN1Ym1pc3Npb25UaW1lIC0gc3RhcnRUaW1lKTtcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbiAgY29uc3QgZXJyb3JSYXRpbyA9ICh0b3RhbEluY29ycmVjdCAvICh0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdCkpICogMTAwO1xuXG4gIGNvbnN0IHByaW9yUXVlc3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNpZCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzaWQsIEpTT04uc3RyaW5naWZ5KFtxdWVzdGlvbiwgLi4ucHJpb3JRdWVzdGlvbl0pKTtcblxuICBsZXQgcmVzdWx0ID0gYENvcnJlY3QgPT4gJHt0b3RhbENvcnJlY3R9PGJyLz5JbmNvcnJlY3QgPT4gJHt0b3RhbEluY29ycmVjdH1gO1xuICBpZiAoZXJyb3JSYXRpbyA+IDAuMDAxKSB7XG4gICAgcmVzdWx0ID0gYCR7cmVzdWx0fTxici8+RXJyb3IgcmF0aW8gOjogJHtlcnJvclJhdGlvLnRvRml4ZWQoMil9JWA7XG4gIH1cbiAgbGFzdFN1Ym1pc3Npb25UaW1lPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzcGVlZCA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyB0b3RhbENvcnJlY3QpO1xuICBjb25zdCBzcGVlZFJlc3VsdCA9IGA8YnIvPlNwZWVkID0gJHtzcGVlZH0sIE51bWJlciBvZiBzZWNvbmRzIHBlciBxdWVzdGlvbi4gTG93ZXIgdGhlIGJldHRlciFgO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFF1ZXN0aW9uc1ByYWN0aWNlZCcpLmlubmVySFRNTCA9IGBUb3RhbCBRdWVzdGlvbnMgUHJhY3RpY2VkOiAgJHt0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdH1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9IGAke3Jlc3VsdH08YnIvPiR7c3BlZWRSZXN1bHR9YDtcbiAgZmluYWxpemVTdWJtaXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihzdHVkZW50SWQpIHtcbiAgY29uc3QgZGVmYXVsdERldGFpbHMgPSB7XG4gICAgc3R1ZGVudElkLFxuICAgIHNlc3Npb25zOiBbXSxcbiAgfTtcbiAgbGV0IHByaW9yUHJhY3RpY2VEZXRhaWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3R1ZGVudElkLnRvTG93ZXJDYXNlKCkpO1xuXG4gIGxldCBzZXNzaW9uVGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgc2lkID0gYFByYWN0aWNlXyR7c3R1ZGVudElkfUAke3Nlc3Npb25UaW1lfWA7XG5cbiAgaWYgKHByaW9yUHJhY3RpY2VEZXRhaWxzKSB7XG4gICAgd2VsY29tZU1lc3NhZ2UgPSBgPGI+JHtzdHVkZW50SWR9IGlzIGFtYXppbmcgcGVyc29uITwvYj4gJHtzdHVkZW50SWR9IHByYWN0aWNlcyBsaWtlIGNoYW1waW9uITxici8+U3RhcnQgdGltZSA6ICR7c2Vzc2lvblRpbWV9YDtcbiAgfSBlbHNlIHtcbiAgICB3ZWxjb21lTWVzc2FnZSA9IGA8Yj5IaSEgJHtzdHVkZW50SWR9LCB5b3UgYXJlIGNvdXJhZ2VvdXMhPC9iPiAxMDAwIG1pbGVzIGpvdXJuZXkgYmVnaW5zIHdpdGggc2luZ2xlIHN0ZXAhPGJyLz5TdGFydCB0aW1lIDogJHtzZXNzaW9uVGltZX1gO1xuICB9XG4gIHN0YXJ0UHJhY3RpY2UoKTtcbiAgaWYgKCFwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHByaW9yUHJhY3RpY2VEZXRhaWxzID0gZGVmYXVsdERldGFpbHM7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JQcmFjdGljZURldGFpbHMgPSBKU09OLnBhcnNlKHByaW9yUHJhY3RpY2VEZXRhaWxzKTtcbiAgfVxuICBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucy5wdXNoKHNpZCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNpZCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICBjb25zdCBzdHVkZW50RGV0YWlscyA9IHsgc2Vzc2lvbnM6IHByaW9yUHJhY3RpY2VEZXRhaWxzLnNlc3Npb25zLCBzdHVkZW50SWQgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgc3R1ZGVudERldGFpbHMuc3R1ZGVudElkLnRvTG93ZXJDYXNlKCksXG4gICAgSlNPTi5zdHJpbmdpZnkoc3R1ZGVudERldGFpbHMpLFxuICApO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5mb2N1cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGVuaXNoKCkge1xuICBjb25zdCBtYXggPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4SW5wdXQnKS52YWx1ZSwgMTApO1xuICBjb25zdCByYW5kb21OdW1iZXIgPSBSYW5kb20uZ2V0UmFuZG9tSW50SW5jbHVzaXZlV2l0aEV4Y2VwdGlvbnMoMywgbWF4LCBbMTBdKTtcbiAgY29uc3Qgc2Vjb25kUmFuZG9tTnVtYmVyID0gUmFuZG9tLmdldFJhbmRvbUludEluY2x1c2l2ZSgzLCBtYXgsIFsxMF0pO1xuICB1aVRvb2xzLnBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoZXZlbnQpIHtcbiAgY29uc3QgVEFCX0tFWT05O1xuICBjb25zdCBldnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gIGNvbnN0IGNoYXJDb2RlID0gZXZlbnQud2hpY2ggPyBldmVudC53aGljaCA6IGV2ZW50LmtleUNvZGU7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSBUQUJfS0VZKSB7XG4gICAgcmV0dXJuIHRhYkhhbmRsZXIoZXZlbnQpO1xuICB9XG4gIGlmIChjaGFyQ29kZSA+IDMxICYmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSIsImZ1bmN0aW9uIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbYSwgYiwgLi4ucmVzdF0pIHtcbiAgY29uc3QgdGVucyA9IE1hdGguZmxvb3IoYiAvIDEwKSAqIDEwO1xuICBjb25zdCBvbmVzID0gTWF0aC5mbG9vcihiICUgMTApO1xuICBjb25zdCB0ZW5zTXVsdGlwbGVzID0gdGVucyAqIGE7XG4gIGNvbnN0IG9uZXNNdWx0aXBsZXMgPSBvbmVzICogYTtcbiAgY29uc3QgdGVuc1N0cmluZyA9IGAke3RlbnN9IHggJHthfSA9ICR7dGVucyAqIGF9YDtcbiAgY29uc3Qgb25lc1N0cmluZyA9IGAke29uZXN9IHggJHthfSA9ICR7b25lcyAqIGF9YDtcbiAgY29uc3QgdG90YWwgPSBgJHt0ZW5zTXVsdGlwbGVzfSArICR7b25lc011bHRpcGxlc30gPSAke1xuICAgIHRlbnNNdWx0aXBsZXMgKyBvbmVzTXVsdGlwbGVzfWA7XG4gIHJldHVybiBvbmVzICE9IDBcbiAgICA/IGAke29uZXNTdHJpbmd9PGJyPiR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gXG4gICAgOiBgJHt0ZW5zU3RyaW5nfTxicj4ke3RvdGFsfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKG1hdGhPcGVyYXRpb25zLCBpbnB1dHMpIHtcbiAgY29uc3QgbnVtYmVycyA9IFsuLi5pbnB1dHNdO1xuICBudW1iZXJzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgaWYgKG1hdGhPcGVyYXRpb25zID09PSAnbXVsdGlwbGljYXRpb24nKSB7XG4gICAgaWYgKG51bWJlcnNbMV0gPiAxMCAmJiBudW1iZXJzWzBdIDwgMTApIHtcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24obnVtYmVycyk7XG4gICAgfSBpZiAobnVtYmVyc1sxXSA+IDEwICYmIG51bWJlcnNbMF0gPiAxMCkge1xuICAgICAgcmV0dXJuIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbbnVtYmVyc1sxXSwgbnVtYmVyc1swXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbiIsImZ1bmN0aW9uIGNvdW50QnkoaW5wdXQpIHtcbiAgY29uc3QgYSA9IGlucHV0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBhY2NbY3Vycl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY2NbY3Vycl0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbY3Vycl0gKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gYTtcbn07XG5cblxuY29uc3Qgb3BlcmF0aW9ucyA9IHtcbiAgYWRkaXRpb246IChhLCBiKSA9PiBhICsgYixcbiAgbXVsdGlwbGljYXRpb246IChhLCBiKSA9PiBhICogYixcbiAgc3VidHJhY3Rpb246IChhLCBiKSA9PiBhIC0gYixcbiAgZGl2aXNpb246IChhLCBiKSA9PiBhIC8gYixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2YWx1YXRvciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGFuc3dlcihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSk7XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSkgPT09IHF1ZXN0aW9uLnN1Ym1pdHRlZEFuc3dlcjtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZShbLi4ucXVlc3Rpb25zXSkge1xuICAgIGNvbnN0IGZpbHRlcmVkV2lucyA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gPT0gcS5zdWJtaXR0ZWRBbnN3ZXIpXG4gICAgICAubWFwKChxKSA9PiBbcS5maXJzdE51bSwgcS5zZWNvbmROdW1dKTtcblxuICAgIGNvbnN0IHdpbnMgPSAodHlwZW9mIGZpbHRlcmVkV2lucyAhPT0gJ3VuZGVmaW5lZCcpID8gW10uY29uY2F0LmFwcGx5KFtdLCBmaWx0ZXJlZFdpbnMpIDogW107XG5cbiAgICBjb25zdCBmaWx0ZXJlZE5lZWRQcmFjdGljZSA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gIT09IHEuc3VibWl0dGVkQW5zd2VyKVxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XG5cbiAgICBjb25zdCBuZWVkUHJhY3RpY2UgPSAodHlwZW9mIGZpbHRlcmVkTmVlZFByYWN0aWNlICE9PSAndW5kZWZpbmVkJykgPyBbXS5jb25jYXQuYXBwbHkoW10sIGZpbHRlcmVkTmVlZFByYWN0aWNlKSA6IFtdO1xuXG4gICAgY29uc3Qgc3VtbWFyeSA9IHtcbiAgICAgIHdpbnM6IGNvdW50Qnkod2lucyksXG4gICAgICBuZWVkUHJhY3RpY2U6IGNvdW50QnkobmVlZFByYWN0aWNlKSxcbiAgICB9O1xuICAgIHJldHVybiBzdW1tYXJ5O1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgIFF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlyc3ROdW0sIHNlY29uZE51bSwgb3BlcmF0aW9uLCBzdWJtaXR0ZWRBbnN3ZXIsIHN1Ym1pc3Npb25UaW1lKSB7XG4gICAgdGhpcy5maXJzdE51bSA9IGZpcnN0TnVtO1xuICAgIHRoaXMuc2Vjb25kTnVtID0gc2Vjb25kTnVtO1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuc3VibWl0dGVkQW5zd2VyID0gc3VibWl0dGVkQW5zd2VyO1xuICAgIHRoaXMuc3VibWlzc2lvblRpbWUgPSBzdWJtaXNzaW9uVGltZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tIHtcbiAgLyoqXG4gICAqIENyZWRpdCA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG4gICAqIEBwYXJhbSB7Kn0gbWluXG4gICAqIEBwYXJhbSB7Kn0gbWF4XG4gICAqL1xuICBzdGF0aWMgZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyBUaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICB9XG5cbiAgc3RhdGljIGdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKG1pbiwgbWF4LCAuLi5leGNsdWRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KTtcbiAgICByZXR1cm4gZXhjbHVkZXMuaW5kZXhPZihyZXN1bHQpID09IC0xID8gcmVzdWx0IDogdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyhtaW4sIG1heCwgZXhjbHVkZXMpO1xuICB9XG59IiwiaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vbW9kZWwvUXVlc3Rpb24nO1xuaW1wb3J0IEV2YWx1YXRvciBmcm9tICcuL21vZGVsL0V2YWx1YXRvcic7XG5pbXBvcnQgZXhwbGFuYXRpb24gZnJvbSAnLi9tb2RlbC9BbnN3ZXJUaXBzJztcblxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb24oKSB7XG5cbiAgY29uc3QgZmlyc3ROdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpcnN0TnVtR2VuXCIpLmlubmVySFRNTDtcbiAgY29uc3Qgc2Vjb25kTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmROdW1HZW5cIikuaW5uZXJIVE1MO1xuXG4gIHJldHVybiBuZXcgUXVlc3Rpb24oXG4gICAgcGFyc2VJbnQoZmlyc3ROdW0sIDEwKSxcbiAgICBwYXJzZUludChzZWNvbmROdW0sIDEwKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlcmF0aW9ucycpLnZhbHVlLFxuICAgIHBhcnNlSW50KGZvcm1QcmFjdGljZS5hbnN3ZXIudmFsdWUsIDEwKSxcbiAgICBuZXcgRGF0ZSgpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJlc3VsdChxdWVzdGlvbikge1xuICBjb25zdCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5pbnNlcnRSb3coMSk7XG4gIHguaW5zZXJ0Q2VsbCgwKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5maXJzdE51bTtcbiAgeC5pbnNlcnRDZWxsKDEpLmlubmVySFRNTCA9IHF1ZXN0aW9uLnNlY29uZE51bTtcbiAgeC5pbnNlcnRDZWxsKDIpLmlubmVySFRNTCA9IHF1ZXN0aW9uLnN1Ym1pdHRlZEFuc3dlcjtcbiAgeC5pbnNlcnRDZWxsKDMpLmlubmVySFRNTCA9IEV2YWx1YXRvci5hbnN3ZXIocXVlc3Rpb24pO1xuICB4Lmluc2VydENlbGwoNCkuaW5uZXJIVE1MID0gZXhwbGFuYXRpb24ocXVlc3Rpb24ub3BlcmF0aW9uLCBbcXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bV0pO1xuICB4Lmluc2VydENlbGwoNSkuaW5uZXJIVE1MID0gRXZhbHVhdG9yLmV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pO1xuICBwb3B1bGF0ZUVtcHR5UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZU5ld1F1ZXN0aW9uKHJhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUgPT0gJ3N1YnRyYWN0aW9uJykge1xuICAgIGNvbnN0IGlucHV0ID0gW3JhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyXTtcbiAgICBpbnB1dC5zb3J0KChhLGIpID0+IChhLWIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFsxXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kTnVtR2VuJykuaW5uZXJIVE1MID0gaW5wdXRbMF07XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUgPT0gJ2RpdmlzaW9uJykge1xuICAgIGNvbnN0IGlucHV0ID0gW3JhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyXTtcbiAgICBpbnB1dC5zb3J0KChhLGIpID0+IChhLWIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFsxXSAqIGlucHV0WzBdO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFswXTtcbiAgICByZXR1cm47XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE51bUdlbicpLmlubmVySFRNTCA9IHJhbmRvbU51bWJlcjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLmlubmVySFRNTCA9IHNlY29uZFJhbmRvbU51bWJlcjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVFbXB0eVJlc3VsdCgpIHtcbiAgaWYoZm9ybVByYWN0aWNlICYmIGZvcm1QcmFjdGljZS5hbnN3ZXIpIHtcbiAgICBmb3JtUHJhY3RpY2UuYW5zd2VyLnZhbHVlID0gJyc7XG4gIH1cbn1cblxuY29uc3QgdWlUb29scyA9IHsgY3JlYXRlUXVlc3Rpb24sIGFwcGVuZFJlc3VsdCwgcG9wdWxhdGVOZXdRdWVzdGlvbiB9O1xuXG5leHBvcnQgZGVmYXVsdCB1aVRvb2xzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==