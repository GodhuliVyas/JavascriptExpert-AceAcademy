var greeter ="Hey Hi"; //global scope
greeter = "Say Hello World!";
console.log(greeter)

// function declaration
function test1(){
    var hello = "Hello Every 1"; //local scope
    console.log(hello);
    return hello;
}

function test(apples,oranges){
    var fruits = (apples+oranges)
    console.log("No of Fruits are", fruits);
    return fruits;
}

//console.log(hello)

const result1 = test1()
console.log("result1 = ",result1);

const result = test(5,0)
console.log("result = ",result);


//Hosting (EcmaScript6) ES6

        // console.log(name)
        // var name = "Pooja";


//const
const age = 30
//age = 25  ------- values given in const can't be changed
console.log("Age = ",age)


//let - block Scoped

//console.log(time)   -----it will generate error "Undefined"
let time = 4;

if(time > 3){
    let hello = "hello!"
    console.log(hello)
}

//console.log(hello)

//Arrow Function
const calcAge = (birthYear) => 2023-birthYear
console.log(calcAge(2002))

//Calculating the numbers of year left to get retired
const yearLeft = (birthYear) => {
    const age = 2023-birthYear;
    const retirement = 65 - age;

    return retirement;
}

console.log(yearLeft(2002))

let hasDriverLicense = false;//boolean
const passTest = true;

if(passTest){
    hasDriverLicense = true
}
if(hasDriverLicense){
    console.log("I can drive")
}

const friends1 = 'Tom';
const friends2 = 'Jerry';

const friends = ['Tom','Jerry','Sam']; //assigning the values in an array
console.log(friends)
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);// no of elements, counts from 1
console.log(friends.length-1);// if we want to know the last index

// friends[2]="Jay";
// friends[3]="Jay";
friends[4]="Jay";  // will provide empty at 3rd index
console.log(friends);

const newLength = friends.push('Alice');
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.pop();
console.log(friends);

