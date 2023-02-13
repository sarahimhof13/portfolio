import Card from "./Card";
import { SkillCardContainer, SkillsContainer, CircleImg } from "./Skills.styled";

import HtmlCSSLogo from "../../assets/html-css-logo.png"
import JavaScriptLogo from "../../assets/javascript-logo.png"
import ReactLogo from "../../assets/react-icon.png"
import StyledComponentsLogo from "../../assets/styled-components-logo.png"
import MongodbLogo from "../../assets/mongodb-logo.png"
import NodejsLogo from "../../assets/nodejs-logo.png"
import GitLogo from "../../assets/git-logo.png"
import FigmaLogo from "../../assets/figma-logo.png"
import PhotoshopLogo from "../../assets/photoshop-logo.png"
import IllustratorLogo from "../../assets/illustrator-logo.png"
import CirclesImg from "../../assets/pattern-rings-2.svg"

const Skills = () => {
    return (
        <SkillsContainer>
            <h1><span>Skills</span> and tools</h1>
            <SkillCardContainer>
                <Card src={HtmlCSSLogo} description="HTML5 & CSS3" />
                <Card src={JavaScriptLogo} description="JavaScript"/>
                <Card src={ReactLogo} description="React.js" />
                <Card src={StyledComponentsLogo} description="Styled Components"/>
                <Card src={MongodbLogo} description="MongoDB" />
                <Card src={NodejsLogo} description="Node.js" />
                <Card src={GitLogo} description="Git Source Control" />
                <Card src={FigmaLogo} description="Figma" />
                <Card src={PhotoshopLogo} description="Photoshop" />
                <Card src={IllustratorLogo} description="Illustrator" />
                <CircleImg src={CirclesImg} alt="" />
            </SkillCardContainer>
        </SkillsContainer>
    );
}

export default Skills;