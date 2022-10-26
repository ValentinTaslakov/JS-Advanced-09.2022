let{assert} = require("chai");
let chooseYourCar = require("../chooseYourCar");

describe("Tests chooseYourCar", function() {
    describe("Test choosingType", function() {
        it("Test year outside interval 1900 - 2022 ", function() {
            let exp = "Invalid Year!";
            assert.throw(()=>chooseYourCar.choosingType("Combi","Blue", 1890), exp);
            assert.throw(()=>chooseYourCar.choosingType("Combi","Blue", 2023), exp);
        });

        it("Test when type is not Sedan", ()=>{
            assert.throw(()=>chooseYourCar.choosingType("Combi","Blue", 2020)
            , "This type of car is not what you are looking for.");
        })

        it("Test with Sedan and year >=2010",()=>{
            assert.equal(chooseYourCar.choosingType("Sedan","Blue", 2020)
            ,"This Blue Sedan meets the requirements, that you have.");
            assert.equal(chooseYourCar.choosingType("Sedan","Blue", 2010)
            ,"This Blue Sedan meets the requirements, that you have.");
        })

        it("Test with Sedan and year < 2010", ()=>{
            assert.equal(chooseYourCar.choosingType("Sedan","Blue", 2009)
            ,"This Sedan is too old for you, especially with that Blue color.");
        })
     });

     describe("Test brandName", ()=>{
        it("Test with incorrect input",()=>{
            assert.throw(()=>chooseYourCar.brandName("Combi", 1890), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName("Combi", '1890'), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(["Combi"], 5.2), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(["Combi"], 2), "Invalid Information!");
            assert.throw(()=>chooseYourCar.brandName(["Combi"], -2), "Invalid Information!");
        })

        it("Test remove element by given index", ()=>{
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), "BMW, Peugeot");
        })
     })

     describe ("Test CarFuelConsumption", ()=>{
        it("Test with incorrect data",()=>{
            assert.throw(()=>chooseYourCar.carFuelConsumption("", 5), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(5, '5'), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(-5, 5), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(0, 5), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(5, -5), "Invalid Information!");
            assert.throw(()=>chooseYourCar.carFuelConsumption(5, 0), "Invalid Information!");
        })

        it("Test consumption <= 7",()=>{
            //let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            assert.equal(chooseYourCar.carFuelConsumption(100,5)
            ,`The car is efficient enough, it burns 5.00 liters/100 km.`);
            assert.equal(chooseYourCar.carFuelConsumption(100,7)
            ,`The car is efficient enough, it burns 7.00 liters/100 km.`);
        })
        it("Test consumption > 7",()=>{
            //let litersPerHundredKm =((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2);
            assert.equal(chooseYourCar.carFuelConsumption(100,8)
            ,`The car burns too much fuel - 8.00 liters!`);
        })
     })
    
});
