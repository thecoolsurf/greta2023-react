/* CONDITIONS */

/*
si ce qui est entre parenthese vaut TRUE
les instructions entres accolades seront éxécutées
*/

let age = 0;
let btn = document.getElementById('btn1');

function msgAge(age) {
    let msg = 'Vous avez ';
    if (age == 0) {
        css = 'alert-danger';
        msg += age + ' ans. Vous devez entrer un age valide.'
    } else if (age < 10) {
        css = 'alert-warning';
        msg += age + ' ans. Vous n\'avez pas le droit.';
    } else {
        css = 'alert-success';
        msg += age + ' ans. Vous avez le droit.';
    }
    return [css,msg];
}

function displayHtml(age) {
    parent = document.getElementsByClassName('container')[1];
    message = msgAge(age)[1];
    css = msgAge(age)[0];
    div = document.createElement('div');
    div.classList.add('alert',css);
    div.innerHTML = message;
    parent.appendChild(div);
}

btn.onclick = () => {
    user_age = document.getElementById('user_age');
    age = user_age.value;
    displayHtml(age);
}

