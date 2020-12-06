import { expect } from 'chai';
import contains from '../../src/utils/contains';

/**
  * "contains" is a function which takes two arguments:
  * @param array: an array of values
  * @param search: the value we search
  * @returns a boolean describing whether or not the array contains the value we are looking for
  **/

describe('contains', () => {
  it('is a function', () => {
    expect(contains).to.be.an.instanceof(Function);
  });
  it('expects an array and a search value as parameters', () => {
    const test = (a, b) => () => contains(a, b);
    expect(test()).to.throw();
    expect(test(undefined, [])).to.throw();
    expect(test(null, [])).to.throw();
    // Correct usage
    expect(test([], null)).to.not.throw();
    expect(test([], undefined)).to.not.throw();
    expect(test([], 2)).to.not.throw();
  });
  it('returns true if value is found', () => {
    expect(contains([1], 1)).to.equal(true);
    expect(contains([1, 2, 3, 4, 5], 5)).to.equal(true);
    expect(contains([1, 2, 3, 4, 5], 3)).to.equal(true);
  });
  it('returns true if value is found (undefined/null)', () => {
    expect(contains([null], null)).to.equal(true);
    expect(contains([1, 2, 3, null], null)).to.equal(true);
    expect(contains([undefined], undefined)).to.equal(true);
    expect(contains([1, 2, 3, undefined], undefined)).to.equal(true);
  });
  it('returns false if value is not found', () => {
    expect(contains([2], 1)).to.equal(false);
    expect(contains([1, 2, 3, 4, 5], 6)).to.equal(false);
  });
  it('returns false if value is not found (undefined/null)', () => {
    expect(contains([], null)).to.equal(false);
    expect(contains([1, 2, 3], null)).to.equal(false);
    expect(contains([], undefined)).to.equal(false);
    expect(contains([1, 2, 3], undefined)).to.equal(false);
  });
});
