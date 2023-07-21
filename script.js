
// let result = [0];
// const nums = [1, 1, 5];
 const target = 5;

// const sumWithInitial = nums.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);



const array = [1, 1, 1, 1, 3];
var reduce = array.reduce((accumulator, currentValue) => accumulator + currentValue,)
if(reduce == target){
    console.log('sucess')
}
console.log(reduce)