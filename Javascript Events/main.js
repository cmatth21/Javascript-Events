// Selecting using getelementbyid
const firstNumber = document.getElementById("first_number");
const secondNumber = document.getElementById("second_number");


// Selecting Using queryselector
const addButton = document.querySelector(".btn");
const main = document.querySelector('.main');
const resultDiv = document.querySelector('.result')
// Selecting Using queryselector all
const numbers = document.querySelectorAll("input");


//Adding eventlistners
addButton.addEventListener("click" , () => {
    const result = Number(firstNumber.value) + Number(secondNumber.value);
    // const div = document.createElement("div"); <-- creates new div, if there isnt one in HTML and shows multiipe calculations
    resultDiv.innerHTML = `${firstNumber.value} + ${secondNumber.value} = ${result}`;
    if (result >= 0) {
        resultDiv.className = 'positive'
        resultDiv.style.fontSize = "40px"
    } else {
        resultDiv.className = 'negative'
        resultDiv.style.fontSize = "20px"
    }
    // main.appendChild(div)
})
