let num1 = [50, 10, 60, 12, 20, 70];

let num2 = 0;

/*for(let i = 0; i < num1.length; i++){
  num2 += num1[i];
}*/

num1.forEach(function(value){
  num2 += value;
})

console.log(num2);