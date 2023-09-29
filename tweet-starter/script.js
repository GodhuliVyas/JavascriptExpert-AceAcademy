const textInput = document.getElementById('textInput');
const charCounter = document.getElementById('charCounter');

textInput.addEventListener('input',function(){
    const remainingChars = 255 - textInput.value.length;
    charCounter.textContent = remainingChars;
})
