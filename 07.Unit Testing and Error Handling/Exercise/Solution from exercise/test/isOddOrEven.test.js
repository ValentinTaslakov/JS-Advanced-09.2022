const {assert} = require("chai");
const isOddOrEven = require("../02.EvenOrOdd");


describe("Function isOddOrEven return undefined with incorrect data.", ()=>{
    it("Result should be undefined with not string data",()=>{
        assert.equal(isOddOrEven(5), undefined);
        assert.equal(isOddOrEven({}),undefined);
        assert.equal(isOddOrEven(true),undefined);
    })
})

describe("Function isOddOrEven return even or odd", ()=>{

    it("Function should be return even", ()=>{
        assert.equal(isOddOrEven("even"), "even");
    })

    it("Function should be return odd", ()=>{
        assert.equal(isOddOrEven("two"), "odd");
    })
})