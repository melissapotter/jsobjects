var hotel = { //object
    name: "CareerDevs Hotel", //name: is considered a key, careerdevs hotel is a property
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106" ], 
    roomNumbersBooked: [],
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
            
            // this.roomNumbersBooked.unshift(randomRoom);
            //this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            
            //this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);
            
           this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1);
            
             // this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)); //indexOf returns the position of the item in the array
            //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
            //splice adds or removes an item to an array
            this.roomNumbersBooked.push(randomRoom); //push
            // 
        }
    },
    
    checkOut: function () {
        if (this.numberOfRoomsBooked() > 0) {
            var vacantRoom = this.roomNumbersBooked[Math.floor(Math.random()*this.roomNumbersBooked.length)];
            this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(vacantRoom), 1);
            this.roomNumbersAvailable.push(vacantRoom);
        }
    },
    
    
};