class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {

        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };
        if (!this.plants.find(pl => pl.plantName === plantName)) {

            this.plants.push(plant);
        }

        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(pl => pl.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity = quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    }

    harvestPlant(plantName) {
        let plant = this.plants.find(pl => pl.plantName === plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.plants = this.plants.filter(pl => pl.plantName !== plantName);

        let name = plant.plantName;
        let plantQuantity = plant.quantity;
        this.storage.push({ name, plantQuantity });

        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`

    }

    generateReport() {
        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.\n`;

        let plantsNames = [];
        this.plants.forEach(pl => plantsNames.push(pl.plantName));
            plantsNames.sort((a, b) => a.localeCompare(b));
        result += `Plants in the garden: ${plantsNames.join(', ')}\n`;

        if (this.storage.length === 0) {
            result += `Plants in storage: The storage is empty.`
        } else {
            let storageResult = [];
            this.storage.forEach(o => storageResult.push(`${o.name} (${o.plantQuantity})`));
            result += `Plants in storage: ${storageResult.join(", ")}`;
        }

        return result;
    }

}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
//console.log(myGarden.ripenPlant('apple', 10));
//console.log(myGarden.ripenPlant('orange', 1));
//console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());











