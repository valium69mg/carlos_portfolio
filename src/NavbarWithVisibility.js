import Navbar from "./Navbar";
import { useState } from "react";


let upwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-up" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>

let downwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
</svg>

function NavbarWithVisibility() {

    // INITIAL STATE OF MENU DEPENDING ON THE WINDOWS WIDTH
  const [menuVisibility, setMenuVisibility] = useState(() => {
    // IF WINDOWS WIDTH IS LESS THAN 596PX
    if ( window.innerWidth < 596) {
      return false;
    } 
    // IF WINDOWS WIDTH IS MORE THAN 596PX
    return true;
  });

  window.onresize = () => {
    window.innerWidth < 596 ?  setMenuVisibility(false) :  setMenuVisibility(true); 
  };
  

  // TOGGLE BETWEEN HIDE MENU AND DISPLAY MENU
  const toggleMenu = () => {
    if (menuVisibility === true) {
      setMenuVisibility(false);
    }
    else {setMenuVisibility(true);}
  };
    return <>
    <button className="dropbtn" onClick={toggleMenu}> Menu {menuVisibility === false ? downwardsArrowLogo : upwardsArrowLogo} </button>
    <Navbar visibility={menuVisibility}/>
    </>    
}

export {NavbarWithVisibility}