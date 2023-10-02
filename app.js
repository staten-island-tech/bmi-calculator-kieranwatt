/* // declare and define functio, input output machines
//we can pass in arguments or parameters
function test (mess) {
    console.log(mess)
}
//run the function
test("bruh");
//string ""
const x = "String";
test(x);
const y = 98;
test(y) 
const z = true;
test(z);
function add(num1,num2){
    console.log(num1 + num2);
}
test(70+30)
//need to convert string to a number
let a = Number(prompt("enter number"));
let b = Number(prompt("enter number")); 
add(a,b); */
function add(x, y) {
    //creates an output
    return x + y;
}

function calc(){
    const sum = add(45, 34);
console.log(sum);
}
calc();