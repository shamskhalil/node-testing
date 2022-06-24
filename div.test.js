const { expect } = require('chai');
const div = require('./div');

test("dividing 10 by 2 should result to 5", function () {
    expect(div(10, 2), 5);
})