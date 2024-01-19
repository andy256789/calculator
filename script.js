const one   = document.querySelector("#c1");
const two   = document.querySelector("#c2");
const three = document.querySelector("#c3");
const four  = document.querySelector("#c4");
const five  = document.querySelector("#c5");
const six   = document.querySelector("#c6");
const seven = document.querySelector("#c7");
const eight = document.querySelector("#c8");
const nine  = document.querySelector("#c9");
const zero  = document.querySelector("#c0");
const display = document.querySelector(".display > .current");

one.onclick   = () => display.textContent += "1";
two.onclick   = () => display.textContent += "2";
three.onclick = () => display.textContent += "3";
four.onclick  = () => display.textContent += "4";
five.onclick  = () => display.textContent += "5";
six.onclick   = () => display.textContent += "6";
seven.onclick = () => display.textContent += "7";
eight.onclick = () => display.textContent += "8";
nine.onclick  = () => display.textContent += "9";
zero.onclick  = () => display.textContent += "0";



function Calc(){
    this.methods = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
        "*": (a,b) => a * b,
        "/": (a,b) => a / b,
    }
}

let op;
let a;
let b;

function operate(op,a,b){
    let calculator = new Calc();
    console.log(calculator.methods[op](a,b));
}
