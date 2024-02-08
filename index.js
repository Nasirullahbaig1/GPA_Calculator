const add = document.querySelector('#data-add');
const Name = document.querySelector('#subject-name');
const hour = document.querySelector('#cr-hr');
const obGpa = document.querySelector('#ob-gpa');
const tbody = document.querySelector('#tbody');
const tfoot = document.querySelector('#tfoot');
const table = document.querySelector('#table');
const cal = document.querySelector('#calc-gpa');
const clear = document.querySelector('#clear');
let gpArry =[];


add.addEventListener('click', (evt) =>{
    if(Name.value ==='' || hour.value <=0 || obGpa.value <=0){
        alert('No input Please fill the coloumns');
    }
    else{
        const tr = document.createElement('tr');
        const tdSubName = document.createElement('td');
        tdSubName.innerHTML= Name.value;
        const tdCrHr = document.createElement('td');
        tdCrHr.innerHTML= hour.value;
        const tdObGpa = document.createElement('td');
        tdObGpa.innerHTML= obGpa.value;
        tr.appendChild(tdSubName);
        tr.appendChild(tdCrHr);
        tr.appendChild(tdObGpa);
        tbody.appendChild(tr);
        table.classList.remove('display-none');
        cal.classList.remove('display-none');
        clear.classList.remove('display-none');

        gpArry.push({'hour' : hour.value ,'obGpa' : obGpa.value});
    
        Name.value='';
        hour.value='';
        obGpa.value='';
    }

})
cal.addEventListener('click', () =>{
    let crHour = 0, prHrOb = 0, sumPrHrOb = 0; 
    gpArry.forEach(result =>{
        crHour+= parseFloat(result.hour);
        prHrOb= parseFloat(result.hour) * parseFloat(result.obGpa);
        sumPrHrOb+= prHrOb;
    })

    const tr = document.createElement('tr');

    tdTotal= document.createElement('td');
    tdTotal.innerHTML= `Total credit hours ${crHour}`;
    tdGpa= document.createElement('td');
    tdGpa.innerHTML= `Your CGPA is = ${(sumPrHrOb / crHour).toFixed(3)}`;

    tr.appendChild(tdTotal);
    tr.appendChild(tdGpa);
    if(tfoot.querySelector('tr') !== null){
        tfoot.querySelector('tr').remove();
    }
    tfoot.appendChild(tr);
})

clear.addEventListener('click', () =>{
    gpArry=[];
    tbody.querySelectorAll('*').forEach(child => child.remove());
    if(tfoot.querySelector('tr') !== null){
        tfoot.querySelector('tr').remove();
    }
   
    table.classList.add('display-none');
    cal.classList.add('display-none');
    clear.classList.add('display-none');

})

