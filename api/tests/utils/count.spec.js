import { expect } from 'chai';
import count from '../../src/utils/count';

/**
  * "count" is a function which takes one argument:
  * @param array: an array of values
  * @returns an object using uniq values as keys and counts as values
  * @example count(['foo', 'foo', 'bar]) === { foo: 2, bar: 1 }
  **/

describe.only('count', () => {
  it('is a function', () => {
    expect(count).to.be.an.instanceof(Function);
  });
  it('expects an array as parameter', () => {
    const test = (a) => () => count(a);
    expect(test()).to.throw();
    expect(test(undefined)).to.throw();
    expect(test(null)).to.throw();
    // Correct usage
    expect(test([])).to.not.throw();
  });
  it('returns an object', () => {
    expect(count([])).to.be.an.instanceof(Object);
  });
  it('returns correct counts', () => {
    expect(count(['foo', 'foo', 'bar', 'bar', 'baz'])).to.deep.equal({
      foo: 2,
      bar: 2,
      baz: 1
    });
  });
  it('wipes out null/undefined', () => {
    expect(count(['foo', 'foo', 'bar', 'bar', 'baz', null, undefined, null])).to.deep.equal({
      foo: 2,
      bar: 2,
      baz: 1
    });
  });
});
