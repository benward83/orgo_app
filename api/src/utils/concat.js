export default (array1, array2) => {
  if (!array1 || !array2) {
    return [];
  }
  const concatArr = array1.concat(array2);
  const filteredArr = concatArr.filter(Boolean);
  return filteredArr;
};
