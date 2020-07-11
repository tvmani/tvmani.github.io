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
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('submitName').click();
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

  sid = new Date().toISOString();
  sid = `Practice_${studentId}@${sid}`;

  if (priorPracticeDetails) {
    welcomeMessage = `<b>${studentId} is amazing person!</b> ${studentId} practices like champion!<br/>Identifier - ${sid}`;
  } else {
    welcomeMessage = `<b>Hi! ${studentId}, you are courageous!</b> 1000 miles journey begins with single step!<br/>Identifier - ${sid}`;
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
  return new _model_Question__WEBPACK_IMPORTED_MODULE_0__["default"](
    parseInt(formPractice.firstNumGen.value, 10),
    parseInt(formPractice.secondNumGen.value, 10),
    document.getElementById('operations').value,
    parseInt(formPractice.answer.value, 10),
    new Date()
  );
}

function appendResult(question) {
  const x = document.getElementById('practicedResults').insertRow(1);
  x.insertCell(0).innerHTML = question.firstNum;
  x.insertCell(1).innerHTML = question.secondNum;
  x.insertCell(2).innerHTML = _model_Evaluator__WEBPACK_IMPORTED_MODULE_1__["default"].answer(question);
  x.insertCell(3).innerHTML = question.submittedAnswer;
  x.insertCell(4).innerHTML = Object(_model_AnswerTips__WEBPACK_IMPORTED_MODULE_2__["default"])(question.operation, [question.firstNum, question.secondNum]);
  x.insertCell(5).innerHTML = _model_Evaluator__WEBPACK_IMPORTED_MODULE_1__["default"].evaluateQuestion(question);
  populateEmptyResult();
}

