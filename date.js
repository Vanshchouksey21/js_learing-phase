let v =new Date()

// console.log(v.toLocaleDateString());

// let ans =v.getFullYear();
// console.log(ans);
// let ans1 =v.getMonth();
// console.log(ans1);
// let ans2 =v.getDay();
// console.log(ans2);
// let ans3 =v.getHours();
// console.log(ans3);
// let ans4 =v.getMinutes();
// console.log(ans4);
// let ans5 =v.getSeconds();
// console.log(ans5);
// let ans6 =v.getMilliseconds();
// console.log(ans6);
let clicked=()=>{
    let  give=document.querySelector("#give")
    let date = new Date();
    let arr2 = [ "sunday" , "monday" , "tuesday" , "wednesday" , "thursday" , "friday" ,"saturday"];
    let time=date.getDay();
    give.innerHTML=arr2[time];
}



