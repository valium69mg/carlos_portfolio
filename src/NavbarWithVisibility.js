import Navbar from "./Navbar";
import { useState } from "react";


let upwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>

let downwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
<path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
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