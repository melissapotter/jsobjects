var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["102", "103", "104", "105", "106" ], 
    roomNumbersBooked: ["101"],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function() { 
     // length of the number of rooms available
    return this.roomNumbersAvailable.length;
    }, 
    
    numberOfRoomsBooked: function() {
       return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        // avail rooms plus booked rooms 
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    
};