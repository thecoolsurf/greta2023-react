console.log('je suis dans le fichier js/default.js');

// mot cle pour variable var - let const

var btn2 = document.getElementById("btn2");
let btn4 = document.getElementById('btn4');

btn2.onclick=function(){
    alert('VAR hello world btn2');
}
btn4.onclick=function(){
    alert('LET hello world btn4');
}

/*
regle pour nommer une variable

- choisir le nom le plus representatif
  on doit comprendre tout de suite le type d'information
- ne doit pas contenir de chiffre
- ne de caractères spéciaux sauf $ ou _
- pas de noms reservés pour javasript
- si plusieurs mots en camelCase ou snakeCase (underscore)
- pour les constantes: Premiere lettre en capitale
- javascript est semsible à la case
*/