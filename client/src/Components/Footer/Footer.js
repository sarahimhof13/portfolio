import { FooterContainer, FooterText, FooterForm, FooterInput, FooterTextArea, RingsImg } from "./Footer.styled";
import { FormButton } from "../General/Buttons";
import FooterNavbar from "../Navbar/FooterNav";

import Rings from "../../assets/pattern-rings.svg"


const Footer = () => {
    return ( 
        <FooterContainer>
            <RingsImg src={Rings}/>
            <FooterText>
                <h2 id="contact">Contact</h2>
                <p>I would love to hear from you. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </FooterText>
            <FooterForm method="post">
                <FooterInput placeholder="NAME" id="name" name="name"/>
                <FooterInput placeholder="EMAIL" id="email" name="email"/>
                <FooterTextArea placeholder="MESSAGE"id="message" name="message"/>
                <FormButton name="Send Message"/>
            </FooterForm>
            <FooterNavbar/>
        </FooterContainer>
     );
}
 
export default Footer;