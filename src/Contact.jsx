import Navbar from "./Navbar"
import "./styles/contact.css";
import phonelogo from "./images/phone.png"
import gmaillogo from "./images/gmail.png";
import githublogo from "./images/github.png";
import linkedinlogo from "./images/linkedinlogo.jpg";
import Footer from "./Footer";
import Loader from "./Loader";
import { useState,useEffect } from "react";
let contactLogo = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>

let upwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>

let downwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>

let contacts = [
    {
        "Img": phonelogo,
        "Mail": "+52 4422737383",
        "Site": "https://web.whatsapp.com/"
    },
    {
        "Img": gmaillogo,
        "Mail": "carlostranquilino.cr@gmail.com",
        "Site": "https://www.google.com/intl/en-US/gmail/about/"
    },
    {
        "Img": githublogo,
        "Mail": "valium69mg",
        "Site": "https://github.com/valium69mg"
    },
    {
        "Img": linkedinlogo,
        "Mail": "Carlos Tranquilino Carlos Roman",
        "Site": "https://www.linkedin.com/"
    }
]

function ContactCard(props) {
    return <div className="contactCard">
        <div className="imgWrapper">                
            <img src={props.img} alt="contactCardImage"></img>
        </div>
        <div className="infoCard">
            <h2> {props.mail}</h2>
            <a target="_blank" rel="noopener noreferrer" href={props.site}> <h4> {props.site} </h4> </a>
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