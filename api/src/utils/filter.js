const filter = (arr, fn) => {

  const emptyArr = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (fn(value)) {
      emptyArr.push(value);
    }
  }
  return emptyArr;
};

export default filter;
