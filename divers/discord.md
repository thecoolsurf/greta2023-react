# Javascript
## If Else

Documentation de la syntaxe condition avec if else:\
https://sharemycode.fr/yiv

## Prompt()

la fonction prompt() permet de poser une question et de récupérer la réponse
on peut stocker la réponse dans une variable
si la personne n'écrit aucun nom, la réponse sera "" (string vide)
si la personne clique sur Annuler, la réponse sera null

```
let userName = prompt('Quel est votre nom');
let message;
```

+ si la personne écrit 'Jon' et clique sur OK\
    --> mettre dans la variable message 'Bonjour Jon'

+ si la personne écrit rien et clique sur OK ou si la personne clique sur Annuler\
    --> mettre dans la variable message 'Merci de saisir un prénom'
    
```
const fruits = ['banana','strawberry','kiwi','pineapple','cherries','pear'];
```

### Exercice

+ CONSIGNE 1 :
  + boucler le tableau 
    - afficher chacun des éléments du tableau dans la console
    - arrêter la boucle dès que l'élément ':kiwi:' a été affiché

+ CONSIGNE 2 :
    - mêmes consignes
    - si l'élément ':kiwi:' n'est pas trouvé dans le tableau :
        afficher un seul message A LA FIN de la boucle : 'Kiwi non trouvé'

-----------------------------------------------------------------------------

#### Liens utiles
https://developer.mozilla.org/fr/\
The MDN Web Docs site provides information about Open Web technologies including 
HTML, CSS, and APIs for both Web sites and progressive web apps.

https://www.w3schools.com/\
W3Schools offers free online tutorials, references and exercises in all the major languages of the web. 
Covering popular subjects like HTML, CSS, JavaScript, Python, SQL, Java, and many, many more.

https://css-tricks.com/\
CSS-Tricks is a website about websites.\

https://stackoverflow.com/\
Chercher la réponse à un problème:\

https://www.frontendmentor.io/challenges\
pour s'entraîner au HTML CSS JS : 

-----------------------------------------------------------------------------

### Exercice
```
const towns = ['Boulogne', 'Toronto', 'Madrid', 'Agadir', 'Manille'];
```
A l'intérieur du ul id="towns", intégrer chaque ville du tableau dans un "li"

----------------------------------------------------------

#### Liens utiles

https://docs.emmet.io/abbreviations/syntax/\
Raccourcis vers les documentations "emmet.io"

----------------------------------------------------------

### Exercice

```
prompt('combien d\'articles voulez-vous ?');
```
Si réponse récupérée = 3  --> créer et afficher dans la page 3 articles

1 article = 1 container contenant : 
  - un titre
  - une image 
  - un paragraphe
  - un lien
- ajouter du style à l'article avec une/des classes CSS
- inclure dans le titre de chaque article un numéro  (article N°1...)

----------------------------------------------------------

#### Liens utiles

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript\
Pour progresser en Javascript.

https://www.w3schools.com/jsref/dom_obj_event.asp\
Liste des événements du DOM

----------------------------------------------------------

### Exercice

Au click sur l'image:
+ on ajoute une classe darkMode créée en CSS
+ le contenu de l'image change pour afficher le soleil à la place de la lune
+ pouvoir identifier si le darkMode est activé ou non 

Au click sur l'image, si le darkMode est activé :
+ on désactive le darkMode
+ on remet la lune à la place du soleil

```
<button>Mask List</button>
<ul>
<li>Mango Sticky Rice</li>
<li>Coconut Mango Tapioca</li>
<li>Thai Coconut FLan</li>
</ul>
```

- Quand on clique sur le bouton, le texte devient 'Display List' et la liste disparaît
- Quand on reclique sur le bouton, le texte redevient 'Mask List' et la liste réapparaît

-----------------------------------------------------------------------------
#### Liens utiles

https://color.adobe.com/fr/create/color-wheel\
Pour choisir des couleurs compatibles.

-----------------------------------------------------------------------------

### Exercice
- capter la saisie de chacun des inputs range
- changer selon la saisie le contenu du paragraphe 'rgb(0,0,0)'
- appliquer ce code couleur au body

```
<div class="rangeContainer">
    <input type="range" id="" value="0" max="255">
    <input type="range" id="" value="0" max="255">
    <input type="range" id="" value="0" max="255">
</div>
<p class="result"> rgb(0, 0, 0) </p>
```

## CSS

Positionner un élément en CSS :

```
div {
    background-color: aqua;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 500px;
    left: 200px;
}
```

Capter le déplacement de la souris en JS : 

```
window.addEventListener('mousemove', function(event){
    console.log(event.clientX);
    console.log(event.clientY);
})
```

instructions à exécuter :\
A chaque déplacement de la souris :
+ créer une div
+ l'ajouter au DOM
+ lui donner les coordonnées récupérées de l'evénement mousemove

-----------------------------------------------------------------------------

#### Liens utiles

