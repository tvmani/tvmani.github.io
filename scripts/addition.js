let totalCorrect = 0;
let totalIncorrect = 0;
let start_time = new Date();
let welcomeMessage = "";
let minutes_per_question = "";

function registerUser(studentId) {
  let defaultDetails = {
    studentId,
    sessions: [],
  };
  let priorPracticeDetails = localStorage.getItem(studentId);
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
  let randomNumber = getRandomInt(3, 40);
  document.getElementById("answer").value = "";
  document.getElementById("firstNumGen").value = randomNumber;
  let secondRandomNumber = getRandomInt(3, 20);
  if (document.getElementById("SquareMode").checked) {
    let random_boolean = Math.random() >= 0.5;
    if (random_boolean) {
      secondRandomNumber = randomNumber - 1;
    } else {
      secondRandomNumber = randomNumber + 1;
    }
  }
  document.getElementById("secondNumGen").value = secondRandomNumber;
}

function answerKeyboardHandler() {
  var answer = document.getElementById("answer");
  if (answer && answer.addEventListener) {
    answer.addEventListener("keydown", this.tabHandler, false);
  }
}

function tabHandler(e) {
  var TABKEY = 9;
  if (e.keyCode == TABKEY) {
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
  document.getElementById("summary").style.backgroundColor = "#ccffdd";
  document.getElementById("main").style.visibility = "visible";
  document.getElementById("date_time").innerText = start_time;
  document.getElementById("summary").innerHTML = "";
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
  if (numbers[1] > 10 && numbers[0] < 10) {
    return explain(numbers);
  } else if (numbers[1] > 10 && numbers[0] > 10) {
    return explain([numbers[1], numbers[0]]);
  }
  return "";
}

function explain(numbers) {
  let tens = Math.floor(numbers[1] / 10) * 10;
  let ones = Math.floor(numbers[1] % 10);
  let tens_multiplication = tens * numbers[0];
  let ones_multiplication = ones * numbers[0];
  let tens_string = `${tens} x ${numbers[0]} = ` + tens * numbers[0];
  let ones_string = `${ones} x ${numbers[0]} = ` + ones * numbers[0];
  let total =
    `${tens_multiplication} + ${ones_multiplication} = ` +
    (tens_multiplication + ones_multiplication);
  // return ones != 0
  //   ? ones_string + "<br>" + tens_string + "<br>" + total
  //   : tens_string + "<br>" + total;
  return "";
}

function insRow(numbers) {
  let x = document.getElementById("practicedResults").insertRow(2);
  let firstNum = x.insertCell(0);
  let secondNum = x.insertCell(1);
  let answer = x.insertCell(2);
  let submission = x.insertCell(3);
  let details = x.insertCell(4);
  let result = x.insertCell(5);
  firstNum.innerHTML = numbers[0];
  secondNum.innerHTML = numbers[1];
  answer.innerHTML = numbers[0] + numbers[1];
  submission.innerHTML = numbers[2];
  details.innerHTML = explanation(numbers);
  result.innerHTML = numbers[0] + numbers[1] == numbers[2];
}
function scoreMark() {
  //this.value += "    ";
  let calculatedAnswer =
    parseInt(multiplicationForm.firstNumGen.value, 10) +
    parseInt(multiplicationForm.secondNumGen.value, 10);
  let answer = parseInt(multiplicationForm.answer.value, 10);
  if (calculatedAnswer === answer) {
    totalCorrect++;
  } else {
    totalIncorrect++;
  }
  insRow([
    parseInt(multiplicationForm.firstNumGen.value, 10),
    parseInt(multiplicationForm.secondNumGen.value, 10),
    parseInt(multiplicationForm.answer.value, 10),
  ]);
  multiplicationForm.answer.value = "";
  replenish();
  let error_ratio = (totalIncorrect/(totalCorrect+totalIncorrect))*100
  let result = "Your total Correct :: ~~~> " + totalCorrect + ", total Incorrect :: ~~~>" + totalIncorrect;
  if(error_ratio > 0.001) {
    result = result + ", Error ratio :: " + error_ratio.toFixed(2) +"%";
  }
  let speed = Math.floor(minutes_per_question / totalCorrect);
  let speed_result =
    "<br/>Your speed in number of seconds per question is  " + speed;

  document.getElementById("summary").innerHTML =
    result + "<br/>" + speed_result;
  finalizeSubmit();
}
function finalizeSubmit() {
  //"#ffccdd"/rgb(255, 204, 221) or "#ccffdd"/"rgb(204, 255, 221)
  document.getElementById("answer").focus();
  if (
    document.getElementById("summary").style.backgroundColor ===
    "rgb(204, 255, 221)"
  ) {
    document.getElementById("summary").style.backgroundColor = "#ffccdd";
  } else {
    document.getElementById("summary").style.backgroundColor = "#ccffdd";
  }
}

function updateTime() {
  let end_time = new Date();
  var diff = Math.abs(end_time - start_time);
  minutes_per_question = Math.floor(diff / 1000);
}
window.addEventListener('load', (event) => {
  replenish();
  answerKeyboardHandler()
});

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

module.exports = { add, replenish };
