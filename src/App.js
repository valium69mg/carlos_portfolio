import React from "react";
import {NavbarWithVisibility} from "./NavbarWithVisibility.js";
import CarlosPic from './images/carlos.png';
import jslogo from "./images/js-logo.png";
import phplogo from "./images/php-logo.png";
import pythonlogo from './images/python-logo.png';
import databaselogo from "./images/database.png";
import javaLogo from "./images/java-logo.png";
import laravellogo from "./images/laravel-logo.png";
import reactlogo from "./images/react-logo.png";
import Footer from "./Footer";
import wordpresslogo from "./images/wordpresslogo.png";
import nodejslogo from "./images/nodejs-logo.png";
import linuxlogo from "./images/linuxlogo.png";
import springlogo from "./images/spring-boot-logo.png";
import cv from "./cv_carlostranquilinocarlos.pdf";
import "./styles/home.css";
import Loader from "./Loader";
import { useState,useEffect } from "react";
import { SkillCard,FrameCard } from "./AbilityCards.js";
import {ScrollToTop} from "./ScrollToTop.jsx";
import { ProjectCategory } from "./Categories.js";
import webstoreImg from "./images/projects/webstore.png";
import jwtImg from "./images/projects/jwt.png";
import laravelCloudImg from "./images/projects/laravelcloud.jpg";
import universityImage from "./images/Tecnol3Fgico_de_Monterrey_old.png";
import "./styles/projects.css";


let backLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-pc-display" viewBox="0 0 16 16">
<path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>

let highlightProjects = [
  {
    "Title": "Ecommerce Web Store en Laravel",
    "Description": "Usando PHP con el framwork Laravel, se ejecuto la solucion para hacer una aplicacion web de ecommerce, cuenta con seccion de productos, carrito y demas. El administrador cuenta con un dashboard donde puede agregar/modificar/eliminar productos ",
    "Tags": "#PHP #Laravel #MySQL",
    "Img": webstoreImg,
    "Link":"https://www.youtube.com/watch?v=kJQp_rHdbmo",
  },
  {
    "Title": "Nube Multimedia en Laravel",
    "Description": "Proyecto de una web app que guarda multiples recursos multimedia que el usuario quiera respaldar en un servidor, permite crear carpetas y modificar nombres de los recursos, ya sea videos, imagenes o audio.",
    "Tags": "#Laravel #PHP #MySql",
    "Img": laravelCloudImg,
    "Link":"https://www.youtube.com/watch?v=mFTw0mVRy8k",
},
  {
      "Title": "JWT Authentication System en NodeJS",
      "Description": "Proyecto de autenticacion (login,register,etc) usando NodeJS como backend, utilizando el modelo Model View Controller para la solucion, usando encriptacion de password y otras medidas de seguridad",
      "Tags": "#Javascript #NodeJS #PostgreSQL",
      "Img": jwtImg,
      "Link":"https://www.youtube.com/watch?v=CZJt4mJEUc8",
  },
  
]
let skills = [
  {
    "Title":"Javascript",
    "Description": "Javascript para front end y back end.",
    "Img":jslogo,
  },
  {
    "Title":"PHP",
    "Description": "PHP junto con Laravel y Wordpress.",
    "Img":phplogo,
  }
  ,
  {
    "Title":"Python",
    "Description": "Python para analisis de datos.",
    "Img":pythonlogo,
  }
  ,
  {
    "Title":"BDs",
    "Description": "bases de datos SQL y noSQL.",
    "Img":databaselogo,
  },
  {
    "Title":"Java",
    "Description": "Java para desarrollo web con spring boot",
    "Img":javaLogo,
  }
  
]

let skillsFramework = [
  {
    "Title":"React",
    "Description": "",
    "Img":reactlogo,
  },
  {
    "Title":"Laravel",
    "Description": "",
    "Img":laravellogo,
  },
  {
    "Title":"Wordpress",
    "Description": "",
    "Img":wordpresslogo,
  },
  {
    "Title":"NodeJS",
    "Description": "",
    "Img":nodejslogo,
  },
  {
    "Title":"Linux Systems",
    "Description": "",
    "Img":linuxlogo,
  },
  {
    "Title":"Spring Boot",
    "Description": "",
    "Img":springlogo,
  },
]

let downloadLogo = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-box-arrow-down" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
<path fillRule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
</svg>;

let gearLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-exclamation" viewBox="0 0 16 16">
<path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
<path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>

let terminalLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16">
<path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
</svg>;

let windowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-window" viewBox="0 0 16 16">
<path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"/>
</svg>;



function App() {

  document.title = 'Carlos Portfolio';

  const [loading,setLoading] = useState(true);

  // USE EFFECT AT THE BEGGINING OF PAGE LOAD TO SIMULATE LOADING TIME
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  });


  return (
    <div className="App">
      <NavbarWithVisibility />  
      <ScrollToTop
        key={"appsticky"}
        />
      {loading !== true ? 
      <>
        
        <div className="presentationCard">    
          
            <div className="imgWrapper">
            
            <img src={CarlosPic} alt="avatar"></img>
            </div>
            <h1> Mi info {gearLogo}</h1> 

            
            <h3> Soy <span>Carlos Tranquilino Carlos Roman</span>, soy un Ingeniero en Mecatronica y programador fullstack de web apps. </h3>
            <div class="universityContainer">
            <h3> Egresado de </h3>
            <img src={universityImage} id="uniImage" alt="tecdemty">

            </img>
            </div>
            
            <a className="descargarBtn" href={cv}  target="_blank" rel="noopener noreferrer"> Descargar c.v.  {downloadLogo} </a>
          
        </div>
        <div className="projectsContainer">
                <ProjectCategory 
                    key="Destacado"
                    category="Ultimos proyectos" 
                    projects={highlightProjects}
                    logo={backLogo}
                    />
            </div>
        <div className="skillsSection">
        <h1> Tecnologias {terminalLogo} </h1>
        <div className="skillsCardContainer">
          {skills.map((skill) => {
            return <SkillCard 
              key={skill["Title"]}
              title={skill["Title"]} 
              description={skill["Description"]}
              img={skill["Img"]}
            />
          })}
        </div>
        </div>
        <div className="skillsSection">
        <h1> Frameworks {windowLogo} </h1>
        <div className="skillsCardContainer">
          {skillsFramework.map((skill) => {
            return <FrameCard 
              key={skill["Title"]} 
              title={skill["Title"]} 
              description={skill["Description"]}
              img={skill["Img"]}
            />
          })}
        </div>
        </div>
        <Footer/>
        
      </>
      
      :
      <Loader/>
      }
      
    </div>
  );
}

export default App;
