import foreach from './foreach';

const map = (arr, providedFn) => {
  const newArr = [];
  foreach(arr, (value) => {
    const result = providedFn(value);
    newArr.push(result);
  });
  return newArr;
};

export default map;
