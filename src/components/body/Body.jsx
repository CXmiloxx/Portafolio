import '../body/Body.css';
import javaImg from '../img/java.png';
import htmlImg from '../img/html-5.png';
import jsImg from '../img/js.png';
import cssImg from '../img/css.png';
import cImg from '../img/letra-c.png';
import dartImg from '../img/dart.png';
import githubImg from '../img/github.png';
import linkedinImg from '../img/linkedin.png';

function Body() {
    return (
        <div>
            <section className="seccion-sobre-mi" id='seccion-sobre-mi'>
                <div className="contenido-sobre-mi">
                    <h2>Sobre mí</h2>
                    <p>
                        ¡Hola! Soy Juan Camilo Guapacha, un entusiasta del desarrollo de software en formación en el SENA. Mi pasión por la tecnología me impulsa a explorar y aprender constantemente. Con experiencia en Java, C, HTML, CSS, y JavaScript, así como en el uso de Android Studio y NetBeans, he creado aplicaciones móviles y de escritorio que despiertan la imaginación y desafían los límites de la innovación.
                        Fuera del mundo del código, disfruto explorar nuevas culturas a través de la lectura y los viajes, y encuentro inspiración en el mundo del deporte.
                        Como estudiante del SENA, estoy comprometido a enfrentar cada desafío con determinación y entusiasmo. Estoy emocionado por las oportunidades que el futuro tiene reservadas y estoy listo para contribuir al mundo del desarrollo de software con soluciones innovadoras.
                    </p>
                </div>
                <div className="lenguajes">
                    <h3>Lenguajes</h3>
                    <div className="contenedor-img">
                        <img src={htmlImg} alt="HTML" />
                        <span>HTML: Lenguaje de marcado utilizado para estructurar el contenido de las páginas web.</span>
                    </div>
                    <div className="contenedor-img">
                        <img src={cssImg} alt="CSS" />
                        <span>CSS: Lenguaje de estilos utilizado para darle formato y diseño a las páginas web.</span>
                    </div>
                    <div className="contenedor-img">
                        <img src={jsImg} alt="JavaScript" />
                        <span>JavaScript: Lenguaje de programación utilizado para crear interactividad en las páginas web.</span>
                    </div>
                    <div className="contenedor-img">
                        <img src={javaImg} alt="Java" />
                        <span>Java: Lenguaje de programación orientado a objetos utilizado en el desarrollo de aplicaciones de escritorio y web.</span>
                    </div>
                    <div className="contenedor-img">
                        <img src={cImg} alt="C" />
                        <span>Lenguaje C: Lenguaje de programación de bajo nivel utilizado para desarrollar sistemas operativos y aplicaciones de alto rendimiento.</span>
                    </div>
                    <div className="contenedor-img">
                        <img src={dartImg} alt="DARK" />
                        <span>DART: Breve descripción del lenguaje DARK.</span>
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
                            <span><i className='bx bx-mobile-alt'></i></span>
                            <h3>Analisis y documentacion de datos</h3>
                            <p>Implementación de la lógica para crear proyectos y documentarlos siguiendo los principios SOLID.</p>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="color-fondo amarillo"></div>
                        <div className="contenido">
                            <span><i className='bx bx-code-block'></i></span>
                            <h3>Diseño de interfaces de usuario</h3>
                            <p>Desarrollo de interfaces intuitivas y atractivas para mejorar la experiencia del usuario.</p>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="color-fondo purpura"></div>
                        <div className="contenido">
                            <span><i className='bx bx-code-block'></i></span>
                            <h3>Desarrollo web</h3>
                            <p>Creación de sitios web dinámicos y funcionales.</p>
                        </div>
                    </div>
                    <div className="servicio">
                        <div className="color-fondo verde"></div>
                        <div className="contenido">
                            <span><i className='bx bx-code-block'></i></span>
                            <h3>Aplicaciones</h3>
                            <p>Creacion de aplicacion con funcionalidad con conexiones a Bases de datos</p>
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
                                    <a href="https://ingles.onrender.com/" target='_blank' className='link'>  Abrir</a>
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
                                <img src={githubImg} alt="GitHub"/>
                            </a>
                        </div>
                        <div className="red-social">
                            <a href="https://www.linkedin.com/in/camilo-guapacha-a6732b270/" target='_blank'>
                                <img src={linkedinImg} alt="Linkedin"/> 
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Body;
