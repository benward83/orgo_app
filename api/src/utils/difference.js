export default (a1, a2) => {

  const diffArr = [];
  for (let index = 0; index < a1.length; index++) {
    const value = a1[index];
    diffArr.push(value);
  }
  for (let index = 0; index < a2.length; index++) {
    const value = a2[index];
    if (!value) {
      diffArr.push(value);
    }
  }
  return [];
};
