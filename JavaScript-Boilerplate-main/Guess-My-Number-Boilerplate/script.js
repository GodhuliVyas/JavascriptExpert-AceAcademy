let secretNumber = Math.trunc(Math.random() *20) +1;

console.log("secretNumber", secretNumber);

let score =20;
let highScore = 0;

const displayMessage = function(message){
    const check =  document.querySelector('.message').textContent = message;
    //console.log("check",check);
}
document.querySelector('.check').addEventListener('click',function(){
                              //monitors if the check function is working continously
    const guess = Number(document.querySelector('.guess').value);
                //datatype                      //input box 
    //console.log("guess", guess);
//no input put invalid input

    if(!guess){
      displayMessage("Invalid Guess");
    }
        else if(guess === secretNumber){
      //background change
      //replace ? with number
      displayMessage("Correct Guess");
      document.querySelector('.number').textContent = guess;

      document.querySelector('body').style.backgroundColor = 'blue';
      document.querySelector('.number').style.width = '30rem';

      if(score>highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }

        else if(guess!== secretNumber){
  //score--
  //if guess >  secretnumber , too high
  //if guess < secretnumber , too low
  //display score 
  if(score>1){
    displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
                                //ternary operator ? used here
    score--;
    document.querySelector('.score') .textContent = score;
    //console.log("highscore", highScore);
  }
}       
      else{
          displayMessage('You lost the game!, Give Another try!');
          document.querySelector('.score').textContent = 0;
}    
})   
displayMessage("Start Guessing :)");


document.querySelector('.again').addEventListener('click',function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() *20) +1;
  displayMessage('Start Guessing');
  document.querySelector('.score').textContent =  score;
  document.querySelector('.number').textContent = '?',
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222',
  document.querySelector('.number').style.width = '15rem';
})
