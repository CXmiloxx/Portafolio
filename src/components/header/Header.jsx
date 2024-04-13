import fondo from '../img/img_creador.jpg';
import '../header/Header.css';
import cv from "../curriculum/cv.pdf";

function Header() {
    return (
        <div>
            <header className="header " id='Header'>
                <div className="info">
                    <div className="info__contenido">
                        <p className="saludo">Hola yo soy</p>
                        <h1>Juan Camilo Guapacha</h1>
                        <p className="descripcion">Analista y Desarrollador de Software</p>
                        <a href={cv} download="Cv" className="btn">Descargar CV</a>
                    </div>
                </div>
                <div className="imagen-fondo">
                    <img className="foto" src={fondo} alt="empresario" />
                </div>
            </header>
        </div>

    );
}

export default Header;
