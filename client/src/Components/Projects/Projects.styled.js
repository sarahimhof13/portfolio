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
    justify-content: flex-start;
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

export const ProjectImageContainer = styled.picture`
    height: 300px;
    width: 450px;
    display: block;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;
`

export const ProjectImage = styled.img`
    bottom: -80%;
	width: 100%;
	height: auto;
	position: absolute;
	transition: bottom 2s;

    &:hover {
        bottom: 0;
        transition: all 2s;
        cursor: pointer;
    }
`

export const ProjectLanguage = styled.p`
    text-transform: uppercase ;
    word-spacing: 16px;
    color: var(--light-orange);
    margin-bottom: 15px;
`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 30px;
`