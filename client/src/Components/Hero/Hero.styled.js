import styled from "styled-components";
import { Device } from "../../Devices";

export const HeroContainer = styled.section`
    text-align: center;
    border-bottom: 1px solid var(--light-grey);

    @media ${Device.tablet} {
        text-align: left;
    }

    h1 {
        margin-top: 61px;
        background: transparent;
        margin-bottom: 24px;

        @media ${Device.tablet} {
            max-width: 700px;
        }

        @media ${Device.desktop} {
            margin-top: 100px;
            max-width: 700px;
        }
    }

    span {
        color: var(--aquamarine);
    }

    p {
        margin-bottom: 20px;

        @media ${Device.tablet} {
            margin-bottom: 30px;
            max-width: 445px;
        }
    }

    Button {
        margin-bottom: 78px;
    }
`

export const HeroRingsImg = styled.img `
    position: absolute;
    z-index: -1;
    left: -342px;
    top: 124px;
`