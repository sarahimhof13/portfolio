import { Icon, IconContainer, FooterNavContainer, Logo } from "./Navbar.styled";
import githubIcon from "../../assets/icon-github.svg"
import linkedinIcon from "../../assets/icon-linkedin.svg"

const FooterNavbar = () => {
    return ( 
        <FooterNavContainer>
            <Logo href="/">sarahimhof</Logo>
            <IconContainer>
                <a href="http://github.com/sarahimhof13" target="_blank" rel="noreferrer">
                    <Icon src={githubIcon} />
                </a>
                <a href="https://www.linkedin.com/in/sarah-imhof" target="_blank" rel="noreferrer">
                    <Icon src={linkedinIcon}/>
                </a>
            </IconContainer>
        </FooterNavContainer>
     );
}
 
export default FooterNavbar;