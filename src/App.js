import React from "react";
import Navbar from "./Navbar";
import GenericAvatar from "./images/generic-avatar.jpg";
import CarlosPic from './images/carlos.jpg';
import jslogo from "./images/js-logo.png";
import phplogo from "./images/php-logo.png";
import pythonlogo from './images/python-logo.png';
import databaselogo from "./images/database.png";
import cpp from "./images/cpp.png";
import laravellogo from "./images/laravel-logo.png";
import reactlogo from "./images/react-logo.png";
import Footer from "./Footer";
import wordpresslogo from "./images/wordpresslogo.png";
import nodejslogo from "./images/nodejs-logo.png";
import linuxlogo from "./images/linuxlogo.png";
import djangologo from "./images/django-icon.png";
import cv from "./blank.pdf";
import "./styles/home.css";

let skills = [
  {
    "Title":"Javascript",
    "Description": "Javascript para Web Development con HTML y CSS, con jQuery, React, NodeJS, etc.",
    "Img":jslogo,
  },
  {
    "Title":"PHP",
    "Description": "PHP junto con frameworks como Laravel y Symphony y herramientas como Wordpress.",
    "Img":phplogo,
  }
  ,
  {
    "Title":"Python",
    "Description": "Python, junto con frameworks como Flask y Django y herramientas de Analisis de Datos y Machine Learning.",
    "Img":pythonlogo,
  }
  ,
  {
    "Title":"Bases de Datos",
    "Description": "bases de datos SQL y no SQL con distintos lenguajes de programacion, ya sea mongoDB, postgreSQL, MySQL, SQLite, etc",
    "Img":databaselogo,
  },
  {
    "Title":"C/C++",
    "Description": "Experiencia programando microcontroladores con el uso de C y C++, incluyendo proyectos de sistemas embebidos y de control de variables.",
    "Img":cpp,
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
    "Title":"Wordpress.org",
    "Description": "",
    "Img":wordpresslogo,
  },
  {
    "Title":"Node JS",
    "Description": "",
    "Img":nodejslogo,
  },
  {
    "Title":"Linux Systems",
    "Description": "",
    "Img":linuxlogo,
  },
  {
    "Title":"Django",
    "Description": "",
    "Img":djangologo,
  },
]

let downloadLogo = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-box-arrow-down" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
<path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
</svg>;

let gearLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
<path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>;

let terminalLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16">
<path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
</svg>;

let windowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-window" viewBox="0 0 16 16">
<path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"/>
</svg>;

function SkillCard(props) {
  return <div className="skillCard">
          {props.img !== "" ?  <img src={props.img} alt="skill"></img> :<img src={GenericAvatar} alt="skill"></img>}
          <h1>{props.title} </h1>
          {props.description !== "" ? <p> {props.description.substring(0,100)+'...'}</p> : <p> </p>}
  </div>
}


function FrameCard(props) {
  return <div className="skillCard frameCard">
          <h1>{props.title} </h1>
          <div class="imgWrapper">
          {props.img !== "" ?  <img src={props.img} alt="skill"></img> :<img src={GenericAvatar} alt="skill"></img>}
          </div>
  </div>
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="presentationCard">    
        <h1> Acerca de Mi {gearLogo}</h1> 
          <div className="imgWrapper">
          <img src={CarlosPic} alt="avatar"></img>
          </div>
          <h1> Ingeniero en Mecatronica, Desarrollador Web Fullstack y Programador. </h1>
          <h3> Soy <span>Carlos Tranquilino Carlos Roman</span>, me dedico al diseño de aplicaciones y paginas web usando frameworks y tecnologias modernas. </h3>
          <a className="descargarBtn" href={cv}  target="_blank" rel="noopener noreferrer"> Descargar CV  {downloadLogo} </a>
      </div>
      <div className="skillsSection">
      <h1> Technologias {terminalLogo} </h1>
      <div className="skillsCardContainer">
        {skills.map((skill) => {
          return <SkillCard 
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
            title={skill["Title"]} 
            description={skill["Description"]}
            img={skill["Img"]}
          />
        })}
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
