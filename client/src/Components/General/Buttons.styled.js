import styled from "styled-components";

export const HeroButton = styled.a`
    border: 2px solid var(--blue);
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    background: none;
    color: var(--white);
    letter-spacing: 0.14rem;
    padding: 16px;
    display: inline-flex;
    margin-bottom: 78px;
    max-width: 165px;

    &:hover {
        background: var(--blue-pink-gradient) ; 
        cursor: pointer;
    }
`

export const Button = styled.a`
    color: var(--blue);
    text-transform: uppercase;
    letter-spacing: 0.14rem;
    background: none;
    font-size: 1rem;
    border: none;
    border-bottom: 2px solid var(--blue);
    padding-bottom: 10px;
    text-decoration: none;

    &:hover {
        color: var(--slate);
        cursor: pointer;
    }

`

export const SubmitButton = styled.button`
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: 0.14rem;
    background: none;
    font-size: 1rem;
    border: none;
    border: 2px solid var(--blue);
    padding: 10px 7px;
    max-width: 170px;
    margin-left: auto;

    &:hover {
        transition: 0.75s;
        cursor: pointer;
        background: var(--blue-pink-gradient) ; 
    }

`