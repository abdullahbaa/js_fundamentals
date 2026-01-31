const addToLocalStorage=() =>{
    const idInput =document.getElementById('storage-id');
    const id= idInput.value;
    const valueInput =document.getElementById('storage-value');
    const value= valueInput.value;

    if(id && value){
        localStorage.setItem(id,value);
    }
    localStorage.setItem(id,value);
    idInput.value ='';
    valueInput.value='';
    valueInput.value='';
}

    value= JSON.stringify([value]);

    const pen ={
        price:330,
        brand :'gulugulu',
        24: 'summer'
    }
    localStorage.setItem('pen',JSON.stringify(pen));

    // dot notaton

    const dotNotation = pen.brand;

    // braket Notation

    const braketNotation = pen.['price'];
    console.log(braketNotation);

    const num = pen[24];
    console.log(num);