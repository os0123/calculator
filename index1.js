let button=document.querySelectorAll(".btn");
let text1=document.getElementById("txt1");
let text2=document.getElementById("txt2");
let reset=document.getElementById("reset");
let currentInput="";
let operator="";
button.forEach(btn=>{
    btn.addEventListener("click",()=>{
        let value=btn.textContent;
        if (!isNaN(value)) {
            currentInput=currentInput+value;
            text1.value=currentInput;
        }
        if (value === "+" || value === "-" || value === "*" || value ==="/" || value==="%" || value==="(" || value ===")" || value===".") {
            operator=value;
            currentInput+=`${value}`;
            text1.value=currentInput;
        }
        try {
            if (value ==="=") {
                currentInput=eval(currentInput).toString();
                text2.value=currentInput;
            }
        } catch (error) {
            text2.value="Error";
        }

    })
})
reset.addEventListener("click",()=>{
    text1.value="";
    currentInput="";
    text2.value="";
})