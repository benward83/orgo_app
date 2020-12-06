import contains from './contains';

export default (a1, a2) => {
  if (!(a1 instanceof Array && a2 instanceof Array)) {
    throw new Error('Array expected, got');
  }
  const intersect = [];
  for (let i = 0; i < a1.length; i++) {
    if (contains(a2, a1[i])) {
      intersect.push(a1[i]);
    }
  }
  return intersect;
};
