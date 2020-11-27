import { expect } from 'chai';
import merge from '../../src/utils/merge';

/**
  * "merge" is a function which takes two arguments:
  * @param left: an object
  * @param right: an object
  * @returns a new object which contains all the keys/values of left and all keys/values of right
  *   in case of duplicate keys, right takes precedence
  **/

describe('merge', () => {
  it('is a function', () => {
    expect(merge).to.be.an.instanceof(Function);
  });
  it('expects two objects as paramters', () => {
    const test = (a, b) => () => merge(a, b);
    // Incorrect usage
    expect(test(null, null)).to.throw(/two objects expected/);
    expect(test({}, null)).to.throw(/two objects expected/);
    expect(test(undefined, {})).to.throw(/two objects expected/);
    expect(test(undefined, undefined)).to.throw(/two objects expected/);
    // Correct usage
    expect(test({}, {})).to.not.throw();
  });

  it('returns an object', () => {
    expect(merge({}, {})).to.be.an.instanceof(Object);
  });

  it('merges basic objects', () => {
    expect(merge({ a: 1 }, { b: 2 })).to.deep.equal({ a: 1, b: 2 });
  });

  it('overrides left properties when defined on right properties', () => {
    expect(merge({ a: 1 }, { a: 2 })).to.deep.equal({ a: 2 });
  });
});
