//import { shuffle } from 'lodash/shuffle';
const shuffle = require('lodash/shuffle');
const difference = require('lodash/difference');

/* exported distort */
export function distort(i) {
  if (Math.random() > 0.5) {
    return i + 1;
  } else {
    return i - 1;
  }
}

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
  

  static getRandomIntInclusiveWithExceptions(min, max, excludes) {
    // eslint-disable-next-line arrow-parens
    const sequence = Array.from(Array(max - min).keys()).map(i => i + min).map(i => ''+i)
        .filter( i => excludes.indexOf(i) < 0 ).filter( i => excludes.indexOf(+i) < 0 );
    const generated = difference(sequence, excludes);
    const answer = shuffle(Array.from(generated))[0];
    return parseInt(answer, 10);
  }
}
