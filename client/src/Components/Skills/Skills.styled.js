import styled from "styled-components";
import { Device } from "../../Devices";

export const SkillsContainer = styled.section`
    padding: 56px 0;
    text-align: center;

    h1 {
        margin-bottom: 40px;
    }

    span {
        color: var(--red);
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
    gap: 18px;

    @media ${Device.desktop} {
        gap: 24px;
    }
`

export const SkillCard = styled.div`
    border-radius: 25px;
    background-color: var(--charcoal);
    padding: 20px;
    width: 113px;
    height: 101px;
    display: flex;
    align-items: center;
    justify-content: center;

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