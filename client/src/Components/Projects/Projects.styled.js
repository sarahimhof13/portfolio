import styled from "styled-components";
import { Device } from "../../Devices";

export const ProjectsSection = styled.section`
    padding: 10px 20px 30px 10px;

    @media ${Device.desktop} {
        padding: 70px 165px;
    }

    & h2 {
        background-clip: text;
        -webkit-background-clip: text; /* For Safari */
        color: transparent;
        background-image: var(--blue-pink-gradient);
    }
`

export const ProjectsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;

    @media ${Device.desktop} {
        justify-content: flex-start;
    }
`

export const ProjectCardContainer = styled.div`
    margin-bottom: 40px;
    max-width: 343px;
    position: relative;

    @media ${Device.desktop} {
        max-width: 540px;
    }
    
    h4 {
        margin-bottom: 15px;
        text-align: center;

        @media ${Device.desktop} {
            text-align: left;
        }
    }


`

export const ProjectImageContainer = styled.picture`
    width: 343px;
    height: 250px;
    display: block;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;

    @media ${Device.desktop} {
        height: 300px;
        width: 450px;
    }
`

export const ProjectImage = styled.img`
    bottom: -66%;
	width: 100%;
	height: auto;
	position: absolute;
	transition: bottom 2s;

    @media ${Device.desktop} {
        bottom: -82%;
    }

    &:hover {
        bottom: 0;
        transition: all 2s;
        cursor: pointer;
    }
`

export const ProjectLanguage = styled.p`
    text-transform: uppercase ;
    word-spacing: 16px;
    color: var(--mid-grey);
    margin-bottom: 15px;
    text-align: center;

    @media ${Device.desktop} {
        text-align: left;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;

    @media ${Device.desktop} {
        justify-content: left;
    }
`