export default (obj1, obj2) => {
  const mergedObj = {};
  const arr1 = Object.values(obj1);
  const arr2 = Object.values(obj2);

  const mergedArr = arr1.concat(arr2);

  for (let i = 0; i < mergedArr.length; i++) {
    mergedObj[i] = mergedArr[i];
  }

  return mergedObj;
};
