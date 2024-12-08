
'use strict '; //for ideal use....
var a = null
console.log(typeof(a)) 
var ab=2;
var bc=3;
console.log(ab+bc)


//bom{
// confirm
// alert 
// prompt}

// var an= parseInt( prompt("Enter a no :?")) ;
// console.log(an);
// var ans=  parseInt (prompt("Enter 2nd no :?")) ;
// console.log(ans);
// alert ((an+ans));



// var a = confirm("is my website is good");
// if( a==true){
//     alert("thank you");
// }
// else {
//     alert("no worries");
// }


// function van(){
// let a = 0;
// if(a<0){
//     alert("no is negative");
// }
// else if(a==0){
//     alert("no is zero");
// }
// else{
//     alert("no is positive")
// }

// let a=19
// (a>=18)?alert("you can vote "):alert("you can't vote");


// let an= ( prompt("Enter your age :?")) ;
// (an>=18)?alert("you can vote "):alert("you can't vote");
// let a = confirm("if you have completed a course ");
// let b = confirm("if you have  a certificate");
// if(a==true && b==true){
//     alert("completed")
// }
// else{
//     alert("not completed")
// }


// a=prompt("enter the price of an item :");
// b=confirm("are you having a discount");
// if(b==true){
//     alert(a*0.9)
// }
// }

// van();


// marks
function marks ()
{
    let marks =prompt("What is your exam score")
    if(marks<33 && marks>=0){
        alert("you are failed");
    }
    else if(marks >=33 && marks <= 100){
        alert("you are passed");
    }
    else{
        alert("invalid input");
    }
}
marks();
