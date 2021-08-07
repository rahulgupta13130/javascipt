// let vs const vs var

// var ===> function scope
// let and const ===> block scope


// var myName="rahul gupta";
// console.log(myName);
// myName="rahul sudama";
// console.log(myName);

// if you use var then we can change its value any time

// --------------------------------------------------------

// let myName="rahul gupta";
// console.log(myName);
// myName="rahul sudama";
// console.log(myName);


// --------------------------------------------------------

// comst is like constant if you assign any value in it later we cannot update it


// const myName="rahul gupta";
// console.log(myName);
// myName="rahul sudama";
// console.log(myName);



// hence the scope of var keyword is functional scope thats why it is giving beloe op


// function biodata(){
//     var myFirstName="rahul";
//     console.log(myFirstName);
//     if(true){
//         var myLastName="gupta";
//         console.log("inner "+ myLastName);
//         console.log("inner "+ myFirstName);
//     }
//     console.log("outer "+ myFirstName);
// }
// biodata() 


// hence the scope of let keyword is block scope thats why it is giving error



// function biodata(){
//     let myFirstName="rahul";
//     console.log(myFirstName);
//     if(true){
//         let myLastName="gupta";
//         console.log("inner "+ myLastName);
//         console.log("inner "+ myFirstName);
//     }

//     console.log("outer "+ myLastName);
// }
// biodata() 




