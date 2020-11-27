export default (array) => {
  if (!array) {
    return [];
  }
  const uniqArray = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (typeof value != 'number') {
      continue;
    }
    if (!uniqArray.includes(value)) {
      uniqArray.push(value);
    }
  }
  return uniqArray.sort((a, b) => a - b);
};
