import Evaluator from "../model/Evaluator.js";
import Session from "../model/Session.js";
import Question from "../model/Question.js";
import { entries, uniq, has, countBy, groupBy, fromPairs } from "lodash";

export function getResult(day, application, localStorage) {
  const sessions = application.recentSessions.filter(
    (i) => i.indexOf(day) != -1
  );
  const allAttemptedQuestions = sessions
    .map((session) => JSON.parse(localStorage[session.id]))
    .flat()
    .map((q) => Question.fromJson(q));

  const results = groupBy(allAttemptedQuestions, (q) => q.operation);
  const summary = {};
  summary["date"] = day;
  Object.keys(results).forEach((operations) => {
    summary[operations] = {};
    summary[operations].valid = results[operations].filter(
      (q) => Evaluator.evaluateQuestion(q) === true
    ).length;
    summary[operations].inValid = results[operations].filter(
      (q) => Evaluator.evaluateQuestion(q) !== true
    ).length;
  });

  return summary;
}

export function extractSessions2(name, localStorage) {
  let sessionKeys = Object.keys(localStorage).filter(
    (i) => i.indexOf(`Practice_${name}@`) != -1
  );
  const sessions = sessionKeys.map((session) => Session.createSession(session));
  sessions.sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
  return sessions;
}

function findSessionFor(date, sessions) {
  return sessions.filter((session) => session.dateInString === date);
}

export default function extractSessions(name, localStorage) {
  const sessions = extractSessions2(name, localStorage);

  const allAttemptedQuestions = sessions
    .map((session) => JSON.parse(localStorage[session.id]))
    .flat()
    .map((q) => Question.fromJson(q));
  const sucessfulQuestions = allAttemptedQuestions.filter((q) =>
    Evaluator.evaluateQuestion(q)
  );
  const failedQuestions = allAttemptedQuestions.filter(
    (q) => !Evaluator.evaluateQuestion(q)
  );
  let failedNumbers = failedQuestions.map((q) => [q.firstNum, q.secondNum]);
  let successfulNumbers = sucessfulQuestions.map((q) => [
    q.firstNum,
    q.secondNum,
  ]);

  const uniqueDaysOfPractice = new Set(sessions.map((s) => s.dateInString));

  const appreciation = {};
  appreciation._failedQuestions = failedQuestions;
  appreciation._sucessfulQuestions = sucessfulQuestions;
  appreciation._allAttemptedQuestions = allAttemptedQuestions;
  appreciation.totalQuestionsPracticed = allAttemptedQuestions.length;
  appreciation.uniqueDaysOfPractice = uniqueDaysOfPractice;
  appreciation.NumberOfSessions = sessions.length;
  appreciation.failedByOperation = countBy(failedQuestions, "operation");
  appreciation.successByOperation = countBy(sucessfulQuestions, "operation");
  appreciation.operationsBy = countBy(allAttemptedQuestions, "operation");
  appreciation.sessions = sessions; // sessions.slice(0, recentDays);
  appreciation.studentId = name;
  appreciation.latest = sessions[sessions.length - 1].dateInString;
  appreciation.earilest = sessions[0].dateInString;
  appreciation.getSessionsFor = function getSessionsFor(date) {
    return sessions.filter((session) => session.dateInString === date);
  };

  appreciation.getQuestionsFor = (date) => {
    return allAttemptedQuestions.filter((q) => q.dateInString === date);
  };

  appreciation.getSummaryFor = (date) => {
    return countBy(
      allAttemptedQuestions.filter((q) => q.dateInString === date),
      "operation"
    );
  };

  
  appreciation.getSummaryForToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return countBy(
      allAttemptedQuestions.filter((q) => q.dateInString === today),
      "operation"
    );
  };
  

  appreciation.getSummaryBetween = (from, to) => {
    const f = new Date(from);
    f.setHours(0, 0, 0, 0);
    const t = new Date(to);
    t.setHours(23, 59, 59, 999);

    return countBy(
      allAttemptedQuestions.filter(
        (q) =>
          q.submissionTime.getTime() >= f.getTime() &&
          q.submissionTime.getTime() <= t.getTime()
      ),
      "operation"
    );
  };

  appreciation.getReportByDate = (from, to) => {
    const f = new Date(from);
    f.setHours(0, 0, 0, 0);
    const t = new Date(to);
    t.setHours(23, 59, 59, 999);

    
    
    let questions = allAttemptedQuestions
      .filter(
        (q) =>
          q.submissionTime.getTime() >= f.getTime() &&
          q.submissionTime.getTime() <= t.getTime()
      );
    let dateResultPairs =  entries(groupBy(questions, (q) => q.dateInString)).map((kv) => [
      kv[0],
      countBy(kv[1], 'operation'),
    ]);

  let datewiseReport = fromPairs(dateResultPairs);

  let uniqueOperations = uniq(
    Object.values(datewiseReport)
      .map((o) => Object.keys(o))
      .flat()
  );

  //We populate attribute value for every date, 
  // if absent for a date, its value shoule be populated as zero to plot graph
  Object.values(datewiseReport).forEach((o) => {
    uniqueOperations
      .filter((ops) => !has(o, ops))
      .forEach((ops) => (o[ops] = 0));
  });    
    
  return datewiseReport;

  };





  return appreciation;
}
