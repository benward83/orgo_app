import { expect } from 'chai';
import filter from '../../src/utils/filter';

/**
  * "filter" is a function which takes two argument:
  * @param array: an array of values
  * @param predicateFn: a function that will return wether or not the item should be kept (true/false)
  * @returns an array containing the values for which predicateFn returns true
  **/

describe('filter', () => {
  it('is a function', () => {
    expect(filter).to.be.an.instanceof(Function);
  });
  it('filters properly', () => {
    expect(filter(['foo', 'bar', 'baz'], (s) => s.indexOf('a') >= 0)).to.deep.equal(['bar', 'baz']);
  });
});
