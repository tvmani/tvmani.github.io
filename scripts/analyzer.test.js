import * as fs from "fs";
import Evaluator from "./model/Evaluator";
import extractSessions, {getResult} from './analyze';

// expect.extend({
//   toBeWithinRange(received, floor, ceiling) {
//     const pass = received >= floor && received <= ceiling;
//     if (pass) {
//       return {
//         message: () =>
//           `expected ${received} not to be within range ${floor} - ${ceiling}`,
//         pass: true,
//       };
//     }
//     return {
//       message: () =>
//         `expected ${received} to be within range ${floor} - ${ceiling}`,
//       pass: false,
//     };
//   },
// });

// test("Random number should be within boundry", () => {
//   expect(Random.getRandomIntInclusive(3, 7)).toBeWithinRange(3, 7);
// });

// test("Random number should be within boundry", () => {
//   const answer = Random.getRandomIntInclusiveWithExceptions(3, 7, [6]);
//   expect(answer).toBeWithinRange(3, 7);
//   expect(answer).not.toBe(6);
// });

// test("Random number should be within boundry", () => {
//   const answer = Random.getRandomIntInclusiveWithExceptions(2, 17, [4, 5]);
//   expect(answer).toBeWithinRange(2, 17);
// });

// test("Random number should not be out of boundry", () => {
//   fc.assert(
//     fc.property(fc.integer(1,12), fc.integer(1,12), (a, b) => {
//       const answer = Random.getRandomIntInclusiveWithExceptions(a, b, [10]);
//       expect(answer).not.toBe(100);

//     })
//   );
// });

test("Analyze the submission", () => {
  const string = fs.readFileSync('sample_questions.json').toString();
  let localStorage = JSON.parse(string);
  let result = extractSessions("Kavin", localStorage);
  // console.log(`Result returned ${result}` );
  expect(result.uniqueDaysOfPractice).toBe("2020-07-17, 2020-07-19, 2020-07-20, 2020-07-21, 2020-07-23, 2020-07-24, 2020-07-25, 2020-08-16");
  expect(result.totalQuestionsPracticed).toBeGreaterThan(112);
  let expectedResult = {
    "date": "2020-07-20",
    "division": {
      "valid": 141,
      "inValid": 22
    },
    "multiplication": {
      "valid": 132,
      "inValid": 4
    }
  }

  expect(getResult('2020-07-20', result, localStorage)).toStrictEqual(expectedResult);
  let state = result.uniqueDaysOfPractice.split(', ').map(date => getResult(date, result, localStorage));
  console.log(`state - ${JSON.stringify(state,null,2)}`);


});
