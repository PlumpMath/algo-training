import { it } from 'mocha';
import { expect } from 'chai';
import solution from './solution';

function buildArray(length) {
  let i = 1, array = [];

  for (i; i<=length; i++) {
    array.push(i);
  }

  array[array.length - 1]+= 1;

  return array;
}

it('finds missing element in array', function() {
  let array = [2, 3, 1, 5];

  expect(solution(array)).to.eq(4);
});

it('finds missing element in big array', function() {
  let array = buildArray(10000);

  expect(solution(array)).to.eq(10000);
});
