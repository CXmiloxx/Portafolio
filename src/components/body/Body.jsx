import '../body/Body.css';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin, FaLaravel } from 'react-icons/fa';
import { SiC, SiDart, SiPhp } from 'react-icons/si';
import { DiReact } from 'react-icons/di';

function Body() {
    return (
        <div className="body-container">
            <section className="seccion-sobre-mi" id='seccion-sobre-mi'>
                <div className="contenido-sobre-mi">
                    <h2>Sobre mí</h2>
                    <p className='pSobre-mi'>
                        ¡Hola! Soy Juan Camilo Guapacha, un entusiasta del desarrollo de software en formación en el SENA. Mi pasión por la tecnología me impulsa a explorar y aprender constantemente. Con experiencia en Java, C, HTML, CSS, JavaScript y PHP, así como en el uso de Android Studio y NetBeans, he creado aplicaciones móviles y de escritorio que despiertan la imaginación y desafían los límites de la innovación.
                        Fuera del mundo del código, disfruto explorar nuevas culturas a través de la lectura y los viajes, y encuentro inspiración en el mundo del deporte.
                        Como estudiante del SENA, estoy comprometido a enfrentar cada desafío con determinación y entusiasmo. Estoy emocionado por las oportunidades que el futuro tiene reservadas y estoy listo para contribuir al mundo del desarrollo de software con soluciones innovadoras.
                    </p>
                </div>
            </section>

            <section className="seccion-lenguajes" id='seccion-lenguajes'>
                <h2>Lenguajes de Programación</h2>
                <div className="grid-lenguajes">
                    <div className="contenedor-img">
                        <FaJs className="icono-lenguaje" />
                        <span>
                            <strong>JavaScript:</strong> Lenguaje de programación que añade interactividad a las páginas web. Esencial para el desarrollo de aplicaciones web dinámicas y para manejar eventos de usuario.
                        </span>
                    </div>
                    <div className="contenedor-img">
                        <FaJava className="icono-lenguaje" />
                        <span>
                            <strong>Java:</strong> Lenguaje de programación orientado a objetos ampliamente utilizado para desarrollar aplicaciones empresariales, aplicaciones de escritorio y sistemas en la web.
                        </span>
                    </div>
                    <div className="contenedor-img">
                        <SiC className="icono-lenguaje" />
                        <span>
                            <strong>Lenguaje C:</strong> Lenguaje de programación de bajo nivel conocido por su eficiencia y control. Utilizado para el desarrollo de sistemas operativos, software embebido y aplicaciones de alto rendimiento.
                        </span>
                    </div>
                    <div className="contenedor-img">
                        <SiDart className="icono-lenguaje" />
                        <span>
                            <strong>Dart:</strong> Lenguaje de programación desarrollado por Google, utilizado principalmente para desarrollar aplicaciones móviles con el framework Flutter. Ofrece una sintaxis moderna y eficiente.
                        </span>
                    </div>
                    <div className="contenedor-img">
                        <SiPhp className="icono-lenguaje" />
                        <span>
                            <strong>PHP:</strong> Lenguaje de programación del lado del servidor, ampliamente utilizado para el desarrollo web. Permite generar contenido dinámico y gestionar bases de datos.
                        </span>
                    </div>
                </div>
            </section>

            <section className="seccion-maquetacion-estilos" id='seccion-maquetacion-estilos'>
                <h2>Lenguajes de Maquetación y Estilo</h2>
                <div className="grid-lenguajes">
                    <div className="contenedor-img">
                        <FaHtml5 className="icono-lenguaje" />
                        <span>
                            <strong>HTML:</strong> Lenguaje de marcado fundamental para la estructura de páginas web. Permite definir el contenido y los elementos en la web, desde encabezados hasta párrafos y enlaces.
                        </span>
                    </div>
                    <div className="contenedor-img">
                        <FaCss3Alt className="icono-lenguaje" />
                        <span>
                            <strong>CSS:</strong> Lenguaje de hojas de estilo que se utiliza para definir la presentación visual de las páginas web. Permite ajustar colores, fuentes, márgenes y otros aspectos de diseño.
                        </span>
                    </div>
                </div>
            </section>

            <section className="seccion-frameworks" id='seccion-frameworks'>
                <h2>Frameworks y Librerías</h2>
                <div className="grid-frameworks">
                    <div className="contenedor-img">
                        <DiReact className="icono-lenguaje" />
                        <span>
                            <strong>React:</strong> Biblioteca de JavaScript para construir interfaces de usuario interactivas. Permite crear aplicaciones de una sola página (SPA) de manera eficiente y modular.
                        </span>
                    </div>
                    <div className="contenedor-img">
                        <FaLaravel className="icono-lenguaje" />
                        <span>
                            <strong>Laravel:</strong> Framework de PHP que proporciona una estructura robusta para el desarrollo de aplicaciones web. Facilita el desarrollo con herramientas como el enrutamiento, la autenticación y la gestión de bases de datos.
                        </span>
                    </div>
                </div>
            </section>

            <section className="seccion-servicios" id='seccion-servicios'>
                <h2>Servicios</h2>
                <p>
                    Ofrezco una variedad de servicios en el campo del desarrollo de software y diseño de interfaces de usuario. Mis habilidades incluyen:
                </p>
                <div className="grid-servicios">
                    <div className="servicio">
                        <div className="color-fondo azul"></div>
                        <div className="contenido">
                            <h3>Análisis y documentación de datos</h3>
                            <p>Implementación de la lógica para crear proyectos y documentarlos siguiendo los principios SOLID.</p>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="color-fondo amarillo"></div>
                        <div className="contenido">
                            <h3>Diseño de interfaces de usuario</h3>
                            <p>Desarrollo de interfaces intuitivas y atractivas para mejorar la experiencia del usuario.</p>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="color-fondo purpura"></div>
                        <div className="contenido">
                            <h3>Desarrollo web</h3>
                            <p>Creación de sitios web dinámicos y funcionales.</p>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="color-fondo verde"></div>
                        <div className="contenido">
                            <h3>Aplicaciones</h3>
                            <p>Creación de aplicaciones con funcionalidad y conexiones a bases de datos.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="seccion-proyectos" id='seccion-proyectos'>
                <div className="contenedor-proyectos">
                    <h3 className="titulo-proyectos">Mis Proyectos Personales</h3>
                    <div className="grid-proyectos">
                        <div className="proyecto-proyecto">
                            <div className="color-fondo-rojo"></div>
                            <div className="contenido-proyecto">
                                <h4 className="titulo-proyecto">Glosario de palabras Español-Inglés</h4>
                                <p className="descripcion-proyecto">Este proyecto consiste en un glosario interactivo que ayuda a traducir palabras del español al inglés y viceversa. Utiliza una interfaz sencilla y amigable para el usuario, permitiendo buscar y explorar palabras fácilmente.</p>
                                <a href="https://ingles.onrender.com/" target='_blank' className='link'>Abrir</a>
                            </div>
                        </div>
                        <div className="proyecto-proyecto">
                            <div className="color-fondo-negro"></div>
                            <div className="contenido-proyecto">
                                <h4 className="titulo-proyecto">Tienda Virtual SoccerWorld</h4>
                                <p className="descripcion-proyecto">La tienda virtual SoccerWorld es un proyecto de comercio electrónico dedicado a la venta de productos relacionados con el fútbol. Permite a los usuarios registrarse, iniciar sesión y realizar compras de manera segura y conveniente.</p>
                                <a href="https://ligamerch.onrender.com" target='_blank' className='link'>Abrir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='seccion-contacto' className='seccion-contacto'>
                <h2>Contacto</h2>
                <p>Puedes contactarme por teléfono o correo electrónico:</p>
                <ul className="contacto-lista">
                    <li>
                        <p><strong>Teléfono:</strong> +573207512575</p>
                        <p><strong>Email:</strong> juancamilog9911@gmail.com</p>
                        <div className="red-social">
                            <a href="https://github.com/CXmiloxx" target='_blank'>
                                <FaGithub className="icono-red-social" />
                            </a>
                            <a href="https://www.linkedin.com/in/juan-camilo-guapacha/" target='_blank'>
                                <FaLinkedin className="icono-red-social" />
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Body;
