class PracticeSession {
  constructor(name) {
    let sid = new Date().toISOString();
    sid = `Practice_${name}@${sid}`;
    this.sid = sid;
    this.questions = [];
  }

  // Getter
  get length() {
    console.log('test');
    return this.questions.length;
  }

  get getQuestions() {
    const qs = this.questions;
    return [...qs];
  }

  getQuestion(index) {
    return this.questions[index];
  }

  submitQuestion(question) {
    this.questions.push(question);
    console.log('test');
  }
}

class Question {
  constructor(firstNum, secondNum, operation, submittedAnswer, submissionTime) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    this.operation = operation;
    this.submittedAnswer = submittedAnswer;
    this.submissionTime = submissionTime;
  }
}

class Evaluator {
  constructor() {}

  evaluate([...questions]) {
    const _wins = questions
      .filter((q) => q.operation === 'multiplication')
      .filter((q) => q.firstNum * q.secondNum == q.submittedAnswer)
      .map((q) => [q.firstNum, q.secondNum]);

    const wins = (typeof _wins !== 'undefined') ? [].concat.apply([], _wins) : [];

    const _needPractice = questions
      .filter((q) => q.operation === 'multiplication')
      .filter((q) => q.firstNum * q.secondNum !== q.submittedAnswer)
      .map((q) => [q.firstNum, q.secondNum]);

    const needPractice = (typeof _needPractice !== 'undefined') ? [].concat.apply([], _needPractice) : [];

    const summary = {
      wins: countBy(wins),
      needPractice: countBy(needPractice),
    };
    console.log(`Result${JSON.stringify(summary)}`);
    return summary;
  }
}

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
}

module.exports = { PracticeSession, Question, Evaluator };
