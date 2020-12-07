import Generator from "../generator";

function explainMultiplication([a, b, ...rest]) {
  const tens = Math.floor(b / 10) * 10;
  const ones = Math.floor(b % 10);
  const tensMultiples = tens * a;
  const onesMultiples = ones * a;
  const tensString = `${tens} x ${a} = ${tens * a}`;
  const onesString = `${ones} x ${a} = ${ones * a}`;
  const total = `${tensMultiples} + ${onesMultiples} = ${
    tensMultiples + onesMultiples
  }`;
  return ones != 0
    ? `${onesString}<br>${tensString}<br>${total}`
    : `${tensString}<br>${total}`;
}

function explainMultiplicationForCommonBase(inputs) {
  const [firstNum, secondNum, ..._] = inputs;
  const firstOnes = firstNum % 10;
  const secondOnes = secondNum % 10;
  const firstTens = Math.floor(firstNum / 10) * 10;
  const tensMultiple = firstTens * (firstTens + 10);
  const onesMultiple = firstOnes * secondOnes;
  const tensString = `${firstTens} x ${firstTens + 10} = ${tensMultiple}`;
  const onesString = `${firstOnes} x ${secondOnes} = ${onesMultiple}`;
  const total = `${tensString}<br/>${onesString}<br> ${tensMultiple} + ${onesMultiple} = ${
    inputs[0] * inputs[1]
  }`;
  return total;
}

function padWithLeadingZero(number, n) {
  if(n === null || n === undefined) return (number + '').padStart(2, 0);
  return (number + '').padStart(n, 0);
}

function explainMultiplicationForSameTens(inputs) {
  const [firstNum, secondNum, ..._] = inputs;
  const firstOnes = firstNum % 10;
  const secondOnes = secondNum % 10;
  const firstTens = Math.floor(firstNum / 10) * 10;
  const secondTens = (Math.floor(firstNum / 10) * 10) + (firstOnes + secondOnes);
  const tensMultiple = firstTens * secondTens;
  const onesMultiple = firstOnes * secondOnes;
  const tensString = `${firstTens} x ${secondTens} = ${tensMultiple}`;
  const onesString = `${padWithLeadingZero(firstOnes)} x ${padWithLeadingZero(secondOnes)} = ${onesMultiple}`;
  const total = `${tensString}<br/>${onesString}<br> ${tensMultiple} + ${onesMultiple} = ${
    inputs[0] * inputs[1]
  }`;
  return total;
}
function explainNumberEndsWith9(inputs) {
  const [firstNum, secondNum, ..._] = inputs;
  let firstTens = Math.floor(firstNum / 10) + 1;
  let secondTens = Math.floor(secondNum / 10)  + 1;
  firstTens = firstTens*10;
  secondTens = secondTens*10;
  let majorNumber = firstTens * secondTens;
  let minorNumber = firstTens + secondTens;
  let nearestAnswer = majorNumber - minorNumber;
  let supportString = "(major - minor) + 1<br/>"
  supportString += `${firstTens} x ${secondTens} = ${majorNumber} is major number nearest to answer<br/>`;
  supportString += `${firstTens} + ${secondTens} = ${minorNumber} is minor number that needs to be subtracted from Major number<br/>`;
  supportString += `${majorNumber} - ${minorNumber} = ${nearestAnswer}<br/>`;
  supportString += `${nearestAnswer} + 1`;
  return supportString;

}

function explainNumberEndsWith1(inputs) {
  const [firstNum, secondNum, ..._] = inputs;
  let firstTens = Math.floor(firstNum / 10) + 1;
  let secondTens = Math.floor(secondNum / 10)  + 1;
  firstTens = firstTens*10;
  secondTens = secondTens*10;
  let majorNumber = firstTens * secondTens;
  let minorNumber = firstTens + secondTens;
  let nearestAnswer = majorNumber - minorNumber;
  let supportString = "(major + minor) + 1<br/>"
  supportString += `${firstTens} x ${secondTens} = ${majorNumber} is major number nearest to answer<br/>`;
  supportString += `${firstTens} + ${secondTens} = ${minorNumber} is minor number that needs to be added to Major number<br/>`;
  supportString += `${majorNumber} + ${minorNumber} = ${nearestAnswer}<br/>`;
  supportString += `${nearestAnswer} + 1`;
  return supportString;

}

function explainNumberEndsWith5(inputs) {
  const [firstNum, secondNum, ..._] = inputs;
  const firstTens = Math.floor(firstNum / 10);
  const secondTens = Math.floor(secondNum / 10);
  const carryOver = Math.floor((firstTens + secondTens) / 2);
  const mostSigPart = firstTens * secondTens + carryOver;

  let leastSigPart = "25";
  let supportString = `(${firstTens} + ${secondTens}) is even, hence 25<br/>`;
  if ((firstTens + secondTens) % 2 != 0) {
    leastSigPart = "75";
    supportString = `(${firstTens} + ${secondTens}) is Odd, hence 75<br/>`;
  }

  const tensString = `(${firstTens} x ${secondTens}) + (${firstTens} + ${secondTens})/2 = ${mostSigPart}<br>
  ${supportString}
  ${mostSigPart}`;
  const total = `${tensString} and ${leastSigPart} = ${
    inputs[0] * inputs[1]
  }`;
  return total;
}

export default function explanation(mathOperations, inputs) {
  const numbers = [...inputs];
  numbers.sort((a, b) => a - b);
  if (mathOperations === "multiplication") {
    if (Generator.isCommonBase(inputs)) {
      return explainMultiplicationForCommonBase(numbers);
    } 
    if (Generator.isSameTens(inputs)) {
      return explainMultiplicationForSameTens(numbers);
    }
    if (Generator.isEndsIn5(inputs)) {
      return explainNumberEndsWith5(numbers);
    }
    if (Generator.isEndsIn9(inputs)) {
      return explainNumberEndsWith9(numbers);
    }
    if (Generator.isEndsIn1(inputs)) {
      return explainNumberEndsWith1(numbers);
    }
    if (numbers[1] > 10 && numbers[0] < 10) {
      return explainMultiplication(numbers);
    }
    if (numbers[1] > 10 && numbers[0] > 10) {
      return explainMultiplication([numbers[1], numbers[0]]);
    }
  }
  return "";
}
