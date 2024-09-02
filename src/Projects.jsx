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
import sqlCourseImg from "./images/courses/sql-course.png";
import webdevCourseImg from "./images/courses/webdev-course.png";
import pythonCourseImg from "./images/courses/python-course.png";
import phpCourseImg from "./images/courses/php-course.png";
import javaCourseImg from "./images/courses/java-course.png";
import dataCourseImg from "./images/courses/data-course.png";
// USE STATE
import Loader from "./Loader";
import { useState,useEffect } from "react";


let upwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>

let downwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>

let frontLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
<path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>

let backLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
<path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>


let youtubeLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" className="bi bi-youtube" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>


let exitLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>

let infoLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="blue" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>

let certificateLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="blue" className="bi bi-card-text" viewBox="0 0 16 16">
<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
<path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>

let projects = [
    {
        "Title": "Top 5 News",
        "Description": "Proyecto con tecnologia React, que usa una API de noticias para extraer las 5 noticias mas relevantes del dia, despues desglosar la informacion en tarjetas con animaciones limpias hechas en CSS",
        "Tags": "#Javascript #React",
        "Img": newsImg,
        "Link":"https://www.youtube.com/watch?v=chDm4el41FU",
    },
    {
        "Title": "Bible Verses",
        "Description": "Proyecto de Front End que usa tecnologia React (Javascript) CSS y HTML para hacer un carrusel infinito en el que cada vez que el usuario toca el fondo de la pagina carga mas contenido. ",
        "Tags": "#Javascript #React",
        "Img": versesImg,
        "Link":"https://www.youtube.com/watch?v=9pxqkgLyRoE",
    },
    {
        "Title": "Portfolio Web Page",
        "Description": "Proyecto de Front End que usa tecnologia React,para hacer una pagina profesional, contiene informacion acerca de las acreditaciones, proyectos y medios de contacto del programador. ",
        "Tags": "#Javascript #React",
        "Img": portfolioImg,
        "Link":"https://www.youtube.com/watch?v=ufeC2vtdsiM",
    }
]

let projectsBack = [
    {
        "Title": "JWT Authentication System en NodeJS",
        "Description": "Proyecto de autenticacion (login,register,etc) usando NodeJS como backend, utilizando el modelo Model View Controller para la solucion, usando encriptacion de password y otras medidas de seguridad",
        "Tags": "#Javascript #NodeJS #PostgreSQL",
        "Img": jwtImg,
        "Link":"https://www.youtube.com/watch?v=CZJt4mJEUc8",
    },
    {
        "Title": "Contact Book en Flask",
        "Description": "Usando React como Front End y Flask como Backend, la aplicacion web consiste de un libro personal de contactos, el usuario puede registrarse, iniciar sesion y agregar/borrar contactos a su preferencia. ",
        "Tags": "#Flask #Python #React #Javascript #MongoDB",
        "Img": contactImg,
        "Link":"https://www.youtube.com/watch?v=_Puangse1Vo&t=12s",
    },
    {
        "Title": "Blog Web App en NodeJS",
        "Description": "Usando React como Front End y NodeJS como Backend, la aplicacion web permite al usuario subir publicaciones de blog con una imagen adherida, la autenticacion del usuario esta hecha por cookies. ",
        "Tags": "#Javascript #React #NodeJS #PostgreSQL",
        "Img": blogImg,
        "Link":"https://www.youtube.com/watch?v=wJyW7PtdhuI&t=2s",
    },
    {
        "Title": "Student Management System en PHP",
        "Description": "Usando PHP sin frameworks, se construyo una aplicacion que usa una base de datos MySQL para gestionar las calificaciones de alumnos en un salon de clases, el maestro puede agregar/borrar alumnos y cambiar su calificacion.",
        "Tags": "#PHP #MySQL",
        "Img": studentsImg,
        "Link":"https://www.youtube.com/watch?v=pOjp9iJUKDE",
    },
    {
        "Title": "Finance Tracker en Laravel",
        "Description": "Usando PHP con el framwork Laravel, se implemento una solucion que permite al usuario controlar sus gastos mensualmente, agregar/eliminar cuentas,gastos e ingresos y desplegarlos en un dashboard para analisis. ",
        "Tags": "#PHP #Laravel #MySQL",
        "Img": financeImg,
        "Link":"https://www.youtube.com/watch?v=X28UbNHOBbA",
    },
    {
        "Title": "Ecommerce Web Store en Laravel",
        "Description": "Usando PHP con el framwork Laravel, se ejecuto la solucion para hacer una aplicacion web de ecommerce, cuenta con seccion de productos, carrito y demas. El administrador cuenta con un dashboard donde puede agregar/modificar/eliminar productos ",
        "Tags": "#PHP #Laravel #MySQL",
        "Img": webstoreImg,
        "Link":"https://www.youtube.com/watch?v=kJQp_rHdbmo",
    },
    {
        "Title": "2FA Auth simulation en NodeJS",
        "Description": "Proyecto de autenticacion (login,register,etc) 2FA usando nodeJS, consiste en un contador con un numero de 6 digitos que cambia cada cierto tiempo, y a su vez cuenta con una API para validat el token actual.",
        "Tags": "#Javascript #NodeJS #PostgreSQL",
        "Img": jwtImg,
        "Link":"https://www.youtube.com/watch?v=wtxNj1DeGOE",
    },
]

