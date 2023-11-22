var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log("numberOfDrumButtons", numberOfDrumButtons);

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonText = this.innerHTML;
        console.log("buttonText",buttonText);
        makeSound(buttonText);
        buttonAnimation(buttonText);
    })
}

//Add event listener on keypress
document.addEventListener("keypress", function(event){
    console.log("event", event);

    //makeSound(event.key);
    //buttonAnimation(event.key);
})


function makeSound(key) {
    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;
        case "s":
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;
        case "j":
                var tom1 = new Audio('sounds/snare.mp3');
                tom1.play();
                break;
        case "k":
            var tom1 = new Audio('sounds/crash.mp3');
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play();
            break;
            
            default: "Invalid Input";
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");      //the button pressed will have the classname 'pressed', adding classname dynamically
                                                
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);            //classname will remove after 100ms
}
