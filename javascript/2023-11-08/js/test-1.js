// vider un élément du DOM
// faire un PROMPT et récupérer un chiffre
document.querySelector('#questions').innerHTML = '';
let num = prompt('Combien d\'articles voulez-vous ?');

// let nb = pron (combien d'articles voulez vous)? ->3
// cree et afficher dans la page 3 articles



// si réponse = 3 creer et afficher dans la page 3 articles
// - 1 article avec:
// - 1 titre
// - 1 image
// - 1 paragraphe
// - 1 lien


for(let i=0; i<num; i++){
    let article = document.createElement('article');
    article.classList.add('blogArticle');
    
    let title = document.createElement('h3');
    title.textContent = 'Article N°';
    
    let image = document.createElement('img');
    image.src = 'https://picsum.photos/400/200?grayscale';
    
    let para = document.createElement('p');
    para.textContent = 'Texte de contenu de l\'article à mettre dans le panier';
    
    let link = document.createElement('a');
    link.href = 'https://google.fr';
    link.textContent = 'Texte alternatif pour le lien actif.';
    
    article.append(title, image, para, link);
    document.body.append(article);
  
}