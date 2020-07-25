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

function showDetails(data, el) {
  let newTable = document.createElement('table');
  el.appendChild(newTable);
  showConsolidatedSummary(data, newTable)
}

export function showConsolidatedSummary(summary, table) {
  
  Object.entries(summary)
  .filter(keyValue => keyValue[0].indexOf('_')!=0)
  .filter(keyValue => typeof keyValue[1] !== 'object')
  .forEach(keyValue => {
    const row = table.insertRow(0);
    const cell = row.insertCell(0);
    debugger;
    cell.innerHTML = `<b>${keyValue[0]}</b>`;
    const cell2 = row.insertCell(1);
    if( Array.isArray(keyValue[1]) ) {
      cell2.innerHTML = `<i>${keyValue[1].length}</i>`;
    } else if( keyValue[1] !== null) {
      cell2.innerHTML = `<i>${keyValue[1]}</i>`;
    }
    
  });

  Object.entries(summary)
  .filter(keyValue => keyValue[0].indexOf('_')!=0)
  .filter(keyValue => !Array.isArray(keyValue[1]))
  .filter(keyValue => typeof keyValue[1] === 'object' && keyValue[1] !== null)
  .forEach(keyValue =>   { 
    const row = table.insertRow(0);
    const cell = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell.innerHTML = `<b>${keyValue[0]}</b>`;
    showDetails(keyValue[1], cell2); });
}

const uiTools = { createQuestion, appendResult, populateNewQuestion, showConsolidatedSummary };

export default uiTools;
