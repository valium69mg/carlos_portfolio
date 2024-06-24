import Navbar from "./Navbar"
import "./styles/contact.css";
import phonelogo from "./images/phone.png"
import gmaillogo from "./images/gmail.png";
import githublogo from "./images/github.png";
import linkedinlogo from "./images/linkedinlogo.jpg";
import Footer from "./Footer";
import Loader from "./Loader";
import { useState,useEffect } from "react";
let contactLogo = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>

let contacts = [
    {
        "Img": phonelogo,
        "Mail": "+52 4422737383",
        "Site": "Telefono"
    },
    {
        "Img": gmaillogo,
        "Mail": "carlostranquilino.cr@gmail.com",
        "Site": "Gmail"
    },
    {
        "Img": githublogo,
        "Mail": "valium69mg",
        "Site": "Github"
    },
    {
        "Img": linkedinlogo,
        "Mail": "Carlos Tranquilino Carlos Roman",
        "Site": "LinkedIn"
    }
]

function ContactCard(props) {
    return <div className="contactCard">
        <div className="imgWrapper">                
            <img src={props.img} alt="contactCardImage"></img>
        </div>
        <div className="infoCard">
            <h2> {props.mail}</h2>
            <h4> {props.site} </h4>
        </div>
    </div>
}

function Contact() {
    const [loading,setLoading] = useState(true);
   
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        },1500)
    });
    
    return <div className="App">
        <Navbar/>
        {loading !== true ? 
        <>
            <div className="contactContainer">
                <h1> Contacto {contactLogo}</h1>
                {contacts.map((contact) => {
                    return <ContactCard 
                        mail={contact["Mail"]}
                        site={contact["Site"]}
                        img={contact["Img"]}
                    />
                })}
            </div>
            <Footer/>
        </>
        :
        <Loader/>
        }
        
    </div>
}

export default Contact;