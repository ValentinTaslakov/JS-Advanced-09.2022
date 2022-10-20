let bookSelection = require("../solution");
let {assert} = require("chai");

describe("Test function in bookSelection object", ()=>{
    
    describe("Tests function isGenreSuitable", ()=>{
        it("Tests not suitable genre for kids under 12 age", ()=>{
            let expectedMessage = `Books with Thriller genre are not suitable for kids at 12 age`;
            assert.equal(bookSelection.isGenreSuitable("Thriller" , 12),expectedMessage);

            expectedMessage = `Books with Horror genre are not suitable for kids at 10 age`;
            assert.equal(bookSelection.isGenreSuitable("Horror" , 10),expectedMessage);
        })

        it("Tests, if above conditions are not met", ()=>{
            let expectedMessage = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Thriller" , 15),expectedMessage);
            assert.equal(bookSelection.isGenreSuitable("Comedy" , 15),expectedMessage);
        })
    })
    
    describe("Tests function isItAffordable", ()=>{

        it("Tests with non-number arguments,should throw error",()=>{
            assert.throws(()=>bookSelection.isItAffordable("two",5),"Invalid input");
            assert.throws(()=>bookSelection.isItAffordable(5,"two"),"Invalid input");
            assert.throws(()=>bookSelection.isItAffordable("two","5"),"Invalid input");
        })

        it("Tests when budget is lower that price", ()=>{
            assert.equal(bookSelection.isItAffordable(5,3),"You don't have enough money");
        })

        it("Tests with budget bigger that price", ()=>{
            assert.equal(bookSelection.isItAffordable(3,5),`Book bought. You have 2$ left`);
        })
    })

    describe("Tests function suitableTitles",()=>{

        it("Tests with incorrect arguments,should throw error",()=>{
            assert.throws(()=>bookSelection.suitableTitles({}, "go"),"Invalid input");
            assert.throws(()=>bookSelection.suitableTitles([], 5 ),"Invalid input");
            assert.throws(()=>bookSelection.suitableTitles({}, 5 ),"Invalid input");
        })

        it("Result should be correctly returned array of book titles",()=>{
            let library = [{ title: "The Da Vinci Code", genre: "Thriller" }, 
                                {title: "The Code", genre: "Horror"},
                                {title: "Da Vinci", genre: "Science"}];
            assert.equal(bookSelection.suitableTitles(library, "Thriller")[0],"The Da Vinci Code");
        })
    })
})