// let uname = prompt("enter name");
// let uweight = Number(prompt("enter number"));
// let uheight = Number(prompt("enter number"));
// function BMI() {
//     return((uweight / (uheight / 100)));
// }
// const bmi = BMI();

// console.log(bmi);

let uname = prompt("Enter Name");
let uweight = Number(prompt("Enter weight in kg"));
let uheight = Number(prompt("Enter height in Meters"));
function BMI() {
    return((uweight / (uheight / 100)));
}
const bmi = BMI();

console.log(bmi);