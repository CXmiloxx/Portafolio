/* eslint-disable react/prop-types */
import styles from './Body.module.css';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin, FaLaravel, FaFacebookF } from 'react-icons/fa';
import { SiPhp } from 'react-icons/si';
import { DiReact } from 'react-icons/di';

function Body() {
    return (
        <div className={styles.bodyContainer}>
            <Section title="Sobre mí" id="seccion-sobre-mi">
                <p className={styles.sectionText}>
                    ¡Hola! Soy Juan Camilo, desarrollador en formación con experiencia en Java,HTML, CSS, JavaScript y PHP. 
                    Apasionado por la tecnología, disfruto creando aplicaciones innovadoras. Me gusta explorar nuevas culturas y deportes. 
                    Estoy listo para contribuir al desarrollo de software con soluciones frescas e impactantes.
                </p>
            </Section>

            <Section title="Lenguajes de Programación" id="lenguajes">
                <LanguageGrid languages={[
                    { icon: <FaJs />, name: "JavaScript", description: "Lenguaje para interactividad en la web." },
                    { icon: <FaJava />, name: "Java", description: "Orientado a objetos, ideal para apps empresariales." },
                    { icon: <SiPhp />, name: "PHP", description: "Backend para contenido dinámico en la web." },
                ]} />
            </Section>

            <Section title="Lenguajes de Maquetación y Estilo" id="maquetacion-estilos">
                <LanguageGrid languages={[
                    { icon: <FaHtml5 />, name: "HTML", description: "Estructura de páginas web." },
                    { icon: <FaCss3Alt />, name: "CSS", description: "Estilos y diseño de sitios web." },
                ]} />
            </Section>

            <Section title="Frameworks y Librerías" id="frameworks">
                <LanguageGrid languages={[
                    { icon: <DiReact />, name: "React", description: "Biblioteca para interfaces de usuario dinámicas." },
                    { icon: <FaLaravel />, name: "Laravel", description: "Framework PHP para desarrollo web robusto." },
                ]} />
            </Section>

            <Section title="Servicios" id="seccion-servicios">
                <ServiceGrid services={[
                    { color: "azul", title: "Análisis y Documentación", description: "Aplicación de principios SOLID." },
                    { color: "amarillo", title: "Diseño UI", description: "Interfaces intuitivas y estéticas." },
                    { color: "purpura", title: "Desarrollo Web", description: "Sitios web funcionales y dinámicos." },
                    { color: "verde", title: "Aplicaciones", description: "Apps conectadas a bases de datos." },
                    { color: "rojo", title: "Api", description: "Creación y consumo de APIs para aplicaciones." },
                ]} />
            </Section>

            <Section title="Mis Proyectos" id="seccion-proyectos">
                <ProjectGrid projects={[
                    { color: "amarillo", title: "Glosario Español-Inglés", description: "Glosario interactivo para traducción de palabras.", link: "https://ingles.onrender.com/" },
                    { color: "azul", title: "Tienda Virtual SoccerWorld", description: "E-commerce dedicado a productos de fútbol.", link: "https://ligamerch.onrender.com" },
                    { color: "rojo", title: "Registro de Usuarios", description: "Aplicación CRUD para gestión de usuarios.", link: "https://crudapp-h37z.onrender.com" },
                ]} />
            </Section>

            <Section title="Contacto" id="seccion-contacto">
                <p className={styles.sectionText}>Teléfono: +573207512575</p>
                <a href="mailto:juancamilog9911@gmail.com" className={styles.sectionText}>Email: juancamilog9911@gmail.com</a>
                <div className={styles.redes}>
                    <a href="https://github.com/CXmiloxx" target="_blank" rel="noopener noreferrer"><FaGithub />Github</a>
                    <a href="https://www.linkedin.com/in/camilo-guapacha-a6732b270/" target="_blank" rel="noopener noreferrer"><FaLinkedin />Linkedin</a>
                    <a href="https://www.facebook.com/guxpacha?mibextid=ibOpuV" target="_blank" rel="noopener noreferrer"><FaFacebookF />Facebook</a>
                </div>
            </Section>
        </div>
    );
}

const Section = ({ title, id, children }) => (
    <section className={styles.section} id={id}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {children}
    </section>
);

const LanguageGrid = ({ languages }) => (
    <div className={styles.grid}>
        {languages.map(({ icon, name, description }, index) => (
            <Language key={index} icon={icon} name={name} description={description} />
        ))}
    </div>
);

const Language = ({ icon, name, description }) => (
    <div className={styles.lenguaje}>
        {icon}
        <span><strong>{name}:</strong> {description}</span>
    </div>
);

const ServiceGrid = ({ services }) => (
    <div className={styles.grid}>
        {services.map(({ color, title, description }, index) => (
            <Service key={index} color={color} title={title} description={description} />
        ))}
    </div>
);

const Service = ({ color, title, description }) => (
    <div className={styles.servicio}>
        <div className={`${styles.colorFondo} ${styles[color]}`}></div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const ProjectGrid = ({ projects }) => (
    <div className={styles.grid}>
        {projects.map(({ color, title, description, link }, index) => (
            <Project key={index} color={color} title={title} description={description} link={link} />
        ))}
    </div>
);

const Project = ({ color, title, description, link }) => (
    <div className={styles.proyecto}>
        <div className={`${styles.colorFondo} ${styles[color]}`}></div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>Abrir</a>
    </div>
);

export default Body;
