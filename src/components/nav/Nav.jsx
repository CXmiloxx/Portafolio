import logo from "../img/logo.png";
import "../nav/Nav.css";

function Navegacion() {
    return (
        <nav className="barra-navegacion">
            <div className="contenedor">
                <img className='logo' src={logo} alt="Logo" />
                <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
                <label htmlFor="menu-toggle" className="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="enlaces">
                    <a className="enlace" href="#Header">Inicio</a>
                    <a className="enlace" href="#seccion-sobre-mi">Sobre mí</a>
                    <a className="enlace" href="#seccion-servicios">Servicios</a>
                    <a className="enlace" href="#seccion-proyectos">Proyectos</a>
                    <a className="enlace" href="#seccion-contacto">Contacto</a>
                </div>
            </div>
        </nav>
    );
}

export default Navegacion;
