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
import { NavbarWithVisibility } from "./NavbarWithVisibility";
import { ProjectCategory,CertificateCategory } from "./Categories";
import {ScrollToTop} from "./ScrollToTop.jsx";


let frontLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
<path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>

let backLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
<path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>



let certificateLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
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
        "Title": "Ecommerce Web Store en Laravel",
        "Description": "Usando PHP con el framwork Laravel, se ejecuto la solucion para hacer una aplicacion web de ecommerce, cuenta con seccion de productos, carrito y demas. El administrador cuenta con un dashboard donde puede agregar/modificar/eliminar productos ",
        "Tags": "#PHP #Laravel #MySQL",
        "Img": webstoreImg,
        "Link":"https://www.youtube.com/watch?v=kJQp_rHdbmo",
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

function Projects() {
    
    const [loading,setLoading] = useState(true);
   
    // SCROLL TO TOP BUTTON

    const [scrollPercentage, setScrollPercentage] = useState(0);
    

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const currentPosition = window.scrollY;
    
        const scrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100;
        setScrollPercentage(scrollPercentage);
    };


    // USE EFFECT AT THE BEGGINING OF PAGE LOAD TO SIMULATE LOADING TIME
    useEffect(() => {
        setTimeout(() => {
        handleScroll();
        setLoading(false);
        }, 1000)
    });

    return <div className="App">
        <NavbarWithVisibility/> 
        {loading !== true ? 
        <>  
            <ScrollToTop 
                scrollPercentage={scrollPercentage}
            />
            <div className="projectsContainer">
                <ProjectCategory 
                    key="Fullstack"
                    category="Fullstack Projects" 
                    projects={projectsBack}
                    logo={backLogo}
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
            <div className="projectsContainer">
                <ProjectCategory 
                    key="Front End"
                    category="Front End Projects" 
                    projects={projects}
                    logo={frontLogo}
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