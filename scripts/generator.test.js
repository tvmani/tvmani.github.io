import Generator from "./generator";
import * as fc from "fast-check";

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

// test("Random number should be within boundry of 3 and 7", () => {
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
//     fc.property(fc.integer(1,7), fc.integer(9,15), (a, b) => {
//       const answer = Random.getRandomIntInclusiveWithExceptions(a, b, [ parseInt(10, 10) ]);
//       expect(answer).not.toBe(100);
//     })
//   );
// });

test("getCommonBase10sComplement one's position should complement", () => {
  fc.assert(
    fc.property( fc.tuple(fc.integer(11, 53), fc.integer(55, 59)), (inputs) => {
      inputs.sort((x, y) => x - y);
      console.log(`inputs - ${inputs}`)
      const answer = Generator.getCommonBase10sComplement(inputs[0], inputs[1], [10, 12]);
      answer.sort((x,y) => x-y)
      expect(answer[1]).toBeGreaterThanOrEqual(answer[0]);
    })
  , {verbose: true});
});

test("Should generate two numbers", () => {
  fc.assert(
    fc.property( fc.tuple(fc.integer(11, 53), fc.integer(55, 59)), (inputs) => {
      inputs.sort((x, y) => x - y);
      //console.log(`inputs - ${inputs}`)
      const answer = Generator.getTwoNumbers(inputs[0], inputs[1], [10, 12]);
      answer.sort((x,y) => x-y)
      expect(answer[1]).toBeGreaterThanOrEqual(answer[0]);
    })
  , {verbose: true});
});


test("Should generate two numbers", () => {
  expect(Generator.isCommonBase([55,55])).toBe(true);
  expect(Generator.isCommonBase([58,52])).toBe(true);
  expect(Generator.isCommonBase([23,27])).toBe(true);
  expect(Generator.isCommonBase([23,26])).toBe(false);
});
