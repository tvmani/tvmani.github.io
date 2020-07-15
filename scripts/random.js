//import { shuffle } from 'lodash/fp/shuffle';
const shuffle = require('lodash/fp/shuffle');

export default class Random {
  /**
   * Credit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * @param {*} min
   * @param {*} max
   */
  static getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
  }

  suffle

  static getRandomIntInclusiveWithExceptions(min, max, ...excludes) {
    let generated = Array.from(Array(max - min).keys()).map(i => i + min).filter(i => excludes.indexOf(i)!=-1);
    let unique = new Set(generated);
    excludes.forEach(k => unique.delete(k));
    return shuffle(Array.from(unique))[0];
  }
}