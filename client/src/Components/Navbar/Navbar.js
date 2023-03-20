import { Icon, IconContainer, NavContainer, Logo, LogoContainer, LinksContainer } from "./Navbar.styled";

const Navbar = () => {

    const handleClickNav = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <NavContainer>
            <LogoContainer>
                <img src="/assets/logo.svg" alt="" />
                <Logo href="/">sarahimhof</Logo>
            </LogoContainer>
            <LinksContainer>
                <button onClick={() => handleClickNav("skills")}>Skills</button>
                <button onClick={() => handleClickNav("projects")}>Projects</button>
                <button onClick={() => handleClickNav("contact")}>Contact</button>
            </LinksContainer>
            <IconContainer>
                <a href="http://github.com/sarahimhof13" target="_blank" rel="noreferrer">
                    <Icon src="/assets/icon-github.svg" />
                </a>
                <a href="https://www.linkedin.com/in/sarah-imhof" target="_blank" rel="noreferrer">
                    <Icon src="/assets/icon-linkedin.svg" />
                </a>
            </IconContainer>
        </NavContainer>
    );
}

export default Navbar;