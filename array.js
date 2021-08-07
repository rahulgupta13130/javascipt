// in array we use for of loop to iterate
// we use for off loop only  on iterable objects
// arrays and strings are iterable objects
// for of loop we used on arrays and string


// let lang=["php","html","css","js","mysql","bootstrap"]
// console.log(lang)

// for (items of lang){
//     console.log(items)
// }


// if you want single data at a time and also if you want to change
// let lang=["php","html","css","js","mysql","bootstrap"]
// console.log(lang[3])

// if you want check the length of an array
// let lang=["php","html","css","js","mysql","bootstrap"]
// console.log(lang.length)

// if you want to acess the last element
// let lang=["php","html","css","js","mysql","bootstrap"]
// console.log(lang[lang.length-1])


//iteration in array
// let lang=["php","html","css","js","mysql","bootstrap"]
// for (var i=0;i<lang.length;i++){
//     console.log(lang[i])
// }

// after es6 we have for in and for off loop
// difference btn for in and for of is in give you index number and of give you element of that index number
var lang=["php","html","css","js","mysql","bootstrap"]

for (let elements in lang){
    console.log(elements)
}


// for (let elements of lang){
//     console.log(elements)
// }