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
/*! exports provided: scoreMark, registerUser, replenish, isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreMark", function() { return scoreMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replenish", function() { return replenish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
const { Random } = __webpack_require__(/*! ./random */ "./random.js");

const startTime = new Date();
let totalCorrect = 0;
let totalIncorrect = 0;
let welcomeMessage = '';
let lastSubmissionTime;

const operations = {
  addition: (a, b) => a + b,
  multiplication: (a, b) => a * b,
  subtraction: (a, b) => a - b,
  division: (a, b) => a / b,
};

const operations_explanations = {
  addition: () => '',
  multiplication: (a, b) => explanation(a, b),
  subtraction: () => '',
  division: () => '',
};

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
    answer.addEventListener('keydown', tabHandler, false);
    answer.addEventListener('keypress', isNumber, true);
  }
}

function tabHandler(e) {
  const KEYCODE_TAB = 9;
  const KEYCODE_ENTER = 13;
  if (e.keyCode == KEYCODE_TAB || e.keyCode == KEYCODE_ENTER) {
    scoreMark();
    document.getElementById('answer').focus();
    if (e.preventDefault) {
      e.preventDefault();
    }
  }
}

function startPractice() {
  document.getElementById('welcomeMessage').innerText = welcomeMessage;
  document.getElementById('main').style.visibility = 'visible';
  document.getElementById('dateTime').innerText = startTime;
  document.getElementById('summary').innerHTML = '';
  document.getElementById('totalQuestionsPracticed').innerHTML = 'Total Questions Practiced:  0';
  /* If someone doesn't cloes this window, but still using it! */
  const staleResults = document.getElementById('practicedResults').rows.length;
  if (staleResults > 2) {
    for (let i = 0; i < staleResults - 2; i++) {
      document.getElementById('practicedResults').deleteRow(-1);
    }
  }
}

function explanation(ns) {
  const numbers = [...ns];
  numbers.sort((a, b) => a - b);
  const mathOperations = document.getElementById('operations').value;
  if (mathOperations === 'multiplication') {
    if (numbers[1] > 10 && numbers[0] < 10) {
      return explainMultiplication(numbers);
    } if (numbers[1] > 10 && numbers[0] > 10) {
      return explainMultiplication([numbers[1], numbers[0]]);
    }
  }
  return '';
}

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

function insRow(numbers) {
  const x = document.getElementById('practicedResults').insertRow(2);
  const mathOperations = document.getElementById('operations').value;
  const firstNum = x.insertCell(0);
  const secondNum = x.insertCell(1);
  const answer = x.insertCell(2);
  const submission = x.insertCell(3);
  const details = x.insertCell(4);
  const result = x.insertCell(5);
  firstNum.innerHTML = numbers[0];
  secondNum.innerHTML = numbers[1];
  answer.innerHTML = operations[mathOperations](numbers[0], numbers[1]);
  submission.innerHTML = numbers[2];
  details.innerHTML = explanation(numbers);
  result.innerHTML = operations[mathOperations](numbers[0], numbers[1]) == numbers[2];
}

function finalizeSubmit() {
  document.getElementById('answer').focus();
}

window.addEventListener('load', (_event) => {
  replenish();
  answerKeyboardHandler();
  yourNameKeyboardHandler();
});

