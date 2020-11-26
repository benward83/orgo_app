export default (array) => {
  if (!array) {
    return [];
  }
  const uniqArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqArray.includes(array[i])) {
      uniqArray.push(array[i]);
      uniqArray.sort((a, b) => a - b);
    }
  }
  return uniqArray;
};
