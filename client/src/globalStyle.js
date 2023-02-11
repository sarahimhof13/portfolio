import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Device } from "./Devices";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
        background-color: #0B132B;
    }

    h1 {
        font-size: 5.5rem;
        line-height: 5.5rem;
        letter-spacing: -0.16rem;

    }

    h2 {
        font-size: 3rem;
        line-height: 3.5rem;
        letter-spacing: -0.9rem;
    }

    h3 {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }

    :root {
        --dark-blue: #0b132b;
        --charcoal: #3D5467;
        --red: #DB5461;
        --light-orange: #FFB703;
        --aquamarine: #1AFFD5;
        --white: #fff;
        --light-grey: #F2F2F2;
    }
`

export const PageContainer = styled.main `
    margin: 0 16px;

    @media ${Device.tablet} {
        margin: 0 32px;
    }

    @media ${Device.desktop} {
        margin: 0 165px;
    }
`