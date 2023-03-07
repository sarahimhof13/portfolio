import { SecondaryButton } from "../General/Buttons";
import { ProjectCardContainer, ProjectImage, ProjectLanguage, ButtonContainer, ProjectImageContainer } from "./Projects.styled";

const ProjectCard = ({ src, title, language, href1, href2 }) => {
    return (
        <ProjectCardContainer>
            <ProjectImageContainer>
                <ProjectImage src={src} />
            </ProjectImageContainer>
            <h3>{title}</h3>
            <ProjectLanguage>{language}</ProjectLanguage>
            <ButtonContainer>
                <SecondaryButton name="View Project" href={href1} />
                <SecondaryButton name="View Code" href={href2} />
            </ButtonContainer>
        </ProjectCardContainer>
    );
}

export default ProjectCard;