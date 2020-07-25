import Evaluator from './model/Evaluator';

const countBy = require('lodash/countBy');

export default function extractSessions(name, localStorage) {
  const sessions = Object.keys(localStorage).filter((i) => i.indexOf(`Practice_${name}@`) != -1);
  // console.log(`Sessions ${sessions}`)
  const pastSessions = sessions.map((t) => t.split('@'));

  const daysOfPractice = pastSessions.map((a) => Date.parse(a[1])).map((t) => { const date = new Date(); date.setTime(t); return date; });
  daysOfPractice.sort((t1, t2) => t1 - t2);

  const allAttemptedQuestions = sessions.map((session) => JSON.parse(localStorage[session]));
  const sucessfulQuestions = allAttemptedQuestions.map((qs) => qs.filter((q) => Evaluator.evaluateQuestion(q)));
  const failedQuestions = allAttemptedQuestions.map((qs) => qs.filter((q) => !Evaluator.evaluateQuestion(q)));
  let failedNumbers = failedQuestions.map((qs) => qs.map((q) => [q.firstNum, q.secondNum])).filter((q) => q.length > 0);
  let successfulNumbers = sucessfulQuestions.map((qs) => qs.map((q) => [q.firstNum, q.secondNum])).filter((q) => q.length > 0);

  failedNumbers = failedNumbers.flat().flat();
  successfulNumbers = successfulNumbers.flat().flat();

  const appreciation = {};
  appreciation.totalPracticeSessions = daysOfPractice.length;
  appreciation.failedQuestions = failedQuestions;
  appreciation.sucessfulQuestions = sucessfulQuestions;
  appreciation.allAttemptedQuestions = allAttemptedQuestions;
  appreciation.masteredNumbers = countBy(successfulNumbers);
  appreciation.prNumbers = countBy(failedNumbers);
  appreciation.totalQuestionsPracticed = allAttemptedQuestions.length;
  return appreciation;
}
