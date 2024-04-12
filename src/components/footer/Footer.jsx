import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../footer/Footer.css';
function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="social-icons">
        <a href="#" className="icon-link">
          <FaFacebook className="icon facebook-icon" />
        </a>
        <a href="#" className="icon-link">
          <FaInstagram className="icon instagram-icon" />
        </a>
        <a href="#" className="icon-link">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="#" className="icon-link">
          <FaGithub className="icon github-icon" />
        </a>
      </div>
      <p className="watermark"></p>
    </footer>
    </div>
  )
}

export default Footer
