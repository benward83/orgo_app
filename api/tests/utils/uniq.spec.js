import { expect } from 'chai';
import uniq from '../../src/utils/uniq';

describe('Ping ben', () => {

  describe('uniq', () => {
    it('is a function', () => {
      expect(uniq).to.be.an.instanceof(Function);
    });
    it('it supports empty arrays', () => {
      expect(uniq([])).to.deep.equal([]);
    });
    it('it returns empty arrays if called with null/undefined', () => {
      expect(uniq(null)).to.deep.equal([]);
      expect(uniq()).to.deep.equal([]);
    });
    it('it returns an array with only uniq values', () => {
      expect(uniq([1, 1, 1, 1, 1])).to.deep.equal([1]);
      expect(uniq(1, 1, 1, 2, 2, 3, 4, 5, 5)).to.deep.equal([1, 2, 3, 4, 5]);
    });
    it('it supports unsorted arrays', () => {
      expect(uniq(1, 2, 1, 2, 1, 2, 5, 2, 3)).to.deep.equal([1, 2, 3, 5]);
    });
    it('it supports arrays with undefined/null values', () => {
      expect(uniq(1, 2, null, undefined, null, 4)).to.deep.equal([1, 2, 4]);
    });
  });

});
