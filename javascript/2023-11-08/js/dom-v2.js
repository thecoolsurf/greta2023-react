/* ************************************************************************* */
/* DOM (Document Object Modele) */

// acceder aux éléments du DOM
let container = document.querySelector('body .container');

// outils
let ul = document.createElement('ul');
let li = document.createElement('li');
// ul.append(li);
// ul.append(li);
// ul.append(li);

// en dernier dans la derniere class .container
document.querySelector('.container').append(ul);

// en premier dans la derniere class .container
document.querySelector('.container').prepend(ul);

// avant le premier .container
document.querySelector('.container').before(ul);

// apres le premier .container
document.querySelector('.container').after(ul);


// images
let image = document.createElement('img');
// image.src = 'https://picsum.photos/400/200?grayscale';
// image.title = 'https://picsum.photos';
image.alt = 'ReactJS - lesson #4';
document.querySelector('.jumbotron').after(image);
image.toggleAttribute('hidden');

// a link
let link = document.createElement('a');
link.href = 'http://h.douin.free.fr';
link.title = 'Hubert DOUIN - développeur web';

// select item and
// document.querySelector('.quizz li').classList.toggle('good');