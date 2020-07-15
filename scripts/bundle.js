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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiOps = undefined;

var _math_operation = __webpack_require__(/*! ./math_operation */ "./math_operation.js");

var uiOps = _interopRequireWildcard(_math_operation);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

exports.uiOps = uiOps;

/***/ }),

/***/ "./math_operation.js":
/*!***************************!*\
  !*** ./math_operation.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ui = undefined;
exports.scoreMark = scoreMark;
exports.registerUser = registerUser;
exports.replenish = replenish;
exports.isNumber = isNumber;

var _Evaluator = __webpack_require__(/*! ./model/Evaluator */ "./model/Evaluator.js");

var _Evaluator2 = _interopRequireDefault(_Evaluator);

var _ui_tools = __webpack_require__(/*! ./ui_tools */ "./ui_tools.js");

var _ui_tools2 = _interopRequireDefault(_ui_tools);

var _random = __webpack_require__(/*! ./random */ "./random.js");

var _random2 = _interopRequireDefault(_random);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
exports.ui = _ui_tools2["default"];

function scoreMark(question) {
  if (document.getElementById('answer').value && document.getElementById('answer').value.length >= 1) {//do nothing..
  } else {
    console.log('enter usage without input!');
    return false;
  }

  if (_Evaluator2["default"].evaluateQuestion(question)) {
    totalCorrect++;
  } else {
    totalIncorrect++;
  }

  _ui_tools2["default"].appendResult(question);

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

  var randomNumber = _random2["default"].getRandomIntInclusiveWithExceptions(3, max, [10]);

  var secondRandomNumber = _random2["default"].getRandomIntInclusive(3, max);

  _ui_tools2["default"].populateNewQuestion(randomNumber, secondRandomNumber);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = explanation;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports["default"] = Evaluator;

/***/ }),

/***/ "./model/Question.js":
/*!***************************!*\
  !*** ./model/Question.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Question = function Question(firstNum, secondNum, operation, submittedAnswer, submissionTime) {
  _classCallCheck(this, Question);

  this.firstNum = firstNum;
  this.secondNum = secondNum;
  this.operation = operation;
  this.submittedAnswer = submittedAnswer;
  this.submissionTime = submissionTime;
};

exports["default"] = Question;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayShuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_arrayShuffle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    shuffleSelf = __webpack_require__(/*! ./_shuffleSelf */ "./node_modules/lodash/_shuffleSelf.js");

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return shuffleSelf(copyArray(array));
}

module.exports = arrayShuffle;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseRandom.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseRandom.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;


/***/ }),

/***/ "./node_modules/lodash/_baseShuffle.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseShuffle.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shuffleSelf = __webpack_require__(/*! ./_shuffleSelf */ "./node_modules/lodash/_shuffleSelf.js"),
    values = __webpack_require__(/*! ./values */ "./node_modules/lodash/values.js");

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return shuffleSelf(values(collection));
}

module.exports = baseShuffle;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseValues.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_shuffleSelf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_shuffleSelf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__(/*! ./_baseRandom */ "./node_modules/lodash/_baseRandom.js");

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

module.exports = shuffleSelf;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/shuffle.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/shuffle.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayShuffle = __webpack_require__(/*! ./_arrayShuffle */ "./node_modules/lodash/_arrayShuffle.js"),
    baseShuffle = __webpack_require__(/*! ./_baseShuffle */ "./node_modules/lodash/_baseShuffle.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray(collection) ? arrayShuffle : baseShuffle;
  return func(collection);
}

module.exports = shuffle;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/values.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ "./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./random.js":
/*!*******************!*\
  !*** ./random.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import { shuffle } from 'lodash/shuffle';
var shuffle = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");

function distort(i) {
  if (Math.random() > 0.5) {
    return i + 1;
  } else {
    return i - 1;
  }
}

var Random = /*#__PURE__*/function () {
  function Random() {
    _classCallCheck(this, Random);

    _defineProperty(this, "suffle", void 0);
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
      for (var _len = arguments.length, excludes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        excludes[_key - 2] = arguments[_key];
      }

      var generated = Array.from(Array(max - min).keys()).map(function (i) {
        return i + min;
      }).map(function (i) {
        if (excludes.indexOf(i) != -1) {
          return distort(i);
        } else {
          return i;
        }
      });
      var unique = new Set(generated);
      excludes.forEach(function (k) {
        return unique["delete"](k);
      });
      return shuffle(Array.from(unique))[0];
    }
  }]);

  return Random;
}();

exports["default"] = Random;

/***/ }),

/***/ "./ui_tools.js":
/*!*********************!*\
  !*** ./ui_tools.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.populateNewQuestion = populateNewQuestion;

var _Question = __webpack_require__(/*! ./model/Question */ "./model/Question.js");

var _Question2 = _interopRequireDefault(_Question);

var _Evaluator = __webpack_require__(/*! ./model/Evaluator */ "./model/Evaluator.js");

var _Evaluator2 = _interopRequireDefault(_Evaluator);

var _AnswerTips = __webpack_require__(/*! ./model/AnswerTips */ "./model/AnswerTips.js");

