import { it } from 'mocha';
import { expect } from 'chai';
import solution from './solution';

it('rotating array by its length returns same array', function() {
  let a = [-9, 0], k = 2;

  expect(solution(a, k)).to.eql([-9, 0]);
});

it('rotating empty array returns empty array', function() {
  let a = [], k = 7;

  expect(solution(a, k)).to.eql([]);
});

it('rotates array by less than its length', function() {
  let a = [1,2,3,4,5], k = 3;

  expect(solution(a, k)).to.eql([3, 4,5,1,2])
});
