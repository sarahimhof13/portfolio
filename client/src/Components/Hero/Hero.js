import { HeroRingsImg, HeroContainer } from "./Hero.styled";
import { MainButton } from "../General/Buttons";

// Import images
import Rings from "../../assets/pattern-rings.svg"

const Hero = () => {
    return ( 
        <HeroContainer>
            <HeroRingsImg src={Rings}/>
            <h1>Hello, I'm <span>Sarah</span>, <br/> a Web Developer.</h1>
            <p>Based in NZ, I'm a front-end developer, passionate about building <span>accessible</span> and <span>interactive</span> web applications that users love.</p>
            <MainButton name="Get in touch" href="#contact"/>
        </HeroContainer>

     );
}
 
export default Hero ;