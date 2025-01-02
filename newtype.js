
// //IIFE- immediatly invoked function expression 

// ( function(){

//     console.log("IIFE");
    
// }
// )();
let off ;
let counter=()=>{
    var a = 10 ;
     off = setInterval(() => {
        
        
       

        console.log(a);
        a--;
    }, 1000);

   
    
}
let band=()=>{
    clearInterval(off);
}
let isname=true;
setInterval(()=>{
    let display = document.querySelector("#vvv")
    display.innerHTML=isname?"vansh":"chouksey"
    isname= !isname
},1000)
// knknjol