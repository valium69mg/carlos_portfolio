import React from "react";
import Navbar from "./Navbar";
import GenericAvatar from "./generic-avatar.jpg";
import "./styles/home.css";

let skills = [
  {
    "Title":"Javascript",
    "Description": "1 año de experiencia usando javascript junto con html y css, incluyendo tecnologias como react y nodeJS (Front-end y Back-end)",
    "Img":"",
  },
  {
    "Title":"PHP",
    "Description": "1 año de experiencia usando PHP, junto con frameworks como Laravel y Symphony, bases de datos SQL y herramientas como Wordpress.",
    "Img":"",
  }
  ,
  {
    "Title":"Python",
    "Description": "1 año de experiencia usando Python, junto con frameworks como Flask y Django y herramientas de Analisis de Datos y Machine Learning.",
    "Img":"",
  }
  ,
  {
    "Title":"Bases de Datos",
    "Description": "1 año de experiencia bases de datos SQL y no SQL, ya sea mongoDB, postgreSQL, MySQL, SQLite, etc",
    "Img":"",
  }
]

function SkillCard(props) {
  return <div className="skillCard">
          <h1>{props.title} </h1>
          <img src={GenericAvatar} alt="skill"></img>

          <p> {props.description.substring(0,130)+'...'}</p>
  </div>
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="presentationCard">
          <h1> Ingeniero en Mecatronica, Desarrollador Web Fullstack y Programador. </h1>
          <h3> Me dedico al diseño de aplicaciones y paginas web usando frameworks y tecnologias modernas. </h3>
          <div className="imgWrapper">
          <img src={GenericAvatar} alt="avatar"></img>
          </div>
      </div>
      <div className="skillsCardContainer">
        {skills.map((skill) => {
          return <SkillCard 
            title={skill["Title"]} 
            description={skill["Description"]}
          />
        })}
      </div>
    </div>
  );
}

export default App;
