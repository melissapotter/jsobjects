var library = {
    name: "CareerDevs Library",
    booksAvailable: ["Cinderella", "Snow White and the Seven Dwarves", "Harry Potter and the Sorcerers Stone", "The Alchemist", "The Four Agreements"],
    booksNotAvailable: [],
    
    numberOfBooksAvailable: function() { // shows how many books are in the array and available
        return this.booksAvailable.length;
    },
    
    numberOfBooksNotAvailable: function() { //shows how many books are in the array and not available
        return this.booksNotAvailable.length;
    },
    
    totalNumberOfBooks: function() {
        return this.booksAvailable.length + this.booksNotAvailable.length;
    },
    
    checkOutBook: function (selectedBook) {
        
        if (this.booksAvailable.length < 1) 
        console.log("Sorry, there are no more books available to check out.");
            
        
        
        else { 
            for (var i = 0; i < this.booksAvailable.length; i++) {
            if (selectedBook == this.booksAvailable[i]) {
            this.booksAvailable.splice(i, 1);
            this.booksNotAvailable.push(selectedBook);
            console.log("You have checked out " + (selectedBook) +"!");
            }
           //else (console.log ("Sorry, we don't have that book available."));
        }
    }  
        },
    
    // returnBook: function () {
    //     if (this.)
    // }
    
    
};