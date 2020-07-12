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




const startTime = new Date();
let totalCorrect = 0;
let totalIncorrect = 0;
let welcomeMessage = '';
let lastSubmissionTime;
let sid='';

function yourNameKeyboardHandler() {
  const input = document.getElementById('yourName');
  input.focus();
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('submit_name').click();
    }
  });
}

function answerKeyboardHandler() {
  const answer = document.getElementById('answer');
  if (answer && answer.addEventListener) {
    answer.addEventListener('keydown', tabAndEnterHandler, false);
    answer.addEventListener('keypress', isNumber, true);
  }
}

function tabAndEnterHandler(e) {
  const KEYCODE_TAB = 9;
  const KEYCODE_ENTER = 13;
  if (e.keyCode == KEYCODE_TAB || e.keyCode == KEYCODE_ENTER) {
    event.preventDefault();
    document.getElementById('submitAnswer').click();
  }
}

function startPractice() {
  document.getElementById('welcomeMessage').innerHTML = welcomeMessage;
  document.getElementById('main').style.visibility = 'visible';
  document.getElementById('summary').innerHTML = '';
  document.getElementById('totalQuestionsPracticed').innerHTML = 'Total Questions Practiced:  0';
  /* If someone doesn't cloes this window, but still using it! */
  const staleResults = document.getElementById('practicedResults').rows.length;
  if (staleResults > 1) {
    for (let i = 0; i < staleResults - 1; i++) {
      document.getElementById('practicedResults').deleteRow(-1);
    }
  }
}

function finalizeSubmit() {
  document.getElementById('answer').click();
  document.getElementById('answer').focus();
  //document.getElementById('answer').scrollIntoView();
}

window.addEventListener('load', (_event) => {
  replenish();
  answerKeyboardHandler();
  yourNameKeyboardHandler();
});




function scoreMark(question) {
  if (_model_Evaluator__WEBPACK_IMPORTED_MODULE_0__["default"].evaluateQuestion(question)) {
    totalCorrect++;
  } else {
    totalIncorrect++;
  }
  _ui_tools__WEBPACK_IMPORTED_MODULE_1__["default"].appendResult(question);
  replenish();
  lastSubmissionTime = new Date();
  const diff = Math.abs(lastSubmissionTime - startTime);
  const elapsedTime = Math.floor(diff / 1000);
  const errorRatio = (totalIncorrect / (totalCorrect + totalIncorrect)) * 100;

  const priorQuestion = JSON.parse(localStorage.getItem(sid));
  localStorage.setItem(sid, JSON.stringify([question, ...priorQuestion]));

  let result = `Correct => ${totalCorrect}<br/>Incorrect => ${totalIncorrect}`;
  if (errorRatio > 0.001) {
    result = `${result}<br/>Error ratio :: ${errorRatio.toFixed(2)}%`;
  }
  lastSubmissionTime= new Date();
  const speed = Math.floor(elapsedTime / totalCorrect);
  const speedResult = `<br/>Speed = ${speed}, Number of seconds per question. Lower the better!`;

  document.getElementById('totalQuestionsPracticed').innerHTML = `Total Questions Practiced:  ${totalCorrect + totalIncorrect}`;
  document.getElementById('summary').innerHTML = `${result}<br/>${speedResult}`;
  finalizeSubmit();
}

