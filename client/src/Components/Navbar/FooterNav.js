import { Icon, IconContainer, FooterNavContainer, Logo, FooterLogoContainer, FooterLinksContainer } from "./Navbar.styled";

const FooterNavbar = () => {

    const handleClickNav = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <FooterNavContainer>
            <FooterLogoContainer>
                <img src="/assets/logo.svg" alt="" />
                <Logo href="/">sarahimhof</Logo>
            </FooterLogoContainer>
            <FooterLinksContainer>
                <button onClick={() => handleClickNav("skills")}>Skills</button>
                <button onClick={() => handleClickNav("projects")}>Projects</button>
                <button  onClick={() => handleClickNav("contact")}>Contact</button>
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