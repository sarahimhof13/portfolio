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
            <FooterForm method="POST" netlify>
                <FooterInput placeholder="NAME" id="name" name="name"/>
                <FooterInput placeholder="EMAIL" id="email" name="email"/>
                <FooterTextArea placeholder="MESSAGE"id="message" name="message"/>
                <FormButton name="Send Message" type="submit"/>
            </FooterForm>
            <FooterNavbar/>
        </FooterContainer>
     );
}
 
export default Footer;