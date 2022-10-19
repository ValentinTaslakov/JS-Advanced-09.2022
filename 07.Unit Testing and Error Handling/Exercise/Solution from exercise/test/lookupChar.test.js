const {assert} = require("chai");
const lookupChar = require("../03.CharLookup");


describe("Test function with incorrect data", ()=>{
    it("Result shoult be undefined when first parameter is incorrect type",()=>{
        assert.equal(lookupChar(3,5), undefined);
    })

    it("Result shoult be undefined when second parameter is incorrect type",()=>{
        assert.equal(lookupChar("char", "go"), undefined);
    })

    it("Result shoult be undefined when second parameter is decimal type",()=>{
        assert.equal(lookupChar("char", 0.5), undefined);
    })
})

describe("Test function with correct data type but incorect index",()=>{
    it("Result should be `Incorrect index` with index bigger than string length",()=>{
        assert.equal(lookupChar("two",5),`Incorrect index`);
    })

    it("Result should be `Incorrect index` with index equal than string length",()=>{
        assert.equal(lookupChar("two", 3),`Incorrect index`);
    })

    it("Result should be `Incorrect index` when index is negative number",()=>{
        assert.equal(lookupChar("two", -3),`Incorrect index`);
    })
})

describe("Test function with correct data type and correct index",()=>{
    it("Result should be a character at the specified index",()=>{
        assert.equal(lookupChar("two",2), "o");
    })
})