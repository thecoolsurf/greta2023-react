let pseudo = document.getElementById('pseudo');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let submit = document.getElementById('submit');
let popup = document.getElementById('popup');
let closebox = document.getElementById('closebox');
let check = false;
let message = '';

function checkInput(reg, min, max, id, span, message) {
    id.addEventListener('keyup', function (e) {
        let val = e.target.value;
        let tt = val.length;
        let input_msg = document.querySelector(span);
        if (tt < min) {
            pseudo.classList.add('invalid');
            input_msg.textContent = message;
        } else if (tt > min && tt > max) {
            pseudo.classList.add('invalid');
            input_msg.textContent = message;
        } else if (!val.match(reg)) {
            pseudo.classList.add('invalid');
            input_msg.textContent = message;
        } else {
            pseudo.classList.add('valid');
            input_msg.textContent ='';
            check = true;
        }
    });
    id.addEventListener('blur', function (e) {
        if (check === true) {
            id.classList.add('valid');
            id.classList.remove('invalid');
            input_msg = '';
        }
    });
}

let reg_pseudo = new RegExp(/^([a-zA-Z])([- a-zA-Z]){1,20}[0-9]{0,3}$/, "gi");
message = '3 caractères minimum | 10 caractères max';
checkInput(reg_pseudo, 3, 10, pseudo,'.pseudo',message);

let reg_email = new RegExp(/^([a-zA-Z0-9._-]*)@([a-zA-Z0-9._-]*)\.([a-zA-Z]*)/, "gi");
message = 'le champs email est invalide';
checkInput(reg_email, 6, 50, email,'.email', message);

let reg_pass = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "gi");
message = '8 caractères minimum (1 minuscule, 1 majuscule et 1 chiffre)';
checkInput(reg_pass, 8, 30, password,'.password',message);
message = 'Le mot de passe doit correspondre.';


password2.addEventListener('blur',function(e) {
    let ctrl = e.target.value;
    let orig = document.getElementById('password').value;
    let msg = document.querySelector('.password2');
    if (ctrl === orig) {
        msg.classList.add('valid');
        msg.textContent = ''
    } else {
        msg.classList.add('invalid');
        msg.textContent = 'Les deux mots de passe ne sont pas identiques.'
    }
});

submit.addEventListener('submit', function(e) {
  if (check === true) {
    popup.innerHTML = '<h3>BRAVO</h3><p>Votre formulaire est valide.</p>';
    popup.classList.add('valid');
  } else {
    popup.innerHTML = '<h3>ATTENTION</h3><p>Votre formulaire est invalide.</p>';
    popup.classList.add('invalid');
  }
  popup.style.display = 'block';
});
closebox.addEventListener('click', function(e) {
    popup.style.display = 'none';
});