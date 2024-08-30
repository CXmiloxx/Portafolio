import fondo from '../img/yo.jpg';
import '../header/Header.css';
import cv from "../curriculum/cv.pdf";

function Header() {
    return (
        <div>
            <header className="header" id='Header'>
                <div className="info">
                    <div className="info__contenido">
                        <p className="saludo">Hola, yo soy</p>
                        <h1>Juan Camilo Guapacha</h1>
                        <p className="descripcion">Analista y Desarrollador de Software con experiencia en desarrollo web, análisis de sistemas y gestión de proyectos tecnológicos.</p>
                        <div className="contacto">
                            <a href={cv} download="Cv" className="btn">Descargar CV</a>
                        </div>
                    </div>
                </div>
                <div className="imagen-fondo">
                    <img className="foto" src={fondo} alt="Juan Camilo Guapacha" />
                </div>
            </header>
        </div>
    );
}

export default Header;
