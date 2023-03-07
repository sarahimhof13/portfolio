import Card from "./Card";
import { SkillCardContainer, SkillsContainer } from "./Skills.styled";

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <h2><span>Skills</span> and tech</h2>
            <SkillCardContainer>
                <Card src="/assets/html-css-logo.png" description="HTML5 & CSS3" />
                <Card src="/assets/javascript-logo.png" description="JavaScript" />
                <Card src="/assets/react-icon.png" description="React.js" />
                <Card src="/assets/styled-components-logo.png" description="Styled Components" />
                <Card src="/assets/mongodb-logo.png" description="MongoDB" />
                <Card src="/assets/nodejs-logo.png" description="Node.js" />
                <Card src="/assets/git-logo.png" description="Git Source Control" />
                <Card src="/assets/figma-logo.png" description="Figma" />
                <Card src="/assets/photoshop-logo.png" description="Photoshop" />
                <Card src="/assets/illustrator-logo.png" description="Illustrator" />
            </SkillCardContainer>
        </SkillsContainer>
    );
}

export default Skills;