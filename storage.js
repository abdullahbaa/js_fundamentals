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

    const pen {
        price=330,
        brand ='gulugulu'
    }
    localStorage.setItem('pen',JSON.stringify(pen))