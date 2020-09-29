import Evaluator from './src/model/Evaluator.js';
import Session from './src/model/Session.js';

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

export function extractSessions2(name, localStorage) {
  let sessionKeys = Object.keys(localStorage).filter((i) => i.indexOf(`Practice_${name}@`) != -1);
  const sessions = sessionKeys.map(session => Session.createSession(session));
  sessions.sort((a,b) => a.dateTime.getTime() - b.dateTime.getTime() );
  return sessions;
}

export default function extractSessions(name, localStorage) {
  const sessions = extractSessions2(name, localStorage);

  const allAttemptedQuestions = sessions.map((session) => JSON.parse(localStorage[session.id])).flat();
  const sucessfulQuestions = allAttemptedQuestions.filter((q) => Evaluator.evaluateQuestion(q));
  const failedQuestions = allAttemptedQuestions.filter((q) => !Evaluator.evaluateQuestion(q));
  let failedNumbers = failedQuestions.map((q) => [q.firstNum, q.secondNum]);
  let successfulNumbers = sucessfulQuestions.map((q) => [q.firstNum, q.secondNum]);

  failedNumbers = failedNumbers.flat().flat();
  successfulNumbers = successfulNumbers.flat().flat();
  const practiceRequiredNumbers = countBy(failedNumbers);
  const masteredNumbers = countBy(successfulNumbers);
  const uniqueDaysOfPractice = new Set(sessions.map(s => s.dateInString))

  const appreciation = {};
  appreciation._failedQuestions = failedQuestions;
  appreciation._sucessfulQuestions = sucessfulQuestions;
  appreciation._allAttemptedQuestions = allAttemptedQuestions;
  appreciation.masteredNumbers = sortBy(entries(masteredNumbers), b => b[1]).reverse().join(': ');
  appreciation.practiceRequiredNumbers = sortBy(entries(practiceRequiredNumbers), b => b[1]).reverse().join(': ');
  appreciation.totalQuestionsPracticed = allAttemptedQuestions.length;
  appreciation.uniqueDaysOfPractice = uniqueDaysOfPractice
  appreciation.NumberOfSessions = sessions.length;
  appreciation.failedByOperation = countBy(failedQuestions, 'operation');
  appreciation.successByOperation = countBy(sucessfulQuestions, 'operation');
  appreciation.operationsBy = countBy(allAttemptedQuestions, 'operation');
  appreciation.sessions = sessions; // sessions.slice(0, recentDays);
  appreciation.studentId = name;

  return appreciation;
}