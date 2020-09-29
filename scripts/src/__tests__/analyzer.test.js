import * as fs from "fs";
import extractSessions, {getResult, extractSessions2} from '../../analyzer2.js';


test("Analyze the submission", () => {
  const string = fs.readFileSync('Practice_Kavin_2020.json').toString();
  let localStorage = JSON.parse(string);
  let report = extractSessions("Kavin", localStorage);
  expect(report.sessions[1].getTime).toBe(1596694600654);

  expect(report.sessions[1].student).toBe('Kavin');
  // console.log(`Result returned ${result}` );
  // expect(result.uniqueDaysOfPractice).toBe("2020-07-17, 2020-07-19, 2020-07-20, 2020-07-21, 2020-07-23, 2020-07-24, 2020-07-25, 2020-08-16");
  // expect(result.totalQuestionsPracticed).toBeGreaterThan(112);
  // let expectedResult = {
  //   "date": "2020-07-20",
  //   "division": {
  //     "valid": 141,
  //     "inValid": 22
  //   },
  //   "multiplication": {
  //     "valid": 132,
  //     "inValid": 4
  //   }
  // }

  // expect(extractSessions2('2020-07-20', result, localStorage)).toStrictEqual(expectedResult);
  // expect(getResult('2020-07-20', result, localStorage)).toStrictEqual(expectedResult);
  // let state = result.uniqueDaysOfPractice.split(', ').map(date => getResult(date, result, localStorage));
  // console.log(`state - ${JSON.stringify(state,null,2)}`);


});
