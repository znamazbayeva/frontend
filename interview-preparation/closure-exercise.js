// how to solve this problem?
// The output is 
// I am at index 4
// I am at index 4
// I am at index 4
// I am at index 4
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}

// 1. Using let instead of var
// const array = [1,2,3,4];
// for(let i=0; i < array.length; i++) {
//   setTimeout(function(){
//     console.log('I am at index ' + i)
//   }, 3000)
// }

// Using closures
// const array = [1,2,3,4];
// const printAfterTime = (i) => {
//     return  setTimeout(function(){
//         console.log('I am at index ' + i)
//   }, 3000);
// } 
// for(var i=0; i < array.length; i++) {
//     printAfterTime(i);
// }

// Using IIFE and closures
// const array = [1,2,3,4];
// for(var i=0; i < array.length; i++) {
//   (function() {
//.  setTimeout(function(){
//     console.log('I am at index ' + i)
//   }, 3000)
// })(i)
// } IIFE
