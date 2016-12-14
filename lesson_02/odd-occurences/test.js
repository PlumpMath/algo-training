import { it } from 'mocha';
import { expect } from 'chai';
import solution from './solution';

it('returns odd occurence item', function() {
  let array = [1,2,3,3,2,1,4];

  expect(solution(array)).to.eq(4);
});
