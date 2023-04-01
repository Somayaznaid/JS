// 1- Write a program that prints numbers from 1 to 10 using a for loop.
for (let i=1 ; i < 11 ; i++) {
 console.log(i);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
  for(let i=1 ; i <= 10 ; i++){
     if( i % 2 == 0){
         console.log(i);
     }
  }

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
for (let i=1 ; i < 11 ; i++) {
    if(i%2 != 0) {
    console.log(i); }
   }

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
let enterNum = 2;
for (let i=1 ; i < 11 ; i++) {
    
    console.log( enterNum + "*" + i + " = " + i*enterNum ); 
   }

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
 let i= 1;
 let sum = 0;
 while (i <= 100) {
    sum = i + sum ;
    i++;
 }
  console.log( "the sum of numbers from 1 to 100 = "+ sum); 

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
    let j= 1;
    let fac = 1;
    let enterNum2 = 3;
         while (j <=enterNum2) {
        fac = j * fac ;
         j++; 
      } 
       console.log( "the factorial of Number u enter " + " = " + fac);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
      
      //  let counter= 1;
      //  let Fibonacci = 1;
      //  let enterNum3 = 9;
      //  while (counter <= enterNum3) {
      //    Fibonacci = Fibonacci + counter;

          
      //  } 
      


// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

let reverse = 20;
while (reverse >= 5) {
   console.log(reverse);
   reverse = reverse -5;
   
   
}
