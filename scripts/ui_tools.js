import Question from './model/Question';
import Evaluator from './model/Evaluator';
import explanation from './model/AnswerTips';
import Random from './random';
import chunk from 'lodash/chunk';

function createQuestion() {

  let firstNum = document.getElementById("firstNumGen").innerHTML;
  let secondNum = document.getElementById("secondNumGen").innerHTML;

  /*
  * During subtraction we are sure higher number always comes first
  * During diviion it is not sure
  */
  // if(  document.getElementById("generatorFunction") && document.getElementById("generatorFunction").value ==='puzzle') {
  //   if(document.getElementById("operation")  === 'subtraction' || document.getElementById("operation")  === 'division'  ) {
  //     let inputs = [firstNum, secondNum];
  //     inputs.sort((a,b) => (a-b));
  //     firstNum = inputs[1];
  //     secondNum = inputs[0];
  //   }
  //   debugger;
  // }
  const question = new Question(
    parseInt(firstNum, 10),
    parseInt(secondNum, 10),
    document.getElementById('operations').value,
    parseInt(formPractice.answer.value, 10),
    new Date()
  );

  console.log(' Question ---> ' + JSON.stringify(question, null, 2));

  return question;
}

function getRandomImage() {  
  //TODO: karadi_01 not working
  const images = ['dragon_01', 'kuthirai_01', 'mudalai_01', 'pattampoochi_01', 'puli_01', 'vaaththu_01'];
  const selectedImage =  images[Random.getRandomIntInclusive(0,images.length-1)];
  console.log('Selected image ' + selectedImage);
  return selectedImage;
}


function isLessThanOr3(number) {
  return (number <= 3 );
}

function isOddOrDivisibleBy3(number) {
  return (number <= 3 ) ||  (number % 2 === 1)  || (number % 3 === 0);
}

function getChunkSize(number) {
  return isOddOrDivisibleBy3(number) ? 3 : 2;
}

function getFirstOperand(number, image) {
  console.log(`input to partition ${number}`)
  
  if(number === 0) {
    return '<tr><td align="center" colspan="2" valign="top" width="50" height="50"></td></tr>';
  }
  if(isLessThanOr3(number)) {
    const rows = Array.from(Array(number).keys()).map(i => `<td align="center" valign="top"><img src="media/svg/${image}.svg" width="50" height="50"  style="margin: 1px;"></td>`);  
    return '<tr>' + rows.join('') + '</tr>';  
  }
  const chunkSize = getChunkSize(number);  
  const rows = Array.from(Array(number).keys()).map(i => `<td align="center" valign="top"><img src="media/svg/${image}.svg" width="50" height="50"  style="margin: 1px;"></td>`);  
  const partition = chunk(rows, chunkSize);
  return '<tr>' + partition.map(group => group.join('')).join('</tr><tr>') + '</tr>';  
}

