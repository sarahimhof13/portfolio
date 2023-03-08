import { Icon, IconContainer, FooterNavContainer, Logo, FooterLogoContainer, FooterLinksContainer } from "./Navbar.styled";

const FooterNavbar = () => {
    return (
        <FooterNavContainer>
            <FooterLogoContainer>
                <img src="/assets/logo.svg" alt="" />
                <Logo href="/">sarahimhof</Logo>
            </FooterLogoContainer>
            <FooterLinksContainer>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </FooterLinksContainer>
            <IconContainer>
                <a href="http://github.com/sarahimhof13" target="_blank" rel="noreferrer">
                    <Icon src="/assets/icon-github.svg" />
                </a>
                <a href="https://www.linkedin.com/in/sarah-imhof" target="_blank" rel="noreferrer">
                    <Icon src="/assets/icon-linkedin.svg" />
                </a>
            </IconContainer>
        </FooterNavContainer>
    );
}

export default FooterNavbar;