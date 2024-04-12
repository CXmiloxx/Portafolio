import fondo from '../img/img_creador.jpg';
import '../header/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="info">
                <div className="info__contenido">
                    <p className="saludo">Hola yo soy</p>
                    <h1>Juan Camilo Guapacha</h1>
                    <p className="descripcion">Analista y Desarrollador de Software</p>
                    <button className="btn">DESCARGAR CV</button>
                </div>
            </div>
            <div className="imagen-fondo">
                <img className="foto" src={fondo} alt="empresario" />
            </div>
        </header>
    );
}

export default Header;
