// GM guys, here is your task for the week

// 1. Write a program that determines whether a given number is positive or negative.
// 2. Write a program that checks if a number is even or odd.
// 3. Write a program to determine the greater of two numbers (between two numbers).
//  Use both the if/else statement and tenary operator.
// 4. Write a program that transforms a numerical grade to a letter
//  grade (0-44: F, 45-49: D, 50-59: C, 60-69: B, 70-100: A).
// 5. Write a program that calculates the ticket price based on age with the following conditions:
//  age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10,
//   age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
// 6. Write a program that calculates a discount based on the purchase amount.
//  Prices equal or over 100 discount have a discount of 20. Prices equal
//   or over 50 have a discount of 10. Otherwise discount is 0


function numberCheaker  (number){

    if (number === 0){
        return 0
    }
      
    if (number < 0){
          return "Number is negative"
    }
      
    if (number > 0){
         return "number is positive"
    }
       

}


console.log(numberCheaker(-7))

