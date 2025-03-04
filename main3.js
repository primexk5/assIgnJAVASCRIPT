// 3. Write a program to determine the greater of two numbers (between two numbers).
//  Use both the if/else statement and tenary operator.


let a = ""
let b = ""


function greaterNumberChecker(num1, num2) {

    if (num1 > num2){
        return "num1 is greater"
    } if(num1 < num2){
        return "num2 is greater"
    } else{
        return "numbers are equal"
    }

}

function greaterNumberCheckerTenary (num1, num2){
   return num1 > num2 ? "num1 is greater" :  num1 < num2 ? "num2 is greater" : "numbers are equal"

   
   
}

console.log(greaterNumberChecker(9, 5))
console.log(greaterNumberCheckerTenary(9,66))