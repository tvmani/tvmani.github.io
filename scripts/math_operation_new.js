let totalCorrect = 0;
let totalIncorrect = 0;
let start_time = new Date();
let welcomeMessage = "";
let minutes_per_question = "";
let math_operations = '';

let operations = {
  'addition': (a, b) => a + b,
  'multiplication': (a, b) => a * b,
  'subtraction': (a, b) => a - b,
  'division': (a, b) => a / b,
}

let operations_explanations = {
  'addition': () => "",
  'multiplication': (a, b) => explanation(a, b),
  'subtraction': () => "",
  'division': () => "",
}

function registerUser(studentId) {
  let defaultDetails = {
    studentId,
    sessions: [],
  };
  let priorPracticeDetails = localStorage.getItem(studentId.toLowerCase());
  if (priorPracticeDetails) {
    welcomeMessage = `${studentId} is amazing person, because ${studentId} practices like champion!`;
  } else {
    welcomeMessage = `${studentId}, you are courageous, 1000 miles journey begins with single step!`;
  }
  startPractice();
  let currentTime = new Date();
  if (!priorPracticeDetails) {
    priorPracticeDetails = defaultDetails;
  } else {
    priorPracticeDetails = JSON.parse(priorPracticeDetails);
  }
  priorPracticeDetails.sessions.push(currentTime);

  let studentDetails = { sessions: priorPracticeDetails.sessions, studentId };
  localStorage.setItem(
    studentDetails.studentId.toLowerCase(),
    JSON.stringify(studentDetails)
  );

  document.getElementById("answer").focus();
}

function yourNameKeyboardHandler() {
  var input = document.getElementById("yourName");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("submit_name").click();
    }
  });
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomValue == 10) randomValue = randomValue - 1;
  else randomValue == 11;
  randomValue = randomValue + 1;
  console.log(`${randomValue} - Random value`);
  return randomValue;
}
function replenish() {
  let max_input = document.getElementById("max_input").value;
  let max = parseInt(max_input, 10);

  let randomNumber = getRandomInt(3, max);
  document.getElementById("answer").value = "";
  document.getElementById("firstNumGen").innerHTML  = randomNumber;
  let secondRandomNumber = getRandomInt(3, 20);
  let math_operations = document.getElementById("operations").value;
  if (document.getElementById("SquareMode").checked) {
    let random_boolean = Math.random() >= 0.5;
    if (random_boolean) {
      secondRandomNumber = randomNumber - 1;
    } else {
      secondRandomNumber = randomNumber + 1;
    }
  }
  document.getElementById("secondNumGen").innerHTML  = secondRandomNumber;
}
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  console.log(charCode);
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
function answerKeyboardHandler() {
  var answer = document.getElementById("answer");
  if (answer && answer.addEventListener) {
    answer.addEventListener("keydown", this.tabHandler, false);
    answer.addEventListener("keypress", this.isNumber, true);

  }
}

function tabHandler(e) {
  var KEYCODE_TAB = 9;
  var KEYCODE_ENTER = 13;
  if (e.keyCode == KEYCODE_TAB || e.keyCode == KEYCODE_ENTER) {
    updateTime();
    scoreMark();
    document.getElementById("answer").focus();
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }
}

function startPractice() {
  totalCorrect = 0;
  totalIncorrect = 0;
  start_time = new Date();
  document.getElementById("welcomeMessage").innerText = welcomeMessage;
  //document.getElementById("summary").style.backgroundColor = "#ccffdd";
  document.getElementById("main").style.visibility = "visible";
  document.getElementById("date_time").innerText = start_time;
  document.getElementById("summary").innerHTML = "";
  document.getElementById("totalQuestionsPracticed").innerHTML = "Total Questions Practiced:  0";
  let staleResults = document.getElementById("practicedResults").rows.length;
  if (staleResults > 2) {
    for (let i = 0; i < staleResults - 2; i++) {
      document.getElementById("practicedResults").deleteRow(-1);
    }
  }
}

