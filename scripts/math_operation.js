const { Random } = require('./random');

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

export function scoreMark() {
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

export function registerUser(studentId) {
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

export function replenish() {
  const maxInput = document.getElementById('maxInput').value;
  const max = parseInt(maxInput, 10);
  const randomNumber = Random.getRandomIntInclusive(3, max);
  document.getElementById('answer').value = '';
  document.getElementById('firstNumGen').value = randomNumber;
  const secondRandomNumber = Random.getRandomIntInclusive(3, 20);
  document.getElementById('secondNumGen').value = secondRandomNumber;
}

export function isNumber(event) {
  const evt = event || window.event;
  const charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