https://cssbattle.dev/\
Pour s'entrainer au règles de CSS.

https://www.w3schools.com/tags/att_input_pattern.asp\
Expressions régulières pour vérifier un email et un mot de passe.

https://www.w3schools.com/jsref/jsref_match.asp\
Vérifier la conformité d'une expression régulière.

----------------------------------------------------------

## Expressions régulières

```
[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$

let emailToCheck = 'jonDoegmail.com';

emailToCheck.match(/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/);
// --> null (pas conforme)
```

https://regexr.com/\
Pour comprendre les expressions régulières.

https://rubular.com/\
Pour écrire une expression régulière.

----------------------------------------------------------

### Exercice
```
<div class="buttons">
    <button></button>
    <button></button>
    <button></button>
    <button></button>
</div>
<div class="colors"></div>
```

```
const colors = ['#00ffff', 'ffc400', '#1aff00', '#ff00bf'];
```

+ donner les 4 différentes couleurs aux 4 boutons
+ remplir la div sous les boutons avec 50 divs (des carrés) 
+ les 4 couleurs doivent être réparties de façon aléatoire entre les 50 div

+ au click sur un des boutons :\
seules les divs de la même couleur que le bouton sont affichées

----------------------------------------------------------

https://medium.com/@ludovic.wyffels/démystifier-array-reduce-53b1bbac2ac3\
Documentation sur la fonction reduce()

https://medium.com/@ludovic.wyffels/d%C3%A9mystifier-array-reduce-53b1bbac2ac3\
ES5 et les versions ultérieures de JavaScript ont apporté 
plusieurs nouvelles méthodes de gestion des tableaux. Beaucoup d’entre eux sont…

```
cd /path/to/your/index.html
code . : ouvrir le dossier dans VSCode
```

#### Liens utiles

https://unsplash.com/\
Banque d'images libres de droit

https://sharemycode.fr/rca\
Connaissances de base du langage HTML.

https://fontawesome.com/icons\
librairie d'icônes en ligne.

https://cdnjs.com/libraries/font-awesome\
The iconic SVG, font, and CSS toolkit - Simple. Fast. Reliable. 

https://fr.wikipedia.org/wiki/Tim_Berners-Lee\
création du web et du HTML

https://fonts.google.com/\
rechercher des familles de police

https://sharemycode.fr/660\
modèle de boîte CSS

https://flukeout.github.io/\
s'entraîner aux sélecteurs CSS

https://css-tricks.com/snippets/css/a-guide-to-flexbox/\
LE GUIDE FLEXBOX

https://flexboxfroggy.com/#fr\
pour s'entraîner à flexbox

https://mastery.games/flexboxzombies/\
Similaire a Froggy

https://sharemycode.fr/bwb\
Exercice Header Flexbox

https://mattbrictson.com/blog/css-normalize-and-reset\

https://eloquentjavascript.net/\

----------------------------------------------------------

https://www.dema1n.org/\
la plateforme de mentorat pour la réussite et l'insertion professionelle des jeunes

----------------------------------------------------------

### Exercice 1

+ Créer une fonction qui décode une phrase selon le Code de César
+ Ce code décale chaque caractère de 13 places dans l'alphabet
  - Utiliser cette fonction pour décrypter les codes suivants :
  - BCRAPYNFFEBBZF
  - URYYB JBEYQ
  - PRPV RFG ZBA PBQR FRPERG
  
### Exercice 2

+ Créer une fonction qui prend 2 paramètres : un tableau (de strings ou numbers) et un nombre
+ La fonction doit renvoyer un tableau dans lequel toutes les valeurs du tableau initial
sont réparties dans des tableaux dont la longueur est celle indiquée en deuxième paramètre:
- chunkThis( [1, 2, 3, 4, 5, 6, 7], 2 ) doit retourner [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

### Exercice 3

Créer une fonction qui prend un ou plusieurs mots en paramètre
+ La fonction doit renvoyer ce mot transformé en mot d'argot "Pig Latin''
+ Quand un mot commence par un voyelle on ajoute à la fin "- way " :\
     orange → orange-way
+ Quand un mot commence par des consonnes, elles sont enlevées et ajoutées à la fin suivie de "ay":\
     grape → ape-gray
     
### Exercice 4

+ Créer une boucle de 0 à 50 inclus
+ Afficher chaque numéro dans la console
    - Si le numéro est multiple de 3 : on affiche "fizz" au lieu du numéro
    - Si le numéro est multiple de 5 : on affiche "buzz" au lieu du numéro
    - Si le numéro est multiple de 3 et 5 : on affiche "fizzbuzz" au lieu du numéro

### Exercice 5

Créer une fonction qui prend un tableau de nombres en paramètre
Cette fonction doit renvoyer la somme de tous les nombres du tableau.

```
function addNumbers(numbArray) {
    const sum = 0;
    for (let numb of numbArray) {
      sum += numb;
    }
    return sum
}
```
