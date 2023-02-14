import { SecondaryButton } from "../General/Buttons";
import { ProjectCardContainer, ProjectImage, ProjectLanguage, ButtonContainer, Overlay } from "./Projects.styled";

const ProjectCard = (props) => {
    return (
        <ProjectCardContainer>
            <ProjectImage src={props.src} />
            <h3>{props.title}</h3>
            <ProjectLanguage>{props.language}</ProjectLanguage>
            <Overlay className="overlay">
                <ButtonContainer>
                    <SecondaryButton name="View Project" />
                    <SecondaryButton name="View Code" />
                </ButtonContainer>
            </Overlay>
        </ProjectCardContainer>
    );
}

export default ProjectCard;