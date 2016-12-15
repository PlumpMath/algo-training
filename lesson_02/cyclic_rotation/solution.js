function solution(array, di) {
  let i = array.length - (di % array.length);

  return array.slice(i).concat(array.slice(0, i));
}


export default solution;
