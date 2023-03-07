import { Icon, IconContainer, NavContainer, Logo, LogoContainer, LinksContainer } from "./Navbar.styled";

const Navbar = () => {
    return ( 
        <NavContainer>
            <LogoContainer>
                <img src="/assets/logo.svg" alt="" />
                <Logo href="/">sarahimhof</Logo>
            </LogoContainer>
            <LinksContainer>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </LinksContainer>
            <IconContainer>
                <a href="http://github.com/sarahimhof13" target="_blank" rel="noreferrer">
                    <Icon src="/assets/icon-github.svg" />
                </a>
                <a href="https://www.linkedin.com/in/sarah-imhof" target="_blank" rel="noreferrer">
                    <Icon src="/assets/icon-linkedin.svg"/>
                </a>
            </IconContainer>
        </NavContainer>
     );
}
 
export default Navbar;