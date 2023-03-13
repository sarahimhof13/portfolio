import styled from "styled-components";
import { Device } from "../../Devices";

export const HeroContainer = styled.section`
    text-align: center;
    background-color: var(--slate);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 20px 120px 20px ;
    height: calc(80vh - 349px);

    @media ${Device.tablet} {
        text-align: left;
        padding: 100px 30px;
        align-items: flex-start;
        height: calc(100vh - 301px);
        
    }

    @media ${Device.desktop} {
        padding: 165px;
        height: calc(100vh - 451px);
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