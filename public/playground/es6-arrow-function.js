// create regular arrow function getFirstName
//create shorthand syntax arrow function

//const getFirstName = (fullName) => return (fullName).split(' ')[0];

const getFirstName = (fullName) => (fullName).split(' ')[0];
//--------------------------------------
// arguments object - no longer bound

// const add = function (a, b){
//   return a + b;
// };
const add = (a, b) => a + b;
//console.log(arguments)  won't work because you don't have access to the arguments outside the function
//--------------------------------------

// this keyword - no longer bound within the current
// function when you use an arrow function. The arrow 
// operator function will use the attribute from
// its parent when you use this, ie this.name.
// If you want to use this, use an es5 function.

const multiplier = {
  // numbers - array of numbers to multiply
  // multiplyBy - a single number
  // multiply - return a new array where the numbers have been multiplied, using the map() method
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map(number) => number * this.multiplyBy
  } 
  //multiply(){  numbers.map(number) => 
};
console.log(multiplier.multiply());