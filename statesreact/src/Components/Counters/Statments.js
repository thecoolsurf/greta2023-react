import '../Counters/counters.css';

export const Statments = () => {
    return (
        <div className="infos">
        <h2>Counters</h2>
        <h3>Exercices</h3>
        <ul>
          <li>Faites un compteur simple avec un bouton + et un bouton</li>
          <li>Faites en sorte qu’il soit impossible d’aller en dessous de zéro</li>
          <li>Faites en sorte qu’il soit impossible d’aller au dessus de 11</li>
          <li>Faites un second compteur indépendant du premier</li>
          <li>Affichez le total des deux compteurs</li>
        </ul>
        <h3>Bonus 1</h3>
        <ul>
          <li>Faites en sorte que si le total des 2 compteurs est supérieur à 18, il est impossible d’incrémenter ni le premier ni le deuxième</li>
        </ul>
        <h3>Bonus 2</h3>
        <ul>
          <li>Faites en sorte que en dessous de zéro : le bouton “-” disparaisse et au dessus de 11 le bouton “+” disparait</li>
          <li>Faites en sorte que si le total des 2 compteurs est supérieur à 18, les deux boutons + disparaissent (on ne peut plus incrémenter)</li>
        </ul>
      </div>

    )
}