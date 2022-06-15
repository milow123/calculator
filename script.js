const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number)=>{
    calculatorScreen.value = number
}


const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)

    })
})

const operator = document.querySelectorAll('.operator')
    operator.forEach((operator)=>{
        operator.addEventListener('click',(event)=>{
            inputOperator(event.target.value)
            
        })
    })

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click',(event)=>{
    calculate()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click',(event)=>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// const percent = document.querySelector('.percentage')
// percent.addEventListener('click',(event)=>{
//     inputPercent(event.target.value)
//     updateScreen(currentNumber)
// })

let prevNumber = ''
let calculatorOperator = ''
let currentNumber = '0'

const inputNumber = (number)=>{
    if(currentNumber === '0'){
        currentNumber = number
    }else{

        currentNumber += number
    }
}

const inputOperator = (operator)=>{
    if(calculatorOperator === ''){
        prevNumber = currentNumber
    }
    calculatorOperator = operator
    currentNumber = '0'
}

const calculate = ()=> {
    let result = ''
    switch(calculatorOperator){
        case '+' :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-' :
            result = prevNumber - currentNumber
            break
        case '*' :
            result = prevNumber * currentNumber
            break
        case '/' :
            result = prevNumber / currentNumber
            break
        default :
        break
    }
    currentNumber = result
    calculatorOperator = ''
}

const clearAll = ()=>{
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}
inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
// const inputPercent = ()=>{
//     currentNumber = prevNumber / '100'
    
    
// }