function solution(incompleteArray) {
  let i = 1;

  for (i; i <= incompleteArray.length; i++) {
    if (incompleteArray.indexOf(i) < 0) {
      return i;
    }
  }
}

export default solution;
