// a js object is a collection of named object
// arrar is written in [] brackets
// object is written in {}
let  bio={
    fname:"rahul",
    lname:"gupta",
    age:22,
    profession:'php developer'
}
// console.log(bio);
// console.log(bio.fname);

// change the property name
// bio.age=23;
// console.log(bio);

// adding a new property in objects
bio.mname= "sudama";
// console.log(bio);


// adding a new property in objects
delete bio.mname;
// console.log(bio)

// how to iterate
// for in loop is used to iterare on objects

for ( data in bio){
    console.log(bio[data]);
}

// console.log(typeof(bio));