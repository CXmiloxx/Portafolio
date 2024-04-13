import '../footer/Footer.css';
import FacebookIcon from '../img/facebook.png';
import InstagramIcon from '../img/instagram.png';
import GithubIcon from '../img/github.png';
import LinkedinIcon from '../img/linkedin.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="contenedor">
                <div className="redes-sociales">
                    <h3>Sígueme en mis redes sociales</h3>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/guxpacha?mibextid=ibOpuV" target="_blank" rel="noopener noreferrer">
                                <img src={FacebookIcon} alt="Facebook" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/guxpacha/" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramIcon} alt="Instagram" />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/CXmiloxx" target="_blank" rel="noopener noreferrer">
                                <img src={GithubIcon} alt="Github" />
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/guxpacha/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedinIcon} alt="Linkedin" />
                                Linkedin
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
