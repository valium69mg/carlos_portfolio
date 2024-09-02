import React from "react";
import Navbar from "./Navbar";
import GenericAvatar from "./images/generic-avatar.jpg";
import CarlosPic from './images/carlos.jpg';
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
import springlogo from "./images/spring-png.png";
import cv from "./cv.pdf";
import "./styles/home.css";
import Loader from "./Loader";
import { useState,useEffect } from "react";

let skills = [
  {
    "Title":"Javascript",
    "Description": "Javascript con HTML y CSS, con jQuery, React, NodeJS.",
    "Img":jslogo,
  },
  {
    "Title":"PHP",
    "Description": "PHP junto con frameworks como Laravel y Wordpress.",
    "Img":phplogo,
  }
  ,
  {
    "Title":"Python",
    "Description": "Python, junto con frameworks como Flask y analisis de datos.",
    "Img":pythonlogo,
  }
  ,
  {
    "Title":"Bases de Datos",
    "Description": "bases de datos SQL y no SQL con: mongoDB, postgreSQL, MySQL, SQLite.",
    "Img":databaselogo,
  },
  {
    "Title":"Java",
    "Description": "Experiencia usando java con spring y spring boot para tecnologias backend.",
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
    "Title":"Spring",
    "Description": "",
    "Img":springlogo,
  },
]

let upwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>

let downwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>

let downloadLogo = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-box-arrow-down" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
<path fillRule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
</svg>;

let gearLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
<path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>;

let terminalLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-terminal" viewBox="0 0 16 16">
<path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9M3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
</svg>;

let windowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-window" viewBox="0 0 16 16">
<path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"/>
</svg>;
//{props.description !== "" ? <p> {props.description.substring(0,100)+'...'}</p> : <p> </p>}

function SkillCard(props) {
  return <div className="skillCard">
          <h1>{props.title} </h1>
          <div class="imgWrapper">
          {props.img !== "" ?  <img src={props.img} alt="skill"></img> :<img src={GenericAvatar} alt="skill"></img>}
          </div>
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
  
  const [loading,setLoading] = useState(true);

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

  // USE EFFECT AT THE BEGGINING OF PAGE LOAD TO SIMULATE LOADING TIME
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },500)
  });

  // EVERY TIME THE WINDOW SIZE CHANGES WE HAVE TO CHECK IF WE DISPLAY OR HIDE THE MENU
  useEffect(() => {
    if ( window.innerWidth < 596) {
      setMenuVisibility(false);

    } else {
      setMenuVisibility(true);
    }
    // IF WINDOWS WIDTH IS MORE THAN 596PX
  },window.innerWidth);
  

  return (
    <div className="App">
      <>
      <button class="dropbtn" onClick={toggleMenu}> Menu {window.innerWidth < 596 ? downwardsArrowLogo : upwardsArrowLogo} </button>
      <Navbar visibility={menuVisibility}/>
      </>    
      {loading !== true ? 
      <>
        <div className="presentationCard">    
          <h1> Acerca de Mi {gearLogo}</h1> 
            <div className="imgWrapper">
            <img src={CarlosPic} alt="avatar"></img>
            </div>
            <h1> Desarrollador Web Fullstack y Programador. </h1>
            <h3> Soy <span>Carlos Tranquilino Carlos Roman</span>, me dedico al diseño de aplicaciones y paginas web usando frameworks y tecnologias modernas. </h3>
            <a className="descargarBtn" href={cv}  target="_blank" rel="noopener noreferrer"> Descargar CV  {downloadLogo} </a>
        </div>
        <div className="skillsSection">
        <h1> Tecnologias {terminalLogo} </h1>
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
      </>
      :
      <Loader/>
      }
      
    </div>
  );
}

export default App;
