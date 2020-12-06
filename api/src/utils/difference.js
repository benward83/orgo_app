import contains from './contains';

export default (a1, a2) => {

  if (!(a1 instanceof Array && a2 instanceof Array)) {
    throw new Error('Array expected, got `${a1}` and `${a2}`');
  }

  const diffArr = [];

  for (let i = 0; i < a1.length; i++) {
    if (!contains(a2, a1[i])) {
      diffArr.push(a1[i]);
    }
  }
  for (let j = 0; j < a2.length; j++) {
    if (!contains(a1, a2[j]))
      diffArr.push(a2[j]);
  }
  return diffArr;
};
