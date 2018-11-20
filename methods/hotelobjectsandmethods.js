var hotel = { //object
    name: "CareerDevs Hotel", //name: is considered a key, careerdevs hotel is a property
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106" ], 
    roomNumbersBooked: [ ],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function() { 
     // length of the number of rooms available, returned as an integer
    return this.roomNumbersAvailable.length;
    }, 
    
    numberOfRoomsBooked: function() {
       return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        // avail rooms plus booked rooms 
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    bookRoom: function () {
        //only book a room if one or more is available
        if (this.numberOfRoomsAvailable() > 0) {
            // select a random available room
            var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
            //return available room;
            //list.splice(list.indexOf('foo'), 1);
            this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
            this.roomNumbersBooked.push(randomRoom);
        }
    },
    
    
};