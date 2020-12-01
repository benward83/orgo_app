export default (arr1, arr2) => {

  const arrConcat = [];

  const append = (value) => {
    if (typeof value == 'number') {
      arrConcat.push(value);
    }
  };

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];
    append(value);
  }
  for (let j = 0; j < arr2.length; j++) {
    const value = arr2[j];
    append(value);
  }
  return arrConcat;
};
