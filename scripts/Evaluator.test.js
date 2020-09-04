import Evaluator from "./model/Evaluator";
import * as fc from "fast-check";
import Random from "./random";

const question = {
  operation: 'addition',
  firstNum: 1,
  secondNum: 2,
  submittedAnswer: 3,
};

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test("Evaulation should resolve for simple addition", () => {
  fc.assert(
    fc.property(fc.tuple(fc.integer(1, 9), fc.integer(11, 19)), (inputs) => {
      expect(Evaluator.evaluateQuestion(question)).toBe(true);
    })
  , {verbose: true});
});
