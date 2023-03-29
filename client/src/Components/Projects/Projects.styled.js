import styled from "styled-components";
import { Device } from "../../Devices";

export const ProjectsSection = styled.section`
    padding: 10px 20px 30px 20px;

    @media ${Device.tablet} {
        padding: 10px 30px;
    }

    @media ${Device.laptop} {
        padding: 20px 100px;
    }

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
    height: 80px;
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 15px;

    @media ${Device.laptop} {
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
    
    & :hover {
        background-position: 0 100%; 
}

    @media ${Device.desktop} {
        height: 300px;
        width: 450px;
    }
`

export const ProjectImage = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => `url(${props.src})`} center top / cover no-repeat ;
    transition: background-position 2s ease-out;

    & :hover {
        background-position: 0 100%; 
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