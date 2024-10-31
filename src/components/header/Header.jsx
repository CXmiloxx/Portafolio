import fondo from '../../assets/img-r.jpg';
import styles from './Header.module.css';
import cv from "../curriculum/Cv-Camilo.pdf";

function Header() {
    return (
        <div>
            <header className={styles.header} id='Header'>
                <div className={styles.info}>
                    <div className={styles.infoContent}>
                        <p className={styles.saludo}>Hola, yo soy</p>
                        <h1>Juan Camilo Guapacha</h1>
                        <p className={styles.descripcion}>
                            Analista y Desarrollador de Software con experiencia en desarrollo web, 
                            análisis de sistemas y gestión de proyectos tecnológicos.
                        </p>
                        <div className={styles.contacto}>
                            <a href={cv} download="Cv" className={styles.btn}>Descargar CV</a>
                        </div>
                    </div>
                </div>
                <div className={styles.imagenFondo}>
                    <img className={styles.foto} src={fondo} alt="Juan Camilo Guapacha" />
                </div>
            </header>
        </div>
    );
}

export default Header;
