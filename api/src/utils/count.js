export default (array) => {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value != null && value != undefined)
    {
      obj[value] = obj[value] ? obj[value] + 1 : 1;
    }
  }
  return obj;
};
