let scores = [80, 90, 98, 87, 100, 78, 95, 83];
let averageS = 0;

scores.forEach(function(value){
  averageS += value / scores.length;
})
  
console.log(averageS.toFixed(2));


function averageScore(score){
  let total = 0;

  score.forEach(function(values){
    total+=values
  })
  let average = total/score.length;
  return average;
}

let student1 = [80, 40, 100, 98, 82];


let result1 = averageScore(student1);
console.log(`Your average score is ${result1}`);

let student2 = [85, 45, 98, 83, 79];
let result2 = averageScore(student2);
console.log(`Your average score is ${result2}`);