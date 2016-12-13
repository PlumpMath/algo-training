function solution(integer) {
  let binary = integer.toString(2),
      gaps = binary.split('1').map(function(g) { return g.length });

  if (binary[binary.length - 1])
    gaps = gaps.slice(0, -1)

  return Math.max.apply(null, gaps) || 0;
}

export default solution;
