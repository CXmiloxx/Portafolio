/* eslint-disable react/prop-types */
import styles from './Body.module.css';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin, FaLaravel } from 'react-icons/fa';
import { SiC, SiPhp } from 'react-icons/si';
import { DiReact } from 'react-icons/di';

function Body() {
    return (
        <div className={styles.bodyContainer}>
            <section className={styles.section} id="seccion-sobre-mi">
                <h2 className={styles.sectionTitle}>Sobre mí</h2>
                <p className={styles.sectionText}>
                    ¡Hola! Soy Juan Camilo, desarrollador en formación con experiencia en Java, C, HTML, CSS, JavaScript y PHP. 
                    Apasionado por la tecnología, disfruto creando aplicaciones innovadoras. Me gusta explorar nuevas culturas y deportes. 
                    Estoy listo para contribuir al desarrollo de software con soluciones frescas e impactantes.
                </p>
            </section>

            <section className={styles.section} id="lenguajes">
                <h2 className={styles.sectionTitle}>Lenguajes de Programación</h2>
                <div className={styles.grid}>
                    <Lenguaje icon={<FaJs />} nombre="JavaScript" descripcion="Lenguaje para interactividad en la web." />
                    <Lenguaje icon={<FaJava />} nombre="Java" descripcion="Orientado a objetos, ideal para apps empresariales." />
                    <Lenguaje icon={<SiC />} nombre="C" descripcion="Eficiente y usado en sistemas de bajo nivel." />
                    <Lenguaje icon={<SiPhp />} nombre="PHP" descripcion="Backend para contenido dinámico en la web." />
                </div>
            </section>

            <section className={styles.section} id="maquetacion-estilos">
                <h2 className={styles.sectionTitle}>Lenguajes de Maquetación y Estilo</h2>
                <div className={styles.grid}>
                    <Lenguaje icon={<FaHtml5 />} nombre="HTML" descripcion="Estructura de páginas web." />
                    <Lenguaje icon={<FaCss3Alt />} nombre="CSS" descripcion="Estilos y diseño de sitios web." />
                </div>
            </section>

            <section className={styles.section} id="frameworks">
                <h2 className={styles.sectionTitle}>Frameworks y Librerías</h2>
                <div className={styles.grid}>
                    <Lenguaje icon={<DiReact />} nombre="React" descripcion="Biblioteca para interfaces de usuario dinámicas." />
                    <Lenguaje icon={<FaLaravel />} nombre="Laravel" descripcion="Framework PHP para desarrollo web robusto." />
                </div>
            </section>

            <section className={styles.section} id="seccion-servicios">
                <h2 className={styles.sectionTitle}>Servicios</h2>
                <div className={styles.grid}>
                    <Servicio color="azul" titulo="Análisis y Documentación" descripcion="Aplicación de principios SOLID." />
                    <Servicio color="amarillo" titulo="Diseño UI" descripcion="Interfaces intuitivas y estéticas." />
                    <Servicio color="purpura" titulo="Desarrollo Web" descripcion="Sitios web funcionales y dinámicos." />
                    <Servicio color="verde" titulo="Aplicaciones" descripcion="Apps conectadas a bases de datos." />
                    <Servicio color="rojo" titulo="Api" descripcion="Creacion y consumo de Apis para aplicaciones." />

                </div>
            </section>

            <section className={styles.section} id="seccion-proyectos">
                <h2 className={styles.sectionTitle}>Mis Proyectos</h2>
                <div className={styles.grid}>
                    <Proyecto color="amarillo" titulo="Glosario Español-Inglés" descripcion="Glosario interactivo para traducción de palabras." link="https://ingles.onrender.com/" />
                    <Proyecto color="azul" titulo="Tienda Virtual SoccerWorld" descripcion="E-commerce dedicado a productos de fútbol." link="https://ligamerch.onrender.com" />
                    <Proyecto color="rojo" titulo="Registro de Usuarios" descripcion="Aplicación CRUD para gestión de usuarios." link="https://crudapp-h37z.onrender.com" />
                </div>
            </section>

            <section className={styles.section} id="seccion-contacto">
                <h2 className={styles.sectionTitle}>Contacto</h2>
                <p className={styles.sectionText}>Teléfono: +573207512575 | Email: juancamilog9911@gmail.com</p>
                <div className={styles.redes}>
                    <a href="https://github.com/CXmiloxx" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/juan-camilo-guapacha/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </section>
        </div>
    );
}

const Lenguaje = ({ icon, nombre, descripcion }) => (
    <div className={styles.lenguaje}>
        {icon}
        <span><strong>{nombre}:</strong> {descripcion}</span>
    </div>
);

const Servicio = ({ color, titulo, descripcion }) => (
    <div className={styles.servicio}>
        <div className={`${styles.colorFondo} ${styles[color]}`}></div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
    </div>
);

const Proyecto = ({ color, titulo, descripcion, link }) => (
    <div className={styles.proyecto}>
        <div className={`${styles.colorFondo} ${styles[color]}`}></div>
        <h4>{titulo}</h4>
        <p>{descripcion}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>Abrir</a>
    </div>
);

export default Body;