var _AnswerTips2 = _interopRequireDefault(_AnswerTips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createQuestion() {
  var firstNum = document.getElementById("firstNumGen").innerHTML;
  var secondNum = document.getElementById("secondNumGen").innerHTML;
  return new _Question2["default"](parseInt(firstNum, 10), parseInt(secondNum, 10), document.getElementById('operations').value, parseInt(formPractice.answer.value, 10), new Date());
}

function appendResult(question) {
  var x = document.getElementById('practicedResults').insertRow(1);
  x.insertCell(0).innerHTML = question.firstNum;
  x.insertCell(1).innerHTML = question.secondNum;
  x.insertCell(2).innerHTML = question.submittedAnswer;
  x.insertCell(3).innerHTML = _Evaluator2["default"].answer(question);
  x.insertCell(4).innerHTML = (0, _AnswerTips2["default"])(question.operation, [question.firstNum, question.secondNum]);
  x.insertCell(5).innerHTML = _Evaluator2["default"].evaluateQuestion(question);
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
exports["default"] = uiTools;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQXBwLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbWF0aF9vcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvQW5zd2VyVGlwcy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9tb2RlbC9FdmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbW9kZWwvUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlTaHVmZmxlLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVJhbmRvbS5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2h1ZmZsZVNlbGYuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovL0FwcC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly9BcHAvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9BcHAvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0FwcC8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vQXBwLy4vcmFuZG9tLmpzIiwid2VicGFjazovL0FwcC8uL3VpX3Rvb2xzLmpzIl0sIm5hbWVzIjpbInVpT3BzIiwic2NvcmVNYXJrIiwicmVnaXN0ZXJVc2VyIiwicmVwbGVuaXNoIiwiaXNOdW1iZXIiLCJzdGFydFRpbWUiLCJEYXRlIiwidG90YWxDb3JyZWN0IiwidG90YWxJbmNvcnJlY3QiLCJ3ZWxjb21lTWVzc2FnZSIsImxhc3RTdWJtaXNzaW9uVGltZSIsInNpZCIsInlvdXJOYW1lS2V5Ym9hcmRIYW5kbGVyIiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJjbGljayIsImFuc3dlcktleWJvYXJkSGFuZGxlciIsImFuc3dlciIsInRhYkFuZEVudGVySGFuZGxlciIsImUiLCJLRVlDT0RFX1RBQiIsIktFWUNPREVfRU5URVIiLCJ2YWx1ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFByYWN0aWNlIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJ2aXNpYmlsaXR5Iiwic3RhbGVSZXN1bHRzIiwicm93cyIsImkiLCJkZWxldGVSb3ciLCJmaW5hbGl6ZVN1Ym1pdCIsIndpbmRvdyIsIl9ldmVudCIsInVpIiwidWlUb29scyIsInF1ZXN0aW9uIiwiRXZhbHVhdG9yIiwiZXZhbHVhdGVRdWVzdGlvbiIsImFwcGVuZFJlc3VsdCIsImRpZmYiLCJNYXRoIiwiYWJzIiwiZWxhcHNlZFRpbWUiLCJmbG9vciIsImVycm9yUmF0aW8iLCJwcmlvclF1ZXN0aW9uIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJ0b0ZpeGVkIiwic3BlZWQiLCJzcGVlZFJlc3VsdCIsInN0dWRlbnRJZCIsImRlZmF1bHREZXRhaWxzIiwic2Vzc2lvbnMiLCJwcmlvclByYWN0aWNlRGV0YWlscyIsInRvTG93ZXJDYXNlIiwic2Vzc2lvblRpbWUiLCJ0b0lTT1N0cmluZyIsInB1c2giLCJzdHVkZW50RGV0YWlscyIsIm1heCIsInBhcnNlSW50IiwicmFuZG9tTnVtYmVyIiwiUmFuZG9tIiwiZ2V0UmFuZG9tSW50SW5jbHVzaXZlV2l0aEV4Y2VwdGlvbnMiLCJzZWNvbmRSYW5kb21OdW1iZXIiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJwb3B1bGF0ZU5ld1F1ZXN0aW9uIiwiVEFCX0tFWSIsImV2dCIsImNoYXJDb2RlIiwid2hpY2giLCJ0YWJIYW5kbGVyIiwiZXhwbGFuYXRpb24iLCJleHBsYWluTXVsdGlwbGljYXRpb24iLCJhIiwiYiIsInJlc3QiLCJ0ZW5zIiwib25lcyIsInRlbnNNdWx0aXBsZXMiLCJvbmVzTXVsdGlwbGVzIiwidGVuc1N0cmluZyIsIm9uZXNTdHJpbmciLCJ0b3RhbCIsIm1hdGhPcGVyYXRpb25zIiwiaW5wdXRzIiwibnVtYmVycyIsInNvcnQiLCJjb3VudEJ5IiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm9wZXJhdGlvbnMiLCJhZGRpdGlvbiIsIm11bHRpcGxpY2F0aW9uIiwic3VidHJhY3Rpb24iLCJkaXZpc2lvbiIsIm5hbWUiLCJmdW5jIiwib3BlcmF0aW9uIiwiZmlyc3ROdW0iLCJzZWNvbmROdW0iLCJzdWJtaXR0ZWRBbnN3ZXIiLCJxdWVzdGlvbnMiLCJmaWx0ZXJlZFdpbnMiLCJmaWx0ZXIiLCJxIiwibWFwIiwid2lucyIsImNvbmNhdCIsImFwcGx5IiwiZmlsdGVyZWROZWVkUHJhY3RpY2UiLCJuZWVkUHJhY3RpY2UiLCJzdW1tYXJ5IiwiUXVlc3Rpb24iLCJzdWJtaXNzaW9uVGltZSIsInNodWZmbGUiLCJyZXF1aXJlIiwiZGlzdG9ydCIsInJhbmRvbSIsIm1pbiIsImNlaWwiLCJleGNsdWRlcyIsImdlbmVyYXRlZCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJpbmRleE9mIiwidW5pcXVlIiwiU2V0IiwiZm9yRWFjaCIsImsiLCJjcmVhdGVRdWVzdGlvbiIsImZvcm1QcmFjdGljZSIsIngiLCJpbnNlcnRSb3ciLCJpbnNlcnRDZWxsIiwicG9wdWxhdGVFbXB0eVJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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Q0FBd0IsYUFBeEIsRUFBdUNrQixTQUF2QyxHQUFtRHBCLE1BQUssQ0FBQyxDQUFELENBQUwsR0FBV0EsTUFBSyxDQUFDLENBQUQsQ0FBbkU7QUFDQUMsWUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDa0IsU0FBeEMsR0FBb0RwQixNQUFLLENBQUMsQ0FBRCxDQUF6RDtBQUNBO0FBQ0Q7O0FBQ0RDLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ2EsS0FBbEMsR0FBMEMsRUFBMUM7QUFDQWQsVUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDa0IsU0FBdkMsR0FBbUQ0QyxZQUFuRDtBQUNBL0QsVUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDa0IsU0FBeEMsR0FBb0QrQyxrQkFBcEQ7QUFDRDs7QUFFRCxTQUFTeUUsbUJBQVQsR0FBK0I7QUFDN0IsTUFBR0osWUFBWSxJQUFJQSxZQUFZLENBQUM5SCxNQUFoQyxFQUF3QztBQUN0QzhILGdCQUFZLENBQUM5SCxNQUFiLENBQW9CSyxLQUFwQixHQUE0QixFQUE1QjtBQUNEO0FBQ0Y7O0FBRUQsSUFBTWdCLE9BQU8sR0FBRztBQUFFd0csZ0JBQWMsRUFBZEEsY0FBRjtBQUFrQnBHLGNBQVksRUFBWkEsWUFBbEI7QUFBZ0NrQyxxQkFBbUIsRUFBbkJBO0FBQWhDLENBQWhCO3FCQUVldEMsTyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgdWlPcHMgZnJvbSAnLi9tYXRoX29wZXJhdGlvbic7XG5cbmV4cG9ydCB7IHVpT3BzIH07XG4iLCJpbXBvcnQgRXZhbHVhdG9yIGZyb20gJy4vbW9kZWwvRXZhbHVhdG9yJztcbmltcG9ydCB1aVRvb2xzIGZyb20gJy4vdWlfdG9vbHMnO1xuaW1wb3J0IFJhbmRvbSBmcm9tICcuL3JhbmRvbSc7XG5cbmNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5sZXQgdG90YWxDb3JyZWN0ID0gMDtcbmxldCB0b3RhbEluY29ycmVjdCA9IDA7XG5sZXQgd2VsY29tZU1lc3NhZ2UgPSAnJztcbmxldCBsYXN0U3VibWlzc2lvblRpbWU7XG5sZXQgc2lkPScnO1xuXG5mdW5jdGlvbiB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ck5hbWUnKTtcbiAgaW5wdXQuZm9jdXMoKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0X25hbWUnKS5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFuc3dlcktleWJvYXJkSGFuZGxlcigpIHtcbiAgY29uc3QgYW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpO1xuICBpZiAoYW5zd2VyICYmIGFuc3dlci5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0YWJBbmRFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICBhbnN3ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBpc051bWJlciwgdHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFiQW5kRW50ZXJIYW5kbGVyKGUpIHtcbiAgY29uc3QgS0VZQ09ERV9UQUIgPSA5O1xuICBjb25zdCBLRVlDT0RFX0VOVEVSID0gMTM7XG4gIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREVfVEFCIHx8IGUua2V5Q29kZSA9PT0gS0VZQ09ERV9FTlRFUikge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QW5zd2VyJykuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1RhYiB1c2FnZSB3aXRob3V0IGlucHV0IScpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFByYWN0aWNlKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZU1lc3NhZ2UnKS5pbm5lckhUTUwgPSB3ZWxjb21lTWVzc2FnZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxRdWVzdGlvbnNQcmFjdGljZWQnKS5pbm5lckhUTUwgPSAnVG90YWwgUXVlc3Rpb25zIFByYWN0aWNlZDogIDAnO1xuICAvKiBJZiBzb21lb25lIGRvZXNuJ3QgY2xvZXMgdGhpcyB3aW5kb3csIGJ1dCBzdGlsbCB1c2luZyBpdCEgKi9cbiAgY29uc3Qgc3RhbGVSZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5yb3dzLmxlbmd0aDtcbiAgaWYgKHN0YWxlUmVzdWx0cyA+IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWxlUmVzdWx0cyAtIDE7IGkrKykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByYWN0aWNlZFJlc3VsdHMnKS5kZWxldGVSb3coLTEpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZVN1Ym1pdCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLmNsaWNrKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5mb2N1cygpO1xuICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXInKS5zY3JvbGxJbnRvVmlldygpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChfZXZlbnQpID0+IHtcbiAgcmVwbGVuaXNoKCk7XG4gIGFuc3dlcktleWJvYXJkSGFuZGxlcigpO1xuICB5b3VyTmFtZUtleWJvYXJkSGFuZGxlcigpO1xufSk7XG5cblxuZXhwb3J0IHsgdWlUb29scyBhcyB1aSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gc2NvcmVNYXJrKHF1ZXN0aW9uKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpLnZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgLy9kbyBub3RoaW5nLi5cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZW50ZXIgdXNhZ2Ugd2l0aG91dCBpbnB1dCEnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKEV2YWx1YXRvci5ldmFsdWF0ZVF1ZXN0aW9uKHF1ZXN0aW9uKSkge1xuICAgIHRvdGFsQ29ycmVjdCsrO1xuICB9IGVsc2Uge1xuICAgIHRvdGFsSW5jb3JyZWN0Kys7XG4gIH1cbiAgdWlUb29scy5hcHBlbmRSZXN1bHQocXVlc3Rpb24pO1xuICByZXBsZW5pc2goKTtcbiAgbGFzdFN1Ym1pc3Npb25UaW1lID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGxhc3RTdWJtaXNzaW9uVGltZSAtIHN0YXJ0VGltZSk7XG4gIGNvbnN0IGVsYXBzZWRUaW1lID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gIGNvbnN0IGVycm9yUmF0aW8gPSAodG90YWxJbmNvcnJlY3QgLyAodG90YWxDb3JyZWN0ICsgdG90YWxJbmNvcnJlY3QpKSAqIDEwMDtcblxuICBjb25zdCBwcmlvclF1ZXN0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzaWQpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2lkLCBKU09OLnN0cmluZ2lmeShbcXVlc3Rpb24sIC4uLnByaW9yUXVlc3Rpb25dKSk7XG5cbiAgbGV0IHJlc3VsdCA9IGBDb3JyZWN0ID0+ICR7dG90YWxDb3JyZWN0fTxici8+SW5jb3JyZWN0ID0+ICR7dG90YWxJbmNvcnJlY3R9YDtcbiAgaWYgKGVycm9yUmF0aW8gPiAwLjAwMSkge1xuICAgIHJlc3VsdCA9IGAke3Jlc3VsdH08YnIvPkVycm9yIHJhdGlvIDo6ICR7ZXJyb3JSYXRpby50b0ZpeGVkKDIpfSVgO1xuICB9XG4gIGxhc3RTdWJtaXNzaW9uVGltZT0gbmV3IERhdGUoKTtcbiAgY29uc3Qgc3BlZWQgPSBNYXRoLmZsb29yKGVsYXBzZWRUaW1lIC8gdG90YWxDb3JyZWN0KTtcbiAgY29uc3Qgc3BlZWRSZXN1bHQgPSBgPGJyLz5TcGVlZCA9ICR7c3BlZWR9LCBOdW1iZXIgb2Ygc2Vjb25kcyBwZXIgcXVlc3Rpb24uIExvd2VyIHRoZSBiZXR0ZXIhYDtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxRdWVzdGlvbnNQcmFjdGljZWQnKS5pbm5lckhUTUwgPSBgVG90YWwgUXVlc3Rpb25zIFByYWN0aWNlZDogICR7dG90YWxDb3JyZWN0ICsgdG90YWxJbmNvcnJlY3R9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS5pbm5lckhUTUwgPSBgJHtyZXN1bHR9PGJyLz4ke3NwZWVkUmVzdWx0fWA7XG4gIGZpbmFsaXplU3VibWl0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclVzZXIoc3R1ZGVudElkKSB7XG4gIGNvbnN0IGRlZmF1bHREZXRhaWxzID0ge1xuICAgIHN0dWRlbnRJZCxcbiAgICBzZXNzaW9uczogW10sXG4gIH07XG4gIGxldCBwcmlvclByYWN0aWNlRGV0YWlscyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0dWRlbnRJZC50b0xvd2VyQ2FzZSgpKTtcblxuICBsZXQgc2Vzc2lvblRpbWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gIHNpZCA9IGBQcmFjdGljZV8ke3N0dWRlbnRJZH1AJHtzZXNzaW9uVGltZX1gO1xuXG4gIGlmIChwcmlvclByYWN0aWNlRGV0YWlscykge1xuICAgIHdlbGNvbWVNZXNzYWdlID0gYDxiPiR7c3R1ZGVudElkfSBpcyBhbWF6aW5nIHBlcnNvbiE8L2I+ICR7c3R1ZGVudElkfSBwcmFjdGljZXMgbGlrZSBjaGFtcGlvbiE8YnIvPlN0YXJ0IHRpbWUgOiAke3Nlc3Npb25UaW1lfWA7XG4gIH0gZWxzZSB7XG4gICAgd2VsY29tZU1lc3NhZ2UgPSBgPGI+SGkhICR7c3R1ZGVudElkfSwgeW91IGFyZSBjb3VyYWdlb3VzITwvYj4gMTAwMCBtaWxlcyBqb3VybmV5IGJlZ2lucyB3aXRoIHNpbmdsZSBzdGVwITxici8+U3RhcnQgdGltZSA6ICR7c2Vzc2lvblRpbWV9YDtcbiAgfVxuICBzdGFydFByYWN0aWNlKCk7XG4gIGlmICghcHJpb3JQcmFjdGljZURldGFpbHMpIHtcbiAgICBwcmlvclByYWN0aWNlRGV0YWlscyA9IGRlZmF1bHREZXRhaWxzO1xuICB9IGVsc2Uge1xuICAgIHByaW9yUHJhY3RpY2VEZXRhaWxzID0gSlNPTi5wYXJzZShwcmlvclByYWN0aWNlRGV0YWlscyk7XG4gIH1cbiAgcHJpb3JQcmFjdGljZURldGFpbHMuc2Vzc2lvbnMucHVzaChzaWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzaWQsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG5cbiAgY29uc3Qgc3R1ZGVudERldGFpbHMgPSB7IHNlc3Npb25zOiBwcmlvclByYWN0aWNlRGV0YWlscy5zZXNzaW9ucywgc3R1ZGVudElkIH07XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgIHN0dWRlbnREZXRhaWxzLnN0dWRlbnRJZC50b0xvd2VyQ2FzZSgpLFxuICAgIEpTT04uc3RyaW5naWZ5KHN0dWRlbnREZXRhaWxzKSxcbiAgKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykuZm9jdXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxlbmlzaCgpIHtcbiAgY29uc3QgbWF4ID0gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heElucHV0JykudmFsdWUsIDEwKTtcbiAgY29uc3QgcmFuZG9tTnVtYmVyID0gUmFuZG9tLmdldFJhbmRvbUludEluY2x1c2l2ZVdpdGhFeGNlcHRpb25zKDMsIG1heCwgWzEwXSk7XG4gIGNvbnN0IHNlY29uZFJhbmRvbU51bWJlciA9IFJhbmRvbS5nZXRSYW5kb21JbnRJbmNsdXNpdmUoMywgbWF4KTtcbiAgdWlUb29scy5wb3B1bGF0ZU5ld1F1ZXN0aW9uKHJhbmRvbU51bWJlciwgc2Vjb25kUmFuZG9tTnVtYmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKGV2ZW50KSB7XG4gIGNvbnN0IFRBQl9LRVk9OTtcbiAgY29uc3QgZXZ0ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuICBjb25zdCBjaGFyQ29kZSA9IGV2ZW50LndoaWNoID8gZXZlbnQud2hpY2ggOiBldmVudC5rZXlDb2RlO1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gVEFCX0tFWSkge1xuICAgIHJldHVybiB0YWJIYW5kbGVyKGV2ZW50KTtcbiAgfVxuICBpZiAoY2hhckNvZGUgPiAzMSAmJiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0iLCJmdW5jdGlvbiBleHBsYWluTXVsdGlwbGljYXRpb24oW2EsIGIsIC4uLnJlc3RdKSB7XG4gIGNvbnN0IHRlbnMgPSBNYXRoLmZsb29yKGIgLyAxMCkgKiAxMDtcbiAgY29uc3Qgb25lcyA9IE1hdGguZmxvb3IoYiAlIDEwKTtcbiAgY29uc3QgdGVuc011bHRpcGxlcyA9IHRlbnMgKiBhO1xuICBjb25zdCBvbmVzTXVsdGlwbGVzID0gb25lcyAqIGE7XG4gIGNvbnN0IHRlbnNTdHJpbmcgPSBgJHt0ZW5zfSB4ICR7YX0gPSAke3RlbnMgKiBhfWA7XG4gIGNvbnN0IG9uZXNTdHJpbmcgPSBgJHtvbmVzfSB4ICR7YX0gPSAke29uZXMgKiBhfWA7XG4gIGNvbnN0IHRvdGFsID0gYCR7dGVuc011bHRpcGxlc30gKyAke29uZXNNdWx0aXBsZXN9ID0gJHtcbiAgICB0ZW5zTXVsdGlwbGVzICsgb25lc011bHRpcGxlc31gO1xuICByZXR1cm4gb25lcyAhPSAwXG4gICAgPyBgJHtvbmVzU3RyaW5nfTxicj4ke3RlbnNTdHJpbmd9PGJyPiR7dG90YWx9YFxuICAgIDogYCR7dGVuc1N0cmluZ308YnI+JHt0b3RhbH1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBsYW5hdGlvbihtYXRoT3BlcmF0aW9ucywgaW5wdXRzKSB7XG4gIGNvbnN0IG51bWJlcnMgPSBbLi4uaW5wdXRzXTtcbiAgbnVtYmVycy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gIGlmIChtYXRoT3BlcmF0aW9ucyA9PT0gJ211bHRpcGxpY2F0aW9uJykge1xuICAgIGlmIChudW1iZXJzWzFdID4gMTAgJiYgbnVtYmVyc1swXSA8IDEwKSB7XG4gICAgICByZXR1cm4gZXhwbGFpbk11bHRpcGxpY2F0aW9uKG51bWJlcnMpO1xuICAgIH0gaWYgKG51bWJlcnNbMV0gPiAxMCAmJiBudW1iZXJzWzBdID4gMTApIHtcbiAgICAgIHJldHVybiBleHBsYWluTXVsdGlwbGljYXRpb24oW251bWJlcnNbMV0sIG51bWJlcnNbMF1dKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4iLCJmdW5jdGlvbiBjb3VudEJ5KGlucHV0KSB7XG4gIGNvbnN0IGEgPSBpbnB1dC5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgIGlmICh0eXBlb2YgYWNjW2N1cnJdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYWNjW2N1cnJdID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjW2N1cnJdICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIGE7XG59O1xuXG5cbmNvbnN0IG9wZXJhdGlvbnMgPSB7XG4gIGFkZGl0aW9uOiAoYSwgYikgPT4gYSArIGIsXG4gIG11bHRpcGxpY2F0aW9uOiAoYSwgYikgPT4gYSAqIGIsXG4gIHN1YnRyYWN0aW9uOiAoYSwgYikgPT4gYSAtIGIsXG4gIGRpdmlzaW9uOiAoYSwgYikgPT4gYSAvIGIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmFsdWF0b3Ige1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBhbnN3ZXIocXVlc3Rpb24pIHtcbiAgICBjb25zdCBmdW5jID0gb3BlcmF0aW9uc1txdWVzdGlvbi5vcGVyYXRpb25dO1xuICAgIHJldHVybiBmdW5jKHF1ZXN0aW9uLmZpcnN0TnVtLCBxdWVzdGlvbi5zZWNvbmROdW0pO1xuICB9XG5cbiAgc3RhdGljIGV2YWx1YXRlUXVlc3Rpb24ocXVlc3Rpb24pIHtcbiAgICBjb25zdCBmdW5jID0gb3BlcmF0aW9uc1txdWVzdGlvbi5vcGVyYXRpb25dO1xuICAgIHJldHVybiBmdW5jKHF1ZXN0aW9uLmZpcnN0TnVtLCBxdWVzdGlvbi5zZWNvbmROdW0pID09PSBxdWVzdGlvbi5zdWJtaXR0ZWRBbnN3ZXI7XG4gIH1cblxuICBzdGF0aWMgZXZhbHVhdGUoWy4uLnF1ZXN0aW9uc10pIHtcbiAgICBjb25zdCBmaWx0ZXJlZFdpbnMgPSBxdWVzdGlvbnNcbiAgICAgIC5maWx0ZXIoKHEpID0+IHEub3BlcmF0aW9uID09PSAnbXVsdGlwbGljYXRpb24nKVxuICAgICAgLmZpbHRlcigocSkgPT4gcS5maXJzdE51bSAqIHEuc2Vjb25kTnVtID09IHEuc3VibWl0dGVkQW5zd2VyKVxuICAgICAgLm1hcCgocSkgPT4gW3EuZmlyc3ROdW0sIHEuc2Vjb25kTnVtXSk7XG5cbiAgICBjb25zdCB3aW5zID0gKHR5cGVvZiBmaWx0ZXJlZFdpbnMgIT09ICd1bmRlZmluZWQnKSA/IFtdLmNvbmNhdC5hcHBseShbXSwgZmlsdGVyZWRXaW5zKSA6IFtdO1xuXG4gICAgY29uc3QgZmlsdGVyZWROZWVkUHJhY3RpY2UgPSBxdWVzdGlvbnNcbiAgICAgIC5maWx0ZXIoKHEpID0+IHEub3BlcmF0aW9uID09PSAnbXVsdGlwbGljYXRpb24nKVxuICAgICAgLmZpbHRlcigocSkgPT4gcS5maXJzdE51bSAqIHEuc2Vjb25kTnVtICE9PSBxLnN1Ym1pdHRlZEFuc3dlcilcbiAgICAgIC5tYXAoKHEpID0+IFtxLmZpcnN0TnVtLCBxLnNlY29uZE51bV0pO1xuXG4gICAgY29uc3QgbmVlZFByYWN0aWNlID0gKHR5cGVvZiBmaWx0ZXJlZE5lZWRQcmFjdGljZSAhPT0gJ3VuZGVmaW5lZCcpID8gW10uY29uY2F0LmFwcGx5KFtdLCBmaWx0ZXJlZE5lZWRQcmFjdGljZSkgOiBbXTtcblxuICAgIGNvbnN0IHN1bW1hcnkgPSB7XG4gICAgICB3aW5zOiBjb3VudEJ5KHdpbnMpLFxuICAgICAgbmVlZFByYWN0aWNlOiBjb3VudEJ5KG5lZWRQcmFjdGljZSksXG4gICAgfTtcbiAgICByZXR1cm4gc3VtbWFyeTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzICBRdWVzdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0TnVtLCBzZWNvbmROdW0sIG9wZXJhdGlvbiwgc3VibWl0dGVkQW5zd2VyLCBzdWJtaXNzaW9uVGltZSkge1xuICAgIHRoaXMuZmlyc3ROdW0gPSBmaXJzdE51bTtcbiAgICB0aGlzLnNlY29uZE51bSA9IHNlY29uZE51bTtcbiAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICB0aGlzLnN1Ym1pdHRlZEFuc3dlciA9IHN1Ym1pdHRlZEFuc3dlcjtcbiAgICB0aGlzLnN1Ym1pc3Npb25UaW1lID0gc3VibWlzc2lvblRpbWU7XG4gIH1cbn1cbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwidmFyIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIHNodWZmbGVTZWxmID0gcmVxdWlyZSgnLi9fc2h1ZmZsZVNlbGYnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc2h1ZmZsZWAgZm9yIGFycmF5cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNodWZmbGUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBzaHVmZmxlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTaHVmZmxlKGFycmF5KSB7XG4gIHJldHVybiBzaHVmZmxlU2VsZihjb3B5QXJyYXkoYXJyYXkpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNodWZmbGU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwiLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUZsb29yID0gTWF0aC5mbG9vcixcbiAgICBuYXRpdmVSYW5kb20gPSBNYXRoLnJhbmRvbTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yYW5kb21gIHdpdGhvdXQgc3VwcG9ydCBmb3IgcmV0dXJuaW5nXG4gKiBmbG9hdGluZy1wb2ludCBudW1iZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbG93ZXIgVGhlIGxvd2VyIGJvdW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IHVwcGVyIFRoZSB1cHBlciBib3VuZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHJhbmRvbSBudW1iZXIuXG4gKi9cbmZ1bmN0aW9uIGJhc2VSYW5kb20obG93ZXIsIHVwcGVyKSB7XG4gIHJldHVybiBsb3dlciArIG5hdGl2ZUZsb29yKG5hdGl2ZVJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIgKyAxKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJhbmRvbTtcbiIsInZhciBzaHVmZmxlU2VsZiA9IHJlcXVpcmUoJy4vX3NodWZmbGVTZWxmJyksXG4gICAgdmFsdWVzID0gcmVxdWlyZSgnLi92YWx1ZXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zaHVmZmxlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2h1ZmZsZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNodWZmbGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlU2h1ZmZsZShjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBzaHVmZmxlU2VsZih2YWx1ZXMoY29sbGVjdGlvbikpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTaHVmZmxlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy52YWx1ZXNgIGFuZCBgXy52YWx1ZXNJbmAgd2hpY2ggY3JlYXRlcyBhblxuICogYXJyYXkgb2YgYG9iamVjdGAgcHJvcGVydHkgdmFsdWVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5IG5hbWVzXG4gKiBvZiBgcHJvcHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gZ2V0IHZhbHVlcyBmb3IuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VWYWx1ZXMob2JqZWN0LCBwcm9wcykge1xuICByZXR1cm4gYXJyYXlNYXAocHJvcHMsIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVZhbHVlcztcbiIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgYmFzZVJhbmRvbSA9IHJlcXVpcmUoJy4vX2Jhc2VSYW5kb20nKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc2h1ZmZsZWAgd2hpY2ggbXV0YXRlcyBhbmQgc2V0cyB0aGUgc2l6ZSBvZiBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2h1ZmZsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZT1hcnJheS5sZW5ndGhdIFRoZSBzaXplIG9mIGBhcnJheWAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZVNlbGYoYXJyYXksIHNpemUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gIHNpemUgPSBzaXplID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBzaXplO1xuICB3aGlsZSAoKytpbmRleCA8IHNpemUpIHtcbiAgICB2YXIgcmFuZCA9IGJhc2VSYW5kb20oaW5kZXgsIGxhc3RJbmRleCksXG4gICAgICAgIHZhbHVlID0gYXJyYXlbcmFuZF07XG5cbiAgICBhcnJheVtyYW5kXSA9IGFycmF5W2luZGV4XTtcbiAgICBhcnJheVtpbmRleF0gPSB2YWx1ZTtcbiAgfVxuICBhcnJheS5sZW5ndGggPSBzaXplO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2h1ZmZsZVNlbGY7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBhcnJheVNodWZmbGUgPSByZXF1aXJlKCcuL19hcnJheVNodWZmbGUnKSxcbiAgICBiYXNlU2h1ZmZsZSA9IHJlcXVpcmUoJy4vX2Jhc2VTaHVmZmxlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygc2h1ZmZsZWQgdmFsdWVzLCB1c2luZyBhIHZlcnNpb24gb2YgdGhlXG4gKiBbRmlzaGVyLVlhdGVzIHNodWZmbGVdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Zpc2hlci1ZYXRlc19zaHVmZmxlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2h1ZmZsZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHNodWZmbGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNodWZmbGUoWzEsIDIsIDMsIDRdKTtcbiAqIC8vID0+IFs0LCAxLCAzLCAyXVxuICovXG5mdW5jdGlvbiBzaHVmZmxlKGNvbGxlY3Rpb24pIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlTaHVmZmxlIDogYmFzZVNodWZmbGU7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNodWZmbGU7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwidmFyIGJhc2VWYWx1ZXMgPSByZXF1aXJlKCcuL19iYXNlVmFsdWVzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0eSB2YWx1ZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8udmFsdWVzKG5ldyBGb28pO1xuICogLy8gPT4gWzEsIDJdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy52YWx1ZXMoJ2hpJyk7XG4gKiAvLyA9PiBbJ2gnLCAnaSddXG4gKi9cbmZ1bmN0aW9uIHZhbHVlcyhvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gW10gOiBiYXNlVmFsdWVzKG9iamVjdCwga2V5cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZXM7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvL2ltcG9ydCB7IHNodWZmbGUgfSBmcm9tICdsb2Rhc2gvc2h1ZmZsZSc7XG5jb25zdCBzaHVmZmxlID0gcmVxdWlyZShcImxvZGFzaC9zaHVmZmxlXCIpO1xuXG5mdW5jdGlvbiBkaXN0b3J0KGkpIHtcbiAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICByZXR1cm4gaSArIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGkgLSAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbSB7XG4gIC8qKlxuICAgKiBDcmVkaXQgOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXRoL3JhbmRvbVxuICAgKiBAcGFyYW0geyp9IG1pblxuICAgKiBAcGFyYW0geyp9IG1heFxuICAgKi9cbiAgc3RhdGljIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjsgLy8gVGhlIG1heGltdW0gaXMgaW5jbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgfVxuXG4gIHN1ZmZsZTtcblxuICBzdGF0aWMgZ2V0UmFuZG9tSW50SW5jbHVzaXZlV2l0aEV4Y2VwdGlvbnMobWluLCBtYXgsIC4uLmV4Y2x1ZGVzKSB7XG4gICAgbGV0IGdlbmVyYXRlZCA9IEFycmF5LmZyb20oQXJyYXkobWF4IC0gbWluKS5rZXlzKCkpXG4gICAgICAubWFwKGkgPT4gaSArIG1pbilcbiAgICAgIC5tYXAoaSA9PiB7XG4gICAgICAgIGlmIChleGNsdWRlcy5pbmRleE9mKGkpICE9IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGRpc3RvcnQoaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIGNvbnN0IHVuaXF1ZSA9IG5ldyBTZXQoZ2VuZXJhdGVkKTtcbiAgICBleGNsdWRlcy5mb3JFYWNoKChrKSA9PiB1bmlxdWUuZGVsZXRlKGspKTtcbiAgICByZXR1cm4gc2h1ZmZsZShBcnJheS5mcm9tKHVuaXF1ZSkpWzBdO1xuICB9XG59XG4iLCJpbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9tb2RlbC9RdWVzdGlvbic7XG5pbXBvcnQgRXZhbHVhdG9yIGZyb20gJy4vbW9kZWwvRXZhbHVhdG9yJztcbmltcG9ydCBleHBsYW5hdGlvbiBmcm9tICcuL21vZGVsL0Fuc3dlclRpcHMnO1xuXG5mdW5jdGlvbiBjcmVhdGVRdWVzdGlvbigpIHtcblxuICBjb25zdCBmaXJzdE51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3ROdW1HZW5cIikuaW5uZXJIVE1MO1xuICBjb25zdCBzZWNvbmROdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY29uZE51bUdlblwiKS5pbm5lckhUTUw7XG5cbiAgcmV0dXJuIG5ldyBRdWVzdGlvbihcbiAgICBwYXJzZUludChmaXJzdE51bSwgMTApLFxuICAgIHBhcnNlSW50KHNlY29uZE51bSwgMTApLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYXRpb25zJykudmFsdWUsXG4gICAgcGFyc2VJbnQoZm9ybVByYWN0aWNlLmFuc3dlci52YWx1ZSwgMTApLFxuICAgIG5ldyBEYXRlKClcbiAgKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmVzdWx0KHF1ZXN0aW9uKSB7XG4gIGNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJhY3RpY2VkUmVzdWx0cycpLmluc2VydFJvdygxKTtcbiAgeC5pbnNlcnRDZWxsKDApLmlubmVySFRNTCA9IHF1ZXN0aW9uLmZpcnN0TnVtO1xuICB4Lmluc2VydENlbGwoMSkuaW5uZXJIVE1MID0gcXVlc3Rpb24uc2Vjb25kTnVtO1xuICB4Lmluc2VydENlbGwoMikuaW5uZXJIVE1MID0gcXVlc3Rpb24uc3VibWl0dGVkQW5zd2VyO1xuICB4Lmluc2VydENlbGwoMykuaW5uZXJIVE1MID0gRXZhbHVhdG9yLmFuc3dlcihxdWVzdGlvbik7XG4gIHguaW5zZXJ0Q2VsbCg0KS5pbm5lckhUTUwgPSBleHBsYW5hdGlvbihxdWVzdGlvbi5vcGVyYXRpb24sIFtxdWVzdGlvbi5maXJzdE51bSwgcXVlc3Rpb24uc2Vjb25kTnVtXSk7XG4gIHguaW5zZXJ0Q2VsbCg1KS5pbm5lckhUTUwgPSBFdmFsdWF0b3IuZXZhbHVhdGVRdWVzdGlvbihxdWVzdGlvbik7XG4gIHBvcHVsYXRlRW1wdHlSZXN1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlTmV3UXVlc3Rpb24ocmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXIpIHtcbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZSA9PSAnc3VidHJhY3Rpb24nKSB7XG4gICAgY29uc3QgaW5wdXQgPSBbcmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXJdO1xuICAgIGlucHV0LnNvcnQoKGEsYikgPT4gKGEtYikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE51bUdlbicpLmlubmVySFRNTCA9IGlucHV0WzFdO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWNvbmROdW1HZW4nKS5pbm5lckhUTUwgPSBpbnB1dFswXTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbnMnKS52YWx1ZSA9PSAnZGl2aXNpb24nKSB7XG4gICAgY29uc3QgaW5wdXQgPSBbcmFuZG9tTnVtYmVyLCBzZWNvbmRSYW5kb21OdW1iZXJdO1xuICAgIGlucHV0LnNvcnQoKGEsYikgPT4gKGEtYikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE51bUdlbicpLmlubmVySFRNTCA9IGlucHV0WzFdICogaW5wdXRbMF07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY29uZE51bUdlbicpLmlubmVySFRNTCA9IGlucHV0WzBdO1xuICAgIHJldHVybjtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2VyJykudmFsdWUgPSAnJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0TnVtR2VuJykuaW5uZXJIVE1MID0gcmFuZG9tTnVtYmVyO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2Vjb25kTnVtR2VuJykuaW5uZXJIVE1MID0gc2Vjb25kUmFuZG9tTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUVtcHR5UmVzdWx0KCkge1xuICBpZihmb3JtUHJhY3RpY2UgJiYgZm9ybVByYWN0aWNlLmFuc3dlcikge1xuICAgIGZvcm1QcmFjdGljZS5hbnN3ZXIudmFsdWUgPSAnJztcbiAgfVxufVxuXG5jb25zdCB1aVRvb2xzID0geyBjcmVhdGVRdWVzdGlvbiwgYXBwZW5kUmVzdWx0LCBwb3B1bGF0ZU5ld1F1ZXN0aW9uIH07XG5cbmV4cG9ydCBkZWZhdWx0IHVpVG9vbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9