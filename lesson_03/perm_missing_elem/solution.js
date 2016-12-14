function solution(array) {
  return array.sort().find(function(e, i) {
    return (array[i+1] - e) > 1;
  }) + 1;
}

export default solution;
