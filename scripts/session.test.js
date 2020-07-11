const { json } = require('fast-check');
const { PracticeSession, Question, Evaluator } = require('./session');

const ps = new PracticeSession();
const evaluator = new Evaluator();

test('adds 1 + 2 to equal 3', () => {
  const pss = new PracticeSession();
  const question = new Question(10, 20, 'multiplication', 200, new Date());
  pss.submitQuestion(question);
  const qs = pss.getQuestions;
  const summary = evaluator.evaluate(qs);
  expect(summary.wins['10']).toBe(1);
  expect(summary.wins['20']).toBe(1);
  expect(summary.needPractice).toMatchObject({});
});
