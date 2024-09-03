
import { useState } from "react";

let upwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6482AD" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>

function ScrollToTop() {


  // SCROLL TO TOP BUTTON

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const currentPosition = window.scrollY;
  
      const scrollPercentage = (currentPosition / (fullHeight - windowHeight)) * 100;
      scrollPercentage > 25 ? setShowScrollToTop(true) : setShowScrollToTop(false);
  };

  setInterval(() => {
    handleScroll();
  }, 1000);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {
        showScrollToTop === true ? 
        <div className="topOfPageContainer">
          <button className="topOfPageButton" onClick={scrollToTop}>
            Ir a inicio de pagina {upwardsArrowLogo}
          </button>
        </div> 
      : 
        <div className="topOfPageContainer hidden">
          <button className="topOfPageButton" onClick={scrollToTop}>
            Ir a inicio de pagina {upwardsArrowLogo}
          </button>
        </div>
      }
      </>
    )
  }



export {ScrollToTop}