// 1-JSON   stringofy,parse
const student ={
    name : 'Sakib Khan',
    age : 32,
    numbers:[12,33,55,],
    movies :['King khan','Dhakar Mastan']

}
// JavaScript to string conversion
const studentJSON =JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
const studentObject =JSON.stringify(studentJSON);
// console.log(studentObject);

// string to javaScript convertion

const studentObject1 = JSON.parse(student);
// console.log(studentObject1);


// 2-fetch


fetch('url')
.then(res =>res.json())
.then(data => console.log(data));


// keys , values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [22,33,44,5,66,55];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in


// add or remove on array
const products =[
    {name: 'laptop', price: 20000, brand : 'Lenovo' ,color:'Blue'
    },
    {name: 'Phone', price: 20000,  brand : 'Samsung', color:'Green'
    },
    {name: 'Watch', price: 3000, brand : 'Casio', color:'Yellow'
    },
    {name: 'Sunglass', price: 300, brand : 'raybon', color:'Black'
    },
    {name: 'Camera', price: 9000,brand : 'Canon', color:'Black'
    }
];

const newProduct ={name: 'webcam', price : 700, brand : 'lal'};

// copy products array then add newProduct 

const newProducts =[...products, newProduct];
console.log(newProducts);


// create a array and then add specific items
// remove phone means create a new array without the product

const remaining  = products.filter(p =>p.name !=='phone');