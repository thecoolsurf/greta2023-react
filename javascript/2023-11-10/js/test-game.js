/*
CLICK ciseaux feuille pierre

Créez un jeu avec TROIS cartes en HAUT et TROIS cartes en BAS
- Pierre | Ciseau | Feuille
- Feuille | Ciseau | Feuille
=> qui gagne ?
*/

/* *********************************************************************** */

let cardsUser = document.getElementsByClassName('card-user');
let display_score = document.getElementById('score');

Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}
// 5 = feuille
// A = Pierre
// V = Ciseau

function randomCards() {
    let cards = document.getElementsByClassName('card');
    hands = ['5', 'A', 'V'];
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML = `<span class="hands">${hands.sample()}<span>`;
    }
}
function displayMsg(title,texte) {
    msg = `<b>${title}</b><br>${texte}`;
    return msg;
}
function removeClasses(msg,params) {
    for(i=0;i<params.length;i++) {
        msg.classList.remove(params[i]);
    }
}
function displayScore(user, pc, msg) {
    score = 0;
    // Feuille | Pierre
    if (user == '5' && pc == 'A') {
        removeClasses(msg,['equale','loose']);
        msg.classList.add('win');
        msg.innerHTML = displayMsg('GAGNER','La feuille enveloppe la pierre.');
        msg.style.display = 'block'
        score++;
        // Feuille | Ciseau
    } else if (user == '5' && pc == 'V') {
        removeClasses(msg,['equal','win']);
        msg.classList.add('loose');
        msg.innerHTML = displayMsg('PERDU','La feuille est coupée par le ciseau.');
        msg.style.display = 'block'
        // Pierre | Feuille
    } else if (user === 'A' && pc === '5') {
        removeClasses(msg,['equal','win']);
        msg.classList.add('loose');
        msg.innerHTML = displayMsg('PERDU','La pierre est enveloppée par la feuille.');
        msg.style.display = 'block'
        // Pierre | Ciseau
    } else if (user == 'A' && pc == 'V') {
        removeClasses(msg,['equal','win']);
        msg.classList.add('win');
        msg.innerHTML = displayMsg('GAGNER','La pierre casse le ciseau.');
        msg.style.display = 'block'
        score++;
        // Ciseau | Feuille
    } else if (user == 'V' && pc == '5') {
        removeClasses(msg,['equal','loose']);
        msg.classList.add('win');
        msg.innerHTML = displayMsg('GAGNER','Le ciseau coupe la feuille.');
        msg.style.display = 'block'
        score++;
        // Ciseau | Pierre
    } else if (user == 'V' && pc == 'A') {
        removeClasses(msg,['equal','win']);
        msg.classList.add('loose');
        msg.innerHTML = displayMsg('PERDU','Le ciseau est cassé par la pierre.');
        msg.style.display = 'block'
    } else if (user === pc) {
        removeClasses(msg,['win','loose']);
        msg.classList.add('equal');
        msg.innerHTML = displayMsg('EGALITE','Vous avez fait le même choix.');
        msg.style.display = 'block'
    }
    return score;

}

randomCards();

for (let i = 0; i < cardsUser.length; i++) {
    cardsUser[i].addEventListener('click', function (e) {
        // display card for PC and hide CHECK
        let id_pc = this.id.replace('user', 'pc');
        document.getElementById(id_pc).style.display = 'block';
        let id_check = this.id.replace('user', 'check');
        document.getElementById(id_check).style.display = 'none';
        // display win | loose
        let id_msg = this.id.replace('user', 'msg');
        let msg = document.getElementById(id_msg);
        // score
        let user = e.target.textContent;
        let pc = document.getElementById(id_pc).textContent;
        let score = displayScore(user, pc, msg);
        document.getElementById('score').textContent = score;
    });
}

let restart = document.getElementById('restart');

restart.addEventListener('click',function(e) {
    let msgs = document.getElementsByClassName('msg');
    for (let i = 0; i < msgs.length; i++) {
        msgs[i].style.display = 'none';
    }
    let cards = document.getElementsByClassName('card-pc');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    let checks = document.getElementsByClassName('card-check');
    for (let i = 0; i < checks.length; i++) {
        checks[i].style.display = 'block';
    }
    randomCards();
});
