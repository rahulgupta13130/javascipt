// let a,b;
// [a,b,c]=[10,20]
// console.log(a,b)


//if we use this triple dot then all the remaining value will store as array ij last variable
// let a,b;
// [a,b,c,...d]=[10,20,30,40,50,60,70,80,90,100]
// console.log(a,b,c,d)

// object destructuring

// let  bio={
//     fname:"rahul",
//     lname:"gupta",
//     age:22,
//     profession:'php developer'
// }

// let{fname,lname,age,profession}=bio;
// console.log(profession);


//-------------------------------------------



// let  bio={
//     fname:"rahul",
//     lname:"gupta",
//     age:22,
//     profession:'php developer'
// }
// let fname,lname,age,profession;
// ({fname,lname,age,profession}=bio);
// console.log(profession);



////===============================array destructuring 

var lang=["php","html","css","js","mysql","bootstrap"]
let [top1,top2,top3,top4,top5,top6]=lang;
console.log(top5)