let count =0 ;
dgt.style.fontSize="50px";
dgt.style.fontWeight="bold";
dgt.style.color="red";
let a=inc=()=>{
    count++;
    document.querySelector('#dgt').innerHTML=count;
    dgt.style.color="black";

}
let b=dec=()=>{
    if(count>0){
    count--;
    document.querySelector('#dgt').innerHTML=count;
    }
    else{
        dgt.style.color="red";
        alert("abbe bas kar , aree sir ap ho kya sorry sorry");
    }
}
let c=rec=()=>{
    // c.style.backgroundColor="red";
    if(count>0){
        count=0;
        dgt.style.color="red";
        document.querySelector('#dgt').innerHTML=count;
        alert("abhi theek karke dikhata hu");
}
else{
    dgt.style.color="red";
    alert("zero pe hi hai bhai");
}
}
clr.style.backgroundColor="black";
clr1.style.backgroundColor="black";
clr2.style.backgroundColor="black";
clr.style.color="white";
clr.style.boxShadow="0px 0px 10px 10px red";
clr.style.margin="10px";
clr1.style.color="white";
clr1.style.boxShadow="0px 0px 10px 10px red";
clr1.style.margin="10px";
clr2.style.color="white";
clr2.style.boxShadow="0px 0px 10px 10px red";
clr2.style.margin="10px";