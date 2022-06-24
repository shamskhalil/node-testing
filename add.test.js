const { expect } = require('chai');
const { add, addition } = require('./add');

test("Using add -> Adding 2 and 3 should be 5", function () {
    let sum = add(2, 3);
    expect(sum, 5);
});

test("Using Addition -> Adding 4 and 6 should be 10", function () {
    let sum = addition(4, 6);
    expect(sum, 10);
});
