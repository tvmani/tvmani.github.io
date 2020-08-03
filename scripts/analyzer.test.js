import * as fs from "fs";
import Evaluator from "./model/Evaluator";
import extractSessions from './analyze';

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
  console.log(`Result returned ${result}` );
  expect(result.totalQuestionsPracticed).toBeGreaterThan(112);
  // expect(result.totalPracticeSessions).toBeGreaterThan(112);
  
  //expect(questions.length).toBeGreaterThan(27);
  //console.log(JSON.stringify(Evaluator.analyze(questions), 2, null));

});
