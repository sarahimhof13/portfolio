import styled from "styled-components";
import { Device } from "../../Devices";

export const ProjectsSection = styled.section`
    margin: 56px 0;
`

export const ProjectsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

export const ProjectCardContainer = styled.div`
    margin-bottom: 40px;
    max-width: 343px;
    position: relative;
    
    h3 {
        margin-bottom: 15px;
    }

    @media ${Device.desktop} {
        max-width: 540px;
    }
`

export const ProjectImage = styled.img`
    max-width: 100%;
    margin-bottom: 20px;
`

export const ProjectLanguage = styled.p`
    text-transform: uppercase ;
    word-spacing: 16px;
    color: var(--light-orange);
    margin-bottom: 15px;
`

export const Overlay = styled.div`
    
    @media ${Device.desktop} {
        display: block;
        position: absolute;
        top: 0;
        height: 400px;
        width: 100%;
        background-color: #000000;
        opacity: 0;

        &:hover {
            opacity: 0.8;
            transition: 0.75s;
        }
    }

`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 30px;

    @media ${Device.desktop} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-direction: column;
        text-align: center;
        gap: 40px;
    }
`