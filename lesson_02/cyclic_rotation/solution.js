function solution(array, di) {
  let i = di % array.length - 1;

  return array.slice(i).concat(array.slice(0, i));
}

export default solution;
