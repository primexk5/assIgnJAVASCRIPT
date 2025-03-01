// 3. Write a program to determine the greater of two numbers (between two numbers).
//  Use both the if/else statement and tenary operator.


let a = 5
let b = 20


function greaterNumberChecker(num1, num2) {

    if (num1 > num2){
        return "num1 is greater"
    } if(num1 < num2){
        return "num2 is greater"
    } else{
        return "numbers are equal"
    }

}

console.log(greaterNumberChecker(a, b))