import * as fs from "fs";
import extractSessions, {getResult, extractSessions2} from '../tools/analyze.js';
import  {
  entries, uniq, has
} from "lodash";

test("Analyze the Oct-2 Datewise Sumary", () => {
  const string = fs.readFileSync("Practice_Kavin_20201002.json").toString();
  let localStorage = JSON.parse(string);
  let report = extractSessions("Kavin", localStorage);
  expect([report.earilest, report.latest]).toStrictEqual([
    "2020-07-17",
    "2020-09-24",
  ]);

    let questions = report._allAttemptedQuestions
    expect(questions[0].dateInString).toStrictEqual('2020-07-17')
    expect(questions[questions.length - 1].dateInString).toStrictEqual("2020-09-24");

  let datewiseReport = report.getReportByDate("2020-08-21", "2020-09-24");
  expect(Object.keys(datewiseReport)).toStrictEqual([
    "2020-08-21",
    "2020-08-23",
    "2020-08-24",
    "2020-08-25",
    "2020-09-24",
  ]);
  expect(datewiseReport['2020-08-25']).toStrictEqual({
    '+': 0,
    division: 70,
    multiplication: 166,
  });


  expect(Object.keys(datewiseReport)[1]).toStrictEqual('2020-08-23');



});


test("Analyze the Datewise Sumary", () => {
  const string = fs.readFileSync("Practice_Kavin_2020.json").toString();
  let localStorage = JSON.parse(string);
  let report = extractSessions("Kavin", localStorage);
  let datewiseReport = report.getReportByDate("2020-09-21", "2020-09-25");
  expect(Object.keys(datewiseReport)).toStrictEqual([
    "2020-09-21",
    "2020-09-22",
    "2020-09-23",
    "2020-09-24",
    "2020-09-25",
  ]);
  expect(datewiseReport['2020-09-21']).toStrictEqual({
    cube: 0,
    multiplication: 115,
    square: 15,
  });
  expect(datewiseReport["2020-09-25"]).toStrictEqual({
    cube: 0,
    multiplication: 0,
    square: 18,
  });


  expect(Object.keys(datewiseReport)[1]).toStrictEqual('2020-09-22');
  expect(Object.values(datewiseReport)[1]).toStrictEqual({
    cube: 0,
    multiplication: 245,
    square: 18,
  });

});


test("Analyze the Summary", () => {
  const string = fs.readFileSync("Practice_Kavin_2020.json").toString();
  let localStorage = JSON.parse(string);
  let report = extractSessions("Kavin", localStorage);
  expect(report.getSummaryFor("2020-09-29")).toStrictEqual({
    multiplication: 134,
    square: 19,
  });
  expect(report.getSummaryBetween("2020-09-29", "2020-09-29")).toStrictEqual({
    multiplication: 134,
    square: 19,
  });
  expect(report.getSummaryBetween("2020-09-20", "2020-09-29")).toStrictEqual(
    {
      multiplication: 1483,
      square: 187,
      cube: 1,
    }
  );
})

test("Analyze the Question", () => {
  const string = fs.readFileSync('Practice_Kavin_2020.json').toString();
  let localStorage = JSON.parse(string);
  let report = extractSessions("Kavin", localStorage);
  expect(report._allAttemptedQuestions.length).toBe(7986);
  //expect(report._allAttemptedQuestions[7985]).toBe({});
  expect(report._allAttemptedQuestions[7985].dateInString).toBe('2020-09-29');
  expect(report.getQuestionsFor("2020-09-29")[0].operation).toBe('square');
});

test("Analyze the session", () => {
  const string = fs.readFileSync("Practice_Kavin_2020.json").toString();
  let localStorage = JSON.parse(string);
  let report = extractSessions("Kavin", localStorage);
  expect(report.sessions[1].dateInString).toBe("2020-08-06");
  expect(report.sessions[report.sessions.length - 1].dateInString).toBe(
    "2020-09-29"
  );
  expect(report.sessions[1].getTime).toBe(1596694600654);
  expect(report.sessions[1].student).toBe("Kavin");
  expect(report.getSessionsFor("2020-09-29").length).toBe(8);
  
  expect(Object.keys(report.operationsBy)).toStrictEqual([
    "division",
    "multiplication",
    "square",
    "cube",
  ]);
  expect(Object.values(report.operationsBy)).toStrictEqual([
    1654,
    6048,
    282,
    2,
  ]);
});
