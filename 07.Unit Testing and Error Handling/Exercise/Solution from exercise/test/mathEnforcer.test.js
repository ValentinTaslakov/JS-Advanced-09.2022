const {assert} = require("chai");
const mathEnforcer = require("../04.MathEnforcer");

describe("mathenforced", ()=>{
    describe("Test addFive function input", ()=>{
       
        it("With non-number parameter, should return undefined",()=>{
            assert.equal(mathEnforcer.addFive("two"), undefined);
        });

        it("With floating-point number",()=>{
            assert.closeTo(mathEnforcer.addFive(5.22), 10.22, 0.01);
        });

        it("With negative number",()=>{
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it("With positive number",()=>{
            assert.equal(mathEnforcer.addFive(5),10);
        })

    })

    describe("Test subtractTen function input", ()=>{
        it("With non-number parameter, should return undefined",()=>{
            assert.equal(mathEnforcer.subtractTen("two"), undefined);
        });
        it("With floating-point number",()=>{
            assert.closeTo(mathEnforcer.subtractTen(20.22), 10.22, 0.01);
        });

        it("With negative number",()=>{
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });

        it("With positive number",()=>{
            assert.equal(mathEnforcer.subtractTen(20),10);
        });
    })

    describe("Test sum function input", ()=>{
        it("With incorrect first parameter, should return undefined",()=>{
            assert.equal(mathEnforcer.sum("two", 5), undefined);
        });

        it("With incorrect second parameter, should return undefined",()=>{
            assert.equal(mathEnforcer.sum(5, "two"), undefined);
        });

        it("With floating-point number",()=>{
            assert.closeTo(mathEnforcer.sum(5.22, 5.22), 10.44, 0.01);
        });

        it("With negative number",()=>{
            assert.equal(mathEnforcer.sum(-5, -5), -10);
        });

        it("With positive number",()=>{
            assert.equal(mathEnforcer.sum(20, 10), 30);
        });
    })
})