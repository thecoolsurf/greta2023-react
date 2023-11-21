/* ************************************************************************* */
/* DOM (Document Object Modele) */

// version classique
cities = ['Paris','Geneve','Londre','Berlin']
function listCities_v1() {
    let ul = document.getElementById('ul');
    for (let city of cities) {
        let li = document.createElement('li');
        li.innerText = city;
        ul.appendChild(li);
    }
}
listCities_v1();

// version ES6
function listCities_v2() {
    for (let city of cities) {
        document.getElementById('ul').innerHTML += `<li> ${city} </li>`
    }
}
