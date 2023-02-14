import styled from "styled-components";
import { Device } from "../../Devices";

export const SkillsContainer = styled.section`
    margin-top: 56px;
    text-align: center;
    border-bottom: 1px solid var(--light-grey);

    h2 {
        margin-bottom: 40px;

            @media ${Device.tablet} {
            text-align: left;
        }
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
    margin-bottom: 56px;

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