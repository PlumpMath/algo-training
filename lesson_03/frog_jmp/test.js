import { it } from 'mocha';
import { expect } from 'chai';
import solution from './solution';

it('returns number of jumps needed', function() {
  let x = 10, y = 85, d = 30;

  expect(solution(x, y, d)).to.eq(3);
});

