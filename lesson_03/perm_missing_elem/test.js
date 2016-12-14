import { it } from 'mocha';
import { expect } from 'chai';
import solution from './solution';

it('finds missing element in array', function() {
  let array = [2, 3, 1, 5];

  expect(solution(array)).to.eq(4);
});