function scoreMark() {
  // this.value += "    ";
  const mathOperations = document.getElementById('operations').value;
  const calculatedAnswer = operations[mathOperations](
    parseInt(formPractice.firstNumGen.value, 10),
    parseInt(formPractice.secondNumGen.value, 10),
  );
  const answer = parseInt(formPractice.answer.value, 10);
  if (calculatedAnswer === answer) {
    totalCorrect++;
  } else {
    totalIncorrect++;
  }
  insRow([
    parseInt(formPractice.firstNumGen.value, 10),
    parseInt(formPractice.secondNumGen.value, 10),
    parseInt(formPractice.answer.value, 10),
  ]);
  formPractice.answer.value = '';
  replenish();
  lastSubmissionTime = new Date();
  const diff = Math.abs(lastSubmissionTime - startTime);
  const elapsedTime = Math.floor(diff / 1000);
  const errorRatio = (totalIncorrect / (totalCorrect + totalIncorrect)) * 100;
  let result = `Correct => ${totalCorrect}<br/>Incorrect => ${totalIncorrect}`;
  if (errorRatio > 0.001) {
    result = `${result}<br/>Error ratio :: ${errorRatio.toFixed(2)}%`;
  }
  lastSubmissionTime= new Date();
  const speed = Math.floor(elapsedTime / totalCorrect);
  const speedResult = `<br/>Speed = seconds/questions is  ${speed}. Lower the better!`;

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

  let sid = new Date().toISOString();
  sid = `Practice_${studentId}@${sid}`;

  if (priorPracticeDetails) {
    welcomeMessage = `${studentId} is amazing person! ${studentId} practices like champion!`;
  } else {
    welcomeMessage = `Hi! ${studentId}, you are courageous! 1000 miles journey begins with single step!`;
  }
  startPractice();
  const currentTime = new Date();
  if (!priorPracticeDetails) {
    priorPracticeDetails = defaultDetails;
  } else {
    priorPracticeDetails = JSON.parse(priorPracticeDetails);
  }
  priorPracticeDetails.sessions.push(currentTime);

  const studentDetails = { sessions: priorPracticeDetails.sessions, studentId };
  localStorage.setItem(
    studentDetails.studentId.toLowerCase(),
    JSON.stringify(studentDetails),
  );

  document.getElementById('answer').focus();
}

function replenish() {
  const maxInput = document.getElementById('maxInput').value;
  const max = parseInt(maxInput, 10);
  const randomNumber = Random.getRandomIntInclusive(3, max);
  document.getElementById('answer').value = '';
  document.getElementById('firstNumGen').value = randomNumber;
  const secondRandomNumber = Random.getRandomIntInclusive(3, 20);
  document.getElementById('secondNumGen').value = secondRandomNumber;
}

function isNumber(event) {
  const evt = event || window.event;
  const charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}


/***/ }),