function explanation(ns) {
  let numbers = [...ns];
  numbers.sort((a, b) => a - b);
  let math_operations = document.getElementById("operations").value;
  if (math_operations === 'multiplication') {
    if (numbers[1] > 10 && numbers[0] < 10) {
      return multiplication_explain(numbers);
    } else if (numbers[1] > 10 && numbers[0] > 10) {
      return multiplication_explain([numbers[1], numbers[0]]);
    }
  }
  return "";
}

function multiplication_explain([a, b, ...rest]) {
  let tens = Math.floor(b / 10) * 10;
  let ones = Math.floor(b % 10);
  let tens_multiplication = tens * a;
  let ones_multiplication = ones * a;
  let tens_string = `${tens} x ${a} = ` + tens * a;
  let ones_string = `${ones} x ${a} = ` + ones * a;
  let total =
    `${tens_multiplication} + ${ones_multiplication} = ` +
    (tens_multiplication + ones_multiplication);
  return ones != 0
    ? ones_string + "<br>" + tens_string + "<br>" + total
    : tens_string + "<br>" + total;
}

function insRow(numbers) {
  let x = document.getElementById("practicedResults").insertRow(2);
  let math_operations = document.getElementById("operations").value;
  let firstNum = x.insertCell(0);
  let secondNum = x.insertCell(1);
  let answer = x.insertCell(2);
  let submission = x.insertCell(3);
  let details = x.insertCell(4);
  let result = x.insertCell(5);
  firstNum.innerHTML = numbers[0];
  secondNum.innerHTML = numbers[1];
  answer.innerHTML = operations[math_operations](numbers[0], numbers[1]);
  submission.innerHTML = numbers[2];
  details.innerHTML = explanation(numbers);
  result.innerHTML = operations[math_operations](numbers[0], numbers[1]) == numbers[2];
}
function scoreMark() {
  //this.value += "    ";
  let math_operations = document.getElementById("operations").value;
  let firstNumGen = document.getElementById("firstNumGen")
  let secondNumGen = document.getElementById("secondNumGen")
  let calculatedAnswer = operations[math_operations](parseInt(firstNumGen.innerHTML, 10), parseInt(secondNumGen.innerHTML, 10));
  let answer = parseInt(formPractice.answer.value, 10);
  if (calculatedAnswer === answer) {
    totalCorrect++;
  } else {
    totalIncorrect++;
  }
  insRow([
    parseInt(firstNumGen.innerHTML, 10),
    parseInt(secondNumGen.innerHTML, 10),
    parseInt(formPractice.answer.value, 10),
  ]);
  formPractice.answer.value = "";
  replenish();
  let error_ratio = (totalIncorrect / (totalCorrect + totalIncorrect)) * 100
  let result = "Correct => " + totalCorrect + "<br/>Incorrect => " + totalIncorrect;
  if (error_ratio > 0.001) {
    result = result + "<br/>Error ratio :: " + error_ratio.toFixed(2) + "%";
  }
  let speed = Math.floor(minutes_per_question / totalCorrect);
  let speed_result =
    "<br/>Your speed in number of seconds per question is  " + speed;

  document.getElementById("totalQuestionsPracticed").innerHTML = "Total Questions Practiced:  " + (totalCorrect + totalIncorrect);
  document.getElementById("summary").innerHTML =
    result + "<br/>" + speed_result;
  finalizeSubmit();
}
function finalizeSubmit() {
  //"#ffccdd"/rgb(255, 204, 221) or "#ccffdd"/"rgb(204, 255, 221)
  document.getElementById("answer").focus();
  // if (
  //   document.getElementById("summary").style.backgroundColor ===
  //   "rgb(204, 255, 221)"
  // ) {
  //   document.getElementById("summary").style.backgroundColor = "#ffccdd";
  // } else {
  //   document.getElementById("summary").style.backgroundColor = "#ccffdd";
  // }
}

function updateTime() {
  let end_time = new Date();
  var diff = Math.abs(end_time - start_time);
  minutes_per_question = Math.floor(diff / 1000);
}



window.addEventListener('load', (event) => {
  replenish();
  answerKeyboardHandler();
  yourNameKeyboardHandler();
});

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

//module.exports = { add, replenish };
