import styled from "styled-components";
import { Device } from "../../Devices";

export const FooterContainer = styled.footer`
    background-color: var(--charcoal);
    text-align: center;
    padding: 60px 16px 20px 16px; 
    position: relative;

    @media ${Device.tablet} {
        padding: 60px 160px 10px 160px;
    }

    @media ${Device.desktop} {
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 80px;
    }

    h2 {
        margin-bottom: 20px;
    }
`

export const RingsImg = styled.img`
    position: absolute;
    left: -300px;
    top: 350px;
`

export const FooterText = styled.div`
    @media ${Device.tablet} {
        margin-bottom: 40px;
    }

    @media ${Device.desktop} {
        max-width: 445px;
    }
`

export const FooterForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0 39px 0;
    padding-bottom: 87px;

    @media ${Device.desktop} {
        min-width: 445px;
        margin: 0;
    }
`

export const FooterInput = styled.input`
    background: none;
    border: none;
    padding: 16px;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    opacity: 0.75;

    &::placeholder {
        color: var(--white);
    }
`

export const FooterTextArea = styled.textarea`
    background: none;
    border: none;
    padding: 16px 16px 40px 16px;
    border-bottom: 1px solid var(--white);
    opacity: 0.75;
    max-width: 100%;
    margin-bottom: 32px;
    color: var(--white);

    &::placeholder {
        color: var(--white);
    }
`