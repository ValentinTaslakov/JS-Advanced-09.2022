

function ticketsDatabase(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let result = [];

    arr.forEach(el => {
        let [destination, price, status] = el.split("|")
        result.push(new Ticket(destination, price, status))
    });

    switch (criteria) {
        case ("destination"):
            return result.sort((a, b) => (a.destination).localeCompare(b.destination));
            
        case ("price"):
            return result.sort((a, b) => (a.price)-(b.price));
            
        case ("status"):
            return result.sort((a, b) => (a.status).localeCompare(b.status));

    }
}


console.log(ticketsDatabase(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
).join("\n"));