/***/ "./random.js":
/*!*******************!*\
  !*** ./random.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

class Random {
  constructor() {}

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
    console.log(`intermediate result ${result}`);
    return excludes.indexOf(result) == -1 ? result : this.getRandomIntInclusiveWithExceptions(min, max, excludes);
  }
}

module.exports = { Random };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUEwQzs7QUFFekI7Ozs7Ozs7Ozs7Ozs7QUNGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU8sU0FBUyxHQUFHLG1CQUFPLENBQUMsNkJBQVU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEtBQUssS0FBSyxFQUFFLEtBQUssU0FBUztBQUNsRCx3QkFBd0IsS0FBSyxLQUFLLEVBQUUsS0FBSyxTQUFTO0FBQ2xELG1CQUFtQixjQUFjLEtBQUssY0FBYztBQUNwRCxrQ0FBa0M7QUFDbEM7QUFDQSxTQUFTLFdBQVcsTUFBTSxXQUFXLE1BQU0sTUFBTTtBQUNqRCxTQUFTLFdBQVcsTUFBTSxNQUFNO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYSxvQkFBb0IsZUFBZTtBQUM3RTtBQUNBLGdCQUFnQixPQUFPLHNCQUFzQixzQkFBc0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsNERBQTRELE1BQU07O0FBRWxFLGdHQUFnRyw4QkFBOEI7QUFDOUgsb0RBQW9ELE9BQU8sT0FBTyxZQUFZO0FBQzlFO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFVBQVUsR0FBRyxJQUFJOztBQUVyQztBQUNBLHdCQUF3QixVQUFVLHNCQUFzQixVQUFVO0FBQ2xFLEdBQUc7QUFDSCw0QkFBNEIsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDak5BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgKiBhcyB1aU9wcyBmcm9tICcuL21hdGhfb3BlcmF0aW9uJztcblxuZXhwb3J0IHsgdWlPcHMgfTtcbiIsImNvbnN0IHsgUmFuZG9tIH0gPSByZXF1aXJlKCcuL3JhbmRvbScpO1xuXG5jb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xubGV0IHRvdGFsQ29ycmVjdCA9IDA7XG5sZXQgdG90YWxJbmNvcnJlY3QgPSAwO1xubGV0IHdlbGNvbWVNZXNzYWdlID0gJyc7XG5sZXQgbGFzdFN1Ym1pc3Npb25UaW1lO1xuXG5jb25zdCBvcGVyYXRpb25zID0ge1xuICBhZGRpdGlvbjogKGEsIGIpID0+IGEgKyBiLFxuICBtdWx0aXBsaWNhdGlvbjogKGEsIGIpID0+IGEgKiBiLFxuICBzdWJ0cmFjdGlvbjogKGEsIGIpID0+IGEgLSBiLFxuICBkaXZpc2lvbjogKGEsIGIpID0+IGEgLyBiLFxufTtcblxuY29uc3Qgb3BlcmF0aW9uc19leHBsYW5hdGlvbnMgPSB7XG4gIGFkZGl0aW9uOiAoKSA9PiAnJyxcbiAgbXVsdGlwbGljYXRpb246IChhLCBiKSA9PiBleHBsYW5hdGlvbihhLCBiKSxcbiAgc3VidHJhY3Rpb246ICgpID0+ICcnLFxuICBkaXZpc2lvbjogKCkgPT4gJycsXG59O1xuXG5mdW5jdGlvbiB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ck5hbWUnKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0TmFtZScpLmNsaWNrKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYW5zd2VyS2V5Ym9hcmRIYW5kbGVyKCkge1xuICBjb25zdCBhbnN3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJyk7XG4gIGlmIChhbnN3ZXIgJiYgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRhYkhhbmRsZXIsIGZhbHNlKTtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBpc051bWJlciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFiSGFuZGxlcihlKSB7XG4gIGNvbnN0IEtFWUNPREVfVEFCID0gOTtcbiAgY29uc3QgS0VZQ09ERV9FTlRFUiA9IDEzO1xuICBpZiAoZS5rZXlDb2RlID09IEtFWUNPREVfVEFCIHx8IGUua2V5Q29kZSA9PSBLRVlDT0RFX0VOVEVSKSB7XG4gICAgc2NvcmVNYXJrKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLmZvY3VzKCk7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRQcmFjdGljZSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlbGNvbWVNZXNzYWdlJykuaW5uZXJUZXh0ID0gd2VsY29tZU1lc3NhZ2U7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVUaW1lJykuaW5uZXJUZXh0ID0gc3RhcnRUaW1lO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxRdWVzdGlvbnNQcmFjdGljZWQnKS5pbm5lckhUTUwgPSAnVG90YWwgUXVlc3Rpb25zIFByYWN0aWNlZDogIDAnO1xuICAvKiBJZiBzb21lb25lIGRvZXNuJ3QgY2xvZXMgdGhpcyB3aW5kb3csIGJ1dCBzdGlsbCB1c2luZyBpdCEgKi9cbiAgY29uc3Qgc3RhbGVSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5yb3dzLmxlbmd0aDtcbiAgaWYgKHN0YWxlUmVzdWx0cyA+IDIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWxlUmVzdWx0cyAtIDI7IGkrKykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5kZWxldGVSb3coLTEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHBsYW5hdGlvbihucykge1xuICBjb25zdCBudW1iZXJzID0gWy4uLm5zXTtcbiAgbnVtYmVycy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGNvbnN0IG1hdGhPcGVyYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZTtcbiAgaWYgKG1hdGhPcGVyYXRpb25zID09PSAnbXVsdGlwbGljYXRpb24nKSB7XG4gICAgaWYgKG51bWJlcnNbMV0gPiAxMCAmJiBudW1iZXJzWzBdIDwgMTApIHtcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24obnVtYmVycyk7XG4gICAgfSBpZiAobnVtYmVyc1sxXSA+IDEwICYmIG51bWJlcnNbMF0gPiAxMCkge1xuICAgICAgcmV0dXJuIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbbnVtYmVyc1sxXSwgbnVtYmVyc1swXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGV4cGxhaW5NdWx0aXBsaWNhdGlvbihbYSwgYiwgLi4ucmVzdF0pIHtcbiAgY29uc3QgdGVucyA9IE1hdGguZmxvb3IoYiAvIDEwKSAqIDEwO1xuICBjb25zdCBvbmVzID0gTWF0aC5mbG9vcihiICUgMTApO1xuICBjb25zdCB0ZW5zTXVsdGlwbGVzID0gdGVucyAqIGE7XG4gIGNvbnN0IG9uZXNNdWx0aXBsZXMgPSBvbmVzICogYTtcbiAgY29uc3QgdGVuc1N0cmluZyA9IGAke3RlbnN9IHggJHthfSA9ICR7dGVucyAqIGF9YDtcbiAgY29uc3Qgb25lc1N0cmluZyA9IGAke29uZXN9IHggJHthfSA9ICR7b25lcyAqIGF9YDtcbiAgY29uc3QgdG90YWwgPSBgJHt0ZW5zTXVsdGlwbGVzfSArICR7b25lc011bHRpcGxlc30gPSAke1xuICAgIHRlbnNNdWx0aXBsZXMgKyBvbmVzTXVsdGlwbGVzfWA7XG4gIHJldHVybiBvbmVzICE9IDBcbiAgICA/IGAke29uZXNTdHJpbmd9PGJyPiR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gXG4gICAgOiBgJHt0ZW5zU3RyaW5nfTxicj4ke3RvdGFsfWA7XG59XG5cbmZ1bmN0aW9uIGluc1JvdyhudW1iZXJzKSB7XG4gIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLmluc2VydFJvdygyKTtcbiAgY29uc3QgbWF0aE9wZXJhdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3BlcmF0aW9ucycpLnZhbHVlO1xuICBjb25zdCBmaXJzdE51bSA9IHguaW5zZXJ0Q2VsbCgwKTtcbiAgY29uc3Qgc2Vjb25kTnVtID0geC5pbnNlcnRDZWxsKDEpO1xuICBjb25zdCBhbnN3ZXIgPSB4Lmluc2VydENlbGwoMik7XG4gIGNvbnN0IHN1Ym1pc3Npb24gPSB4Lmluc2VydENlbGwoMyk7XG4gIGNvbnN0IGRldGFpbHMgPSB4Lmluc2VydENlbGwoNCk7XG4gIGNvbnN0IHJlc3VsdCA9IHguaW5zZXJ0Q2VsbCg1KTtcbiAgZmlyc3ROdW0uaW5uZXJIVE1MID0gbnVtYmVyc1swXTtcbiAgc2Vjb25kTnVtLmlubmVySFRNTCA9IG51bWJlcnNbMV07XG4gIGFuc3dlci5pbm5lckhUTUwgPSBvcGVyYXRpb25zW21hdGhPcGVyYXRpb25zXShudW1iZXJzWzBdLCBudW1iZXJzWzFdKTtcbiAgc3VibWlzc2lvbi5pbm5lckhUTUwgPSBudW1iZXJzWzJdO1xuICBkZXRhaWxzLmlubmVySFRNTCA9IGV4cGxhbmF0aW9uKG51bWJlcnMpO1xuICByZXN1bHQuaW5uZXJIVE1MID0gb3BlcmF0aW9uc1ttYXRoT3BlcmF0aW9uc10obnVtYmVyc1swXSwgbnVtYmVyc1sxXSkgPT0gbnVtYmVyc1syXTtcbn1cblxuZnVuY3Rpb24gZmluYWxpemVTdWJtaXQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5mb2N1cygpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChfZXZlbnQpID0+IHtcbiAgcmVwbGVuaXNoKCk7XG4gIGFuc3dlcktleWJvYXJkSGFuZGxlcigpO1xuICB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY29yZU1hcmsoKSB7XG4gIC8vIHRoaXMudmFsdWUgKz0gXCIgICAgXCI7XG4gIGNvbnN0IG1hdGhPcGVyYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZTtcbiAgY29uc3QgY2FsY3VsYXRlZEFuc3dlciA9IG9wZXJhdGlvbnNbbWF0aE9wZXJhdGlvbnNdKFxuICAgIHBhcnNlSW50KGZvcm1QcmFjdGljZS5maXJzdE51bUdlbi52YWx1ZSwgMTApLFxuICAgIHBhcnNlSW50KGZvcm1QcmFjdGljZS5zZWNvbmROdW1HZW4udmFsdWUsIDEwKSxcbiAgKTtcbiAgY29uc3QgYW5zd2VyID0gcGFyc2VJbnQoZm9ybVByYWN0aWNlLmFuc3dlci52YWx1ZSwgMTApO1xuICBpZiAoY2FsY3VsYXRlZEFuc3dlciA9PT0gYW5zd2VyKSB7XG4gICAgdG90YWxDb3JyZWN0Kys7XG4gIH0gZWxzZSB7XG4gICAgdG90YWxJbmNvcnJlY3QrKztcbiAgfVxuICBpbnNSb3coW1xuICAgIHBhcnNlSW50KGZvcm1QcmFjdGljZS5maXJzdE51bUdlbi52YWx1ZSwgMTApLFxuICAgIHBhcnNlSW50KGZvcm1QcmFjdGljZS5zZWNvbmROdW1HZW4udmFsdWUsIDEwKSxcbiAgICBwYXJzZUludChmb3JtUHJhY3RpY2UuYW5zd2VyLnZhbHVlLCAxMCksXG4gIF0pO1xuICBmb3JtUHJhY3RpY2UuYW5zd2VyLnZhbHVlID0gJyc7XG4gIHJlcGxlbmlzaCgpO1xuICBsYXN0U3VibWlzc2lvblRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkaWZmID0gTWF0aC5hYnMobGFzdFN1Ym1pc3Npb25UaW1lIC0gc3RhcnRUaW1lKTtcbiAgY29uc3QgZWxhcHNlZFRpbWUgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbiAgY29uc3QgZXJyb3JSYXRpbyA9ICh0b3RhbEluY29ycmVjdCAvICh0b3RhbENvcnJlY3QgKyB0b3RhbEluY29ycmVjdCkpICogMTAwO1xuICBsZXQgcmVzdWx0ID0gYENvcnJlY3QgPT4gJHt0b3RhbENvcnJlY3R9PGJyLz5JbmNvcnJlY3QgPT4gJHt0b3RhbEluY29ycmVjdH1gO1xuICBpZiAoZXJyb3JSYXRpbyA+IDAuMDAxKSB7XG4gICAgcmVzdWx0ID0gYCR7cmVzdWx0fTxici8+RXJyb3IgcmF0aW8gOjogJHtlcnJvclJhdGlvLnRvRml4ZWQoMil9JWA7XG4gIH1cbiAgbGFzdFN1Ym1pc3Npb25UaW1lPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzcGVlZCA9IE1hdGguZmxvb3IoZWxhcHNlZFRpbWUgLyB0b3RhbENvcnJlY3QpO1xuICBjb25zdCBzcGVlZFJlc3VsdCA9IGA8YnIvPlNwZWVkID0gc2Vjb25kcy9xdWVzdGlvbnMgaXMgICR7c3BlZWR9LiBMb3dlciB0aGUgYmV0dGVyIWA7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsUXVlc3Rpb25zUHJhY3RpY2VkJykuaW5uZXJIVE1MID0gYFRvdGFsIFF1ZXN0aW9ucyBQcmFjdGljZWQ6ICAke3RvdGFsQ29ycmVjdCArIHRvdGFsSW5jb3JyZWN0fWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1tYXJ5JykuaW5uZXJIVE1MID0gYCR7cmVzdWx0fTxici8+JHtzcGVlZFJlc3VsdH1gO1xuICBmaW5hbGl6ZVN1Ym1pdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKHN0dWRlbnRJZCkge1xuICBjb25zdCBkZWZhdWx0RGV0YWlscyA9IHtcbiAgICBzdHVkZW50SWQsXG4gICAgc2Vzc2lvbnM6IFtdLFxuICB9O1xuICBsZXQgcHJpb3JQcmFjdGljZURldGFpbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdHVkZW50SWQudG9Mb3dlckNhc2UoKSk7XG5cbiAgbGV0IHNpZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgc2lkID0gYFByYWN0aWNlXyR7c3R1ZGVudElkfUAke3NpZH1gO1xuXG4gIGlmIChwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHdlbGNvbWVNZXNzYWdlID0gYCR7c3R1ZGVudElkfSBpcyBhbWF6aW5nIHBlcnNvbiEgJHtzdHVkZW50SWR9IHByYWN0aWNlcyBsaWtlIGNoYW1waW9uIWA7XG4gIH0gZWxzZSB7XG4gICAgd2VsY29tZU1lc3NhZ2UgPSBgSGkhICR7c3R1ZGVudElkfSwgeW91IGFyZSBjb3VyYWdlb3VzISAxMDAwIG1pbGVzIGpvdXJuZXkgYmVnaW5zIHdpdGggc2luZ2xlIHN0ZXAhYDtcbiAgfVxuICBzdGFydFByYWN0aWNlKCk7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgaWYgKCFwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHByaW9yUHJhY3RpY2VEZXRhaWxzID0gZGVmYXVsdERldGFpbHM7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JQcmFjdGljZURldGFpbHMgPSBKU09OLnBhcnNlKHByaW9yUHJhY3RpY2VEZXRhaWxzKTtcbiAgfVxuICBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucy5wdXNoKGN1cnJlbnRUaW1lKTtcblxuICBjb25zdCBzdHVkZW50RGV0YWlscyA9IHsgc2Vzc2lvbnM6IHByaW9yUHJhY3RpY2VEZXRhaWxzLnNlc3Npb25zLCBzdHVkZW50SWQgfTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgc3R1ZGVudERldGFpbHMuc3R1ZGVudElkLnRvTG93ZXJDYXNlKCksXG4gICAgSlNPTi5zdHJpbmdpZnkoc3R1ZGVudERldGFpbHMpLFxuICApO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5mb2N1cygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGVuaXNoKCkge1xuICBjb25zdCBtYXhJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXhJbnB1dCcpLnZhbHVlO1xuICBjb25zdCBtYXggPSBwYXJzZUludChtYXhJbnB1dCwgMTApO1xuICBjb25zdCByYW5kb21OdW1iZXIgPSBSYW5kb20uZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDMsIG1heCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3ROdW1HZW4nKS52YWx1ZSA9IHJhbmRvbU51bWJlcjtcbiAgY29uc3Qgc2Vjb25kUmFuZG9tTnVtYmVyID0gUmFuZG9tLmdldFJhbmRvbUludEluY2x1c2l2ZSgzLCAyMCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmROdW1HZW4nKS52YWx1ZSA9IHNlY29uZFJhbmRvbU51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGV2ZW50KSB7XG4gIGNvbnN0IGV2dCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgY29uc3QgY2hhckNvZGUgPSBldnQud2hpY2ggPyBldnQud2hpY2ggOiBldnQua2V5Q29kZTtcbiAgaWYgKGNoYXJDb2RlID4gMzEgJiYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1NykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJjbGFzcyBSYW5kb20ge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgLyoqXG4gICAqIENyZWRpdCA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXG4gICAqIEBwYXJhbSB7Kn0gbWluXG4gICAqIEBwYXJhbSB7Kn0gbWF4XG4gICAqL1xuICBzdGF0aWMgZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvLyBUaGUgbWF4aW11bSBpcyBpbmNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICB9XG5cbiAgc3RhdGljIGdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKG1pbiwgbWF4LCAuLi5leGNsdWRlcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KTtcbiAgICBjb25zb2xlLmxvZyhgaW50ZXJtZWRpYXRlIHJlc3VsdCAke3Jlc3VsdH1gKTtcbiAgICByZXR1cm4gZXhjbHVkZXMuaW5kZXhPZihyZXN1bHQpID09IC0xID8gcmVzdWx0IDogdGhpcy5nZXRSYW5kb21JbnRJbmNsdXNpdmVXaXRoRXhjZXB0aW9ucyhtaW4sIG1heCwgZXhjbHVkZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBSYW5kb20gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=