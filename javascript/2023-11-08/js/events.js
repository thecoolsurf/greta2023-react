/* ************************************************************************* */
/* EVENT LISTENER */

document.querySelector('li').addEventListener('click', function(){
    let value = this.dataset.num;
    console.log(value);
});

//exemples
/*
Pour éxécuté une fonction au moment du click, il ne faut pas mettre de parenthesse 
après le nom de la fonction(sinon elle sera éxécuté automatiqiement)
*/
function createAccount() {
    console.log('création de compte utilisateur');
}