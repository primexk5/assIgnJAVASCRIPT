// 4. Write a program that transforms a numerical grade to a letter
//  grade (0-44: F, 45-49: D, 50-59: C, 60-69: B, 70-100: A).

function assignGrade (score){
   
 
if (score < 0 || score > 100) {
    return "error"
  } if (score < 45) {
    return "F"
  } if (score < 50) {
    return "D"
  }  if (score < 70) {
    return "B"
  }  if (score >= 70) {
    return "A"
    
  }

}

console.log(assignGrade(69))