import { SecondaryButton } from "../General/Buttons";
import ProjectCard from "./ProjectCard";
import { ProjectsContainer, ProjectsHeader, ProjectsSection } from "./Projects.styled";

const Projects = () => {

    const handleClickNav = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ProjectsSection id="projects">
            <ProjectsHeader>
                <h2>Projects</h2>
                <SecondaryButton name="Contact Me" onClick={() => handleClickNav("contact")} />
            </ProjectsHeader>
            <ProjectsContainer>
                <ProjectCard src="/assets/projects/skilled-e-learning-platform.png" title="Skilled E-Learning Landing Page" language="Javascript react styled-components" href1="https://skilled-elearning-landing.sarahimhof.com/" href2="https://github.com/sarahimhof13/e-learning-landing-page"/>
            </ProjectsContainer>
        </ProjectsSection>
    );
}

export default Projects;