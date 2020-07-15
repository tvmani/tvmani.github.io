import Random from "./random";
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

test("Random number should be within boundry", () => {
  fc.assert(
    fc.property( fc.tuple(fc.integer(1, 12), fc.integer(1, 12)), (data) => {
      const inputs = [data[0], data[1]];
      inputs.sort((x, y) => x - y);
      const answer = Random.getRandomIntInclusiveWithExceptions(inputs[0], inputs[1], [10, 6]);
      console.log(`Inputs: ${inputs}, Generate number is ${answer}`);
      expect(answer).not.toBe(10);
    })
  );
});
