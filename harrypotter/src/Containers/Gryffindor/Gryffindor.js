import './gryffindor.css';
import { useLocation } from 'react-router-dom';
import { Navigation } from '../../Components/Navigation/Navigation.js';
import { Header } from '../../Components/Header/Header.js';
import { Footer } from '../../Components/Footer/Footer.js';

export const Gryffindor = () => {
    const location = useLocation()
    let url = location.pathname.toLowerCase().replace('/','');
    return (
        <div className="gryffindor">
            <Navigation />
            <Header url={url} />
            <div className="texte">
                <h1>Godric Gryffondor</h1>
                <h2>Blason de Gryffondor.</h2>
                <p>Gryffondor (Gryffindor en anglais) vivait dans le village de Godric's Hollow, dans les plaines12, et était le plus grand duelliste de son temps5. L'emblème des Gryffondor est le lion, considéré comme la plus courageuse de toutes les créatures13.</p>
                <p>Gryffondor reçut pour sa bravoure une épée en argent sertie d'un rubis étincelant de la taille d'un œuf, créée par Ragnuk Premier, le plus renommé des gobelins orfèvres du Moyen Âge14. L'épée était si belle que Ragnuk tenta de la reprendre, accusant le duelliste de l'avoir volée14.</p>
                <p>Des quatre fondateurs, Gryffondor était le plus favorable à ce que les sorciers nés de parents moldus puissent étudier à Poudlard. Il choisissait les élèves courageux avant tout15 et devint un symbole pour son positionnement à l'encontre de la discrimination moldue14. Sa conviction l'aurait éloigné de son collègue Salazar Serpentard, dont il était auparavant plutôt proche.</p>
                <p>Il fit cadeau à Poudlard de son chapeau — le Choixpeau magique —, une sorte de couvre-chef sensible qui devint rapidement un objet très utile pour répartir équitablement les élèves dans les différentes maisons de l'école. Le Choixpeau magique et l'épée forgée par les gobelins sont les seules possessions de Gryffondor qui existent encore au temps de Harry Potter. Les deux artefacts sont connectés l'un à l'autre, permettant à l'épée d'apparaître à l'intérieur du Choixpeau lorsqu'un élève de Gryffondor en détresse se trouve à sa proximité.</p>
                <p>Sur son portrait officiel figurant sur le site Pottermore, Gryffondor a le visage sérieux. Il possède une carrure solide ainsi qu'une barbe et une chevelure longues et épaisses de couleur châtain clair16.</p>
            </div>
            <Footer />
        </div>
    )
}