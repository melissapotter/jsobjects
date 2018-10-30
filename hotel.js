// Create a hotel base application node js that has just 4 rooms, each room should have a number. The hotel will have a list of amenities, need to create a function within our object that rents a room, and then displays a status report. A function that is inside of the object that returns the room and displays a status report. A function that gives up the room. And a function that checks room availability. Function that displays amenities. Displays status report

// var assignment="create an object for hotel rooms";
var availRooms = ["Room 1 ", "Room 2 ", "Room 3 ", "Room 4 "];
var readline = require('readline-sync');
var roomChoice = readline.question("Welcome to Hotel! We have four rooms available, would you like to book a room? Yes or No? ");
if (roomChoice == "Yes") {
    var roomDetails = readline.question("Here are your options: " + [availRooms] + " Which room would you like to know more about? ");
    if (roomDetails == "Room 1") {
        var roomOne = readline.question("Price: $100/night, Double Bed, Standing Shower, Free WiFi. Would you like to book this room? ");
        if (roomOne == "Yes") {
            console.log("You have booked Room 1! Thank you and we appreciate your business!");
        }
    }


    else if (roomDetails == "Room 2") {
        var roomTwo = readline.question("Price $120/night, Double Bed, Bathtub, Free WiFi, Breakfast Included. Would you like to book this room? ");
        if (roomTwo == "Yes") {
            console.log ("You have booked Room 2! Thank you and we appreciate your business!");

        }
    }
    else if (roomDetails == "Room 3") {
        var roomThree = readline.question("Price $150/night, Two Twin Beds, Bathtub, Free Wi-Fi. Would you like to book this room? ");
        if (roomThree == "Yes") {
            console.log ("You have booked Room 3! Thank you and we appreciate your business!");

        }
    }
    else if (roomDetails == "Room 4") {
        var roomFour = readline.question("Price $160/night, One King Bed, Bathtub, Free WiFi, Breakfast Included. Would you like to book this room? ");
        if (roomFour == "Yes") {
            console.log("You have booked Room 4! Thank you and we appreciate your business!");
        }
        else if (roomChoice == "No") {
    console.log("We hope to see you in the future!")
    }





}



}
else if (roomChoice == "No") {
    console.log("We hope to see you in the future!")

}
