let arr = ['Yakub','Sultan','Adam','Sahruddi','Turpal','Islam','Alvi','Halid','Maga','Valid'];
let accumulator = [];
for(let i = 0; i < arr.length; i++){
  if (arr[i][0] === 'A'){
    accumulator.push(arr[i]);
  }
}console.log(accumulator);