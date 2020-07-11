let totalCorrect = 0;
let totalIncorrect = 0;
let start_time = new Date();
let welcomeMessage = '';
let minutes_per_question = '';
const math_operations = '';

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

function registerUser(studentId) {
  const defaultDetails = {
    studentId,
    sessions: [],
  };
  let sid = new Date().toISOString();
  sid = `Practice_${studentId}@${sid}`;

  let priorPracticeDetails = localStorage.getItem(studentId.toLowerCase());
  if (priorPracticeDetails) {
    welcomeMessage = `${studentId} is amazing person, because ${studentId} practices like champion!`;
  } else {
    welcomeMessage = `${studentId}, you are courageous, 1000 miles journey begins with single step!`;
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

function yourNameKeyboardHandler() {
  const input = document.getElementById('yourName');
  input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('submitName').click();
    }
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomValue == 10) randomValue -= 1;
  else randomValue == 11;
  randomValue += 1;
  console.log(`${randomValue} - Random value`);
  return randomValue;
}
function replenish() {
  const max_input = document.getElementById('max_input').value;
  const max = parseInt(max_input, 10);

  const randomNumber = getRandomInt(3, max);
  document.getElementById('answer').value = '';
  document.getElementById('firstNumGen').innerHTML = randomNumber;
  let secondRandomNumber = getRandomInt(3, 20);
  const math_operations = document.getElementById('operations').value;
  if (document.getElementById('SquareMode').checked) {
    const random_boolean = Math.random() >= 0.5;
    if (random_boolean) {
      secondRandomNumber = randomNumber - 1;
    } else {
      secondRandomNumber = randomNumber + 1;
    }
  }
  document.getElementById('secondNumGen').innerHTML = secondRandomNumber;
}
function isNumber(evt) {
  evt = (evt) || window.event;
  const charCode = (evt.which) ? evt.which : evt.keyCode;
  console.log(charCode);
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
function answerKeyboardHandler() {
  const answer = document.getElementById('answer');
  if (answer && answer.addEventListener) {
    answer.addEventListener('keydown', this.tabHandler, false);
    answer.addEventListener('keypress', this.isNumber, true);
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
    return false;
  }
}

function startPractice() {
  totalCorrect = 0;
  totalIncorrect = 0;
  start_time = new Date();
  document.getElementById('welcomeMessage').innerText = welcomeMessage;
  // document.getElementById("summary").style.backgroundColor = "#ccffdd";
  document.getElementById('main').style.visibility = 'visible';
  document.getElementById('date_time').innerText = start_time;
  document.getElementById('summary').innerHTML = '';
  document.getElementById('totalQuestionsPracticed').innerHTML = 'Total Questions Practiced:  0';
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
  const math_operations = document.getElementById('operations').value;
  if (math_operations === 'multiplication') {
    if (numbers[1] > 10 && numbers[0] < 10) {
      return multiplication_explain(numbers);
    } if (numbers[1] > 10 && numbers[0] > 10) {
      return multiplication_explain([numbers[1], numbers[0]]);
    }
  }
  return '';
}

function multiplication_explain([a, b, ...rest]) {
  const tens = Math.floor(b / 10) * 10;
  const ones = Math.floor(b % 10);
  const tens_multiplication = tens * a;
  const ones_multiplication = ones * a;
  const tens_string = `${tens} x ${a} = ${tens * a}`;
  const ones_string = `${ones} x ${a} = ${ones * a}`;
  const total = `${tens_multiplication} + ${ones_multiplication} = ${
    tens_multiplication + ones_multiplication}`;
  return ones != 0
    ? `${ones_string}<br>${tens_string}<br>${total}`
    : `${tens_string}<br>${total}`;
}

function insRow(numbers) {
  const x = document.getElementById('practicedResults').insertRow(2);
  const math_operations = document.getElementById('operations').value;
  const firstNum = x.insertCell(0);
  const secondNum = x.insertCell(1);
  const answer = x.insertCell(2);
  const submission = x.insertCell(3);
  const details = x.insertCell(4);
  const result = x.insertCell(5);
  firstNum.innerHTML = numbers[0];
  secondNum.innerHTML = numbers[1];
  answer.innerHTML = operations[math_operations](numbers[0], numbers[1]);
  submission.innerHTML = numbers[2];
  details.innerHTML = explanation(numbers);
  result.innerHTML = operations[math_operations](numbers[0], numbers[1]) == numbers[2];
}
function scoreMark() {
  // this.value += "    ";
  const math_operations = document.getElementById('operations').value;
  const firstNumGen = document.getElementById('firstNumGen');
  const secondNumGen = document.getElementById('secondNumGen');
  const calculatedAnswer = operations[math_operations](parseInt(firstNumGen.innerHTML, 10), parseInt(secondNumGen.innerHTML, 10));
  const answer = parseInt(formPractice.answer.value, 10);
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
  formPractice.answer.value = '';
  replenish();
  const error_ratio = (totalIncorrect / (totalCorrect + totalIncorrect)) * 100;
  let result = `Correct => ${totalCorrect}<br/>Incorrect => ${totalIncorrect}`;
  if (error_ratio > 0.001) {
    result = `${result}<br/>Error ratio :: ${error_ratio.toFixed(2)}%`;
  }
  const speed = Math.floor(minutes_per_question / totalCorrect);
  const speed_result = `<br/>Your speed in number of seconds per question is  ${speed}`;

  document.getElementById('totalQuestionsPracticed').innerHTML = `Total Questions Practiced:  ${totalCorrect + totalIncorrect}`;
  document.getElementById('summary').innerHTML = `${result}<br/>${speed_result}`;
  finalizeSubmit();
}
function finalizeSubmit() {
  // "#ffccdd"/rgb(255, 204, 221) or "#ccffdd"/"rgb(204, 255, 221)
  document.getElementById('answer').focus();
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
  const end_time = new Date();
  const diff = Math.abs(end_time - start_time);
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

// module.exports = { add, replenish };
