const button = document.querySelector('[data-button]');
const tbody = document.querySelector('[data-tbody]');

button.addEventListener('click', (event)=>{
    
    event.preventDefault();
    
    const client = new Client();

    const newTr = trCreator(client.name.value, client.birth.value, client.category.value);

    tbody.appendChild(newTr);
     
    client.name.value = ''
    client.birth.value = ''
    client.category.value = ''
    client.name.focus();
});

function trCreator(inputName, inputBirth, inputCat){
    const tr = document.createElement('tr');
        
    tr.appendChild(tdCreator(inputName));
    
    tr.appendChild(tdCreator(formateDate(inputBirth)));
    
    tr.appendChild(tdCreator(ageGenerator(inputBirth)));

    tr.appendChild(tdCreator(inputCat));
    
    return tr
    
}

function tdCreator(value, classAdd = 'none'){
    const td = document.createElement('td');
    td.classList.add(classAdd);
    td.textContent = value;
    return td
}

function ageGenerator(inputBirth){
    
    const birth = new Date(inputBirth.split('-').join(','));
    const yearBirth = parseInt(birth.getFullYear());
    const monthBirth = parseInt(birth.getMonth())+1;
    const dayBirth = parseInt(birth.getDate());

    const today = new Date();
    const yearToday = parseInt(today.getFullYear());
    const monthToday = parseInt(today.getMonth())+1;
    const dayToday = parseInt(today.getDate()); 

    if (monthToday > monthBirth){
        return yearToday - yearBirth;
    }else if (monthToday < monthBirth){
        return (yearToday - yearBirth) - 1;
    }else{
        if (dayToday < dayBirth){
            return (yearToday - yearBirth) - 1
        }else{
            return yearToday - yearBirth;
        }
    }
    
}

function formateDate(inputBirth){
    const birth = new Date(inputBirth.split('-').join(','));
    return `${birth.getDate()}/${parseInt(birth.getMonth())+1}/${birth.getFullYear()}`
}