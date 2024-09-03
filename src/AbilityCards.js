import GenericAvatar from "./images/generic-avatar.jpg";


function SkillCard(props) {
    return <div className="skillCard">
            <h1>{props.title} </h1>
            <div className="imgWrapper">
            {props.img !== "" ?  <img src={props.img} alt="skill" loading="lazy"></img> : <img src={GenericAvatar} alt="skill" loading="lazy"></img>}
            </div>
        </div>
  }
  
  
function FrameCard(props) {
    return <div className="skillCard frameCard">
            <h1>{props.title} </h1>
            <div className="imgWrapper">
            {props.img !== "" ?  <img src={props.img} alt="skill" loading="lazy"></img> :<img src={GenericAvatar} alt="skill" loading="lazy"></img>}
            </div>
    </div>
}
  
export {SkillCard,FrameCard}