function getMultiplicationOperand(number, number2, image) {
  let colSpan = getChunkSize(number);

  return Array.from(Array(number2).keys()).map(i => getFirstOperand(number, image)+`<tr><td colspan="${colSpan}"><hr/></td></tr>`).join('');
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

export function shuffleNewQuestion(targetted, newShuffledNumber) {
    let shuffledNumber = newShuffledNumber;
    if(document.getElementById('shuffledNumber') && document.getElementById('shuffledNumber').value) {
      shuffledNumber = document.getElementById('shuffledNumber').value.split(',');
    }
  const [first, ...rest]  = [...shuffledNumber];
  const input = [targetted, first];
  document.getElementById('firstNumGen').innerHTML = input[0];
  document.getElementById('secondNumGen').innerHTML = input[1];
  document.getElementById('shuffledNumber').value = [rest, first].join(',');
  return;  
}

export function populateNewQuestion(randomNumber, secondRandomNumber) {
  if(document.getElementById('operations').value === 'subtraction') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    document.getElementById('firstNumGen').innerHTML = input[1];
    document.getElementById('secondNumGen').innerHTML = input[0];
    return;
  }
  if(document.getElementById('operations').value === 'division') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    document.getElementById('firstNumGen').innerHTML = input[1] * input[0];
    document.getElementById('secondNumGen').innerHTML = input[0];
    return;
  }  

  if(document.getElementById('operations').value === 'junior_addition') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    const image = getRandomImage();
    document.getElementById('firstNumGraph').innerHTML = getFirstOperand(randomNumber, image);
    document.getElementById('secondNumGraph').innerHTML = getFirstOperand(secondRandomNumber, image);
    document.getElementById('firstNumGen').innerHTML = randomNumber;
    document.getElementById('secondNumGen').innerHTML = secondRandomNumber;
      return;
  }
  if(document.getElementById('operations').value === 'junior_counting') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    const image = getRandomImage();
    document.getElementById('firstNumGraph').innerHTML = getFirstOperand(randomNumber, image);
    document.getElementById('secondNumGraph').innerHTML = getFirstOperand(0, image);
    document.getElementById('firstNumGen').innerHTML = randomNumber;
    document.getElementById('secondNumGen').innerHTML = 0;
      return;
  }

  if(document.getElementById('operations').value === 'junior_multiplication') {
    const input = [randomNumber, secondRandomNumber];
    input.sort((a,b) => (a-b));
    const image = getRandomImage();
    document.getElementById('firstNumGraph').innerHTML = getMultiplicationOperand(randomNumber, secondRandomNumber, image);
    //document.getElementById('secondNumGraph').innerHTML = getFirstOperand(secondRandomNumber);
    document.getElementById('firstNumGen').innerHTML = randomNumber;
    document.getElementById('secondNumGen').innerHTML = secondRandomNumber;
      return;
  }
  if(document.getElementById('operations').value === 'junior_subtraction') {
    const input = [randomNumber, secondRandomNumber];
    const firstNum = input[0] >= input[1] ? input[0]:input[1];
    const secondNum = input[0] < input[1] ? input[0]:input[1];
    // document.getElementById('firstNumGen').innerHTML = firstNum;
    // document.getElementById('secondNumGen').innerHTML = secondNum;
    const image = getRandomImage();
    document.getElementById('firstNumGraph').innerHTML = getFirstOperand(firstNum, image);
    document.getElementById('secondNumGraph').innerHTML = getFirstOperand(secondNum, image);
    document.getElementById('firstNumGen').innerHTML = firstNum;
    document.getElementById('secondNumGen').innerHTML = secondNum;
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

function showSessionDetails(sessionName, elementId) {
  let practicedSession = JSON.parse(localStorage.getItem(sessionName));
  const failed = practicedSession.filter(q => !Evaluator.evaluateQuestion(q));
  failed.forEach(q => { q.expected = Evaluator.answer(q); });
  failed.sort((a,b) =>  (a.firstNum * a.secondNum) - (b.firstNum * b.secondNum));
  console.log(`failed  - ${failed}`);
  const result = failed.map( q => `${q.firstNum} ${q.operation} ${q.secondNum} = ${q.expected} --> <strike>${q.submittedAnswer}</strike>`).join('<br/>');
  document.getElementById(elementId).innerHTML = result;
  event.preventDefault();
  return result;
}


export function showConsolidatedSummary(summary, _tbody) {
  let containerTable = _tbody.parentNode;
  let id = _tbody.id

  containerTable.removeChild(_tbody);
  var table = document.createElement('tbody');
  table.id = id;
    
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

    if(summary.recentSessions) {
      const recentRow = table.insertRow(0);
      const cell = recentRow.insertCell(0);
      cell.innerHTML = `<b>recentSessions</b>`;
      let html = summary.recentSessions.map((e,i) => `<label id='failure_${i}' /><a href='#' onclick=javascript:App.uiOps.ui.showSessionDetails('${e.trim()}','failure_${i}');> ${e} </a>`).join('<br/>');
      recentRow.insertCell(1).innerHTML = html;
    }

    containerTable.appendChild(table);
}

const uiTools = { createQuestion, appendResult, populateNewQuestion, showConsolidatedSummary, showSessionDetails, shuffleNewQuestion };

export default uiTools;
