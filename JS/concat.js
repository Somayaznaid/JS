//Concatenation 

var num_1 = 2;
var num_2 = 2;
console.log(num_1 + num_2);

var text_1 = "Hello";
var text_2 = "World";
console.log(text_1 + text_2);

var result = text_1 + num_2;
console.log(result);


// concat()  Method

let text1 = "sea";
let text2 = "food";
let result1 = text1.concat(text2);
console.log(result1);


let text3 = "Hello";
let text4 = "world!";
let result2 = text1.concat(" ", text2);
console.log(result2);

let text5 = "Hello";
let text6 = "world!";
let text7 = "Have a nice day!";
let result3 = text1.concat(" ", text2, " ", text3);
console.log(result3);


//using temp
const name1 = "Name" ; 
let Age = 21;
let sp = " ";
let text8 = `my name is ` + " " +  ` ${name1} & my age ${Age}`;
console.log(text8);

