// normal way of writing a function

// console.log(sum())
// function sum(){
//     let a=5;b=3;
//     let sum=a+b;
//     return `the sum of a and b is ${sum}`
// }

// how to convert normal function to fat arow function
// the main problem of fat arrow function is you cannot acess the function before initialization
// and in traditional function we cann do anything like first call and then declare



// const sum = () =>{
//     let a=5;b=3;
//     let sum=a+b;
//     return `the sum of a and b is ${sum}`

// }
// console.log(sum())



// ------------------more short way to write this fat arrow function --------------------



// const sum = () =>{
//     let a=5;b=3;
//     return `the sum of a and b is ${a+b}`
// }
// console.log(sum())


// ------------------more short way to write this fat arrow function --------------------


// const sum = () =>{
//     return `the sum of a and b is ${(a=5)+(b=3)}`
// }
// console.log(sum())


// ------------------more short way to write this fat arrow function --------------------
// if you have only one return keyword in fat arrow function then you dont have to write return keuword in function 

// const sum = () =>`the sum of a and b is ${(a=5)+(b=3)}`;

// console.log(sum());
//-------------------------------------------------------------------------------------------------------



