const expect = require('chai').expect;

const div = require('../div');

describe("Testing Divison Funtionality", function () {
    it("dividing 10 by 2 should result to 5", function () {
        let actual = div(10, 2);
        expect(actual).to.equal(5)
        //assert.equal(actual, 5);
    })
    it("dividing 10 by 0 should result to inifinity", function () {
        let actual = div(10, 0);
        expect(actual).not.be.finite
        //assert.equal(actual, 'Infinity');
    })
})