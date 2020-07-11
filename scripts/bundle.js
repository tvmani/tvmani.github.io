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
  const secondRandomNumber = _random__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomIntInclusive(3, 20, [10]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvQW5zd2VyVGlwcy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9tb2RlbC9FdmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIiwid2VicGFjazovL0FwcC8uL3VpX3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQzs7QUFFekI7Ozs7Ozs7Ozs7Ozs7QUNGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDVDtBQUNIOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR3dCOztBQUVsQjtBQUNQLE1BQU0sd0RBQVM7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxpREFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIsYUFBYSxvQkFBb0IsZUFBZTtBQUM3RTtBQUNBLGdCQUFnQixPQUFPLHNCQUFzQixzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07O0FBRTVDLGdHQUFnRyw4QkFBOEI7QUFDOUgsb0RBQW9ELE9BQU8sT0FBTyxZQUFZO0FBQzlFO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFVBQVUsR0FBRyxJQUFJOztBQUVyQztBQUNBLDJCQUEyQixVQUFVLDBCQUEwQixVQUFVLDZDQUE2QyxJQUFJO0FBQzFILEdBQUc7QUFDSCwrQkFBK0IsVUFBVSx5RkFBeUYsSUFBSTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0EsdUJBQXVCLCtDQUFNO0FBQzdCLDZCQUE2QiwrQ0FBTTtBQUNuQyxFQUFFLGlEQUFPO0FBQ1Q7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixLQUFLLEtBQUssRUFBRSxLQUFLLFNBQVM7QUFDbEQsd0JBQXdCLEtBQUssS0FBSyxFQUFFLEtBQUssU0FBUztBQUNsRCxtQkFBbUIsY0FBYyxLQUFLLGNBQWM7QUFDcEQsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUyxXQUFXLE1BQU0sV0FBVyxNQUFNLE1BQU07QUFDakQsU0FBUyxXQUFXLE1BQU0sTUFBTTtBQUNoQzs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDRTtBQUNHOztBQUU3QztBQUNBLGFBQWEsdURBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0RBQVM7QUFDdkM7QUFDQSw4QkFBOEIsaUVBQVc7QUFDekMsOEJBQThCLHdEQUFTO0FBQ3ZDO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVGLHNFQUFPLEVBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIHVpT3BzIGZyb20gJy4vbWF0aF9vcGVyYXRpb24nO1xuXG5leHBvcnQgeyB1aU9wcyB9O1xuIiwiaW1wb3J0IEV2YWx1YXRvciBmcm9tICcuL21vZGVsL0V2YWx1YXRvcic7XG5pbXBvcnQgdWlUb29scyBmcm9tICcuL3VpX3Rvb2xzJztcbmltcG9ydCBSYW5kb20gZnJvbSAnLi9yYW5kb20nO1xuXG5jb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xubGV0IHRvdGFsQ29ycmVjdCA9IDA7XG5sZXQgdG90YWxJbmNvcnJlY3QgPSAwO1xubGV0IHdlbGNvbWVNZXNzYWdlID0gJyc7XG5sZXQgbGFzdFN1Ym1pc3Npb25UaW1lO1xubGV0IHNpZD0nJztcblxuZnVuY3Rpb24geW91ck5hbWVLZXlib2FyZEhhbmRsZXIoKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lvdXJOYW1lJyk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdE5hbWUnKS5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuc3dlcktleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgYW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpO1xuICBpZiAoYW5zd2VyICYmIGFuc3dlci5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJBbmRFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBpc051bWJlciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFiQW5kRW50ZXJIYW5kbGVyKGUpIHtcbiAgY29uc3QgS0VZQ09ERV9UQUIgPSA5O1xuICBjb25zdCBLRVlDT0RFX0VOVEVSID0gMTM7XG4gIGlmIChlLmtleUNvZGUgPT0gS0VZQ09ERV9UQUIgfHwgZS5rZXlDb2RlID09IEtFWUNPREVfRU5URVIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRBbnN3ZXInKS5jbGljaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0UHJhY3RpY2UoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWxjb21lTWVzc2FnZScpLmlubmVySFRNTCA9IHdlbGNvbWVNZXNzYWdlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1tYXJ5JykuaW5uZXJIVE1MID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFF1ZXN0aW9uc1ByYWN0aWNlZCcpLmlubmVySFRNTCA9ICdUb3RhbCBRdWVzdGlvbnMgUHJhY3RpY2VkOiAgMCc7XG4gIC8qIElmIHNvbWVvbmUgZG9lc24ndCBjbG9lcyB0aGlzIHdpbmRvdywgYnV0IHN0aWxsIHVzaW5nIGl0ISAqL1xuICBjb25zdCBzdGFsZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLnJvd3MubGVuZ3RoO1xuICBpZiAoc3RhbGVSZXN1bHRzID4gMSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhbGVSZXN1bHRzIC0gMTsgaSsrKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLmRlbGV0ZVJvdygtMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmFsaXplU3VibWl0KCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuY2xpY2soKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLmZvY3VzKCk7XG4gIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnNjcm9sbEludG9WaWV3KCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKF9ldmVudCkgPT4ge1xuICByZXBsZW5pc2goKTtcbiAgYW5zd2VyS2V5Ym9hcmRIYW5kbGVyKCk7XG4gIHlvdXJOYW1lS2V5Ym9hcmRIYW5kbGVyKCk7XG59KTtcblxuXG5leHBvcnQgeyB1aVRvb2xzIGFzIHVpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29yZU1hcmsocXVlc3Rpb24pIHtcbiAgaWYgKEV2YWx1YXRvci5ldmFsdWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uKSkge1xuICAgIHRvdGFsQ29ycmVjdCsrO1xuICB9IGVsc2Uge1xuICAgIHRvdGFsSW5jb3JyZWN0Kys7XG4gIH1cbiAgdWlUb29scy5hcHBlbmRSZXN1bHQocXVlc3Rpb24pO1xuICByZXBsZW5pc2goKTtcbiAgbGFzdFN1Ym1pc3Npb25UaW1lID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGxhc3RTdWJtaXNzaW9uVGltZSAtIHN0YXJ0VGltZSk7XG4gIGNvbnN0IGVsYXBzZWRUaW1lID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gIGNvbnN0IGVycm9yUmF0aW8gPSAodG90YWxJbmNvcnJlY3QgLyAodG90YWxDb3JyZWN0ICsgdG90YWxJbmNvcnJlY3QpKSAqIDEwMDtcblxuICBjb25zdCBwcmlvclF1ZXN0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzaWQpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2lkLCBKU09OLnN0cmluZ2lmeShbcXVlc3Rpb24sIC4uLnByaW9yUXVlc3Rpb25dKSk7XG5cbiAgbGV0IHJlc3VsdCA9IGBDb3JyZWN0ID0+ICR7dG90YWxDb3JyZWN0fTxici8+SW5jb3JyZWN0ID0+ICR7dG90YWxJbmNvcnJlY3R9YDtcbiAgaWYgKGVycm9yUmF0aW8gPiAwLjAwMSkge1xuICAgIHJlc3VsdCA9IGAke3Jlc3VsdH08YnIvPkVycm9yIHJhdGlvIDo6ICR7ZXJyb3JSYXRpby50b0ZpeGVkKDIpfSVgO1xuICB9XG4gIGxhc3RTdWJtaXNzaW9uVGltZT0gbmV3IERhdGUoKTtcbiAgY29uc3Qgc3BlZWQgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gdG90YWxDb3JyZWN0KTtcbiAgY29uc3Qgc3BlZWRSZXN1bHQgPSBgPGJyLz5TcGVlZCA9ICR7c3BlZWR9LCBOdW1iZXIgb2Ygc2Vjb25kcyBwZXIgcXVlc3Rpb24uIExvd2VyIHRoZSBiZXR0ZXIhYDtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxRdWVzdGlvbnNQcmFjdGljZWQnKS5pbm5lckhUTUwgPSBgVG90YWwgUXVlc3Rpb25zIFByYWN0aWNlZDogICR7dG90YWxDb3JyZWN0ICsgdG90YWxJbmNvcnJlY3R9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS5pbm5lckhUTUwgPSBgJHtyZXN1bHR9PGJyLz4ke3NwZWVkUmVzdWx0fWA7XG4gIGZpbmFsaXplU3VibWl0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclVzZXIoc3R1ZGVudElkKSB7XG4gIGNvbnN0IGRlZmF1bHREZXRhaWxzID0ge1xuICAgIHN0dWRlbnRJZCxcbiAgICBzZXNzaW9uczogW10sXG4gIH07XG4gIGxldCBwcmlvclByYWN0aWNlRGV0YWlscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0dWRlbnRJZC50b0xvd2VyQ2FzZSgpKTtcblxuICBzaWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gIHNpZCA9IGBQcmFjdGljZV8ke3N0dWRlbnRJZH1AJHtzaWR9YDtcblxuICBpZiAocHJpb3JQcmFjdGljZURldGFpbHMpIHtcbiAgICB3ZWxjb21lTWVzc2FnZSA9IGA8Yj4ke3N0dWRlbnRJZH0gaXMgYW1hemluZyBwZXJzb24hPC9iPiAke3N0dWRlbnRJZH0gcHJhY3RpY2VzIGxpa2UgY2hhbXBpb24hPGJyLz5JZGVudGlmaWVyIC0gJHtzaWR9YDtcbiAgfSBlbHNlIHtcbiAgICB3ZWxjb21lTWVzc2FnZSA9IGA8Yj5IaSEgJHtzdHVkZW50SWR9LCB5b3UgYXJlIGNvdXJhZ2VvdXMhPC9iPiAxMDAwIG1pbGVzIGpvdXJuZXkgYmVnaW5zIHdpdGggc2luZ2xlIHN0ZXAhPGJyLz5JZGVudGlmaWVyIC0gJHtzaWR9YDtcbiAgfVxuICBzdGFydFByYWN0aWNlKCk7XG4gIGlmICghcHJpb3JQcmFjdGljZURldGFpbHMpIHtcbiAgICBwcmlvclByYWN0aWNlRGV0YWlscyA9IGRlZmF1bHREZXRhaWxzO1xuICB9IGVsc2Uge1xuICAgIHByaW9yUHJhY3RpY2VEZXRhaWxzID0gSlNPTi5wYXJzZShwcmlvclByYWN0aWNlRGV0YWlscyk7XG4gIH1cbiAgcHJpb3JQcmFjdGljZURldGFpbHMuc2Vzc2lvbnMucHVzaChzaWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzaWQsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgY29uc3Qgc3R1ZGVudERldGFpbHMgPSB7IHNlc3Npb25zOiBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucywgc3R1ZGVudElkIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIHN0dWRlbnREZXRhaWxzLnN0dWRlbnRJZC50b0xvd2VyQ2FzZSgpLFxuICAgIEpTT04uc3RyaW5naWZ5KHN0dWRlbnREZXRhaWxzKSxcbiAgKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuZm9jdXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxlbmlzaCgpIHtcbiAgY29uc3QgbWF4ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heElucHV0JykudmFsdWUsIDEwKTtcbiAgY29uc3QgcmFuZG9tTnVtYmVyID0gUmFuZG9tLmdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKDMsIG1heCwgWzEwXSk7XG4gIGNvbnN0IHNlY29uZFJhbmRvbU51bWJlciA9IFJhbmRvbS5nZXRSYW5kb21JbnRJbmNsdXNpdmUoMywgMjAsIFsxMF0pO1xuICB1aVRvb2xzLnBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIoZXZlbnQpIHtcbiAgY29uc3QgVEFCX0tFWT05O1xuICBjb25zdCBldnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG4gIGNvbnN0IGNoYXJDb2RlID0gZXZlbnQud2hpY2ggPyBldmVudC53aGljaCA6IGV2ZW50LmtleUNvZGU7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSBUQUJfS0VZKSB7XG4gICAgcmV0dXJuIHRhYkhhbmRsZXIoZXZlbnQpO1xuICB9XG4gIGlmIChjaGFyQ29kZSA+IDMxICYmIChjaGFyQ29kZSA8IDQ4IHx8IGNoYXJDb2RlID4gNTcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufSIsImZ1bmN0aW9uIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbYSwgYiwgLi4ucmVzdF0pIHtcbiAgY29uc3QgdGVucyA9IE1hdGguZmxvb3IoYiAvIDEwKSAqIDEwO1xuICBjb25zdCBvbmVzID0gTWF0aC5mbG9vcihiICUgMTApO1xuICBjb25zdCB0ZW5zTXVsdGlwbGVzID0gdGVucyAqIGE7XG4gIGNvbnN0IG9uZXNNdWx0aXBsZXMgPSBvbmVzICogYTtcbiAgY29uc3QgdGVuc1N0cmluZyA9IGAke3RlbnN9IHggJHthfSA9ICR7dGVucyAqIGF9YDtcbiAgY29uc3Qgb25lc1N0cmluZyA9IGAke29uZXN9IHggJHthfSA9ICR7b25lcyAqIGF9YDtcbiAgY29uc3QgdG90YWwgPSBgJHt0ZW5zTXVsdGlwbGVzfSArICR7b25lc011bHRpcGxlc30gPSAke1xuICAgIHRlbnNNdWx0aXBsZXMgKyBvbmVzTXVsdGlwbGVzfWA7XG4gIHJldHVybiBvbmVzICE9IDBcbiAgICA/IGAke29uZXNTdHJpbmd9PGJyPiR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gXG4gICAgOiBgJHt0ZW5zU3RyaW5nfTxicj4ke3RvdGFsfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGxhbmF0aW9uKG1hdGhPcGVyYXRpb25zLCBpbnB1dHMpIHtcbiAgY29uc3QgbnVtYmVycyA9IFsuLi5pbnB1dHNdO1xuICBudW1iZXJzLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgaWYgKG1hdGhPcGVyYXRpb25zID09PSAnbXVsdGlwbGljYXRpb24nKSB7XG4gICAgaWYgKG51bWJlcnNbMV0gPiAxMCAmJiBudW1iZXJzWzBdIDwgMTApIHtcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24obnVtYmVycyk7XG4gICAgfSBpZiAobnVtYmVyc1sxXSA+IDEwICYmIG51bWJlcnNbMF0gPiAxMCkge1xuICAgICAgcmV0dXJuIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbbnVtYmVyc1sxXSwgbnVtYmVyc1swXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbiIsImZ1bmN0aW9uIGNvdW50QnkoaW5wdXQpIHtcbiAgY29uc3QgYSA9IGlucHV0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBhY2NbY3Vycl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBhY2NbY3Vycl0gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbY3Vycl0gKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gYTtcbn07XG5cblxuY29uc3Qgb3BlcmF0aW9ucyA9IHtcbiAgYWRkaXRpb246IChhLCBiKSA9PiBhICsgYixcbiAgbXVsdGlwbGljYXRpb246IChhLCBiKSA9PiBhICogYixcbiAgc3VidHJhY3Rpb246IChhLCBiKSA9PiBhIC0gYixcbiAgZGl2aXNpb246IChhLCBiKSA9PiBhIC8gYixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2YWx1YXRvciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGFuc3dlcihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSk7XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbikge1xuICAgIGNvbnN0IGZ1bmMgPSBvcGVyYXRpb25zW3F1ZXN0aW9uLm9wZXJhdGlvbl07XG4gICAgcmV0dXJuIGZ1bmMocXVlc3Rpb24uZmlyc3ROdW0sIHF1ZXN0aW9uLnNlY29uZE51bSkgPT09IHF1ZXN0aW9uLnN1Ym1pdHRlZEFuc3dlcjtcbiAgfVxuXG4gIHN0YXRpYyBldmFsdWF0ZShbLi4ucXVlc3Rpb25zXSkge1xuICAgIGNvbnN0IGZpbHRlcmVkV2lucyA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gPT0gcS5zdWJtaXR0ZWRBbnN3ZXIpXG4gICAgICAubWFwKChxKSA9PiBbcS5maXJzdE51bSwgcS5zZWNvbmROdW1dKTtcblxuICAgIGNvbnN0IHdpbnMgPSAodHlwZW9mIGZpbHRlcmVkV2lucyAhPT0gJ3VuZGVmaW5lZCcpID8gW10uY29uY2F0LmFwcGx5KFtdLCBmaWx0ZXJlZFdpbnMpIDogW107XG5cbiAgICBjb25zdCBmaWx0ZXJlZE5lZWRQcmFjdGljZSA9IHF1ZXN0aW9uc1xuICAgICAgLmZpbHRlcigocSkgPT4gcS5vcGVyYXRpb24gPT09ICdtdWx0aXBsaWNhdGlvbicpXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLmZpcnN0TnVtICogcS5zZWNvbmROdW0gIT09IHEuc3VibWl0dGVkQW5zd2VyKVxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XG5cbiAgICBjb25zdCBuZWVkUHJhY3RpY2UgPSAodHlwZW9mIGZpbHRlcmVkTmVlZFByYWN0aWNlICE9PSAndW5kZWZpbmVkJykgPyBbXS5jb25jYXQuYXBwbHkoW10sIGZpbHRlcmVkTmVlZFByYWN0aWNlKSA6IFtdO1xuXG4gICAgY29uc3Qgc3VtbWFyeSA9IHtcbiAgICAgIHdpbnM6IGNvdW50Qnkod2lucyksXG4gICAgICBuZWVkUHJhY3RpY2U6IGNvdW50QnkobmVlZFByYWN0aWNlKSxcbiAgICB9O1xuICAgIHJldHVybiBzdW1tYXJ5O1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgIFF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlyc3ROdW0sIHNlY29uZE51bSwgb3BlcmF0aW9uLCBzdWJtaXR0ZWRBbnN3ZXIsIHN1Ym1pc3Npb25UaW1lKSB7XG4gICAgdGhpcy5maXJzdE51bSA9IGZpcnN0TnVtO1xuICAgIHRoaXMuc2Vjb25kTnVtID0gc2Vjb25kTnVtO1xuICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgIHRoaXMuc3VibWl0dGVkQW5zd2VyID0gc3VibWl0dGVkQW5zd2VyO1xuICAgIHRoaXMuc3VibWlzc2lvblRpbWUgPSBzdWJtaXNzaW9uVGltZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tIHtcbiAgLyoqXG4gICAqIENyZWRpdCA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG4gICAqIEBwYXJhbSB7Kn0gbWluXG4gICAqIEBwYXJhbSB7Kn0gbWF4XG4gICAqL1xuICBzdGF0aWMgZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyBUaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICB9XG5cbiAgc3RhdGljIGdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKG1pbiwgbWF4LCAuLi5leGNsdWRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KTtcbiAgICByZXR1cm4gZXhjbHVkZXMuaW5kZXhPZihyZXN1bHQpID09IC0xID8gcmVzdWx0IDogdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyhtaW4sIG1heCwgZXhjbHVkZXMpO1xuICB9XG59IiwiaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vbW9kZWwvUXVlc3Rpb24nO1xuaW1wb3J0IEV2YWx1YXRvciBmcm9tICcuL21vZGVsL0V2YWx1YXRvcic7XG5pbXBvcnQgZXhwbGFuYXRpb24gZnJvbSAnLi9tb2RlbC9BbnN3ZXJUaXBzJztcblxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUXVlc3Rpb24oXG4gICAgcGFyc2VJbnQoZm9ybVByYWN0aWNlLmZpcnN0TnVtR2VuLnZhbHVlLCAxMCksXG4gICAgcGFyc2VJbnQoZm9ybVByYWN0aWNlLnNlY29uZE51bUdlbi52YWx1ZSwgMTApLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUsXG4gICAgcGFyc2VJbnQoZm9ybVByYWN0aWNlLmFuc3dlci52YWx1ZSwgMTApLFxuICAgIG5ldyBEYXRlKClcbiAgKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmVzdWx0KHF1ZXN0aW9uKSB7XG4gIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLmluc2VydFJvdygxKTtcbiAgeC5pbnNlcnRDZWxsKDApLmlubmVySFRNTCA9IHF1ZXN0aW9uLmZpcnN0TnVtO1xuICB4Lmluc2VydENlbGwoMSkuaW5uZXJIVE1MID0gcXVlc3Rpb24uc2Vjb25kTnVtO1xuICB4Lmluc2VydENlbGwoMikuaW5uZXJIVE1MID0gRXZhbHVhdG9yLmFuc3dlcihxdWVzdGlvbik7XG4gIHguaW5zZXJ0Q2VsbCgzKS5pbm5lckhUTUwgPSBxdWVzdGlvbi5zdWJtaXR0ZWRBbnN3ZXI7XG4gIHguaW5zZXJ0Q2VsbCg0KS5pbm5lckhUTUwgPSBleHBsYW5hdGlvbihxdWVzdGlvbi5vcGVyYXRpb24sIFtxdWVzdGlvbi5maXJzdE51bSwgcXVlc3Rpb24uc2Vjb25kTnVtXSk7XG4gIHguaW5zZXJ0Q2VsbCg1KS5pbm5lckhUTUwgPSBFdmFsdWF0b3IuZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbik7XG4gIHBvcHVsYXRlRW1wdHlSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZSA9PSAnc3VidHJhY3Rpb24nKSB7XG4gICAgY29uc3QgaW5wdXQgPSBbcmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXJdO1xuICAgIGlucHV0LnNvcnQoKGEsYikgPT4gKGEtYikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE51bUdlbicpLnZhbHVlID0gaW5wdXRbMV07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLnZhbHVlID0gaW5wdXRbMF07XG4gICAgcmV0dXJuO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS52YWx1ZSA9IHJhbmRvbU51bWJlcjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLnZhbHVlID0gc2Vjb25kUmFuZG9tTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUVtcHR5UmVzdWx0KCkge1xuICBpZihmb3JtUHJhY3RpY2UgJiYgZm9ybVByYWN0aWNlLmFuc3dlcikge1xuICAgIGZvcm1QcmFjdGljZS5hbnN3ZXIudmFsdWUgPSAnJztcbiAgfVxufVxuXG5jb25zdCB1aVRvb2xzID0geyBjcmVhdGVRdWVzdGlvbiwgYXBwZW5kUmVzdWx0LCBwb3B1bGF0ZU5ld1F1ZXN0aW9uIH07XG5cbmV4cG9ydCBkZWZhdWx0IHVpVG9vbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9