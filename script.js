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

const plus   = document.querySelector("#plus");
const minus  = document.querySelector("#minus");
const times  = document.querySelector("#times");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");

const clear  = document.querySelector("#clear");
const backspace = document.querySelector("#backspace");
const dot = document.querySelector("#dot");

const current = document.querySelector(".display > .current");
const operator = document.querySelector(".display > .operator");


one.onclick   = () => addNum("1");
two.onclick   = () => addNum("2");
three.onclick = () => addNum("3");
four.onclick  = () => addNum("4");
five.onclick  = () => addNum("5");
six.onclick   = () => addNum("6");
seven.onclick = () => addNum("7");
eight.onclick = () => addNum("8");
nine.onclick  = () => addNum("9");
zero.onclick  = () => addNum("0");

let op;
let a = 0;
let b = 0;

let opPressed = false;

function addNum(num){
    if(opPressed===true){
        current.textContent = `${num}`;
        opPressed = false;
    }
    else{
        current.textContent += num;
    }

}

function operation(op){
    if(a === 0){
        a = parseFloat(current.textContent);
        current.textContent = "";
    }else{
        b = parseFloat(current.textContent);
        a = operate(op,a,b);
        current.textContent = a;
    }
    changeOp(op);
    updateOp(op);
}

function changeOp(operator){
    op = operator;
    opPressed = true;
}

plus.onclick = () => operation("+");
minus.onclick = () => operation("-");
times.onclick = () => operation("*");
divide.onclick = () => operation("/");

equals.addEventListener("click", () => {
    b = parseFloat(current.textContent);
    current.textContent = operate(op,a,b);
    a = 0;
    b = 0;
    operator.textContent = "";
    opPressed = true;
});

clear.addEventListener("click", () => {
    current.textContent = "";
    operator.textContent = "";
    a = 0;
    b = 0;
});


backspace.addEventListener("click", () => {
    current.textContent = current.textContent.slice(0,-1);
});

dot.addEventListener("click", () => {
    if(current.textContent.includes(".")){
        return
    }else if(!current.textContent){
        current.textContent ="0.";
    }else{
        current.textContent +=".";
    }
});

function updateOp(op){
    operator.textContent = `${a} ${op}`;
}

function Calc(){
    this.methods = {
        "+": (a,b) => a + b,
        "-": (a,b) => a - b,
        "*": (a,b) => a * b,
        "/": (a,b) => a / b,
    }
}

function operate(op,a,b){
    let calculator = new Calc();
    return round(calculator.methods[op](a,b))
}

function round(num){
    return Math.round(num*10**3)/10**3
}