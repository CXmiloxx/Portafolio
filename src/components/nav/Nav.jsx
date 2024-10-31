import logo from "../../assets/logo.svg";
import styles from "./Nav.module.css";

function Navegacion() {
    return (
        <nav className={styles.barraNavegacion}>
            <div className={styles.contenedor}>
                <img className={styles.logo} src={logo} alt="Logo" />
                <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
                <label htmlFor="menu-toggle" className={styles.menuIcon}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className={styles.enlaces}>
                    <a className={styles.enlace} href="#Header">Inicio</a>
                    <a className={styles.enlace} href="#seccion-sobre-mi">Sobre mí</a>
                    <a className={styles.enlace} href="#seccion-servicios">Servicios</a>
                    <a className={styles.enlace} href="#seccion-proyectos">Proyectos</a>
                    <a className={styles.enlace} href="#seccion-contacto">Contacto</a>
                </div>
            </div>
        </nav>
    );
}

export default Navegacion;
