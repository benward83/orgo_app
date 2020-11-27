import { expect } from 'chai';
import intersect from '../../src/utils/intersect';

/**
  * "intersect" is a function which takes two arguments:
  * @param left: an array
  * @param right: an array
  * @returns a new array with values contained by both arrays
  **/

describe('intersect', () => {
  it('is a function', () => {
    expect(intersect).to.be.an.instanceof(Function);
  });
  it('expects two arrays as paramters', () => {
    const test = (a, b) => () => intersect(a, b);
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
    const result = intersect([], []);
    expect(Array.isArray(result)).to.equal(true);
  });

  it('returns the intersection of both arrays', () => {
    expect(intersect([1, 2, 3], [2, 3, 4])).to.deep.equal([2, 3]);
  });
});
