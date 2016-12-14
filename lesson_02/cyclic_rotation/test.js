import { it } from 'mocha';
import { expect } from 'chai';
import solution from './solution';

it('rotates an array', function() {
  let array = [1, 2, 3, 4, 5];

  expect(solution(array, 2)).to.eql([3, 4, 5, 1, 2]);
});
