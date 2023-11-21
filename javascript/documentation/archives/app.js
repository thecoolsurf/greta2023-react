
// VERSION 1 //

// document.getElementById('pseudo').addEventListener('input', function(event) {
//     if (event.target.value.length < 3 || event.target.value.length > 10) {
//         document.querySelector('.pseudo').textContent = 'doit contenir entre 3 et 10 caractères';
//         event.target.classList.add('invalid');
//         event.target.classList.remove('valid');
//     }
//     else {
//         document.querySelector('.pseudo').textContent = '';
//         event.target.classList.add('valid');
//     }
// })

// document.getElementById('email').addEventListener('input', function(event) {
//     if (event.target.value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) === null) {
//         document.querySelector('.email').textContent = 'format non valide';
//         event.target.classList.add('invalid');
//         event.target.classList.remove('valid');
//     }
//     else {
//         document.querySelector('.email').textContent = '';
//         event.target.classList.add('valid');
//     }
// })

// document.getElementById('password').addEventListener('input', function(event) {
//     if (event.target.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/) === null) {
//         document.querySelector('.password').textContent = 'au moins 8 caractères : 1 minuscule, 1 majuscule et 1 chiffre';
//         event.target.classList.add('invalid');
//         event.target.classList.remove('valid');
//     }
//     else {
//         document.querySelector('.password').textContent = '';
//         event.target.classList.add('valid');
//     }
// })

// document.getElementById('password2').addEventListener('input', function(event) {
//     if (event.target.value !== password.value) {
//         document.querySelector('.password2').textContent = 'mot de passe différent';
//         event.target.classList.add('invalid');
//         event.target.classList.remove('valid');
//     }
//     else {
//         document.querySelector('.password2').textContent = '';
//         event.target.classList.add('valid');
//     }
// })



/*
4 fois la même logique avec quasiment les mêmes instructions
ce qui change : 
 - les noms de l'id et de la classe (le même)
 - la vérif
 - le texte du message d'erreur
*/


// VERSION 2 //


// utiliser une boucle pour mettre un addEventListener('input', function(event) {}) sur chaque input

let inputs = document.querySelectorAll('input');

for (let input of inputs) {
    input.addEventListener('input', function(event) {
        // pour chaque input, on appelle la même fonction
        checkData(event.target.id, event.target.value)
    })
}

// // function qui affiche le message d'erreur en fonction de l'input et de la valeur saisie
function checkData(id, value) {

    let errorMessage = '';

    if (id === 'pseudo') {
        if (value.length < 3 || value.length > 10){
            errorMessage = 'doit contenir entre 3 et 10 caractères';
        }
    }
    if (id === 'email') {
        if(value.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) === null){
            errorMessage = 'format non valide';
        }
    }
    if (id === 'password') {
        if (value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/) === null) {
            errorMessage = 'au moins 8 caractères : 1 minuscule, 1 majuscule et 1 chiffre';   
            progress_bar.style.background = 'firebrick';
            progress_bar.style.width = '33%';
        }
        else {
            if (value.length < 12) {
                progress_bar.style.background = 'orange';
                progress_bar.style.width = '66%';
            }
            else {
                progress_bar.style.background = 'rgb(31, 136, 31)';
                progress_bar.style.width = '100%';
            }
        }
    }
    if (id === 'password2') {
        if (value !== password.value) {
            errorMessage = 'mots de passe différents';
        }
    }


    // si le message d'erreur contient du texte
    if (errorMessage) {
        // cibler la classe qui a le même nom que l'id
        document.querySelector('.' + id).innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${errorMessage}`;
        document.getElementById(id).classList.add('invalid');
        document.getElementById(id).classList.remove('valid');
    }
    else {
        document.querySelector(`.${id}`).textContent = '';
        document.getElementById(id).classList.add('valid');
    }

}


// ---- form submission ---- //

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // if all data are valid and no missing one
    if ([...inputs].every(input => [...input.classList].includes('valid')) || [...inputs].every(input => input.value !== '')) {

        // success pop up
        Swal.fire({
            icon: 'success',
            title: 'Inscription Done',
            showConfirmButton: false,
            // timer: 2000
        })
        document.querySelector('h2#swal2-title').style.color = '#a5dc86';

        // clear each input and remove style
        [...inputs].map(input => {
            input.value = '';
            input.classList.remove('valid', 'invalid');
            progress_bar.style.width = 0;
        })
    }

    // error pop up
    else {
        Swal.fire({
            icon: 'error',
            title: 'Missing or Invalid Input',
        });
        for (const input of inputs) {
            input.classList.add('invalid');
        }
    }
})
