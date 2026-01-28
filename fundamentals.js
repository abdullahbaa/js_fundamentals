//1- How to declare a variable using let and const
const fatherName= 'Abdul Aziz';
let season='rainy';
season ='winter';
 

// 2- 6 basic Conditions >,<,>=,<=,===,!==
// Multiple Conditions: && , ||

if(fatherName === 'Abdul Aziz' || season === 'rainy'){
 console.log(fatherName,season);

}
else if(fatherName === 'abdul aziz'){
console.log(fatherName);
}
else{
console.log('Nothing');
}

// 3-Array declare
// index
// length,push,pop

const number=[22,33,44,55,66];
numbers[0]=50;
// 3-loop
// for,while,do while,do
for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5- functions

function multiply(num1,num2){
    const result =num1 * num2;
    return result;
}
const output =multiply(35,78);

// 6-Object
// 3 ways to access property by name
const student ={
    name : 'sakib',
    age : 32,
    movies :['King khan','Dhakar Mastan']

}

console.log(student.age);
