import { Link } from "react-router-dom"
import "./styles/navbar.css";
import { useEffect,useState } from "react";

function Svg() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="blue" className="logoNavbar bi bi-pc" viewBox="0 0 16 16">
    <path d="M5 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M5 1.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M5.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
  </svg>
}

function Navbar() {
    
    const [path,setPath] = useState('');

    useEffect(() => {
        setPath(window.location.pathname);
    },[]);

    if (path === '/') {
        return <div className="navbar">
        <Svg/>
        <Link className="link highlight" to="/"> Acerca de Mi </Link>
        <Link className="link" to="/work"> Proyectos </Link>
        <Link className="link" to="/contact"> Contactame </Link>


    </div>
    } else if (path === '/contact') {
        return <div className="navbar">
        <Svg/>
        <Link className="link" to="/"> Acerca de Mi </Link>
        <Link className="link" to="/work"> Proyectos </Link>
        <Link className="link highlight" to="/contact"> Contactame </Link>


    </div>
    }  else if (path === '/work') {
        return <div className="navbar">
        <Svg/>
        <Link className="link" to="/"> Acerca de Mi </Link>
        <Link className="link highlight" to="/work"> Proyectos </Link>
        <Link className="link" to="/contact"> Contactame </Link>

    </div>
    } 
    else {
        return <h1> 404!</h1>
    }

     
}

export default Navbar;