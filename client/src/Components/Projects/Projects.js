import { SecondaryButton } from "../General/Buttons";
import ProjectCard from "./ProjectCard";
import { ProjectsContainer, ProjectsHeader, ProjectsSection } from "./Projects.styled";

import ProjectImg from "../../assets/thumbnail-project-1-large.webp"

const Projects = () => {
    return (
        <ProjectsSection>
            <ProjectsHeader>
                <h2>Projects</h2>
                <SecondaryButton name="Contact Me" />
            </ProjectsHeader>
            <ProjectsContainer>
                <ProjectCard src={ProjectImg} title="Design Portfolio" language="Javascript HTML" />
                <ProjectCard src={ProjectImg} title="Design Portfolio" language="Javascript HTML" />
                <ProjectCard src={ProjectImg} title="Design Portfolio" language="Javascript HTML" />
            </ProjectsContainer>
        </ProjectsSection>
    );
}

export default Projects;