export default (array) => {
  if (array === null || typeof array === 'undefined') {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (typeof value === 'number') {
      total += value;
    }
  }

  return total;
};

