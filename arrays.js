'use strict ';
//pop-delete the array from last 
//push- increase the array from the last 
//shift - delete the element from the first
//unshift - increase the element from the first
//splice - which insert the value in array any where
// map /filter - returns the new array 
// map - map performs all mathamatical operations,it is a hire order fn...
// filter - its filters that 
// for of /for each - returns the new string 
// callback - it is a fn which passes in a hire order fn 
// nan-not a number ;                            
// array define 

let arr = [ " vansh " , "ansh" , 21 , 7];
let arr2 = [ " yash " , "ansh" , 55 , 7];



// for print 
// document.write(arr);




//for length of array
// document.write(arr.length)



// for concat the string
// document.write(arr.concat(arr2));



//for sorting the arraay in assendiing order
let arr3=[ 2 ,3,1,44,33,2];
// document.write(arr3.sort());






// for reverse the array
// document.write(arr3.reverse())





// for desending order firstly sort the array and then reverse it ;
// document.write(arr3.sort().reverse());


//for enter the value anywhere
// arr3.splice(2,0,24);
// document.write(arr3);



// map 
// let ans1= arr3.map(function(num){
//     return num*2;
// })
// console.log(ans1);



// filter 

// let ans2 = arr3.filter(function(num){
//     return num % 2 ==0;
// }) 
// console.log(ans2);



// // for each  - it returns the string 


// let ans3 = arr3.forEach(function(num){
//     console.log(num*2);
// })



//for of - it also retuns the string ..........:-:----


// for(let i of arr3){
//     console.log(i)
// }




// function vans(){
// //for print the array in click 
// let arr = [ 2 ,3,1,44,33,2];
// document.write(arr.slice(2,5))
// }                                                                                         


// // arr3=[ 2 ,3,1,44,33,2];
// // arrow  fn 
// let nn = () => {
    // let arr3 = [2, 3, 1, 44, 33, 2];




    // let annn = arr3.map((nn) => nn * 2); // Use `nn` from the callback parameter
    // console.log(annn);


// //for assending 
//     let anss=arr3.sort((a,b)=>a-b)
//     console.log(anss)



    // //for desending 
    // let ansss=arr3.sort((a,b)=>b-a)
    // console.log(ansss)


    
// };
// nn();



let hello=(a,b)=>{
   return a+b;
}
console.log(hello(7,8));

              
                                           
                                    
                                    