let certifications = [
    {
        "Title": "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
        "Img": sqlCourseImg,
    },
    {
        "Title":"The Complete 2024 Web Development Bootcamp",
        "Img": webdevCourseImg,
    },
    {
        "Title":"100 Days of Code: The Complete Python Pro Bootcamp",
        "Img": pythonCourseImg,
    },
    {
        "Title":"Complete Modern PHP Developer Course",
        "Img": phpCourseImg,
    },
    {
        "Title":"Java Programming for Complete Beginners",
        "Img": javaCourseImg,
    },
    {
        "Title":"Machine Learning y Data Science con Python",
        "Img": dataCourseImg,
    }
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
        <div className="projectLogos">
        <button onClick={displayInfo} className="btn"> {infoLogo}</button>
        {showDescription !== true ? 
            <h5 className="description center-screen hidden"> {props.description}</h5>
            : 
            <h5 className="description center-screen"> 
                <p> <span className="bold">Info: </span>{props.description} </p>
                <button className="btn" onClick={displayInfo}> {exitLogo} </button> 
            </h5> 
                
            
            
        }
        <a href={props.link} target="_blank" rel="noopener noreferrer"> {youtubeLogo}</a>
        </div>
        <p className="tag"> {props.tags}</p>
    </div>
}


function CertificateCard(props) {  
    return <div className="singleProject">
        <h1> {props.title} </h1>
        <img src={props.src} alt={props.title}></img>
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
                link={project["Link"]}
            />
        })}      
        </div>
    </div>
}

function CertificateCategory(props) {    
    return <div className="singleProjectContainer">
        <h1 id="categoryTitle"> {props.category} {props.logo} </h1>
        <div className="singleProjectsCards">
        {props.projects.map((project) => {
        return <CertificateCard
                key={project["Title"]}
                title={project["Title"]}
                src={project["Img"]}
            />
        })}      
        </div>
    </div>
}

function Projects() {
    
    const [loading,setLoading] = useState(true);
   
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        },1500)
    });

    // INITIAL STATE OF MENU DEPENDING ON THE WINDOWS WIDTH
    const [menuVisibility, setMenuVisibility] = useState(() => {
        // IF WINDOWS WIDTH IS LESS THAN 596PX
        if ( window.innerWidth < 596) {
        return false;
        } 
        // IF WINDOWS WIDTH IS MORE THAN 596PX
        return true;
    });

    // TOGGLE BETWEEN HIDE MENU AND DISPLAY MENU
    const toggleMenu = () => {
        if (menuVisibility === true) {
        setMenuVisibility(false);
        }
        else {setMenuVisibility(true);}
    };
    
    // EVERY TIME THE WINDOW SIZE CHANGES WE HAVE TO CHECK IF WE DISPLAY OR HIDE THE MENU
    useEffect(() => {
        if ( window.innerWidth < 596) {
        setMenuVisibility(false);

        } else {
        setMenuVisibility(true);
        }
        // IF WINDOWS WIDTH IS MORE THAN 596PX
    },window.innerWidth);
  

    return <div className="App">
         <>
        <button class="dropbtn" onClick={toggleMenu}> Menu {window.innerWidth < 596 ? downwardsArrowLogo : upwardsArrowLogo} </button>
        <Navbar visibility={menuVisibility}/>
        </>    
        {loading !== true ? 
        <>  
            <div className="projectsContainer">
                <ProjectCategory 
                    key="Fullstack"
                    category="Fullstack Projects" 
                    projects={projectsBack}
                    logo={backLogo}
                    />
            </div>
            <div className="projectsContainer">
                <ProjectCategory 
                    key="Front End"
                    category="Front End Projects" 
                    projects={projects}
                    logo={frontLogo}
                    />
            </div>
            <div className="projectsContainer">
                <CertificateCategory
                    key="Udemy"
                    category="Certificados (Udemy)" 
                    projects={certifications}
                    logo={certificateLogo}
                    />
            </div>
            <Footer/>
        </>
        :
        <Loader/>
        }
        
    </div>
}

export default Projects;