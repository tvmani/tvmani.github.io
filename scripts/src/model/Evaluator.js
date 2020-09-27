/* eslint-disable arrow-parens */
const partition = require("lodash/fp/partition");
const groupBy = require("lodash/fp/groupBy");

function countBy(input) {
  const a = input.reduce((acc, curr) => {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  return a;
};


const operations = {
  '+': (a, b) => {
  let answer =  a + b;
    console.log(`Lambda answer ${answer}`)
    return answer
  },
  'x': (a, b) => a * b,
  'X': (a, b) => a * b,
  'square': (a, b) => a * a,
  'cube': (a, b) => a * a * a,
  '/': (a, b) => a / b,
  '-': (a, b) => a - b,
  junior_addition: (a, b) => a + b,
  junior_counting: (a, b) => a,
  junior_subtraction: (a, b) => a - b,
  junior_multiplication: (a, b) => a * b,
  addition: (a, b) => a + b,
  multiplication: (a, b) => a * b,
  subtraction: (a, b) => a - b,
  division: (a, b) => a / b,
  square: (a) => a * a,
  cube: (a) => a * a * a,
  squareroot: (a) => Math.sqrt(a),
  cuberoot: (a) => Math.cbrt(a),
};

export default class Evaluator {
  constructor(name) {
    this.name = name;
  }

  static answer(question) {
    console.log(question);
    let func = operations[question.operation];
    if(func == null)
      func = operations[question.operation.mathFunction];
    return func(question.firstNum, question.secondNum);
  }

  static evaluateQuestion(question) {
    let func = operations[question.operation];
    if(func == null)
      func = operations[question.operation.mathFunction];
    return Math.abs(func(question.firstNum, question.secondNum) - question.submittedAnswer) < 0.1;
  }

  static analyze([...questions]) {
    questions.forEach((q) => {
      // eslint-disable-next-line no-param-reassign
      q.result = operations[q.operation](q.firstNum, q.secondNum) === q.submittedAnswer;
    });
    let groupByOperations = groupBy(q => q.operation, questions);
    console.log('1......' + JSON.stringify(groupByOperations));
    let groupByOperationsNumbers =groupByOperations.map(results => partition(q => q.result, results));
    return groupByOperationsNumbers;
  }

  static evaluate([...questions]) {
    const filteredWins = questions
      .filter((q) => q.operation === 'multiplication')
      .filter((q) => q.firstNum * q.secondNum === q.submittedAnswer)
      .map((q) => [q.firstNum, q.secondNum]);

    const wins = (typeof filteredWins !== 'undefined') ? [].concat.apply([], filteredWins) : [];

    const filteredNeedPractice = questions
      .filter((q) => q.operation === 'multiplication')
      .filter((q) => q.firstNum * q.secondNum !== q.submittedAnswer)
      .map((q) => [q.firstNum, q.secondNum]);

    const needPractice = (typeof filteredNeedPractice !== 'undefined') ? [].concat.apply([], filteredNeedPractice) : [];

    const summary = {
      wins: countBy(wins),
      needPractice: countBy(needPractice),
    };
    return summary;
  }
}