import Evaluator from './model/Evaluator';

const countBy = require('lodash/countBy');
const sortBy = require('lodash/sortBy');
const entries = require('lodash/entries');

export default function extractSessions(name, localStorage) {
  const sessions = Object.keys(localStorage).filter((i) => i.indexOf(`Practice_${name}@`) != -1);
  // console.log(`Sessions ${sessions}`)
  const pastSessions = sessions.map((t) => t.split('@'));

  const daysOfPractice = pastSessions.map((a) => Date.parse(a[1])).map((t) => { const date = new Date(); date.setTime(t); return date; });
  daysOfPractice.sort((t1, t2) => t1 - t2);

  const allAttemptedQuestions = sessions.map((session) => JSON.parse(localStorage[session])).flat();
  const sucessfulQuestions = allAttemptedQuestions.filter((q) => Evaluator.evaluateQuestion(q));
  const failedQuestions = allAttemptedQuestions.filter((q) => !Evaluator.evaluateQuestion(q));
  let failedNumbers = failedQuestions.map((q) => [q.firstNum, q.secondNum]);
  let successfulNumbers = sucessfulQuestions.map((q) => [q.firstNum, q.secondNum]);

  failedNumbers = failedNumbers.flat().flat();
  successfulNumbers = successfulNumbers.flat().flat();
  const practiceRequiredNumbers = countBy(failedNumbers);
  const masteredNumbers = countBy(successfulNumbers);
  const uniqueDaysOfPractice = Array.from(new Set(daysOfPractice.map((d) => d.toISOString().substring(0, 10))));

  const appreciation = {};
  appreciation.daysOfPractice = daysOfPractice;
  appreciation.failedQuestions = failedQuestions;
  appreciation.sucessfulQuestions = sucessfulQuestions;
  appreciation.allAttemptedQuestions = allAttemptedQuestions;
  appreciation.masteredNumbers = sortBy(entries(masteredNumbers), b => b[1]).reverse().join(': ');
  appreciation.practiceRequiredNumbers = sortBy(entries(practiceRequiredNumbers), b => b[1]).reverse().join(': ');
  appreciation.totalQuestionsPracticed = allAttemptedQuestions.length;
  appreciation.uniqueDaysOfPractice = uniqueDaysOfPractice.join(", ");
  appreciation.NumberOfUniqueDaysOfPractice = uniqueDaysOfPractice.length;
  appreciation.NumberOfSessions = sessions.length;
  appreciation.failedByOperation = countBy(failedQuestions, 'operation');
  appreciation.successByOperation = countBy(sucessfulQuestions, 'operation');
  appreciation.operationsBy = countBy(allAttemptedQuestions, 'operation');

  return appreciation;
}
