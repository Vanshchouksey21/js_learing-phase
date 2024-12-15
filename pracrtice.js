'use strict';

// Greeting function
function first() {
    let a = prompt("What is your name:");
    if (a) {
        alert("Hello " + a + "!");
    } else {
        alert("You didn't enter your name.");
    }
}

// Confirm liking JavaScript
function second() {
    let a = confirm("Do you like JavaScript?");
    if (a) {
        alert("That's great!");
    } else {
        alert("No worries, keep learning!");
    }
}

// Replace 'JavaScript' with 'coding'
function third() {
    let a = "JavaScript is easy, I love script.";
    let b = confirm(a + " -- Do you want to replace 'JavaScript' with 'coding'?");
    if (b) {
        alert(a.replace("JavaScript", "coding"));
    } else {
        alert("Okay, no changes made.");
    }
}

// Log numbers from 1 to 10
function fourth() {
    for (let i = 1; i <= 10; ++i) {
        console.log(i);
    }
}

// Collect favorite fruits
function fifth() {
    let arr = [];
    for (let i = 0; i < 3; ++i) {
        let fruit = prompt("Enter your " + (i + 1) + " favorite fruit:");
        if (fruit) {
            arr.push(fruit);
        } else {
            alert("You didn't enter anything. Try again.");
            i--; // Repeat the current iteration
        }
    }
    alert("Your favorite fruits are: " + arr.join(", "));
}

//arr_sec
function sixth(){
    let arr = [6,5,3]
    let sum=0;
    for(let i=0 ;i<3;++i){
         sum=sum+arr[i];
        
    }
    alert(sum);
}