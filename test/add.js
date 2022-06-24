const chai = require('chai').should();
const add = require('../add');

describe("Testing Addition functionality", function () {
    it("adding 2 and 3 should result in 5", function () {
        let sum = add(2, 3);
        sum.should.equal(5)
    })
    it("adding 200 and 300 should result in 500", function () {
        let sum = add(200, 300);
        sum.should.equal(500)
        //assert.equal(sum, 500);
    })
})
