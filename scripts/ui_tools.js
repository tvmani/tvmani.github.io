import Question from './model/Question';
import Evaluator from './model/Evaluator';
import explanation from './model/AnswerTips';
import chunck from 'lodash/chunk';
import chunk from 'lodash/chunk';

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

function isLessThanOr3(number) {
  return (number <= 3 );
}

function isOddOrDivisibleBy3(number) {
  return (number <= 3 ) ||  (number % 2 === 1)  || (number % 3 === 0);
}

function getFirstOperand(number) {
  console.log(`input to partition ${number}`)
  if(isLessThanOr3(number)) {
    const rows = Array.from(Array(number).keys()).map(i => '<td align="center" valign="top"><img src="/~media/svg/kuthirai.svg" width="50" height="50"  style="margin: 1px;"></td>');  
    return '<tr>' + rows.join('') + '</tr>';  
  }
  const chunkSize = isOddOrDivisibleBy3(number) ? 3 : 2;  
  const rows = Array.from(Array(number).keys()).map(i => '<td align="center" valign="top"><img src="/~media/svg/kuthirai.svg" width="50" height="50"  style="margin: 1px;"></td>');  
  const partition = chunk(rows, chunkSize);
  return '<tr>' + partition.map(group => group.join('')).join('</tr><tr>') + '</tr>';
  

}

function getSecondOperand(number) {
  return `<tr>
  <td align="center" valign="top"><img
          src="/~media/svg/puli.svg" width="50" height="50"
          style="margin: 1px;"></td>
  <td align="center" valign="top"><img
          src="/~media/svg/puli.svg" width="50" height="50"
          style="margin: 1px;"></td>
</tr>
<tr>
  <td align="center" valign="top"><img
      src="/~media/svg/puli.svg" width="50" height="50"
      style="margin: 1px;"></td>
<td align="center" valign="top"><img
      src="/~media/svg/puli.svg" width="50" height="50"
      style="margin: 1px;"></td>
</tr>`;
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
  if(document.getElementById('operations').value == 'junior_addition') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    document.getElementById('firstNumGraph').innerHTML = getFirstOperand(randomNumber);
    document.getElementById('secondNumGraph').innerHTML = getFirstOperand(secondRandomNumber);
    document.getElementById('firstNumGen').innerHTML = randomNumber;
    document.getElementById('secondNumGen').innerHTML = secondRandomNumber;
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
