const PI = 3.14;

let radius = 3;

let area = radius * radius * PI;

console.log(area)



radius = 20;

area = radius * radius * PI;

console.log(area)


const one = 1;
const two = '2';

result = one + two; 

console.log(result)


let globalVariable = "I'm global";

function myFunction() {
    let blockVariable = "I'm local";
}

console.log(globalVariable); // This will work
console.log(blockVariable); // This will throw an error because blockVariable is not defined outside the function

