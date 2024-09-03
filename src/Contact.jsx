import "./styles/contact.css";
import phonelogo from "./images/phone.png"
import gmaillogo from "./images/gmail.png";
import githublogo from "./images/github.png";
import linkedinlogo from "./images/linkedinlogo.png";
import Footer from "./Footer";
import Loader from "./Loader";
import { useState,useEffect } from "react";
import { NavbarWithVisibility } from "./NavbarWithVisibility";

let contactLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>

let contacts = [
    {
        "Img": phonelogo,
        "Mail": "+52 4422737383",
        "Site": "https://wa.me/524422737383",
        "Message":"Mandame un Whatsapp."
    },
    {
        "Img": gmaillogo,
        "Mail": "carlostranquilino.cr@gmail.com",
        "Site": "https://mail.google.com/mail/?view=cm&fs=1&to=carlostranquilino.cr@gmail.com&su=SUBJECT&body=BODY",
        "Message":"Enviame un mail a gmail."
    },
    {
        "Img": githublogo,
        "Mail": "valium69mg",
        "Site": "https://github.com/valium69mg",
        "Message":"Visita mi github."

    },
    {
        "Img": linkedinlogo,
        "Mail": "Carlos Tranquilino Carlos Roman",
        "Site": "https://www.linkedin.com/in/carlos-tranquilino-carlos-rom%C3%A1n-678a50302/",
        "Message":"Checa mi Linkedin."

    }
]

function ContactCard(props) {
    return <div className="contactCard">
        <img src={props.img} alt="contactCardImage"></img>
        <div className="infoCard">
            <h2> {props.mail}</h2>
            <a target="_blank" rel="noopener noreferrer" href={props.site}> <h4> {props.message} </h4> </a>
        </div>
    </div>
}

function Contact() {
    const [loading,setLoading] = useState(true);
   
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        },1000)
    });

    return <div className="App">
        <NavbarWithVisibility/>   
        {loading !== true ? 
        <>
            <div className="contactContainer">
                <h1> Contacto {contactLogo}</h1>
                {contacts.map((contact) => {
                    return <ContactCard 
                        key={contact["Mail"]}
                        mail={contact["Mail"]}
                        site={contact["Site"]}
                        img={contact["Img"]}
                        message={contact["Message"]}
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