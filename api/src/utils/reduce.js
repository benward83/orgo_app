import foreach from './foreach';

const reduce = (arr, reducer, initVal) => {
  let value = initVal;

  for (let i = 0; i < arr.length; i++) {
    const currentVal = arr[i];
    value = reducer(value, currentVal);
  }
  return value;
};

export default reduce;

