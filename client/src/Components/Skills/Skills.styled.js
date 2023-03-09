import styled from "styled-components";
import { Device } from "../../Devices";

export const SkillsContainer = styled.section`
    margin-top: 56px;
    text-align: center;
    border-bottom: 1px solid var(--light-grey);
    padding: 5px 20px;

    @media ${Device.tablet} {
        padding: 20px 30px;
    }

    @media ${Device.desktop} {
        padding: 70px 165px;
    }

    h2 {
        margin-bottom: 40px;
        color: var(--slate);

        @media ${Device.tablet} {
            text-align: left;
        }
    }

    span {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: var(--blue-pink-gradient);
    }

    p {
        font-size: 1rem;
        line-height: 1.25rem;
    }
`

export const SkillCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 56px;
    gap: 10px;

    @media ${Device.desktop} {
        gap: 30px;
    }
`

export const SkillCard = styled.div`
    border-radius: 25px;
    background-color: var(--slate);
    padding: 20px;
    width: 113px;
    height: 101px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
        background: var(--mid-grey);
        cursor: pointer;
    }

    @media ${Device.desktop} {
        width: 160px;
        height: 144px;
    }
`

export const SkillImg = styled.img`
    height: 50px;
    margin-bottom: 10px;

    @media ${Device.desktop} {
        height: 67px;
    }
`