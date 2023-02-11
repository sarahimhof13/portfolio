import { Icon, IconContainer, NavContainer, Logo } from "./Navbar.styled";
import githubIcon from "../../assets/icon-github.svg"
import linkedinIcon from "../../assets/icon-linkedin.svg"

const Navbar = () => {
    return ( 
        <NavContainer>
            <Logo href="/">sarahimhof</Logo>
            <IconContainer>
                <a href="http://github.com/sarahimhof13" target="_blank">
                    <Icon src={githubIcon} />
                </a>
                <a href="https://www.linkedin.com/in/sarah-imhof" target="_blank">
                    <Icon src={linkedinIcon}/>
                </a>
            </IconContainer>
        </NavContainer>
     );
}
 
export default Navbar;