let userInput = document.querySelector("#inp");
let text = document.querySelector("#message");

userInput.addEventListener("keydown", () => {
    text.innerHTML = userInput.value;
    console.log(userInput.value);
    
});
let btn=()=>{
    alert("kyun click krni hai ")
}