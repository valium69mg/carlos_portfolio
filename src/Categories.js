import { ProjectCard,CertificateCard } from "./AbilityCards";

function ProjectCategory(props) {    
    return <div className="singleProjectContainer">
        <h1 id="categoryTitle"> {props.category} {props.logo} </h1>
        <div className="singleProjectsCards">
        {props.projects.map((project) => {
        return <ProjectCard
                key={project["Title"]}
                title={project["Title"]}
                description={project["Description"]}
                src={project["Img"]}
                tags={project["Tags"]}
                link={project["Link"]}
            />
        })}      
        </div>
    </div>
}

function CertificateCategory(props) {    
    return <div className="singleProjectContainer">
        <h1 id="categoryTitle"> {props.category} {props.logo} </h1>
        <div className="singleProjectsCards">
        {props.projects.map((project) => {
        return <CertificateCard
                key={project["Title"]}
                title={project["Title"]}
                src={project["Img"]}
            />
        })}      
        </div>
    </div>
}

export {ProjectCategory,CertificateCategory}