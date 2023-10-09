let uname = prompt("Enter Name");
let uweight = Number(prompt("Enter weight in kg"));
let uheight = Number(prompt("Enter height in Centimeters"));
function BMI() {
    return(uweight / (Math.pow((uheight / 100), 2)));
}
const bmi = BMI();

console.log(bmi);

function BMIrange(bmi){
    if(bmi <= 18.5){
        return " Underweight";
    }
    else if(bmi >=30){
        return " Obese";
    }
    else if(bmi >=18.5 && bmi <=24.9999){
        return " Healthy";
    }
    else if(bmi <=29.999 && bmi >=25){
        return " Overweight";
    }
    else{
        return "error";
    }
}
console.log("hello," + uname +" Your BMI is:" + bmi + BMIrange(bmi))
