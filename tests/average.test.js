import {expect} from 'chai';
import average from '../src/average.js';

describe('average', function() {

  it('returns the correct value for a list with one element', function() {
    const l = [6];
    const r = average(l);
    expect(r).to.be.equal(6);
  });

});
