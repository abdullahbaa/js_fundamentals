// 1-array distructuring
const numbers =[42,65];
// const x = numbers[0];
// const y = numbers[1];
// const [x,y]= [66,88];
// const [x,y]= numbers;
const [ x, y] = numbers;
// console.log(x,y);
function boxify(num1, num2){
const nums =[num1,num2];
return nums;
}
const [first,second]=boxify(90,100);
// console.log(boxify(90,100));

const student ={
    name : 'sakib',
    age : 32,
    numbers:[12,33,55,],
    movies :['King khan','Dhakar Mastan']

}

// const [firstMovie,secondMovie]=['King khan','Dhakar Mastan'];
const [firstMovie,secondMovie]=student.movies;
console.log(firstMovie,secondMovie);

// object distructuring

const {name,age} ={name:'alu',age:22}
const {name1,age1} ={id:22,name:'alu',age:22}


const employees ={
    name:'Abdullah',
    age:26,
    company:'AIMS BD',
    location:'Dhaka',
    cEmployees:15,
    language:'JS,HTML,CSS',
    specification:{
        height:88,
        weight:72,
        drink:'water',
        watch: {
            color:Black,
            price:9000,
            brand: 'Gold',
            country:{
                brandCountry:'London',
                brandCity:'Birminghum',
                brandLocation:'city center'
            }
        }
    }

}

const { company, location} = employees; 
// const {height,weight} =employees?. specification?.drink;

const {brandCity,brandLocation} =employees.specification.watch.country;
// console.log(employees);


