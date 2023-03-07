import { SecondaryButton } from "../General/Buttons";
import ProjectCard from "./ProjectCard";
import { ProjectsContainer, ProjectsHeader, ProjectsSection } from "./Projects.styled";

const Projects = () => {
    return (
        <ProjectsSection id="projects">
            <ProjectsHeader>
                <h2>Projects</h2>
                <SecondaryButton name="Contact Me" href="#contact" />
            </ProjectsHeader>
            <ProjectsContainer>
                <ProjectCard src="/assets/projects/skilled-e-learning-platform.png" title="Skilled E-Learning Landing Page" language="Javascript react styled-components" />
            </ProjectsContainer>
        </ProjectsSection>
    );
}

export default Projects;