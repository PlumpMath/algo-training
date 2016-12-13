import { it } from 'mocha';
import { expect } from 'chai';
import solution from './solution';

it('returns 0 if no binary gaps present', function() {
  let integer = parseInt('1111', 2)
  expect(solution(integer)).to.eq(0)
});

it('count only 0s surrounded by 1s on both sides', function() {
  let integer = parseInt('0111', 2)
  expect(solution(integer)).to.eq(0)
});

it('returns number of gaps if only one gap present', function() {
  let integer = parseInt('1001', 2)
  expect(solution(integer)).to.eq(2);
});

it('returns number of gaps only if 0s surrounded by 1s', function() {
  let integer = parseInt('10100', 2)
  expect(solution(integer)).to.eq(1);
});

it('returns length of longest gap if more than one is present', function() {
  let integer = parseInt('1000010001', 2)
  expect(solution(529)).to.eq(4)
});
