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

// USE STATE
import { useState } from "react";

let frontLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
<path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>

let backLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
<path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>


let youtubeLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" className="bi bi-youtube" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>


let exitLogo = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>

let commentLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" className="bi bi-chat-left-dots" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
<path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
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

function ProjectCard(props) {  
    
    const [showDescription,setShowDescription] = useState(false);

    function displayInfo() {
        if (showDescription === true) {
            setShowDescription(false);
        } else {
            
            setShowDescription(true);
        }
    }
    return <div className="singleProject">
        <h1> {props.title} </h1>
        <img src={props.src} alt={props.title}></img>
        <button onClick={displayInfo} className="btn"> {commentLogo}</button>
        {showDescription !== true ? 
            <h5 className="description hidden"> {props.description}</h5>
            : 
            
            <h5 className="description center-screen"> 
                {props.description} 
                <button className="btn" onClick={displayInfo}> {exitLogo} </button> 
            </h5> 
                
            
            
        }
        <a href="#"> {youtubeLogo}</a>
        <p className="tag"> {props.tags}</p>
    </div>
}


function ProjectCategory(props) {    
    return <div className="singleProjectContainer">
        <h1 id="categoryTitle"> {props.category} {props.logo} </h1>
        <div className="singleProjectsCards">
        {props.projects.map((project) => {
        return <ProjectCard
                key={project["Title"]}
                title={project["Title"]}
                description={project["Description"]}
                src={project["Img"]}
                tags={project["Tags"]}
            />
    
        })}      
        </div>
    </div>
}

function Projects() {
    return <div className="App">
        <Navbar/>
        <div className="projectsContainer">
            <ProjectCategory 
                key="Front End"
                category="Front End" 
                projects={projects}
                logo={frontLogo}
                />
        </div>
        <div className="projectsContainer">
            <ProjectCategory 
                key="Fullstack"
                category="Fullstack" 
                projects={projectsBack}
                logo={backLogo}
                />
        </div>
        <Footer/>
    </div>
}

export default Projects;