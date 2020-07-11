const { Random } = require('./random');

const rand = new Random();

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false,
    };
  },
});

test('Random number should be within boundry', () => {
  expect(Random.getRandomIntInclusive(3, 7)).toBeWithinRange(3, 7);
});

test('Random number should be within boundry', () => {
  const answer = Random.getRandomIntInclusiveWithExceptions(3, 7, [6]);
  expect(answer).toBeWithinRange(3, 7);
  expect(answer).not.toBe(6);
});

test('Random number should be within boundry', () => {
  const answer = Random.getRandomIntInclusiveWithExceptions(2, 17, [4, 5]);
  expect(answer).toBeWithinRange(2, 17);
});
