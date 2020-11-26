import { expect } from 'chai';
import sum from '../../src/utils/sum';

describe('sum', () => {
  it('is a function', () => {
    expect(sum).to.be.an.instanceof(Function);
  });
  it('it returns 0 with null/undefined', () => {
    expect(sum(null)).to.equal(0);
    expect(sum()).to.equal(0);
  });
  it('it supports empty arrays', () => {
    expect(sum([])).to.equal(0);
  });
  it('it returns the summed values', () => {
    const testInput = [1, 1, 1, 1, 1];
    const result = sum(testInput);
    expect(result).to.equal(5);
    expect(sum([1, 1, 1, 2, 2, 3, 4, 5, 5])).to.equal(24);
  });
  it('it supports arrays with undefined/null values', () => {
    expect(sum([1, 2, null, undefined, null, 4])).to.equal(7);
  });
});
