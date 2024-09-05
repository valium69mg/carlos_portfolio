import GenericAvatar from "./images/generic-avatar.jpg";
import { useState } from "react";
import "./styles/home.css";


let youtubeLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#6482AD" className="bi bi-youtube" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>


let exitLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>

let infoLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#6482AD" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>

function SkillCard(props) {
    return <div className="skillCard">
            <h1>{props.title} </h1>
            <div className="imgWrapper">
            {props.img !== "" ?  <img src={props.img} alt="skill" loading="lazy"></img> : <img src={GenericAvatar} alt="skill" loading="lazy"></img>}
            </div>
            <p> {props.description}</p>
        </div>
  }
  
  
function FrameCard(props) {
    return <div className="skillCard frameCard">
            <h1>{props.title} </h1>
            <div className="imgWrapper">
            {props.img !== "" ?  <img src={props.img} alt="skill" loading="lazy"></img> :<img src={GenericAvatar} alt="skill" loading="lazy"></img>}
            </div>
    </div>
}

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
        <img src={props.src} alt={props.title} loading="lazy"></img>
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
        <img src={props.src} alt={props.title} loading="lazy"></img>
    </div>
}
export {SkillCard,FrameCard,ProjectCard,CertificateCard}