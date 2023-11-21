/* ************************************************************************* */
/* BOUCLE FOR */


// let: variable dont le contenu peut-etre modifié
let username = 'Hubert';
username = 'Jean-Yves';

// const: variable dont on ne peut pas ré-assigné le contenu
// tableaux | objet | function
const PI = 3.14116;

const fruits = ['Fraise','Pomme','Peiche','Banane','Kiwi'];

const user = {
    lastname: 'DOUIN',
    firstname: 'Hubert',
}

// parcourir un tableau
function tableau() {
    let html1 = document.getElementById('html1');
    let table = document.createElement('table');
    table.classList.add('table');
    let tbody = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let fruit of fruits) {
        let td = document.createElement('td');
        td.setAttribute('scope','row');
        td.innerHTML = fruit;
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    html1.appendChild(table);
}

let code1 = document.getElementById('code1');
code1.innerHTML = tableau;
tableau();