function registerUser(studentId) {
  const defaultDetails = {
    studentId,
    sessions: [],
  };
  let priorPracticeDetails = localStorage.getItem(studentId.toLowerCase());

  let sessionTime = new Date().toISOString();
  sid = `Practice_${studentId}@${sessionTime}`;

  if (priorPracticeDetails) {
    welcomeMessage = `<b>${studentId} is amazing person!</b> ${studentId} practices like champion!<br/>Start time : ${sessionTime}`;
  } else {
    welcomeMessage = `<b>Hi! ${studentId}, you are courageous!</b> 1000 miles journey begins with single step!<br/>Start time : ${sessionTime}`;
  }
  startPractice();
  if (!priorPracticeDetails) {
    priorPracticeDetails = defaultDetails;
  } else {
    priorPracticeDetails = JSON.parse(priorPracticeDetails);
  }
  priorPracticeDetails.sessions.push(sid);
  localStorage.setItem(sid, JSON.stringify([]));

  const studentDetails = { sessions: priorPracticeDetails.sessions, studentId };
  localStorage.setItem(
    studentDetails.studentId.toLowerCase(),
    JSON.stringify(studentDetails),
  );

  document.getElementById('answer').focus();
}

function replenish() {
  const max = parseInt(document.getElementById('maxInput').value, 10);
  const randomNumber = _random__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomIntInclusiveWithExceptions(3, max, [10]);
  const secondRandomNumber = _random__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomIntInclusive(3, max, [10]);
  _ui_tools__WEBPACK_IMPORTED_MODULE_1__["default"].populateNewQuestion(randomNumber, secondRandomNumber);
}