function populateNewQuestion(randomNumber, secondRandomNumber) {
  if(document.getElementById('operations').value == 'subtraction') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    document.getElementById('firstNumGen').value = input[1];
    document.getElementById('secondNumGen').value = input[0];
    return;
  }
  if(document.getElementById('operations').value == 'division') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    document.getElementById('firstNumGen').value = input[1] * input[0];
    document.getElementById('secondNumGen').value = input[0];
    return;
  }
  document.getElementById('answer').value = '';
  document.getElementById('firstNumGen').value = randomNumber;
  document.getElementById('secondNumGen').value = secondRandomNumber;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvQW5zd2VyVGlwcy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9tb2RlbC9FdmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIiwid2VicGFjazovL0FwcC8uL3VpX3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQzs7QUFFekI7Ozs7Ozs7Ozs7Ozs7QUNGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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OztBQUU3QztBQUNBLGFBQWEsdURBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVM7QUFDdkM7QUFDQSw4QkFBOEIsaUVBQVc7QUFDekMsOEJBQThCLHdEQUFTO0FBQ3ZDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRUYsc0VBQU8sRUFBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdWlPcHMgZnJvbSAnLi9tYXRoX29wZXJhdGlvbic7XG5cbmV4cG9ydCB7IHVpT3BzIH07XG4iLCJpbXBvcnQgRXZhbHVhdG9yIGZyb20gJy4vbW9kZWwvRXZhbHVhdG9yJztcbmltcG9ydCB1aVRvb2xzIGZyb20gJy4vdWlfdG9vbHMnO1xuaW1wb3J0IFJhbmRvbSBmcm9tICcuL3JhbmRvbSc7XG5cbmNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5sZXQgdG90YWxDb3JyZWN0ID0gMDtcbmxldCB0b3RhbEluY29ycmVjdCA9IDA7XG5sZXQgd2VsY29tZU1lc3NhZ2UgPSAnJztcbmxldCBsYXN0U3VibWlzc2lvblRpbWU7XG5sZXQgc2lkPScnO1xuXG5mdW5jdGlvbiB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ck5hbWUnKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmFtZScpLmNsaWNrKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5zd2VyS2V5Ym9hcmRIYW5kbGVyKCkge1xuICBjb25zdCBhbnN3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJyk7XG4gIGlmIChhbnN3ZXIgJiYgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYkFuZEVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgIGFuc3dlci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGlzTnVtYmVyLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YWJBbmRFbnRlckhhbmRsZXIoZSkge1xuICBjb25zdCBLRVlDT0RFX1RBQiA9IDk7XG4gIGNvbnN0IEtFWUNPREVfRU5URVIgPSAxMztcbiAgaWYgKGUua2V5Q29kZSA9PSBLRVlDT0RFX1RBQiB8fCBlLmtleUNvZGUgPT0gS0VZQ09ERV9FTlRFUikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEFuc3dlcicpLmNsaWNrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRQcmFjdGljZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVNZXNzYWdlJykuaW5uZXJIVE1MID0gd2VsY29tZU1lc3NhZ2U7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS5pbm5lckhUTUwgPSAnJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUXVlc3Rpb25zUHJhY3RpY2VkJykuaW5uZXJIVE1MID0gJ1RvdGFsIFF1ZXN0aW9ucyBQcmFjdGljZWQ6ICAwJztcbiAgLyogSWYgc29tZW9uZSBkb2Vzbid0IGNsb2VzIHRoaXMgd2luZG93LCBidXQgc3RpbGwgdXNpbmcgaXQhICovXG4gIGNvbnN0IHN0YWxlUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmFjdGljZWRSZXN1bHRzJykucm93cy5sZW5ndGg7XG4gIGlmIChzdGFsZVJlc3VsdHMgPiAxKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFsZVJlc3VsdHMgLSAxOyBpKyspIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmFjdGljZWRSZXN1bHRzJykuZGVsZXRlUm93KC0xKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluYWxpemVTdWJtaXQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5jbGljaygpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuZm9jdXMoKTtcbiAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuc2Nyb2xsSW50b1ZpZXcoKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoX2V2ZW50KSA9PiB7XG4gIHJlcGxlbmlzaCgpO1xuICBhbnN3ZXJLZXlib2FyZEhhbmRsZXIoKTtcbiAgeW91ck5hbWVLZXlib2FyZEhhbmRsZXIoKTtcbn0pO1xuXG5cbmV4cG9ydCB7IHVpVG9vbHMgYXMgdWkgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNjb3JlTWFyayhxdWVzdGlvbikge1xuICBpZiAoRXZhbHVhdG9yLmV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pKSB7XG4gICAgdG90YWxDb3JyZWN0Kys7XG4gIH0gZWxzZSB7XG4gICAgdG90YWxJbmNvcnJlY3QrKztcbiAgfVxuICB1aVRvb2xzLmFwcGVuZFJlc3VsdChxdWVzdGlvbik7XG4gIHJlcGxlbmlzaCgpO1xuICBsYXN0U3VibWlzc2lvblRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkaWZmID0gTWF0aC5hYnMobGFzdFN1Ym1pc3Npb25UaW1lIC0gc3RhcnRUaW1lKTtcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbiAgY29uc3QgZXJyb3JSYXRpbyA9ICh0b3RhbEluY29ycmVjdCAvICh0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdCkpICogMTAwO1xuXG4gIGNvbnN0IHByaW9yUXVlc3Rpb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNpZCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzaWQsIEpTT04uc3RyaW5naWZ5KFtxdWVzdGlvbiwgLi4ucHJpb3JRdWVzdGlvbl0pKTtcblxuICBsZXQgcmVzdWx0ID0gYENvcnJlY3QgPT4gJHt0b3RhbENvcnJlY3R9PGJyLz5JbmNvcnJlY3QgPT4gJHt0b3RhbEluY29ycmVjdH1gO1xuICBpZiAoZXJyb3JSYXRpbyA+IDAuMDAxKSB7XG4gICAgcmVzdWx0ID0gYCR7cmVzdWx0fTxici8+RXJyb3IgcmF0aW8gOjogJHtlcnJvclJhdGlvLnRvRml4ZWQoMil9JWA7XG4gIH1cbiAgbGFzdFN1Ym1pc3Npb25UaW1lPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzcGVlZCA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyB0b3RhbENvcnJlY3QpO1xuICBjb25zdCBzcGVlZFJlc3VsdCA9IGA8YnIvPlNwZWVkID0gJHtzcGVlZH0sIE51bWJlciBvZiBzZWNvbmRzIHBlciBxdWVzdGlvbi4gTG93ZXIgdGhlIGJldHRlciFgO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFF1ZXN0aW9uc1ByYWN0aWNlZCcpLmlubmVySFRNTCA9IGBUb3RhbCBRdWVzdGlvbnMgUHJhY3RpY2VkOiAgJHt0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdH1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9IGAke3Jlc3VsdH08YnIvPiR7c3BlZWRSZXN1bHR9YDtcbiAgZmluYWxpemVTdWJtaXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihzdHVkZW50SWQpIHtcbiAgY29uc3QgZGVmYXVsdERldGFpbHMgPSB7XG4gICAgc3R1ZGVudElkLFxuICAgIHNlc3Npb25zOiBbXSxcbiAgfTtcbiAgbGV0IHByaW9yUHJhY3RpY2VEZXRhaWxzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3R1ZGVudElkLnRvTG93ZXJDYXNlKCkpO1xuXG4gIHNpZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgc2lkID0gYFByYWN0aWNlXyR7c3R1ZGVudElkfUAke3NpZH1gO1xuXG4gIGlmIChwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHdlbGNvbWVNZXNzYWdlID0gYDxiPiR7c3R1ZGVudElkfSBpcyBhbWF6aW5nIHBlcnNvbiE8L2I+ICR7c3R1ZGVudElkfSBwcmFjdGljZXMgbGlrZSBjaGFtcGlvbiE8YnIvPklkZW50aWZpZXIgLSAke3NpZH1gO1xuICB9IGVsc2Uge1xuICAgIHdlbGNvbWVNZXNzYWdlID0gYDxiPkhpISAke3N0dWRlbnRJZH0sIHlvdSBhcmUgY291cmFnZW91cyE8L2I+IDEwMDAgbWlsZXMgam91cm5leSBiZWdpbnMgd2l0aCBzaW5nbGUgc3RlcCE8YnIvPklkZW50aWZpZXIgLSAke3NpZH1gO1xuICB9XG4gIHN0YXJ0UHJhY3RpY2UoKTtcbiAgaWYgKCFwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHByaW9yUHJhY3RpY2VEZXRhaWxzID0gZGVmYXVsdERldGFpbHM7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JQcmFjdGljZURldGFpbHMgPSBKU09OLnBhcnNlKHByaW9yUHJhY3RpY2VEZXRhaWxzKTtcbiAgfVxuICBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucy5wdXNoKHNpZCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNpZCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuICBjb25zdCBzdHVkZW50RGV0YWlscyA9IHsgc2Vzc2lvbnM6IHByaW9yUHJhY3RpY2VEZXRhaWxzLnNlc3Npb25zLCBzdHVkZW50SWQgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgc3R1ZGVudERldGFpbHMuc3R1ZGVudElkLnRvTG93ZXJDYXNlKCksXG4gICAgSlNPTi5zdHJpbmdpZnkoc3R1ZGVudERldGFpbHMpLFxuICApO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5mb2N1cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGVuaXNoKCkge1xuICBjb25zdCBtYXggPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4SW5wdXQnKS52YWx1ZSwgMTApO1xuICBjb25zdCByYW5kb21OdW1iZXIgPSBSYW5kb20uZ2V0UmFuZG9tSW50SW5jbHVzaXZlV2l0aEV4Y2VwdGlvbnMoMywgbWF4LCBbMTBdKTtcbiAgY29uc3Qgc2Vjb25kUmFuZG9tTnVtYmVyID0gUmFuZG9tLmdldFJhbmRvbUludEluY2x1c2l2ZSgzLCBtYXgsIFsxMF0pO1xuICB1aVRvb2xzLnBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoZXZlbnQpIHtcbiAgY29uc3QgVEFCX0tFWT05O1xuICBjb25zdCBldnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gIGNvbnN0IGNoYXJDb2RlID0gZXZlbnQud2hpY2ggPyBldmVudC53aGljaCA6IGV2ZW50LmtleUNvZGU7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSBUQUJfS0VZKSB7XG4gICAgcmV0dXJuIHRhYkhhbmRsZXIoZXZlbnQpO1xuICB9XG4gIGlmIChjaGFyQ29kZSA+IDMxICYmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSIsImZ1bmN0aW9uIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbYSwgYiwgLi4ucmVzdF0pIHtcbiAgY29uc3QgdGVucyA9IE1hdGguZmxvb3IoYiAvIDEwKSAqIDEwO1xuICBjb25zdCBvbmVzID0gTWF0aC5mbG9vcihiICUgMTApO1xuICBjb25zdCB0ZW5zTXVsdGlwbGVzID0gdGVucyAqIGE7XG4gIGNvbnN0IG9uZXNNdWx0aXBsZXMgPSBvbmVzICogYTtcbiAgY29uc3QgdGVuc1N0cmluZyA9IGAke3RlbnN9IHggJHthfSA9ICR7dGVucyAqIGF9YDtcbiAgY29uc3Qgb25lc1N0cmluZyA9IGAke29uZXN9IHggJHthfSA9ICR7b25lcyAqIGF9YDtcbiAgY29uc3QgdG90YWwgPSBgJHt0ZW5zTXVsdGlwbGVzfSArICR7b25lc011bHRpcGxlc30gPSAke1xuICAgIHRlbnNNdWx0aXBsZXMgKyBvbmVzTXVsdGlwbGVzfWA7XG4gIHJldHVybiBvbmVzICE9IDBcbiAgICA/IGAke29uZXNTdHJpbmd9PGJyPiR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gXG4gICAgOiBgJHt0ZW5zU3RyaW5nfTxicj4ke3RvdGFsfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKG1hdGhPcGVyYXRpb25zLCBpbnB1dHMpIHtcbiAgY29uc3QgbnVtYmVycyA9IFsuLi5pbnB1dHNdO1xuICBudW1iZXJzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgaWYgKG1hdGhPcGVyYXRpb25zID09PSAnbXVsdGlwbGljYXRpb24nKSB7XG4gICAgaWYgKG51bWJlcnNbMV0gPiAxMCAmJiBudW1iZXJzWzBdIDwgMTApIHtcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24obnVtYmVycyk7XG4gICAgfSBpZiAobnVtYmVyc1sxXSA+IDEwICYmIG51bWJlcnNbMF0gPiAxMCkge1xuICAgICAgcmV0dXJuIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbbnVtYmVyc1sxXSwgbnVtYmVyc1swXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbiIsImZ1bmN0aW9uIGNvdW50QnkoaW5wdXQpIHtcbiAgY29uc3QgYSA9IGlucHV0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBhY2NbY3Vycl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY2NbY3Vycl0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbY3Vycl0gKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gYTtcbn07XG5cblxuY29uc3Qgb3BlcmF0aW9ucyA9IHtcbiAgYWRkaXRpb246IChhLCBiKSA9PiBhICsgYixcbiAgbXVsdGlwbGljYXRpb246IChhLCBiKSA9PiBhICogYixcbiAgc3VidHJhY3Rpb246IChhLCBiKSA9PiBhIC0gYixcbiAgZGl2aXNpb246IChhLCBiKSA9PiBhIC8gYixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2YWx1YXRvciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGFuc3dlcihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSk7XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSkgPT09IHF1ZXN0aW9uLnN1Ym1pdHRlZEFuc3dlcjtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZShbLi4ucXVlc3Rpb25zXSkge1xuICAgIGNvbnN0IGZpbHRlcmVkV2lucyA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gPT0gcS5zdWJtaXR0ZWRBbnN3ZXIpXG4gICAgICAubWFwKChxKSA9PiBbcS5maXJzdE51bSwgcS5zZWNvbmROdW1dKTtcblxuICAgIGNvbnN0IHdpbnMgPSAodHlwZW9mIGZpbHRlcmVkV2lucyAhPT0gJ3VuZGVmaW5lZCcpID8gW10uY29uY2F0LmFwcGx5KFtdLCBmaWx0ZXJlZFdpbnMpIDogW107XG5cbiAgICBjb25zdCBmaWx0ZXJlZE5lZWRQcmFjdGljZSA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gIT09IHEuc3VibWl0dGVkQW5zd2VyKVxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XG5cbiAgICBjb25zdCBuZWVkUHJhY3RpY2UgPSAodHlwZW9mIGZpbHRlcmVkTmVlZFByYWN0aWNlICE9PSAndW5kZWZpbmVkJykgPyBbXS5jb25jYXQuYXBwbHkoW10sIGZpbHRlcmVkTmVlZFByYWN0aWNlKSA6IFtdO1xuXG4gICAgY29uc3Qgc3VtbWFyeSA9IHtcbiAgICAgIHdpbnM6IGNvdW50Qnkod2lucyksXG4gICAgICBuZWVkUHJhY3RpY2U6IGNvdW50QnkobmVlZFByYWN0aWNlKSxcbiAgICB9O1xuICAgIHJldHVybiBzdW1tYXJ5O1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgIFF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlyc3ROdW0sIHNlY29uZE51bSwgb3BlcmF0aW9uLCBzdWJtaXR0ZWRBbnN3ZXIsIHN1Ym1pc3Npb25UaW1lKSB7XG4gICAgdGhpcy5maXJzdE51bSA9IGZpcnN0TnVtO1xuICAgIHRoaXMuc2Vjb25kTnVtID0gc2Vjb25kTnVtO1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuc3VibWl0dGVkQW5zd2VyID0gc3VibWl0dGVkQW5zd2VyO1xuICAgIHRoaXMuc3VibWlzc2lvblRpbWUgPSBzdWJtaXNzaW9uVGltZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tIHtcbiAgLyoqXG4gICAqIENyZWRpdCA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG4gICAqIEBwYXJhbSB7Kn0gbWluXG4gICAqIEBwYXJhbSB7Kn0gbWF4XG4gICAqL1xuICBzdGF0aWMgZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyBUaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICB9XG5cbiAgc3RhdGljIGdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKG1pbiwgbWF4LCAuLi5leGNsdWRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KTtcbiAgICByZXR1cm4gZXhjbHVkZXMuaW5kZXhPZihyZXN1bHQpID09IC0xID8gcmVzdWx0IDogdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyhtaW4sIG1heCwgZXhjbHVkZXMpO1xuICB9XG59IiwiaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vbW9kZWwvUXVlc3Rpb24nO1xuaW1wb3J0IEV2YWx1YXRvciBmcm9tICcuL21vZGVsL0V2YWx1YXRvcic7XG5pbXBvcnQgZXhwbGFuYXRpb24gZnJvbSAnLi9tb2RlbC9BbnN3ZXJUaXBzJztcblxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUXVlc3Rpb24oXG4gICAgcGFyc2VJbnQoZm9ybVByYWN0aWNlLmZpcnN0TnVtR2VuLnZhbHVlLCAxMCksXG4gICAgcGFyc2VJbnQoZm9ybVByYWN0aWNlLnNlY29uZE51bUdlbi52YWx1ZSwgMTApLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUsXG4gICAgcGFyc2VJbnQoZm9ybVByYWN0aWNlLmFuc3dlci52YWx1ZSwgMTApLFxuICAgIG5ldyBEYXRlKClcbiAgKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmVzdWx0KHF1ZXN0aW9uKSB7XG4gIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLmluc2VydFJvdygxKTtcbiAgeC5pbnNlcnRDZWxsKDApLmlubmVySFRNTCA9IHF1ZXN0aW9uLmZpcnN0TnVtO1xuICB4Lmluc2VydENlbGwoMSkuaW5uZXJIVE1MID0gcXVlc3Rpb24uc2Vjb25kTnVtO1xuICB4Lmluc2VydENlbGwoMikuaW5uZXJIVE1MID0gRXZhbHVhdG9yLmFuc3dlcihxdWVzdGlvbik7XG4gIHguaW5zZXJ0Q2VsbCgzKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5zdWJtaXR0ZWRBbnN3ZXI7XG4gIHguaW5zZXJ0Q2VsbCg0KS5pbm5lckhUTUwgPSBleHBsYW5hdGlvbihxdWVzdGlvbi5vcGVyYXRpb24sIFtxdWVzdGlvbi5maXJzdE51bSwgcXVlc3Rpb24uc2Vjb25kTnVtXSk7XG4gIHguaW5zZXJ0Q2VsbCg1KS5pbm5lckhUTUwgPSBFdmFsdWF0b3IuZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbik7XG4gIHBvcHVsYXRlRW1wdHlSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZSA9PSAnc3VidHJhY3Rpb24nKSB7XG4gICAgY29uc3QgaW5wdXQgPSBbcmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXJdO1xuICAgIGlucHV0LnNvcnQoKGEsYikgPT4gKGEtYikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE51bUdlbicpLnZhbHVlID0gaW5wdXRbMV07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLnZhbHVlID0gaW5wdXRbMF07XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUgPT0gJ2RpdmlzaW9uJykge1xuICAgIGNvbnN0IGlucHV0ID0gW3JhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyXTtcbiAgICBpbnB1dC5zb3J0KChhLGIpID0+IChhLWIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS52YWx1ZSA9IGlucHV0WzFdICogaW5wdXRbMF07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLnZhbHVlID0gaW5wdXRbMF07XG4gICAgcmV0dXJuO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS52YWx1ZSA9IHJhbmRvbU51bWJlcjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLnZhbHVlID0gc2Vjb25kUmFuZG9tTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUVtcHR5UmVzdWx0KCkge1xuICBpZihmb3JtUHJhY3RpY2UgJiYgZm9ybVByYWN0aWNlLmFuc3dlcikge1xuICAgIGZvcm1QcmFjdGljZS5hbnN3ZXIudmFsdWUgPSAnJztcbiAgfVxufVxuXG5jb25zdCB1aVRvb2xzID0geyBjcmVhdGVRdWVzdGlvbiwgYXBwZW5kUmVzdWx0LCBwb3B1bGF0ZU5ld1F1ZXN0aW9uIH07XG5cbmV4cG9ydCBkZWZhdWx0IHVpVG9vbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9