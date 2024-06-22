import Navbar from "./Navbar";
import "./styles/projects.css";
import Footer from "./Footer";

// IMAGES
import newsImg from "./images/projects/news.png";
import versesImg from "./images/projects/verses.png";
import portfolioImg from "./images/projects/portfolio.png";
import jwtImg from "./images/projects/jwt.png";
import contactImg from "./images/projects/contact.png";
import blogImg from "./images/projects/blog.png";
import studentsImg from "./images/projects/students.png";
import financeImg from "./images/projects/finance.png";
import webstoreImg from "./images/projects/webstore.png";

let frontLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
<path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>

let backLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
<path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>

let projects = [
    {
        "Title": "Top 5 News",
        "Description": "Proyecto con tecnologia React, que usa una API de noticias para extraer las 5 noticias mas relevantes del dia, despues desglosar la informacion en tarjetas con animaciones limpias hechas en CSS",
        "Tags": "#Javascript #React",
        "Img": newsImg,
    },
    {
        "Title": "Bible Verses",
        "Description": "Proyecto de Front End que usa tecnologia React (Javascript) CSS y HTML para hacer un carrusel infinito en el que cada vez que el usuario toca el fondo de la pagina carga mas contenido. ",
        "Tags": "#Javascript #React",
        "Img": versesImg,
    },
    {
        "Title": "Portfolio Web Page",
        "Description": "Proyecto de Front End que usa tecnologia React,para hacer una pagina profesional, contiene informacion acerca de las acreditaciones, proyectos y medios de contacto del programador. ",
        "Tags": "#Javascript #React",
        "Img": portfolioImg,
    }
]

let projectsBack = [
    {
        "Title": "JWT Authentication System",
        "Description": "Proyecto de autenticacion (login,register,etc) usando NodeJS como backend, utilizando el modelo Model View Controller para la solucion, usando encriptacion de password y otras medidas de seguridad",
        "Tags": "#Javascript #NodeJS #PostgreSQL",
        "Img": jwtImg,
    },
    {
        "Title": "Contact Book",
        "Description": "Usando React como Front End y Flask como Backend, la aplicacion web consiste de un libro personal de contactos, el usuario puede registrarse, iniciar sesion y agregar/borrar contactos a su preferencia. ",
        "Tags": "#Flask #Python #React #Javascript #MongoDB",
        "Img": contactImg,
    },
    {
        "Title": "Blog Web App",
        "Description": "Usando React como Front End y NodeJS como Backend, la aplicacion web permite al usuario subir publicaciones de blog con una imagen adherida, la autenticacion del usuario esta hecha por cookies. ",
        "Tags": "#Javascript #React #NodeJS #PostgreSQL",
        "Img": blogImg,
    },
    {
        "Title": "Student Management System",
        "Description": "Usando PHP sin frameworks, se construyo una aplicacion que usa una base de datos MySQL para gestionar las calificaciones de alumnos en un salon de clases, el maestro puede agregar/borrar alumnos y cambiar su calificacion.",
        "Tags": "#PHP #MySQL",
        "Img": studentsImg,
    },
    {
        "Title": "Finance Tracker",
        "Description": "Usando PHP con el framwork Laravel, se implemento una solucion que permite al usuario controlar sus gastos mensualmente, agregar/eliminar cuentas,gastos e ingresos y desplegarlos en un dashboard para analisis. ",
        "Tags": "#PHP #Laravel #MySQL",
        "Img": financeImg,
    },
    {
        "Title": "Ecommerce Web Store",
        "Description": "Usando PHP con el framwork Laravel, se ejecuto la solucion para hacer una aplicacion web de ecommerce, cuenta con seccion de productos, carrito y demas. El administrador cuenta con un dashboard donde puede agregar/modificar/eliminar productos ",
        "Tags": "#PHP #Laravel #MySQL",
        "Img": webstoreImg,
    },
]

function ProjectCategory(props) {
    return <div className="singleProjectContainer">
        <h1 id="categoryTitle"> {props.category} {props.logo} </h1>
        <div className="singleProjectsCards">
        {props.projects.map((project) => {
        return <div className="singleProject">
                <h1> {project["Title"]} </h1>
                <img src={project["Img"]} alt={project["title"]}></img>
                <h5> {project["Description"].substring(0,320) + '...'} </h5>
                <p className="tag"> {project["Tags"]}</p>
        </div>
        })}
        </div>
    </div>
}

function Projects() {
    return <div className="App">
        <Navbar/>
        <div className="projectsContainer">
            <ProjectCategory 
                category="Front End" 
                projects={projects}
                logo={frontLogo}
                />
        </div>
        <div className="projectsContainer">
            <ProjectCategory 
                category="Fullstack" 
                projects={projectsBack}
                logo={backLogo}
                />
        </div>
        <Footer/>
    </div>
}

export default Projects;