import styled from "styled-components";
import { Device } from "../../Devices";

export const HeroContainer = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 159px);
    position: relative;
    overflow: hidden;

    & #tsparticles {
        z-index: -1;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
    }

    @media ${Device.tablet} {
        text-align: left;
        align-items: flex-start;
        height: calc(100vh - 101px);
        justify-content: center;
        
    }

    @media ${Device.desktop} {
        height: calc(100vh - 121px);
    }

    h1 {
        background: transparent;
        margin-bottom: 20px;

        @media ${Device.tablet} {
            margin-bottom: 5px;
        }

        @media ${Device.desktop} {
            margin-bottom: 25px;
        }
    }

    h3 {
        margin-bottom: 10px;

        @media ${Device.tablet} {
            margin-bottom: 5px;
        }

        @media ${Device.desktop} {
            margin-bottom: 20px;
        }
    }

    p {
        margin-bottom: 20px;

        @media ${Device.tablet} {
            margin-bottom: 30px;
            max-width: 445px;
        }

        @media ${Device.desktop} {
            font-size: 1.8rem;
            max-width: 520px;
            line-height: 2.7rem;
        }
    }

    span {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: var(--blue-pink-gradient);
    }
`

export const HeroContent = styled.div`
    padding: 0 16px;
    padding-top: 15vh;

    @media ${Device.tablet} {
        padding: 0 30px;
        margin: 0;
    }

    @media ${Device.laptop} {
        padding: 0 100px;
    }

    @media ${Device.desktop} {
        padding: 0 165px;
    }
`
