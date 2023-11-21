/** Select required elements in DOM */

const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const resultEl = document.getElementById('result');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

//Add functionality to copy password on clipboard



generateEl.addEventListener('click', () => {
   const length = lengthEl.value;
   const hasLower = lowercaseEl.checked;
   const hasUpper = uppercaseEl.checked;
   const hasNumbers = numbersEl.checked;
   const hasSymbols = symbolsEl.checked;

   resultEl.innerText = generatePassword( hasLower, hasUpper, hasNumbers, hasSymbols, length);
})


//Add functionality to generate password
function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword =''
    const typesCount = lower+upper+number+symbol
} 

//Generate random lower case alphabets 
function getRandomLower() {
   function getRandomLower (){
    String.fromCharCode(Math.floor(Math.random()*26)+97);  //'ascii reference' see w3 schools website
                    //return nearest max integer

}
}

//Generate random upper case alphabets 
function getRandomUpper() {
    function getRandomUpper() {
        function getRandomUpper(){
         String.fromCharCode(Math.floor(Math.random()*26)+ 65);  
                        
     }
     }
}

//Generate random numbers
function getRandomNumber() {
    function getRandomNumber() {
        function getRandomNumber (){
         String.fromCharCode(Math.floor(Math.random()*10)+48);  //'ascii reference' see w3 schools website
     }
     }
}

//Generate random symbol
function getRandomSymbol() {
    const symbols= '!@#$%^&*()_+=-<>?/\|,.[]{}'

    return symbols[Math.floor(Math.random() * symbols.length)]
     
}
