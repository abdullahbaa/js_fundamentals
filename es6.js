const student ={
    name : 'sakib',
    age : 32,
    numbers:[12,33,55,],
    movies :['King khan','Dhakar Mastan']

}
//1-Tamplate String
const about = `My namee is  ${student.name} age of  ${student.age} has numbers ${student.numbers[2]} also like movies ${student.movies[0]}`;
// console.log(about);


//2- arrow function

const getFiftyFive =() => 55;
const addSixtyFive = num => num+65;
const evenNumbers = x => x % 2 == 0;
const addThree =(x,y,z) => x+y+z;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;


}

// spread operation

// const newNumbers = numbers;

const newNumbers = [...numbers];

numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);

// console.log(newNumbers);
// console.log(numbers);

// create a new array from an older array and add an Element

const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
