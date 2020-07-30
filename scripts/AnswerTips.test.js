import * as fc from "fast-check";
import explanation from './model/AnswerTips';

test("Multiplication tips should contain line break!", () => {
  fc.assert(
    fc.property( fc.tuple(fc.integer(11, 26), fc.integer(15, 26)), (inputs) => {
      inputs.sort((x, y) => x - y);
      const tips = explanation('multiplication', inputs);
      console.log(`Actual tips ${tips}`);
      expect(tips).stringContaining('<br>');
      //expect(tips).stringContainer('10');
    })
  , {verbose: true});
});
