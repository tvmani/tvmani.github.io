import Random from "./random";
//import { shuffle } from 'lodash/shuffle';
const shuffle = require('lodash/shuffle');
const difference = require('lodash/difference');

export default class Generator {

  static getTwoNumbers(min, max, excludes) {
    const firstNum = Random.getRandomIntInclusiveWithExceptions(min, max, excludes);
    const secondNum = Random.getRandomIntInclusiveWithExceptions(min, max, excludes);
    return [firstNum, secondNum];
  }

  static isCommonBase(inputs) {
    let [firstNum, secondNum, ..._] = inputs;
    let firstOnes = firstNum % 10;
    let secondOnes = secondNum % 10;
    let firstTens = Math.floor(firstNum / 10);
    let secondTens = Math.floor(secondNum / 10);
    return ((firstOnes + secondOnes) % 10 == 0) && (firstTens === secondTens);
  }

  static getCommonBase10sComplement(min, max, excludes) {
    let firstNum = Random.getRandomIntInclusiveWithExceptions(min, max, excludes);
    let ones = firstNum % 10;
    let base = firstNum - ones
    let tensComplement = 10 - ones;
    let secondNum = base + tensComplement;
    return [firstNum, secondNum];
  }
}
