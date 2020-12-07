import { expect } from 'chai';
import reduce from '../../src/utils/reduce';

/**
  * "reduce" is a function which takes three argument:
  * @param array: an array of values
  * @param reducerFn: the reducer function called on each values of the array receiving as arguments the last accumulator value and the current value
  * @param accumulator: the starting value for the accumulator
  * @returns the last accumulator value
  **/

describe('reduce', () => {
  it('is a function', () => {
    expect(reduce).to.be.an.instanceof(Function);
  });
  it('reduces properly ex1', () => {
    expect(reduce(['foo', 'bar', 'baz'], (acc, v) => acc + v, '')).to.equal('foobarbaz');
  });
  it('reduces properly ex2', () => {
    const pairs = [
      ['key1', 'value1'],
      ['key2', 'value2'],
      ['key3', 'value3']
    ];
    expect(reduce(pairs, (acc, v) => {
      const key = v[0];
      const value = v[1];
      acc[key] = value;
      return acc;
    }, {})).to.deep.equal({
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    });
  });
});
