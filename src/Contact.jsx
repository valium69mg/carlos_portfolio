import Navbar from "./Navbar"
import "./styles/contact.css";
import GenericAvatar from "./generic-avatar.jpg";

let contacts = [
    {
        "Img": "",
        "Mail": "carlostranquilino.cr@gmail.com",
        "Site": "Gmail"
    },
    {
        "Img": "",
        "Mail": "valium69mg",
        "Site": "Github"
    },
    {
        "Img": "",
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
    return <div className="App">
        <Navbar/>
        <div className="contactContainer">
            {contacts.map((contact) => {
                return <ContactCard 
                    mail={contact["Mail"]}
                    site={contact["Site"]}
                    img={GenericAvatar}
                />
            })}
        </div>
    </div>
}

export default Contact;