/* ************************************************************************** */
/* TRAVAIL AVEC LE PROMPT */

function createArticle(num) {
    for(let i=0; i<num; i++){
        let article = document.createElement('article');
        article.classList.add('blogArticle');
    
        article.innerHTML = `
            <h3>Article N°${i+1}</h3>
            <p><img src="https://picsum.photos/400/200?grayscale&random=${i}" /></p>
            <p>Texte de contenu de l'article à mettre dans le panier</p>
            <p><a href="https://google.fr</a>
        `;
        document.body.append(article);
    }
}

// let num = prompt('Combien d\'articles voulez-vous ?');
// createArticle(num);