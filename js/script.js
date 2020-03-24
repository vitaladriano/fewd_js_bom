

var club = {

    // Object properties

    name: 'Foo Figthers',

    tickets: 500,

    sold: 455,

    ticketsTypes: ['VIP', 'seating', 'Early bird', 'standing'],

    checkAvailablity: function() {

        return this.tickets - this.sold;

    }

};



var elName = document.getElementById('clubName');

elName.textContent = club.name;



var eltickets = document.getElementById('tickets');

eltickets.textContent = club.checkAvailablity();



// Define a constructor function template for hotels

function Club(name, tickets, sold) {

    // Object properties

    this.name = name;

    this.tickets = tickets;

    this.sold = sold;

    this.checkAvailablity = function() {

        return this.tickets - this.sold;

    };

}



