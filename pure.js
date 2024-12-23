let inp=document.querySelector("#inp")
inp.addEventListener("keydown",(e)=>{
    console.log(e.key);

})
let inpu=document.querySelector("#inpu")
inpu.addEventListener("input",()=>{
    console.log(inpu.value);
    
})

// upper one p tag mai print with event listner.
// there will be one input and one button on clicking the button the text written on input should print on the tag.