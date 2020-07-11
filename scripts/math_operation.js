import Evaluator from './model/Evaluator';
import uiTools from './ui_tools';
import Random from './random';

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

function finalizeSubmit() {
  document.getElementById('answer').focus();
}

window.addEventListener('load', (_event) => {
  replenish();
  answerKeyboardHandler();
  yourNameKeyboardHandler();
});


export { uiTools as ui };

export function scoreMark(question) {
  if (Evaluator.evaluateQuestion(question)) {
    totalCorrect++;
  } else {
    totalIncorrect++;
  }
  uiTools.appendResult(question);
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

  sid = new Date().toISOString();
  sid = `Practice_${studentId}@${sid}`;

  if (priorPracticeDetails) {
    welcomeMessage = `${studentId} is amazing person! ${studentId} practices like champion! - ${sid}`;
  } else {
    welcomeMessage = `Hi! ${studentId}, you are courageous! 1000 miles journey begins with single step! - ${sid}`;
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

export function replenish() {
  const max = parseInt(document.getElementById('maxInput').value, 10);
  const randomNumber = Random.getRandomIntInclusiveWithExceptions(3, max, [10]);
  const secondRandomNumber = Random.getRandomIntInclusive(3, 20, [10]);
  uiTools.populateNewQuestion(randomNumber, secondRandomNumber);
}

export function isNumber(event) {
  const evt = event || window.event;
  const charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
