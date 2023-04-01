// 1-Write a function to find the largest element in an array.
const cars = ["Sammmmmmmmmmmmmmmmmmmmmmmmmmcab", "Volvo", "BMWvvvvvvvvvv "];
let largest = cars[0];
function largest_element_in_array(arr){
   for(let i = 0 ; i < arr.length ; i++){
       if( arr[i].length > largest.length ){
        largest = arr[i];
       }
   } 
   return largest;
} 

console.log(largest_element_in_array(cars));


// 2-Write a function to find the smallest element in an array.

const car = ["Saab", "Volvo", "B"];
let smallest = car[0];
function smallest_element_in_array(arr){
   for(let i = 0 ; i < arr.length ; i++){
       if( arr[i].length < smallest.length ){
        smallest = arr[i];
       }
   } 
   return smallest;
}

console.log(smallest_element_in_array(car));


// 3-Write a function to find the sum of all elements in an array.
 const num_arr = [1,2,3,2];
 function cal_arr_sum(cal_sum){
    
    let sum= 0;
    for(let i=0 ; i < cal_sum.length ; i++) {
       sum += cal_sum[i]; 
    }
    return sum;
 }

 console.log(cal_arr_sum(num_arr));

// 4-Write a function to find the average of all elements in an array.


function cal_arr_avg(cal_avg){
   
   let avg= 0;
   for(let i=0 ; i < cal_avg.length ; i++) {
      avg += cal_avg[i]; 
    
   }
   return (avg / cal_avg.length );
}

console.log(cal_arr_avg(num_arr));

// 5-Write a function to find the median of all elements in an array.

function cal_arr_med(cal_med){
   
    let med= Math.floor(cal_med[cal_med.length/2]);
    for(let i=0 ; i < cal_med.length ; i++) {

        if (cal_med.length %2 ==! 0 ){ //odd
            return cal_med[med];
        } else {
                return (cal_med[med-1] + cal_med[med] ) /2 ;
        } 
    }
 }
 console.log(cal_arr_med(num_arr));



// 6-Write a function to remove all duplicates from an array.

const arr = [1 ,2 ,4,1 , 4 ,8]; 

function remove_duplicates(remove_dup){
         let removed = [];
       for(let i=0 ; i < remove_dup.length ; i++) {
           if ( removed.indexOf(remove_dup[i]) === -1 ){
            removed.push(remove_dup[i]);
           }   
    }
    return removed ;
 }
 console.log(remove_duplicates(arr));


// 7-Write a function to sort an array in ascending order.

function sort_ascending(sort){
    const sorted = [];
  for(let i=0 ; i < sort.length ; i++) {
      if(sort[i] < ){

      }
   }
     return sorted ;
}
console.log(sort_ascending(arr));



// 8-Write a function to sort an array in descending order.

// 9-Write a function to shuffle the elements of an array randomly.
