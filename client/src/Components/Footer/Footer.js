import { FooterContainer, FooterText, FooterForm, FooterInput, FooterTextArea } from "./Footer.styled";
import { FormButton } from "../General/Buttons";
import FooterNavbar from "../Navbar/FooterNav";


const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>
                <h2 id="contact">Contact</h2>
                <p>I would love to hear from you. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </FooterText>
            <FooterForm method="post" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <FooterInput placeholder="NAME" id="name" name="name" type="text" />
                <FooterInput placeholder="EMAIL" id="email" name="email" type="email" />
                <FooterTextArea placeholder="MESSAGE" id="message" name="message" />
                <FormButton name="Send Message" type="submit" />
            </FooterForm>
            <FooterNavbar />
        </FooterContainer>
    );
}

export default Footer;