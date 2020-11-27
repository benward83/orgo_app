import { expect } from 'chai';
import concat from '../../src/utils/concat';

// It is a function which takes 2 arrays as arguments and returns a concat of both of them

describe.only('concat', () => {
  it('is a function', () => {
    expect(concat).to.be.an.instanceof(Function);
  });
  it('expects two arrays as parameters', () => {
    const test = (a, b) => () => concat(a, b);
    expect(test()).to.throw();
    expect(test([])).to.throw();
    expect(test(undefined, [])).to.throw();
    expect(test(null, [])).to.throw();
    expect(test([], [])).to.not.throw();
  });
  it('returns an array', () => {
    expect(concat([], [])).to.be.an.instanceof(Array);
  });
  it('it supports empty arrays', () => {
    expect(concat([], [])).to.deep.equal([]);
  });
  it('it returns an array with the concatenated values', () => {
    expect(concat([1, 2], [4, 5])).to.deep.equal([1, 2, 4, 5]);
  });
  it('it prunes undefined/null values', () => {
    expect(concat([1, 2, null], [undefined, 3])).to.deep.equal([1, 2, 3]);
  });
});
