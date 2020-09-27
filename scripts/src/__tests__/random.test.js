import Random from "../tools/random.js";
import * as fc from "fast-check";

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    }
    return {
      message: () =>
        `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false,
    };
  },
});

test("Random number should be within boundry of 3 and 7", () => {
  expect(Random.getRandomIntInclusive(3, 7)).toBeWithinRange(3, 7);
});

test("Random number should be within boundry", () => {
  const answer = Random.getRandomIntInclusiveWithExceptions(3, 7, [6]);
  expect(answer).toBeWithinRange(3, 7);
  expect(answer).not.toBe(6);
});

test("Random number should be within boundry", () => {
  const answer = Random.getRandomIntInclusiveWithExceptions(2, 17, [4, 5]);
  expect(answer).toBeWithinRange(2, 17);
});

test("Random number should not be out of boundry", () => {
  fc.assert(
    fc.property(fc.integer(1,7), fc.integer(9,15), (a, b) => {
      const answer = Random.getRandomIntInclusiveWithExceptions(a, b, [ parseInt(10, 10) ]);
      expect(answer).not.toBe(100);
    })
  );
});

test("Random number should be within boundry", () => {
  fc.assert(
    fc.property( fc.tuple(fc.integer(2, 7), fc.integer(8, 15)), (inputs) => {
      inputs.sort((x, y) => x - y);
      const answer = Random.getRandomIntInclusiveWithExceptions(inputs[0], inputs[1], [10, 12]);
      expect(answer).not.toBe(10);
      expect(answer).toBeGreaterThan(1);
    })
  , {verbose: true});
});
