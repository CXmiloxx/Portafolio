import logo from "../img/logo.png";
import "../nav/Nav.css";

function Navegacion() {
    return (
        <div>
            <nav className="barra-navegacion barra-negro">
                <div className="contenedor-con-sombra">
                    <img className='logo' src={logo} alt="" />
                    <div className="enlaces">
                        <a className="enlace " aria-current="page" href="#">Inicio</a>
                        <a className="enlace" href="#">Sobre mí</a>
                        <a className="enlace" href="#">Proyectos</a>
                        <a className="enlace " aria-disabled="true">Contacto</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navegacion;
