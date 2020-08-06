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

  static isSameTens(inputs) {
    let [firstNum, secondNum, ..._] = inputs;
    let firstOnes = firstNum % 10;
    let secondOnes = secondNum % 10;
    let firstTens = Math.floor(firstNum / 10);
    let secondTens = Math.floor(secondNum / 10);
    return ((firstOnes + secondOnes) % 10 !== 0) && (firstTens === secondTens);
  }


  static isEndsIn5(inputs) {
    let [firstNum, secondNum, ..._] = inputs;
    let firstOnes = firstNum % 10;
    let secondOnes = secondNum % 10;
    return (firstOnes === secondOnes) && (firstOnes === 5);
  }  

  static getCommonBase10sComplement(min, max, excludes) {
    let firstNum = Random.getRandomIntInclusiveWithExceptions(min, max, excludes);
    let ones = firstNum % 10;
    let base = firstNum - ones
    let tensComplement = 10 - ones;
    let secondNum = base + tensComplement;
    return [firstNum, secondNum];
  }

  static getJunior5s(min, max, excludes) {
    return [5, Random.getRandomIntInclusive(1, 9)];
  }


  static getSameTens(min, max, excludes) {
    const firstNum = Random.getRandomIntInclusiveWithExceptions(min, max, excludes);
    const ones = Random.getRandomIntInclusive(1, 9);
    const base = Math.floor(firstNum / 10);
    const secondNum = (base * 10) + ones;
    return [firstNum, secondNum];
  }

  

  static getNumberEndsWith5(min, max, excludes) {
    const firstNum = Random.getRandomIntInclusiveWithExceptions(min, max, excludes);
    const secondNum = Random.getRandomIntInclusiveWithExceptions(min, max, [firstNum, ...excludes]);
    return [(firstNum * 10) + 5, (secondNum * 10) + 5];
  }



}