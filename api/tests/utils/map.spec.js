import { expect } from 'chai';
import map from '../../src/utils/map';

/**
  * "map" is a function which takes two argument:
  * @param array: an array of values
  * @param fn: the mapper function
  * @returns an array containing the values returned by the mapper function
  **/

describe('map', () => {
  it('is a function', () => {
    expect(map).to.be.an.instanceof(Function);
  });
  it('maps properly', () => {
    expect(map(['foo', 'bar', 'baz'], (s) => s.toUpperCase())).to.deep.equal(['FOO', 'BAR', 'BAZ']);
  });
});
