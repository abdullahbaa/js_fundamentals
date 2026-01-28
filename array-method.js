const products =[
    {name: 'laptop', 
        price: 20000,
        brand : 'Lenovo',
        color:'Blue'
    },
    {name: 'Phone', 
        price: 20000,
        brand : 'Samsung',
        color:'Green'
    },
    {name: 'Watch', 
        price: 3000,
        brand : 'Casio',
        color:'Yellow'
    },
    {name: 'Sunglass', 
        price: 300,
        brand : 'raybon',
        color:'Black'
    },
    {name: 'Camera', 
        price: 9000,
        brand : 'Canon',
        color:'Black'
    }
    
];

// const brands =products.map(product => product.brand);
// console.log(brands);
// const prices = products.map(product => product.price);
// console.log(prices);
// const colours = products.map(product => product.color);
// console.log(colours);





// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product));


// 3-filter

const cheap =products.filter(product => product.price <= 5000);
const expensive =products.filter(product => product.price >= 5000);
// console.log(cheap,expensive);

const specification = products.filter(product => product.name.includes('n'));
// console.log(specification);

// 4-Find 
const special = products.find (product => product.name.includes('c'));
console.log(special);