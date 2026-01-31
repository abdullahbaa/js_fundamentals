// '',0,false,null,undefined     [falsy strings]
// 'alams',5,true,{},[]       [truthy strings]

// check truthy
const myVar = 5;
if(myVar){
    myVar=myVar*100;

}
else {
    myVar=0;
}


let myMoney =50;
// you check negative and falsy anything
if(!myMoney){
    myMoney = myMoney -30;
}

const money =80;
let food;
if(money >100){
    food='Biriyani';

}
else{
    food='Cha Biscuits';

}

// ternary

let food1 = money > 100 ? 'biriyani' : 'cha Biscuits';
console.log(food1);


let drink =(money >100 && myVar >100) ? 'coke' : 'filter Water';
console.log(drink);

// number to string conversion

const num1 = 52;
console.log(num1);
const numStr = num1 +'';
console.log(numStr);


// string to number

const input = '560';
const inputNum = +input;
console.log(inputNum);

// use && if left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// how to change true to false or false to true[toggle]
isActive =  !isActive;