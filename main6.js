// 6. Write a program that calculates a discount based on the purchase amount.
//  Prices equal or over 100 discount have a discount of 20. Prices equal
//   or over 50 have a discount of 10. Otherwise discount is 0




function giveDiscount (amount){

    if (amount >= 100 ){
        return "20% discount"
    }

    if (amount >= 50 ){
        return "10% discount"
    } else {
        return "no discount!!"
    }
}

console.log(giveDiscount())