var marks = Number(prompt("Input Your Gaining Mark(You have to input between 0 and 100)"));

if(marks <= 100 && marks >= 90){
document.write("Congratulations! You passed the exam and got golden A+");

}else if(marks <= 89 && marks >= 80){
document.write("Congratulations! You passed the exam and got A+");

}else if(marks <= 79 && marks >= 70){
document.write("Congratulations! You passed the exam and got A");

}else if(marks <= 69 && marks >= 60){
document.write("Congratulations! You passed the exam and got B+");

}else if(marks <= 59 && marks >= 50){
document.write("Congratulations! You passed the exam and got B");

}else if(marks <= 49 && marks >= 40){
document.write("Congratulations! You passed the exam and got C+");

}else if(marks <= 39 && marks >= 33){
document.write("Congratulations! You passed the exam and got C");

}else if(marks <= 32){
document.write("You failed the exam");

}else{
document.write("Please input a valid number!!!")
}