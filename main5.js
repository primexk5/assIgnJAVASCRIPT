// 5. Write a program that calculates the ticket price based on age with the following conditions:
//  age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10,
//   age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

function ticketPrices (age) {

    if (age <= 0){
        return "error"
    }
    if (age <= 12){
        return "your ticket price is 5"
    }

    if (age <= 18 ){
        return "your ticket price is 10"
    }


    if (age <= 60 ){
        return "your ticket price is 20"
    }


    if (age > 60 ){
        return "your ticket price is 15"
    }

   
}

console.log(ticketPrices (1))