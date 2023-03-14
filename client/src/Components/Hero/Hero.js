import { useCallback } from "react";
import { HeroContainer, HeroContent } from "./Hero.styled";
import { MainButton } from "../General/Buttons";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

const Hero = () => {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <HeroContainer>
            <Particles options={particlesOptions} init={particlesInit} />
            <HeroContent>
                <h3>Hey there, i'm</h3>
                <h1>Sarah Imhof.</h1>
                <p><span>Software Engineer</span> with a passion for front-end development.</p>
                <MainButton name="Get in touch" href="#contact" />
            </HeroContent>
        </HeroContainer>

    );
}

export default Hero;