const foreach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    fn(value);
  }
};

export default foreach;
