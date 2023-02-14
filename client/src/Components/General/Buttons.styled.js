import styled from "styled-components";

export const HeroButton = styled.a`
    border: 2px solid var(--aquamarine);
    font-size: 1rem;
    text-transform: uppercase;
    background: none;
    color: var(--white);
    letter-spacing: 0.14rem;
    padding: 20px 18px;
    display: inline-flex;
    margin-bottom: 78px;
    max-width: 165px;


    &:hover {
        background-color: var(--light-grey);
        transition: 0.5s;
        color: var(--dark-blue);
        cursor: pointer;
    }
`

export const Button = styled.a`
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.14rem;
    background: none;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid var(--red);
    padding-bottom: 10px;

    &:hover {
        color: var(--red);
        transition: 0.5s;
        cursor: pointer;
    }

`