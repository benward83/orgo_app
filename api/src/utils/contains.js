export default (array, search) => {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (value === search) {
      return true;
    }
  }
  return false;
};
