import Question from './model/Question';
import Evaluator from './model/Evaluator';
import explanation from './model/AnswerTips';

function createQuestion() {
  return new Question(
    parseInt(formPractice.firstNumGen.value, 10),
    parseInt(formPractice.secondNumGen.value, 10),
    document.getElementById('operations').value,
    parseInt(formPractice.answer.value, 10),
    new Date()
  );
}

function appendResult(question) {
  const x = document.getElementById('practicedResults').insertRow(2);
  x.insertCell(0).innerHTML = question.firstNum;
  x.insertCell(1).innerHTML = question.secondNum;
  x.insertCell(2).innerHTML = Evaluator.answer(question);
  x.insertCell(3).innerHTML = question.submittedAnswer;
  x.insertCell(4).innerHTML = explanation(question.operation, [question.firstNum, question.secondNum]);
  x.insertCell(5).innerHTML = Evaluator.evaluateQuestion(question);
  populateEmptyResult();
}

export function populateNewQuestion(randomNumber, secondRandomNumber) {
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

export default uiTools;
