let sub =()=>{

    let name = document.querySelector("#name").value;
    let num = document.querySelector("#email").value;
    let mno = document.querySelector("#mobile").value;
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#password").value;




    let  errname= document.querySelector("#errname");
    let errmail= document.querySelector("#errmail");
    let errno= document.querySelector("#errno");
    let errpass = document.querySelector("#errpass");
    let  errconfirm = document.querySelector("#errconfirm");


    if(name===""){
        errname.innerHTML="enter your name ";
        errname.style.color="red";
        document.querySelector("name").value = "";
        return false;
    }
    
    else if(num===""){
        errmail.innerHTML="enter your email";
        errmail.style.color="red";
       
        return false;
    }
    else if (!(num.includes('@') && num.includes('.com')))
    {
        errmail.innerHTML="enter a valid email";
        document.querySelector("num").value = "";
        return false;
    }

    else if(isNaN(mno)){
        errno.innerHTML="enter a valid no  ";
        errno.style.color="red";
        return false;
    }
    else if(mno.length !=10){
        errno.innerHTML="please Enter 10 dgts";
        errno.style.color="red";
        return false;
    }
    
    else if(cpass!=pass){
        errpass.innerHTML=" pass and confirm should be same";
        errpass.style.color="red";
        document.getElementById("pass").value = "";
        return false;
    }
    // else if(cpass===""){
    //     errconfirm.innerHTML="confirm your pass";
    //     errconfirm.style.color="red";
    //     return false;
    // }
else if(!(pass.match(/[1234567890]/)  &&
pass.match(/[!@#$%Z^&*()}][{}]?|\]/) &&
pass.match(/[a-z]/)&&
pass.macth(/[A-Z]/))){
    errpass.innerHTML="enter a strong pass";
    errpass.style.color="red";
    document.getElementById("pass").value = "";
    return false;
}


}



//focus()
// error in placeholder
//value epmty