let blnk ="";

let display =(value)=>{
let display = document.querySelector("#dikh");
blnk =blnk+value;
display.innerHTML=blnk;
}

let soln=()=>{
    let display = document.querySelector("#dikh");
    display.innerHTML=eval(blnk);
    blnk=eval(blnk);
    blnk.toString();
}