import logo from "../img/logo.png";
import "../nav/Nav.css";

function Navegacion() {
    return (
        <div>
            <nav className="barra-navegacion barra-negro">
                <div className="contenedor-con-sombra">
                    <img className='logo' src={logo} alt="" />
                    <div className="enlaces">
                        <a className="enlace " aria-current="page" href="#Header">Inicio</a>
                        <a className="enlace" href="#seccion-sobre-mi">Sobre mí</a>
                        <a className="enlace" href="#seccion-servicios">Servivios</a>
                        <a className="enlace" href="#seccion-proyectos">Proyectos</a>
                        <a className="enlace " aria-disabled="true" href="#seccion-contacto">Contacto</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navegacion;
