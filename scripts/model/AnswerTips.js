import Generator from "../generator";

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
    inputs[0] * inputs[1]}`;
  return total;
}

export default function explanation(mathOperations, inputs) {
  const numbers = [...inputs];
  numbers.sort((a, b) => a - b);
  if (mathOperations === 'multiplication') {
    if(Generator.isCommonBase(inputs)) {
      return explainMultiplicationForCommonBase(numbers);
    }
    if (numbers[1] > 10 && numbers[0] < 10) {
      return explainMultiplication(numbers);
    } if (numbers[1] > 10 && numbers[0] > 10) {
      return explainMultiplication([numbers[1], numbers[0]]);
    }
  }
  return '';
}

