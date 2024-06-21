import Navbar from "./Navbar";
import "./styles/projects.css";
import GenericAvatar from "./generic-avatar.jpg";
let projects = [
    {
        "Title": "Project Title 1",
        "Description": "El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.",
        "Tags": "#ProjectTag1 #ProjectTag2 #ProjectTag3"
    },
    {
        "Title": "Project Title 1",
        "Description": "El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.",
        "Tags": "#ProjectTag1 #ProjectTag2 #ProjectTag3"
    }
]

let projectsBack = [
    {
        "Title": "Project Title 1",
        "Description": "El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.",
        "Tags": "#ProjectTag1 #ProjectTag2 #ProjectTag3"
    },
]

function ProjectCategory(props) {
    return <div className="singleProjectContainer">
        <h1> {props.category} </h1>
        <div className="singleProjectsCards">
        {props.projects.map((project) => {
        return <div className="singleProject">
                <h1> {project["Title"]} </h1>
                <img src={GenericAvatar} alt="project"></img>
                <h5> {project["Description"].substring(0,360) + '...'} </h5>
                <p className="tag"> {project["Tags"]}</p>
        </div>
        })}
        </div>
    </div>
}

function Projects() {
    return <div className="App">
        <Navbar/>
        <div className="projectsContainer">
            <ProjectCategory category="category 1" projects={projects}/>
        </div>
        <div className="projectsContainer">
            <ProjectCategory category="category 2" projects={projectsBack}/>
        </div>
    </div>
}

export default Projects;