function isNumber(event) {
  const TAB_KEY=9;
  const evt = event || window.event;
  const charCode = event.which ? event.which : event.keyCode;
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
function explainMultiplication([a, b, ...rest]) {
  const tens = Math.floor(b / 10) * 10;
  const ones = Math.floor(b % 10);
  const tensMultiples = tens * a;
  const onesMultiples = ones * a;
  const tensString = `${tens} x ${a} = ${tens * a}`;
  const onesString = `${ones} x ${a} = ${ones * a}`;
  const total = `${tensMultiples} + ${onesMultiples} = ${
    tensMultiples + onesMultiples}`;
  return ones != 0
    ? `${onesString}<br>${tensString}<br>${total}`
    : `${tensString}<br>${total}`;
}

function explanation(mathOperations, inputs) {
  const numbers = [...inputs];
  numbers.sort((a, b) => a - b);
  if (mathOperations === 'multiplication') {
    if (numbers[1] > 10 && numbers[0] < 10) {
      return explainMultiplication(numbers);
    } if (numbers[1] > 10 && numbers[0] > 10) {
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
function countBy(input) {
  const a = input.reduce((acc, curr) => {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  return a;
};


const operations = {
  addition: (a, b) => a + b,
  multiplication: (a, b) => a * b,
  subtraction: (a, b) => a - b,
  division: (a, b) => a / b,
};

class Evaluator {
  constructor(name) {
    this.name = name;
  }

  static answer(question) {
    const func = operations[question.operation];
    return func(question.firstNum, question.secondNum);
  }

  static evaluateQuestion(question) {
    const func = operations[question.operation];
    return func(question.firstNum, question.secondNum) === question.submittedAnswer;
  }

  static evaluate([...questions]) {
    const filteredWins = questions
      .filter((q) => q.operation === 'multiplication')
      .filter((q) => q.firstNum * q.secondNum == q.submittedAnswer)
      .map((q) => [q.firstNum, q.secondNum]);

    const wins = (typeof filteredWins !== 'undefined') ? [].concat.apply([], filteredWins) : [];

    const filteredNeedPractice = questions
      .filter((q) => q.operation === 'multiplication')
      .filter((q) => q.firstNum * q.secondNum !== q.submittedAnswer)
      .map((q) => [q.firstNum, q.secondNum]);

    const needPractice = (typeof filteredNeedPractice !== 'undefined') ? [].concat.apply([], filteredNeedPractice) : [];

    const summary = {
      wins: countBy(wins),
      needPractice: countBy(needPractice),
    };
    return summary;
  }
}

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
class  Question {
  constructor(firstNum, secondNum, operation, submittedAnswer, submissionTime) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    this.operation = operation;
    this.submittedAnswer = submittedAnswer;
    this.submissionTime = submissionTime;
  }
}


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
class Random {
  /**
   * Credit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * @param {*} min
   * @param {*} max
   */
  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
  }

  static getRandomIntInclusiveWithExceptions(min, max, ...excludes) {
    const result = this.getRandomIntInclusive(min, max);
    return excludes.indexOf(result) == -1 ? result : this.getRandomIntInclusiveWithExceptions(min, max, excludes);
  }
}

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

  const firstNum = document.getElementById("firstNumGen").innerHTML;
  const secondNum = document.getElementById("secondNumGen").innerHTML;

  return new _model_Question__WEBPACK_IMPORTED_MODULE_0__["default"](
    parseInt(firstNum, 10),
    parseInt(secondNum, 10),
    document.getElementById('operations').value,
    parseInt(formPractice.answer.value, 10),
    new Date()
  );
}

function appendResult(question) {
  const x = document.getElementById('practicedResults').insertRow(1);
  x.insertCell(0).innerHTML = question.firstNum;
  x.insertCell(1).innerHTML = question.secondNum;
  x.insertCell(2).innerHTML = question.submittedAnswer;
  x.insertCell(3).innerHTML = _model_Evaluator__WEBPACK_IMPORTED_MODULE_1__["default"].answer(question);
  x.insertCell(4).innerHTML = Object(_model_AnswerTips__WEBPACK_IMPORTED_MODULE_2__["default"])(question.operation, [question.firstNum, question.secondNum]);
  x.insertCell(5).innerHTML = _model_Evaluator__WEBPACK_IMPORTED_MODULE_1__["default"].evaluateQuestion(question);
  populateEmptyResult();
}

function populateNewQuestion(randomNumber, secondRandomNumber) {
  if(document.getElementById('operations').value == 'subtraction') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    document.getElementById('firstNumGen').innerHTML = input[1];
    document.getElementById('secondNumGen').innerHTML = input[0];
    return;
  }
  if(document.getElementById('operations').value == 'division') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    document.getElementById('firstNumGen').innerHTML = input[1] * input[0];
    document.getElementById('secondNumGen').innerHTML = input[0];
    return;
  }
  document.getElementById('answer').value = '';
  document.getElementById('firstNumGen').innerHTML = randomNumber;
  document.getElementById('secondNumGen').innerHTML = secondRandomNumber;
}

function populateEmptyResult() {
  if(formPractice && formPractice.answer) {
    formPractice.answer.value = '';
  }
}

const uiTools = { createQuestion, appendResult, populateNewQuestion };

/* harmony default export */ __webpack_exports__["default"] = (uiTools);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvQW5zd2VyVGlwcy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9tb2RlbC9FdmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIiwid2VicGFjazovL0FwcC8uL3VpX3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQzs7QUFFekI7Ozs7Ozs7Ozs7Ozs7QUNGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQ0c7O0FBRTdDOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSx1REFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUFTO0FBQ3ZDLDhCQUE4QixpRUFBVztBQUN6Qyw4QkFBOEIsd0RBQVM7QUFDdkM7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFRixzRUFBTyxFQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyB1aU9wcyBmcm9tICcuL21hdGhfb3BlcmF0aW9uJztcblxuZXhwb3J0IHsgdWlPcHMgfTtcbiIsImltcG9ydCBFdmFsdWF0b3IgZnJvbSAnLi9tb2RlbC9FdmFsdWF0b3InO1xuaW1wb3J0IHVpVG9vbHMgZnJvbSAnLi91aV90b29scyc7XG5pbXBvcnQgUmFuZG9tIGZyb20gJy4vcmFuZG9tJztcblxuY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbmxldCB0b3RhbENvcnJlY3QgPSAwO1xubGV0IHRvdGFsSW5jb3JyZWN0ID0gMDtcbmxldCB3ZWxjb21lTWVzc2FnZSA9ICcnO1xubGV0IGxhc3RTdWJtaXNzaW9uVGltZTtcbmxldCBzaWQ9Jyc7XG5cbmZ1bmN0aW9uIHlvdXJOYW1lS2V5Ym9hcmRIYW5kbGVyKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5b3VyTmFtZScpO1xuICBpbnB1dC5mb2N1cygpO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRfbmFtZScpLmNsaWNrKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5zd2VyS2V5Ym9hcmRIYW5kbGVyKCkge1xuICBjb25zdCBhbnN3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJyk7XG4gIGlmIChhbnN3ZXIgJiYgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYkFuZEVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgIGFuc3dlci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGlzTnVtYmVyLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YWJBbmRFbnRlckhhbmRsZXIoZSkge1xuICBjb25zdCBLRVlDT0RFX1RBQiA9IDk7XG4gIGNvbnN0IEtFWUNPREVfRU5URVIgPSAxMztcbiAgaWYgKGUua2V5Q29kZSA9PSBLRVlDT0RFX1RBQiB8fCBlLmtleUNvZGUgPT0gS0VZQ09ERV9FTlRFUikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEFuc3dlcicpLmNsaWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRQcmFjdGljZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVNZXNzYWdlJykuaW5uZXJIVE1MID0gd2VsY29tZU1lc3NhZ2U7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS5pbm5lckhUTUwgPSAnJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUXVlc3Rpb25zUHJhY3RpY2VkJykuaW5uZXJIVE1MID0gJ1RvdGFsIFF1ZXN0aW9ucyBQcmFjdGljZWQ6ICAwJztcbiAgLyogSWYgc29tZW9uZSBkb2Vzbid0IGNsb2VzIHRoaXMgd2luZG93LCBidXQgc3RpbGwgdXNpbmcgaXQhICovXG4gIGNvbnN0IHN0YWxlUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmFjdGljZWRSZXN1bHRzJykucm93cy5sZW5ndGg7XG4gIGlmIChzdGFsZVJlc3VsdHMgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFsZVJlc3VsdHMgLSAxOyBpKyspIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmFjdGljZWRSZXN1bHRzJykuZGVsZXRlUm93KC0xKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluYWxpemVTdWJtaXQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5jbGljaygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuZm9jdXMoKTtcbiAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuc2Nyb2xsSW50b1ZpZXcoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoX2V2ZW50KSA9PiB7XG4gIHJlcGxlbmlzaCgpO1xuICBhbnN3ZXJLZXlib2FyZEhhbmRsZXIoKTtcbiAgeW91ck5hbWVLZXlib2FyZEhhbmRsZXIoKTtcbn0pO1xuXG5cbmV4cG9ydCB7IHVpVG9vbHMgYXMgdWkgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjb3JlTWFyayhxdWVzdGlvbikge1xuICBpZiAoRXZhbHVhdG9yLmV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pKSB7XG4gICAgdG90YWxDb3JyZWN0Kys7XG4gIH0gZWxzZSB7XG4gICAgdG90YWxJbmNvcnJlY3QrKztcbiAgfVxuICB1aVRvb2xzLmFwcGVuZFJlc3VsdChxdWVzdGlvbik7XG4gIHJlcGxlbmlzaCgpO1xuICBsYXN0U3VibWlzc2lvblRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkaWZmID0gTWF0aC5hYnMobGFzdFN1Ym1pc3Npb25UaW1lIC0gc3RhcnRUaW1lKTtcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbiAgY29uc3QgZXJyb3JSYXRpbyA9ICh0b3RhbEluY29ycmVjdCAvICh0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdCkpICogMTAwO1xuXG4gIGNvbnN0IHByaW9yUXVlc3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNpZCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzaWQsIEpTT04uc3RyaW5naWZ5KFtxdWVzdGlvbiwgLi4ucHJpb3JRdWVzdGlvbl0pKTtcblxuICBsZXQgcmVzdWx0ID0gYENvcnJlY3QgPT4gJHt0b3RhbENvcnJlY3R9PGJyLz5JbmNvcnJlY3QgPT4gJHt0b3RhbEluY29ycmVjdH1gO1xuICBpZiAoZXJyb3JSYXRpbyA+IDAuMDAxKSB7XG4gICAgcmVzdWx0ID0gYCR7cmVzdWx0fTxici8+RXJyb3IgcmF0aW8gOjogJHtlcnJvclJhdGlvLnRvRml4ZWQoMil9JWA7XG4gIH1cbiAgbGFzdFN1Ym1pc3Npb25UaW1lPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzcGVlZCA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyB0b3RhbENvcnJlY3QpO1xuICBjb25zdCBzcGVlZFJlc3VsdCA9IGA8YnIvPlNwZWVkID0gJHtzcGVlZH0sIE51bWJlciBvZiBzZWNvbmRzIHBlciBxdWVzdGlvbi4gTG93ZXIgdGhlIGJldHRlciFgO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFF1ZXN0aW9uc1ByYWN0aWNlZCcpLmlubmVySFRNTCA9IGBUb3RhbCBRdWVzdGlvbnMgUHJhY3RpY2VkOiAgJHt0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdH1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9IGAke3Jlc3VsdH08YnIvPiR7c3BlZWRSZXN1bHR9YDtcbiAgZmluYWxpemVTdWJtaXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihzdHVkZW50SWQpIHtcbiAgY29uc3QgZGVmYXVsdERldGFpbHMgPSB7XG4gICAgc3R1ZGVudElkLFxuICAgIHNlc3Npb25zOiBbXSxcbiAgfTtcbiAgbGV0IHByaW9yUHJhY3RpY2VEZXRhaWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3R1ZGVudElkLnRvTG93ZXJDYXNlKCkpO1xuXG4gIGxldCBzZXNzaW9uVGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgc2lkID0gYFByYWN0aWNlXyR7c3R1ZGVudElkfUAke3Nlc3Npb25UaW1lfWA7XG5cbiAgaWYgKHByaW9yUHJhY3RpY2VEZXRhaWxzKSB7XG4gICAgd2VsY29tZU1lc3NhZ2UgPSBgPGI+JHtzdHVkZW50SWR9IGlzIGFtYXppbmcgcGVyc29uITwvYj4gJHtzdHVkZW50SWR9IHByYWN0aWNlcyBsaWtlIGNoYW1waW9uITxici8+U3RhcnQgdGltZSA6ICR7c2Vzc2lvblRpbWV9YDtcbiAgfSBlbHNlIHtcbiAgICB3ZWxjb21lTWVzc2FnZSA9IGA8Yj5IaSEgJHtzdHVkZW50SWR9LCB5b3UgYXJlIGNvdXJhZ2VvdXMhPC9iPiAxMDAwIG1pbGVzIGpvdXJuZXkgYmVnaW5zIHdpdGggc2luZ2xlIHN0ZXAhPGJyLz5TdGFydCB0aW1lIDogJHtzZXNzaW9uVGltZX1gO1xuICB9XG4gIHN0YXJ0UHJhY3RpY2UoKTtcbiAgaWYgKCFwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHByaW9yUHJhY3RpY2VEZXRhaWxzID0gZGVmYXVsdERldGFpbHM7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JQcmFjdGljZURldGFpbHMgPSBKU09OLnBhcnNlKHByaW9yUHJhY3RpY2VEZXRhaWxzKTtcbiAgfVxuICBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucy5wdXNoKHNpZCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNpZCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICBjb25zdCBzdHVkZW50RGV0YWlscyA9IHsgc2Vzc2lvbnM6IHByaW9yUHJhY3RpY2VEZXRhaWxzLnNlc3Npb25zLCBzdHVkZW50SWQgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgc3R1ZGVudERldGFpbHMuc3R1ZGVudElkLnRvTG93ZXJDYXNlKCksXG4gICAgSlNPTi5zdHJpbmdpZnkoc3R1ZGVudERldGFpbHMpLFxuICApO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5mb2N1cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGVuaXNoKCkge1xuICBjb25zdCBtYXggPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4SW5wdXQnKS52YWx1ZSwgMTApO1xuICBjb25zdCByYW5kb21OdW1iZXIgPSBSYW5kb20uZ2V0UmFuZG9tSW50SW5jbHVzaXZlV2l0aEV4Y2VwdGlvbnMoMywgbWF4LCBbMTBdKTtcbiAgY29uc3Qgc2Vjb25kUmFuZG9tTnVtYmVyID0gUmFuZG9tLmdldFJhbmRvbUludEluY2x1c2l2ZSgzLCBtYXgsIFsxMF0pO1xuICB1aVRvb2xzLnBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoZXZlbnQpIHtcbiAgY29uc3QgVEFCX0tFWT05O1xuICBjb25zdCBldnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gIGNvbnN0IGNoYXJDb2RlID0gZXZlbnQud2hpY2ggPyBldmVudC53aGljaCA6IGV2ZW50LmtleUNvZGU7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSBUQUJfS0VZKSB7XG4gICAgcmV0dXJuIHRhYkhhbmRsZXIoZXZlbnQpO1xuICB9XG4gIGlmIChjaGFyQ29kZSA+IDMxICYmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSIsImZ1bmN0aW9uIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbYSwgYiwgLi4ucmVzdF0pIHtcbiAgY29uc3QgdGVucyA9IE1hdGguZmxvb3IoYiAvIDEwKSAqIDEwO1xuICBjb25zdCBvbmVzID0gTWF0aC5mbG9vcihiICUgMTApO1xuICBjb25zdCB0ZW5zTXVsdGlwbGVzID0gdGVucyAqIGE7XG4gIGNvbnN0IG9uZXNNdWx0aXBsZXMgPSBvbmVzICogYTtcbiAgY29uc3QgdGVuc1N0cmluZyA9IGAke3RlbnN9IHggJHthfSA9ICR7dGVucyAqIGF9YDtcbiAgY29uc3Qgb25lc1N0cmluZyA9IGAke29uZXN9IHggJHthfSA9ICR7b25lcyAqIGF9YDtcbiAgY29uc3QgdG90YWwgPSBgJHt0ZW5zTXVsdGlwbGVzfSArICR7b25lc011bHRpcGxlc30gPSAke1xuICAgIHRlbnNNdWx0aXBsZXMgKyBvbmVzTXVsdGlwbGVzfWA7XG4gIHJldHVybiBvbmVzICE9IDBcbiAgICA/IGAke29uZXNTdHJpbmd9PGJyPiR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gXG4gICAgOiBgJHt0ZW5zU3RyaW5nfTxicj4ke3RvdGFsfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKG1hdGhPcGVyYXRpb25zLCBpbnB1dHMpIHtcbiAgY29uc3QgbnVtYmVycyA9IFsuLi5pbnB1dHNdO1xuICBudW1iZXJzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgaWYgKG1hdGhPcGVyYXRpb25zID09PSAnbXVsdGlwbGljYXRpb24nKSB7XG4gICAgaWYgKG51bWJlcnNbMV0gPiAxMCAmJiBudW1iZXJzWzBdIDwgMTApIHtcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24obnVtYmVycyk7XG4gICAgfSBpZiAobnVtYmVyc1sxXSA+IDEwICYmIG51bWJlcnNbMF0gPiAxMCkge1xuICAgICAgcmV0dXJuIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbbnVtYmVyc1sxXSwgbnVtYmVyc1swXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbiIsImZ1bmN0aW9uIGNvdW50QnkoaW5wdXQpIHtcbiAgY29uc3QgYSA9IGlucHV0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBhY2NbY3Vycl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY2NbY3Vycl0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbY3Vycl0gKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gYTtcbn07XG5cblxuY29uc3Qgb3BlcmF0aW9ucyA9IHtcbiAgYWRkaXRpb246IChhLCBiKSA9PiBhICsgYixcbiAgbXVsdGlwbGljYXRpb246IChhLCBiKSA9PiBhICogYixcbiAgc3VidHJhY3Rpb246IChhLCBiKSA9PiBhIC0gYixcbiAgZGl2aXNpb246IChhLCBiKSA9PiBhIC8gYixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2YWx1YXRvciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGFuc3dlcihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSk7XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSkgPT09IHF1ZXN0aW9uLnN1Ym1pdHRlZEFuc3dlcjtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZShbLi4ucXVlc3Rpb25zXSkge1xuICAgIGNvbnN0IGZpbHRlcmVkV2lucyA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gPT0gcS5zdWJtaXR0ZWRBbnN3ZXIpXG4gICAgICAubWFwKChxKSA9PiBbcS5maXJzdE51bSwgcS5zZWNvbmROdW1dKTtcblxuICAgIGNvbnN0IHdpbnMgPSAodHlwZW9mIGZpbHRlcmVkV2lucyAhPT0gJ3VuZGVmaW5lZCcpID8gW10uY29uY2F0LmFwcGx5KFtdLCBmaWx0ZXJlZFdpbnMpIDogW107XG5cbiAgICBjb25zdCBmaWx0ZXJlZE5lZWRQcmFjdGljZSA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gIT09IHEuc3VibWl0dGVkQW5zd2VyKVxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XG5cbiAgICBjb25zdCBuZWVkUHJhY3RpY2UgPSAodHlwZW9mIGZpbHRlcmVkTmVlZFByYWN0aWNlICE9PSAndW5kZWZpbmVkJykgPyBbXS5jb25jYXQuYXBwbHkoW10sIGZpbHRlcmVkTmVlZFByYWN0aWNlKSA6IFtdO1xuXG4gICAgY29uc3Qgc3VtbWFyeSA9IHtcbiAgICAgIHdpbnM6IGNvdW50Qnkod2lucyksXG4gICAgICBuZWVkUHJhY3RpY2U6IGNvdW50QnkobmVlZFByYWN0aWNlKSxcbiAgICB9O1xuICAgIHJldHVybiBzdW1tYXJ5O1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgIFF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlyc3ROdW0sIHNlY29uZE51bSwgb3BlcmF0aW9uLCBzdWJtaXR0ZWRBbnN3ZXIsIHN1Ym1pc3Npb25UaW1lKSB7XG4gICAgdGhpcy5maXJzdE51bSA9IGZpcnN0TnVtO1xuICAgIHRoaXMuc2Vjb25kTnVtID0gc2Vjb25kTnVtO1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuc3VibWl0dGVkQW5zd2VyID0gc3VibWl0dGVkQW5zd2VyO1xuICAgIHRoaXMuc3VibWlzc2lvblRpbWUgPSBzdWJtaXNzaW9uVGltZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tIHtcbiAgLyoqXG4gICAqIENyZWRpdCA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG4gICAqIEBwYXJhbSB7Kn0gbWluXG4gICAqIEBwYXJhbSB7Kn0gbWF4XG4gICAqL1xuICBzdGF0aWMgZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyBUaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICB9XG5cbiAgc3RhdGljIGdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKG1pbiwgbWF4LCAuLi5leGNsdWRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KTtcbiAgICByZXR1cm4gZXhjbHVkZXMuaW5kZXhPZihyZXN1bHQpID09IC0xID8gcmVzdWx0IDogdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyhtaW4sIG1heCwgZXhjbHVkZXMpO1xuICB9XG59IiwiaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vbW9kZWwvUXVlc3Rpb24nO1xuaW1wb3J0IEV2YWx1YXRvciBmcm9tICcuL21vZGVsL0V2YWx1YXRvcic7XG5pbXBvcnQgZXhwbGFuYXRpb24gZnJvbSAnLi9tb2RlbC9BbnN3ZXJUaXBzJztcblxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb24oKSB7XG5cbiAgY29uc3QgZmlyc3ROdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpcnN0TnVtR2VuXCIpLmlubmVySFRNTDtcbiAgY29uc3Qgc2Vjb25kTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmROdW1HZW5cIikuaW5uZXJIVE1MO1xuXG4gIHJldHVybiBuZXcgUXVlc3Rpb24oXG4gICAgcGFyc2VJbnQoZmlyc3ROdW0sIDEwKSxcbiAgICBwYXJzZUludChzZWNvbmROdW0sIDEwKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlcmF0aW9ucycpLnZhbHVlLFxuICAgIHBhcnNlSW50KGZvcm1QcmFjdGljZS5hbnN3ZXIudmFsdWUsIDEwKSxcbiAgICBuZXcgRGF0ZSgpXG4gICk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJlc3VsdChxdWVzdGlvbikge1xuICBjb25zdCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5pbnNlcnRSb3coMSk7XG4gIHguaW5zZXJ0Q2VsbCgwKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5maXJzdE51bTtcbiAgeC5pbnNlcnRDZWxsKDEpLmlubmVySFRNTCA9IHF1ZXN0aW9uLnNlY29uZE51bTtcbiAgeC5pbnNlcnRDZWxsKDIpLmlubmVySFRNTCA9IHF1ZXN0aW9uLnN1Ym1pdHRlZEFuc3dlcjtcbiAgeC5pbnNlcnRDZWxsKDMpLmlubmVySFRNTCA9IEV2YWx1YXRvci5hbnN3ZXIocXVlc3Rpb24pO1xuICB4Lmluc2VydENlbGwoNCkuaW5uZXJIVE1MID0gZXhwbGFuYXRpb24ocXVlc3Rpb24ub3BlcmF0aW9uLCBbcXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bV0pO1xuICB4Lmluc2VydENlbGwoNSkuaW5uZXJIVE1MID0gRXZhbHVhdG9yLmV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pO1xuICBwb3B1bGF0ZUVtcHR5UmVzdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZU5ld1F1ZXN0aW9uKHJhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyKSB7XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUgPT0gJ3N1YnRyYWN0aW9uJykge1xuICAgIGNvbnN0IGlucHV0ID0gW3JhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyXTtcbiAgICBpbnB1dC5zb3J0KChhLGIpID0+IChhLWIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFsxXTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kTnVtR2VuJykuaW5uZXJIVE1MID0gaW5wdXRbMF07XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUgPT0gJ2RpdmlzaW9uJykge1xuICAgIGNvbnN0IGlucHV0ID0gW3JhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyXTtcbiAgICBpbnB1dC5zb3J0KChhLGIpID0+IChhLWIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFsxXSAqIGlucHV0WzBdO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFswXTtcbiAgICByZXR1cm47XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnZhbHVlID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE51bUdlbicpLmlubmVySFRNTCA9IHJhbmRvbU51bWJlcjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLmlubmVySFRNTCA9IHNlY29uZFJhbmRvbU51bWJlcjtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVFbXB0eVJlc3VsdCgpIHtcbiAgaWYoZm9ybVByYWN0aWNlICYmIGZvcm1QcmFjdGljZS5hbnN3ZXIpIHtcbiAgICBmb3JtUHJhY3RpY2UuYW5zd2VyLnZhbHVlID0gJyc7XG4gIH1cbn1cblxuY29uc3QgdWlUb29scyA9IHsgY3JlYXRlUXVlc3Rpb24sIGFwcGVuZFJlc3VsdCwgcG9wdWxhdGVOZXdRdWVzdGlvbiB9O1xuXG5leHBvcnQgZGVmYXVsdCB1aVRvb2xzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==