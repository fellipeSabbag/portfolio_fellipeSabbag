
const previousOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement =document.querySelector("[data-current-operand]")
const keyboard = document.querySelector(".keyboard")
//buttons
const Btns = Array.from(document.querySelectorAll(".button")) //tirar os OP btns e dar um data set pros numbers especificamente
const equalBtn = document.querySelector("[data-result]")
const operationBtn = document.querySelectorAll("[data-action]")
const clearBtn = document.querySelector("[data-clear]")
const numberBtns = Array.from(document.querySelectorAll("[data-button=number]"))

// -------- number button generator ---------
function createButton (x) {
   var button = document.createElement('button') 
   var label = document.createTextNode(`${x}`)
   button.appendChild(label)
   button.classList.add("button")
   keyboard.appendChild(button)
  
   return button
}
for (c=9;c>-1;c--) {
   const btn = createButton(c) 
   numberBtns.push(btn)
   btn.setAttribute("data-button","number")
}


// -------- calculator -----------------------
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement;
      this.currentOperandTextElement = currentOperandTextElement;
      this.clear();
    }
  
    calculate() {
        let result;

        const previousNun = parseFloat(this.previousOperand)
        const currentNun = parseFloat(this.currentOperand)

        switch (this.operation) {
            case "+":
                result = previousNun + currentNun
                break;
            case "-":
                result = previousNun - currentNun;
                break;
            case "÷":
                result = previousNun/currentNun;
                break;
            case "x":
                result = previousNun*currentNun;
                break;

                default:
                    return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand ="";
    }

    chooseOperation(operation) {
      if (!this.currentOperand) return;
        if (this.previousOperand !=="") {
            this.calculate();
        }
        this.operation = operation
        this.previousOperand = `${this.currentOperand} ${this.operation}`
        this.currentOperand =``

    }

    appendNumber(number) {
      if (this.currentOperand.includes(".") && number === ".") return;
  
      this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }
  
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
  
    updateDisplay() {
      this.previousOperandTextElement.innerText = this.previousOperand;
      this.currentOperandTextElement.innerText = this.currentOperand;
    }
  }

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

for (const num of numberBtns) { 
    num.addEventListener("click", () => {
    calculator.appendNumber(num.innerHTML)
    calculator.updateDisplay()
})
}

for (const opBtn of operationBtn) {
    opBtn.addEventListener("click", ()=>{
    calculator.chooseOperation(opBtn.innerText)
    calculator.updateDisplay();
})
}

clearBtn.addEventListener("click", ()=>{
  calculator.clear()
  calculator.updateDisplay()
})

equalBtn.addEventListener("click", ()=>{
  calculator.calculate();
  calculator.updateDisplay();
})