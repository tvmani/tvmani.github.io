import uiTools from './ui_tools';
import Random from './random';
import Generator from './generator';
import extractSessions from './analyze';
import Evaluator from './model/Evaluator';

const startTime = new Date();
let totalCorrect = 0;
let totalIncorrect = 0;
let welcomeMessage = '';
let lastSubmissionTime;
let sid = '';

window.addEventListener('load', (_event) => {
  replenish();
  answerKeyboardHandler();
  yourNameKeyboardHandler();
});

function yourNameKeyboardHandler() {
  const input = document.getElementById('yourName');
  input.focus();
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
  if (e.keyCode === KEYCODE_TAB || e.keyCode === KEYCODE_ENTER) {
    if (document.getElementById('answer').value && document.getElementById('answer').value.length >= 1) {
      e.preventDefault();
      document.getElementById('submitAnswer').click();
    } else {
      e.preventDefault();
    }
  }
}

function startPractice() {
  if(document.getElementById('welcomeMessage')) {
    document.getElementById('welcomeMessage').innerHTML = welcomeMessage;
  }
  document.getElementById('main').style.visibility = 'visible';
  document.getElementById('summary').innerHTML = '';
  totalCorrect = 0;
  totalIncorrect = 0;
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

function getImageForCorrectIncorrect(latestSubmittedAnswer) {

  if (latestSubmittedAnswer === undefined) {
    return "";
  } else if (latestSubmittedAnswer === true) {
    return `<img src="images/tick_mark_svg.png" alt="">`;
  }
  return `<img src="images/x_mark_svg.png" alt="">`;
}

export { uiTools as ui };


export function scoreMark(question) {
  let latestSubmittedAnswer = undefined;
  if (document.getElementById('answer').value && document.getElementById('answer').value.length >= 1) {
    //do nothing..
  } else {
    console.log('enter usage without input!');
    return false;
  }
  if (Evaluator.evaluateQuestion(question)) {
    latestSubmittedAnswer = true;
    totalCorrect++;
  } else {
    latestSubmittedAnswer = false;
    totalIncorrect++;
  }
  uiTools.appendResult(question);
  replenish();
  lastSubmissionTime = new Date();
  const diff = Math.abs(lastSubmissionTime - startTime);
  const elapsedTime = Math.floor(diff / 1000);
  const total = totalCorrect + totalIncorrect;
  const errorRatio = (totalIncorrect / total) * 100;

  const priorQuestion = JSON.parse(localStorage.getItem(sid));
  localStorage.setItem(sid, JSON.stringify([question, ...priorQuestion]));

  let result = `(Total, Correct, Incorrect)  => (${total}, <b>${totalCorrect}</b>, ${totalIncorrect})`;

  const speed = Math.floor(elapsedTime / totalCorrect);
  let speedResult = `Speed =>  ${speed}. Lower the better!`;
  if (totalIncorrect > 0) {
    speedResult = `(Speed, Error Ratio) =>  (${speed}, ${errorRatio.toFixed(2)}%). Lower the better!`;
  }
  const userFeeback = getImageForCorrectIncorrect(latestSubmittedAnswer);
  document.getElementById('summary').innerHTML = `${result}&nbsp;&nbsp;${userFeeback}<br/>${speedResult}`;
  finalizeSubmit();
}

export function registerUser(studentId) {
  const defaultDetails = {
    studentId,
    sessions: [],
  };
  let priorPracticeDetails = localStorage.getItem(studentId.toLowerCase());

  let startTime = new Date();
  let sessionTime = startTime.toISOString();
  sid = `Practice_${studentId}@${sessionTime}`;

  if (priorPracticeDetails) {
    welcomeMessage = `<b>${studentId} is amazing person!</b> ${studentId}, <b>becoming a champion begins with daily practice!</b><br/>Start time : ${startTime.toString()}`;
  } else {
    welcomeMessage = `<b>Hi! ${studentId}, you are courageous!</b> A journey of a 1000 miles begins with a single step!<br/>Start time : ${startTime.toString()}`;
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

export function analyzeUserPracticeSessions(studentId) {
  let appreciation = extractSessions(studentId, localStorage);
  welcomeMessage = `<b>${studentId}</b>, you have completed ${appreciation.totalPracticeSessions} number of practice sessions`;
  console.log(appreciation);
  return appreciation;

}
export function replenish() {
  const max = parseInt(document.getElementById('maxInput').value, 10);
  const min = parseInt(document.getElementById('minInput').value, 10);
  const firstNum = document.getElementById('firstNumGen') && parseInt(document.getElementById('firstNumGen').innerHTML, 10);
  const secondNum = document.getElementById('secondNumGen') &&  parseInt(document.getElementById('secondNumGen').innerHTML, 10);

  const generatorFunction = document.getElementById('generatorFunction') && document.getElementById('generatorFunction').value;
  const targetted = document.getElementById('targetted') && parseInt(document.getElementById('targetted').value, 10);

  if(generatorFunction && 'shuffledNumber' === generatorFunction) {
    let shuffledNumber =  Generator.getShuffledRange(min, max, [0,1]);
    uiTools.shuffleNewQuestion(targetted, shuffledNumber);
    return;
  } 

  const excludes = ('10,' + document.getElementById('excludes').value).split(',').filter(i => i !== '').map(i => parseInt(i, 10))
  let randomNumbers = undefined;
  if ('getCommonBase10sComplement'.startsWith(generatorFunction)) {
    randomNumbers = Generator.getCommonBase10sComplement(min, max, excludes)
  }
  if ('fibonacci'.startsWith(generatorFunction)) {
    if(isNaN(secondNum) || isNaN(firstNum) )
      randomNumbers = [1, 1];
    else
      randomNumbers = [secondNum, firstNum+secondNum];
  }
  if ('getNumberEndsWith5'.startsWith(generatorFunction)) {
    randomNumbers = Generator.getNumberEndsWith5(min, max, excludes)
  }
  if ('getSameTens'.startsWith(generatorFunction)) {
    randomNumbers = Generator.getSameTens(min, max, excludes)
  }
  if ('getJunior5s'.startsWith(generatorFunction)) {
    randomNumbers = Generator.getJunior5s(min, max, excludes)
  }
  if(!randomNumbers) {
    randomNumbers = Generator.getTwoNumbers(min, max, excludes);
  }
  uiTools.populateNewQuestion(randomNumbers[0], randomNumbers[1]);
}

export function isNumber(event) {
  const TAB_KEY = 9;
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