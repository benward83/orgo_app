import { expect } from 'chai';
import difference from '../../src/utils/difference';

/**
  * "difference" is a function which takes two arguments:
  * @param left: an array
  * @param right: an array
  * @returns a new array with values contained only by left or only by right
  **/

describe('difference', () => {
  it('is a function', () => {
    expect(difference).to.be.an.instanceof(Function);
  });
  it('expects two arrays as paramters', () => {
    const test = (a, b) => () => difference(a, b);
    // Incorrect usage
    expect(test(null, null)).to.throw(/Array expected, got/);
    expect(test({}, null)).to.throw(/Array expected, got/);
    expect(test(undefined, {})).to.throw(/Array expected, got/);
    expect(test(undefined, undefined)).to.throw(/Array expected, got/);
    expect(test([], undefined)).to.throw(/Array expected, got/);
    expect(test(undefined, [])).to.throw(/Array expected, got/);
    // Correct usage
    expect(test([], [])).to.not.throw();
  });

  it('returns an array', () => {
    const result = difference([], []);
    expect(Array.isArray(result)).to.equal(true);
  });

  it('returns the difference', () => {
    expect(difference([1, 2, 3], [2, 3, 4])).to.deep.equal([1, 4]);
  });
});
