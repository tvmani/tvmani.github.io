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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvQW5zd2VyVGlwcy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9tb2RlbC9FdmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIiwid2VicGFjazovL0FwcC8uL3VpX3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQzs7QUFFekI7Ozs7Ozs7Ozs7Ozs7QUNGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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OztBQUU3Qzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsdURBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVM7QUFDdkM7QUFDQSw4QkFBOEIsaUVBQVc7QUFDekMsOEJBQThCLHdEQUFTO0FBQ3ZDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRUYsc0VBQU8sRUFBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdWlPcHMgZnJvbSAnLi9tYXRoX29wZXJhdGlvbic7XHJcblxyXG5leHBvcnQgeyB1aU9wcyB9O1xyXG4iLCJpbXBvcnQgRXZhbHVhdG9yIGZyb20gJy4vbW9kZWwvRXZhbHVhdG9yJztcclxuaW1wb3J0IHVpVG9vbHMgZnJvbSAnLi91aV90b29scyc7XHJcbmltcG9ydCBSYW5kb20gZnJvbSAnLi9yYW5kb20nO1xyXG5cclxuY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcclxubGV0IHRvdGFsQ29ycmVjdCA9IDA7XHJcbmxldCB0b3RhbEluY29ycmVjdCA9IDA7XHJcbmxldCB3ZWxjb21lTWVzc2FnZSA9ICcnO1xyXG5sZXQgbGFzdFN1Ym1pc3Npb25UaW1lO1xyXG5sZXQgc2lkPScnO1xyXG5cclxuZnVuY3Rpb24geW91ck5hbWVLZXlib2FyZEhhbmRsZXIoKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ck5hbWUnKTtcclxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRfbmFtZScpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuc3dlcktleWJvYXJkSGFuZGxlcigpIHtcclxuICBjb25zdCBhbnN3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJyk7XHJcbiAgaWYgKGFuc3dlciAmJiBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJBbmRFbnRlckhhbmRsZXIsIGZhbHNlKTtcclxuICAgIGFuc3dlci5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGlzTnVtYmVyLCB0cnVlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhYkFuZEVudGVySGFuZGxlcihlKSB7XHJcbiAgY29uc3QgS0VZQ09ERV9UQUIgPSA5O1xyXG4gIGNvbnN0IEtFWUNPREVfRU5URVIgPSAxMztcclxuICBpZiAoZS5rZXlDb2RlID09IEtFWUNPREVfVEFCIHx8IGUua2V5Q29kZSA9PSBLRVlDT0RFX0VOVEVSKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEFuc3dlcicpLmNsaWNrKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydFByYWN0aWNlKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lTWVzc2FnZScpLmlubmVySFRNTCA9IHdlbGNvbWVNZXNzYWdlO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9ICcnO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFF1ZXN0aW9uc1ByYWN0aWNlZCcpLmlubmVySFRNTCA9ICdUb3RhbCBRdWVzdGlvbnMgUHJhY3RpY2VkOiAgMCc7XHJcbiAgLyogSWYgc29tZW9uZSBkb2Vzbid0IGNsb2VzIHRoaXMgd2luZG93LCBidXQgc3RpbGwgdXNpbmcgaXQhICovXHJcbiAgY29uc3Qgc3RhbGVSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5yb3dzLmxlbmd0aDtcclxuICBpZiAoc3RhbGVSZXN1bHRzID4gMSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGFsZVJlc3VsdHMgLSAxOyBpKyspIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5kZWxldGVSb3coLTEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluYWxpemVTdWJtaXQoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLmNsaWNrKCk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLmZvY3VzKCk7XHJcbiAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuc2Nyb2xsSW50b1ZpZXcoKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoX2V2ZW50KSA9PiB7XHJcbiAgcmVwbGVuaXNoKCk7XHJcbiAgYW5zd2VyS2V5Ym9hcmRIYW5kbGVyKCk7XHJcbiAgeW91ck5hbWVLZXlib2FyZEhhbmRsZXIoKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IHsgdWlUb29scyBhcyB1aSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjb3JlTWFyayhxdWVzdGlvbikge1xyXG4gIGlmIChFdmFsdWF0b3IuZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbikpIHtcclxuICAgIHRvdGFsQ29ycmVjdCsrO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b3RhbEluY29ycmVjdCsrO1xyXG4gIH1cclxuICB1aVRvb2xzLmFwcGVuZFJlc3VsdChxdWVzdGlvbik7XHJcbiAgcmVwbGVuaXNoKCk7XHJcbiAgbGFzdFN1Ym1pc3Npb25UaW1lID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkaWZmID0gTWF0aC5hYnMobGFzdFN1Ym1pc3Npb25UaW1lIC0gc3RhcnRUaW1lKTtcclxuICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGguZmxvb3IoZGlmZiAvIDEwMDApO1xyXG4gIGNvbnN0IGVycm9yUmF0aW8gPSAodG90YWxJbmNvcnJlY3QgLyAodG90YWxDb3JyZWN0ICsgdG90YWxJbmNvcnJlY3QpKSAqIDEwMDtcclxuXHJcbiAgY29uc3QgcHJpb3JRdWVzdGlvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2lkKSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2lkLCBKU09OLnN0cmluZ2lmeShbcXVlc3Rpb24sIC4uLnByaW9yUXVlc3Rpb25dKSk7XHJcblxyXG4gIGxldCByZXN1bHQgPSBgQ29ycmVjdCA9PiAke3RvdGFsQ29ycmVjdH08YnIvPkluY29ycmVjdCA9PiAke3RvdGFsSW5jb3JyZWN0fWA7XHJcbiAgaWYgKGVycm9yUmF0aW8gPiAwLjAwMSkge1xyXG4gICAgcmVzdWx0ID0gYCR7cmVzdWx0fTxici8+RXJyb3IgcmF0aW8gOjogJHtlcnJvclJhdGlvLnRvRml4ZWQoMil9JWA7XHJcbiAgfVxyXG4gIGxhc3RTdWJtaXNzaW9uVGltZT0gbmV3IERhdGUoKTtcclxuICBjb25zdCBzcGVlZCA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyB0b3RhbENvcnJlY3QpO1xyXG4gIGNvbnN0IHNwZWVkUmVzdWx0ID0gYDxici8+U3BlZWQgPSAke3NwZWVkfSwgTnVtYmVyIG9mIHNlY29uZHMgcGVyIHF1ZXN0aW9uLiBMb3dlciB0aGUgYmV0dGVyIWA7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFF1ZXN0aW9uc1ByYWN0aWNlZCcpLmlubmVySFRNTCA9IGBUb3RhbCBRdWVzdGlvbnMgUHJhY3RpY2VkOiAgJHt0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdH1gO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1tYXJ5JykuaW5uZXJIVE1MID0gYCR7cmVzdWx0fTxici8+JHtzcGVlZFJlc3VsdH1gO1xyXG4gIGZpbmFsaXplU3VibWl0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclVzZXIoc3R1ZGVudElkKSB7XHJcbiAgY29uc3QgZGVmYXVsdERldGFpbHMgPSB7XHJcbiAgICBzdHVkZW50SWQsXHJcbiAgICBzZXNzaW9uczogW10sXHJcbiAgfTtcclxuICBsZXQgcHJpb3JQcmFjdGljZURldGFpbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdHVkZW50SWQudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gIHNpZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICBzaWQgPSBgUHJhY3RpY2VfJHtzdHVkZW50SWR9QCR7c2lkfWA7XHJcblxyXG4gIGlmIChwcmlvclByYWN0aWNlRGV0YWlscykge1xyXG4gICAgd2VsY29tZU1lc3NhZ2UgPSBgPGI+JHtzdHVkZW50SWR9IGlzIGFtYXppbmcgcGVyc29uITwvYj4gJHtzdHVkZW50SWR9IHByYWN0aWNlcyBsaWtlIGNoYW1waW9uITxici8+SWRlbnRpZmllciAtICR7c2lkfWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdlbGNvbWVNZXNzYWdlID0gYDxiPkhpISAke3N0dWRlbnRJZH0sIHlvdSBhcmUgY291cmFnZW91cyE8L2I+IDEwMDAgbWlsZXMgam91cm5leSBiZWdpbnMgd2l0aCBzaW5nbGUgc3RlcCE8YnIvPklkZW50aWZpZXIgLSAke3NpZH1gO1xyXG4gIH1cclxuICBzdGFydFByYWN0aWNlKCk7XHJcbiAgaWYgKCFwcmlvclByYWN0aWNlRGV0YWlscykge1xyXG4gICAgcHJpb3JQcmFjdGljZURldGFpbHMgPSBkZWZhdWx0RGV0YWlscztcclxuICB9IGVsc2Uge1xyXG4gICAgcHJpb3JQcmFjdGljZURldGFpbHMgPSBKU09OLnBhcnNlKHByaW9yUHJhY3RpY2VEZXRhaWxzKTtcclxuICB9XHJcbiAgcHJpb3JQcmFjdGljZURldGFpbHMuc2Vzc2lvbnMucHVzaChzaWQpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNpZCwgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuXHJcbiAgY29uc3Qgc3R1ZGVudERldGFpbHMgPSB7IHNlc3Npb25zOiBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucywgc3R1ZGVudElkIH07XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICBzdHVkZW50RGV0YWlscy5zdHVkZW50SWQudG9Mb3dlckNhc2UoKSxcclxuICAgIEpTT04uc3RyaW5naWZ5KHN0dWRlbnREZXRhaWxzKSxcclxuICApO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuZm9jdXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxlbmlzaCgpIHtcclxuICBjb25zdCBtYXggPSBwYXJzZUludChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4SW5wdXQnKS52YWx1ZSwgMTApO1xyXG4gIGNvbnN0IHJhbmRvbU51bWJlciA9IFJhbmRvbS5nZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucygzLCBtYXgsIFsxMF0pO1xyXG4gIGNvbnN0IHNlY29uZFJhbmRvbU51bWJlciA9IFJhbmRvbS5nZXRSYW5kb21JbnRJbmNsdXNpdmUoMywgbWF4LCBbMTBdKTtcclxuICB1aVRvb2xzLnBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoZXZlbnQpIHtcclxuICBjb25zdCBUQUJfS0VZPTk7XHJcbiAgY29uc3QgZXZ0ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG4gIGNvbnN0IGNoYXJDb2RlID0gZXZlbnQud2hpY2ggPyBldmVudC53aGljaCA6IGV2ZW50LmtleUNvZGU7XHJcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IFRBQl9LRVkpIHtcclxuICAgIHJldHVybiB0YWJIYW5kbGVyKGV2ZW50KTtcclxuICB9XHJcbiAgaWYgKGNoYXJDb2RlID4gMzEgJiYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1NykpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0iLCJmdW5jdGlvbiBleHBsYWluTXVsdGlwbGljYXRpb24oW2EsIGIsIC4uLnJlc3RdKSB7XHJcbiAgY29uc3QgdGVucyA9IE1hdGguZmxvb3IoYiAvIDEwKSAqIDEwO1xyXG4gIGNvbnN0IG9uZXMgPSBNYXRoLmZsb29yKGIgJSAxMCk7XHJcbiAgY29uc3QgdGVuc011bHRpcGxlcyA9IHRlbnMgKiBhO1xyXG4gIGNvbnN0IG9uZXNNdWx0aXBsZXMgPSBvbmVzICogYTtcclxuICBjb25zdCB0ZW5zU3RyaW5nID0gYCR7dGVuc30geCAke2F9ID0gJHt0ZW5zICogYX1gO1xyXG4gIGNvbnN0IG9uZXNTdHJpbmcgPSBgJHtvbmVzfSB4ICR7YX0gPSAke29uZXMgKiBhfWA7XHJcbiAgY29uc3QgdG90YWwgPSBgJHt0ZW5zTXVsdGlwbGVzfSArICR7b25lc011bHRpcGxlc30gPSAke1xyXG4gICAgdGVuc011bHRpcGxlcyArIG9uZXNNdWx0aXBsZXN9YDtcclxuICByZXR1cm4gb25lcyAhPSAwXHJcbiAgICA/IGAke29uZXNTdHJpbmd9PGJyPiR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gXHJcbiAgICA6IGAke3RlbnNTdHJpbmd9PGJyPiR7dG90YWx9YDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwbGFuYXRpb24obWF0aE9wZXJhdGlvbnMsIGlucHV0cykge1xyXG4gIGNvbnN0IG51bWJlcnMgPSBbLi4uaW5wdXRzXTtcclxuICBudW1iZXJzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICBpZiAobWF0aE9wZXJhdGlvbnMgPT09ICdtdWx0aXBsaWNhdGlvbicpIHtcclxuICAgIGlmIChudW1iZXJzWzFdID4gMTAgJiYgbnVtYmVyc1swXSA8IDEwKSB7XHJcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24obnVtYmVycyk7XHJcbiAgICB9IGlmIChudW1iZXJzWzFdID4gMTAgJiYgbnVtYmVyc1swXSA+IDEwKSB7XHJcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24oW251bWJlcnNbMV0sIG51bWJlcnNbMF1dKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4iLCJmdW5jdGlvbiBjb3VudEJ5KGlucHV0KSB7XHJcbiAgY29uc3QgYSA9IGlucHV0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGFjY1tjdXJyXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgYWNjW2N1cnJdID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFjY1tjdXJyXSArPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjYztcclxuICB9LCB7fSk7XHJcbiAgcmV0dXJuIGE7XHJcbn07XHJcblxyXG5cclxuY29uc3Qgb3BlcmF0aW9ucyA9IHtcclxuICBhZGRpdGlvbjogKGEsIGIpID0+IGEgKyBiLFxyXG4gIG11bHRpcGxpY2F0aW9uOiAoYSwgYikgPT4gYSAqIGIsXHJcbiAgc3VidHJhY3Rpb246IChhLCBiKSA9PiBhIC0gYixcclxuICBkaXZpc2lvbjogKGEsIGIpID0+IGEgLyBiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZhbHVhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFuc3dlcihxdWVzdGlvbikge1xyXG4gICAgY29uc3QgZnVuYyA9IG9wZXJhdGlvbnNbcXVlc3Rpb24ub3BlcmF0aW9uXTtcclxuICAgIHJldHVybiBmdW5jKHF1ZXN0aW9uLmZpcnN0TnVtLCBxdWVzdGlvbi5zZWNvbmROdW0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pIHtcclxuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XHJcbiAgICByZXR1cm4gZnVuYyhxdWVzdGlvbi5maXJzdE51bSwgcXVlc3Rpb24uc2Vjb25kTnVtKSA9PT0gcXVlc3Rpb24uc3VibWl0dGVkQW5zd2VyO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGV2YWx1YXRlKFsuLi5xdWVzdGlvbnNdKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFdpbnMgPSBxdWVzdGlvbnNcclxuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXHJcbiAgICAgIC5maWx0ZXIoKHEpID0+IHEuZmlyc3ROdW0gKiBxLnNlY29uZE51bSA9PSBxLnN1Ym1pdHRlZEFuc3dlcilcclxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XHJcblxyXG4gICAgY29uc3Qgd2lucyA9ICh0eXBlb2YgZmlsdGVyZWRXaW5zICE9PSAndW5kZWZpbmVkJykgPyBbXS5jb25jYXQuYXBwbHkoW10sIGZpbHRlcmVkV2lucykgOiBbXTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZE5lZWRQcmFjdGljZSA9IHF1ZXN0aW9uc1xyXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLm9wZXJhdGlvbiA9PT0gJ211bHRpcGxpY2F0aW9uJylcclxuICAgICAgLmZpbHRlcigocSkgPT4gcS5maXJzdE51bSAqIHEuc2Vjb25kTnVtICE9PSBxLnN1Ym1pdHRlZEFuc3dlcilcclxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XHJcblxyXG4gICAgY29uc3QgbmVlZFByYWN0aWNlID0gKHR5cGVvZiBmaWx0ZXJlZE5lZWRQcmFjdGljZSAhPT0gJ3VuZGVmaW5lZCcpID8gW10uY29uY2F0LmFwcGx5KFtdLCBmaWx0ZXJlZE5lZWRQcmFjdGljZSkgOiBbXTtcclxuXHJcbiAgICBjb25zdCBzdW1tYXJ5ID0ge1xyXG4gICAgICB3aW5zOiBjb3VudEJ5KHdpbnMpLFxyXG4gICAgICBuZWVkUHJhY3RpY2U6IGNvdW50QnkobmVlZFByYWN0aWNlKSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gc3VtbWFyeTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyAgUXVlc3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKGZpcnN0TnVtLCBzZWNvbmROdW0sIG9wZXJhdGlvbiwgc3VibWl0dGVkQW5zd2VyLCBzdWJtaXNzaW9uVGltZSkge1xyXG4gICAgdGhpcy5maXJzdE51bSA9IGZpcnN0TnVtO1xyXG4gICAgdGhpcy5zZWNvbmROdW0gPSBzZWNvbmROdW07XHJcbiAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcclxuICAgIHRoaXMuc3VibWl0dGVkQW5zd2VyID0gc3VibWl0dGVkQW5zd2VyO1xyXG4gICAgdGhpcy5zdWJtaXNzaW9uVGltZSA9IHN1Ym1pc3Npb25UaW1lO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb20ge1xyXG4gIC8qKlxyXG4gICAqIENyZWRpdCA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXHJcbiAgICogQHBhcmFtIHsqfSBtaW5cclxuICAgKiBAcGFyYW0geyp9IG1heFxyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47IC8vIFRoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UmFuZG9tSW50SW5jbHVzaXZlV2l0aEV4Y2VwdGlvbnMobWluLCBtYXgsIC4uLmV4Y2x1ZGVzKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCk7XHJcbiAgICByZXR1cm4gZXhjbHVkZXMuaW5kZXhPZihyZXN1bHQpID09IC0xID8gcmVzdWx0IDogdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyhtaW4sIG1heCwgZXhjbHVkZXMpO1xyXG4gIH1cclxufSIsImltcG9ydCBRdWVzdGlvbiBmcm9tICcuL21vZGVsL1F1ZXN0aW9uJztcclxuaW1wb3J0IEV2YWx1YXRvciBmcm9tICcuL21vZGVsL0V2YWx1YXRvcic7XHJcbmltcG9ydCBleHBsYW5hdGlvbiBmcm9tICcuL21vZGVsL0Fuc3dlclRpcHMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb24oKSB7XHJcblxyXG4gIGNvbnN0IGZpcnN0TnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdE51bUdlblwiKS5pbm5lckhUTUw7XHJcbiAgY29uc3Qgc2Vjb25kTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmROdW1HZW5cIikuaW5uZXJIVE1MO1xyXG5cclxuICByZXR1cm4gbmV3IFF1ZXN0aW9uKFxyXG4gICAgcGFyc2VJbnQoZmlyc3ROdW0sIDEwKSxcclxuICAgIHBhcnNlSW50KHNlY29uZE51bSwgMTApLFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZSxcclxuICAgIHBhcnNlSW50KGZvcm1QcmFjdGljZS5hbnN3ZXIudmFsdWUsIDEwKSxcclxuICAgIG5ldyBEYXRlKClcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBlbmRSZXN1bHQocXVlc3Rpb24pIHtcclxuICBjb25zdCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5pbnNlcnRSb3coMSk7XHJcbiAgeC5pbnNlcnRDZWxsKDApLmlubmVySFRNTCA9IHF1ZXN0aW9uLmZpcnN0TnVtO1xyXG4gIHguaW5zZXJ0Q2VsbCgxKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5zZWNvbmROdW07XHJcbiAgeC5pbnNlcnRDZWxsKDIpLmlubmVySFRNTCA9IEV2YWx1YXRvci5hbnN3ZXIocXVlc3Rpb24pO1xyXG4gIHguaW5zZXJ0Q2VsbCgzKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5zdWJtaXR0ZWRBbnN3ZXI7XHJcbiAgeC5pbnNlcnRDZWxsKDQpLmlubmVySFRNTCA9IGV4cGxhbmF0aW9uKHF1ZXN0aW9uLm9wZXJhdGlvbiwgW3F1ZXN0aW9uLmZpcnN0TnVtLCBxdWVzdGlvbi5zZWNvbmROdW1dKTtcclxuICB4Lmluc2VydENlbGwoNSkuaW5uZXJIVE1MID0gRXZhbHVhdG9yLmV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gIHBvcHVsYXRlRW1wdHlSZXN1bHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpIHtcclxuICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlcmF0aW9ucycpLnZhbHVlID09ICdzdWJ0cmFjdGlvbicpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gW3JhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyXTtcclxuICAgIGlucHV0LnNvcnQoKGEsYikgPT4gKGEtYikpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0TnVtR2VuJykuaW5uZXJIVE1MID0gaW5wdXRbMV07XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kTnVtR2VuJykuaW5uZXJIVE1MID0gaW5wdXRbMF07XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUgPT0gJ2RpdmlzaW9uJykge1xyXG4gICAgY29uc3QgaW5wdXQgPSBbcmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXJdO1xyXG4gICAgaW5wdXQuc29ydCgoYSxiKSA9PiAoYS1iKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFsxXSAqIGlucHV0WzBdO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLmlubmVySFRNTCA9IGlucHV0WzBdO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS5pbm5lckhUTUwgPSByYW5kb21OdW1iZXI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLmlubmVySFRNTCA9IHNlY29uZFJhbmRvbU51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVFbXB0eVJlc3VsdCgpIHtcclxuICBpZihmb3JtUHJhY3RpY2UgJiYgZm9ybVByYWN0aWNlLmFuc3dlcikge1xyXG4gICAgZm9ybVByYWN0aWNlLmFuc3dlci52YWx1ZSA9ICcnO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdWlUb29scyA9IHsgY3JlYXRlUXVlc3Rpb24sIGFwcGVuZFJlc3VsdCwgcG9wdWxhdGVOZXdRdWVzdGlvbiB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdWlUb29scztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==