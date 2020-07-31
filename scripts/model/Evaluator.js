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
  junior_addition: (a, b) => a + b,
  addition: (a, b) => a + b,
  multiplication: (a, b) => a * b,
  subtraction: (a, b) => a - b,
  division: (a, b) => a / b,
};

export default class Evaluator {
  constructor(name) {
    this.name = name;
  }

  static answer(question) {
    const func = operations[question.operation];
    return func(question.firstNum, question.secondNum);
  }

  static evaluateQuestion(question) {
    const func = operations[question.operation];
    return func(question.firstNum, question.secondNum) === question.submittedAnswer;
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
      .filter((q) => q.firstNum * q.secondNum == q.submittedAnswer)
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