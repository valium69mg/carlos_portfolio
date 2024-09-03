
let upwardsArrowLogo = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6482AD" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
<path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>

function ScrollToTop(props) {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {
        props.show === true ? 
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