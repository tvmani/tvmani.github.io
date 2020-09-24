import Evaluator from './model/Evaluator';

const countBy = require('lodash/countBy');
const sortBy = require('lodash/sortBy');
const entries = require('lodash/entries');
const groupBy = require('lodash/groupBy');


export function getResult(day, application, localStorage) {
  

  const sessions = application.recentSessions.filter((i) => i.indexOf(day) != -1);
  const allAttemptedQuestions = sessions.map((session) =>  JSON.parse(localStorage[session])).flat();

  const results = groupBy(allAttemptedQuestions, q => q.operation);
  const summary = {};
  summary['date'] = day;
  Object.keys(results).forEach( (operations) => {
    summary[operations] = {};
    summary[operations].valid = results[operations].filter(q => Evaluator.evaluateQuestion(q) === true).length;
    summary[operations].inValid = results[operations].filter(q => Evaluator.evaluateQuestion(q) !== true).length;
  });

  return summary;
}

export default function extractSessions(name, localStorage, recentDays=60) {
  let sessions = Object.keys(localStorage).filter((i) => i.indexOf(`Practice_${name}@`) != -1);
  const today = (new Date()).getTime();
  const oneDay = 1000 * 3600 * 24;
  const daysDifference = oneDay * recentDays;

  sessions = sessions.filter((a) => (today - (new Date(a.split('@')[1])).getTime()) <= daysDifference )
  sessions.sort((a,b) => new Date(b.split('@')[1]) - new Date(a.split('@')[1]) );

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
  appreciation._failedQuestions = failedQuestions;
  appreciation._sucessfulQuestions = sucessfulQuestions;
  appreciation._allAttemptedQuestions = allAttemptedQuestions;
  appreciation.masteredNumbers = sortBy(entries(masteredNumbers), b => b[1]).reverse().join(': ');
  appreciation.practiceRequiredNumbers = sortBy(entries(practiceRequiredNumbers), b => b[1]).reverse().join(': ');
  appreciation.totalQuestionsPracticed = allAttemptedQuestions.length;
  appreciation.uniqueDaysOfPractice = uniqueDaysOfPractice.join(", ");
  appreciation.NumberOfUniqueDaysOfPractice = uniqueDaysOfPractice.length;
  appreciation.NumberOfSessions = sessions.length;
  appreciation.failedByOperation = countBy(failedQuestions, 'operation');
  appreciation.successByOperation = countBy(sucessfulQuestions, 'operation');
  appreciation.operationsBy = countBy(allAttemptedQuestions, 'operation');
  appreciation.recentSessions = sessions; // sessions.slice(0, recentDays);
  appreciation.studentId = name;

  return appreciation;
}