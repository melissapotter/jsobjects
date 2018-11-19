var hotel = { //object
    name: "CareerDevs Hotel", //name: is considered a key, careerdevs hotel is a property
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["102", "103", "104", "105", "106" ], 
    roomNumbersBooked: ["101"],
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
    }
    
    
};