import { createGlobalStyle } from "styled-components";
import { Device } from "./Devices";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
    }

    body {
        background-color: var(--light-grey);
    }

    h1 {
        font-size: 3rem;
        line-height: 2.5rem;
        letter-spacing: -0.07rem;
        font-weight: 700;
        color: var(--white);

        @media ${Device.tablet} {
            font-size: 4.5rem;
            line-height: 4rem;
            letter-spacing: -0.13rem;
        }

        @media ${Device.desktop} {
            font-size: 8rem;
            line-height: 5.5rem;
            letter-spacing: -0.16rem;
        }

    }

    h2 {
        font-size: 3rem;
        line-height: 3.5rem;
        letter-spacing: -0.09rem;
        color: var(--white);

        @media ${Device.tablet} {
            font-size: 4.5rem;
            line-height: 4.5rem;
            letter-spacing: -0.13rem;
        }

        @media ${Device.desktop} {
            font-size: 5rem;
            line-height: 5.5rem;
            letter-spacing: -0.16rem;
        }
    }

    h3 {
        color: var(--pink);
        font-size: 1.5rem;

        @media ${Device.desktop} {
            font-size: 2.5rem;
            
        }

    }

    h4 {
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--pink);
        text-transform: uppercase;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: var(--white);
        font-weight: 500;
    }

    :root {
        --slate: #232323;
        --blue: #12C2E9;
        --pink: #F64F9F;
        --white: #fff;
        --light-grey: #F2F2F2;
        --mid-grey: #666464;
        --blue-pink-gradient: linear-gradient(90deg, #12C2E9 10.41%, #C471ED 50.84%, #F64F9F 91.26%);
    }
    
    `
