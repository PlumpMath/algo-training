function solution(array) {
  return array.reduce(function(a, b) { return a ^ b }, 0);
}

export default solution;
