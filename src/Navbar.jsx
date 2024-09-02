import { Link } from "react-router-dom"
import "./styles/navbar.css";
import { useEffect,useState } from "react";

function Svg() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="blue" className="logoNavbar bi bi-code-slash" viewBox="0 0 16 16">
    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
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