import { HeroRingsImg, HeroContainer } from "./Hero.styled";
import { MainButton } from "../General/Buttons";

const Hero = () => {
    return ( 
        <HeroContainer>
            <HeroRingsImg src="/assets/pattern-rings.svg"/>
            <h3>Hey there, i'm</h3>
            <h1>Sarah Imhof.</h1>
            <p><span>Software Engineer</span> with a passion for front-end development.</p>
            <MainButton name="Get in touch" href="#contact"/>
        </HeroContainer>

     );
}
 
export default Hero ;