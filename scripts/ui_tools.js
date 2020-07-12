import Question from './model/Question';
import Evaluator from './model/Evaluator';
import explanation from './model/AnswerTips';

function createQuestion() {

  const firstNum = document.getElementById("firstNumGen").innerHTML;
  const secondNum = document.getElementById("secondNumGen").innerHTML;

  return new Question(
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
  x.insertCell(2).innerHTML = question.submittedAnswer;
  x.insertCell(3).innerHTML = Evaluator.answer(question);
  x.insertCell(4).innerHTML = explanation(question.operation, [question.firstNum, question.secondNum]);
  x.insertCell(5).innerHTML = Evaluator.evaluateQuestion(question);
  populateEmptyResult();
}

export function populateNewQuestion(randomNumber, secondRandomNumber) {
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

export default uiTools;
