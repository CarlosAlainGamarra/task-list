
//----------FECHA-----------
const date = new Date();
const dayText = document.getElementById('dayText');
const dayNumber = document.getElementById('dayNumber');
const month = document.getElementById('month');
const year = document.getElementById('year');



dayText.textContent = date.toLocaleString('en', {weekday: 'long'});
dayNumber.textContent = date.toLocaleString('en', {day: 'numeric'});
month.textContent = date.toLocaleString('en', {month: 'short'});
year.textContent = date.toLocaleString('en', {year: 'numeric'});


//---------FORMULARIO--------

const input = document.getElementById('input');
const addButton = document.getElementById('addButton');

//---------LISTA-------------
const ul = document.querySelector('ul');   
const empty = document.getElementById('empty');


addButton.addEventListener('click', function event (e) {
    e.preventDefault();
    const task = input.value;


    if (task !== ""){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '-';
        deleteButton.classList.add('deleteButton')
        li.classList.add('li');


        li.appendChild(p);
        li.appendChild(deleteButton);
        ul.appendChild(li);

    
        input.value = "";
        empty.style.display = 'none';   

        deleteButton.addEventListener('click', (e) => {
        e.preventDefault();
        ul.removeChild(li);

        const items = document.querySelectorAll('li');
        if (items.length === 0){
            empty.style.display = 'block';
        }

        }) 
        
        



    }
    
    
})

function liStyle (){
    document.querySelector('li').classList.add('li');
}

liStyle();



    








