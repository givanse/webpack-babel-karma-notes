import {expect} from 'chai';
import sum from '../src/sum.js';

describe('sum', function() {

  it('returns the correct value for a list with one element', function() {
    const l = [100];
    const r = sum(l);
    expect(r).to.be.equal(100);
  });

});
