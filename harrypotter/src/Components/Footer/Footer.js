import './footer.css';
export const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li>Hubert DOUIN - Webmaster</li>
                <li><i className="fa-solid fa-location-dot"></i>33 rue Claude Tillier - 75012 Paris</li>
            </ul>
            <ul>
                <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:0617704275" alt="DOUIN Hubert Mobile">06.17.70.42.75</a></li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:hdouin@free.fr?object=Demande infos" alt="email"
                    title="email">hdouin@free.fr</a></li>
                <li><i className="fa fa-link" aria-hidden="true"></i><a className="link" href="http://h.douin.free.fr" target="_blank" alt="DOUIN Hubert - développeur web">h.douin.free.fr</a></li>
            </ul>
            <ul>
                <li><a href="#" target="_blank" alt="Facebook"><i className="fa-brands fa-facebook"></i>
                    Facebook</a>
                </li>
                <li><a href="#" target="_blank" alt="Twitter"><i className="fa-brands fa-twitter"></i> Twitter</a>
                </li>
                <li><a href="#" target="_blank" alt="Linkedin"><i className="fa-brands fa-linkedin"></i>
                    Linkedin</a>
                </li>
            </ul>
        </footer>
    )
}

