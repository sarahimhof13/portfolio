import styled from "styled-components";

export const HeroButton = styled.button`
    border: 2px solid var(--aquamarine);
    font-size: 1rem;
    text-transform: uppercase;
    width: 165px;
    height: 50px;
    background: none;
    color: var(--white);
    letter-spacing: 0.14rem;

    &:hover {
        background-color: var(--light-grey);
        transition: 0.5s;
        color: var(--dark-blue);
    }
`

export const Button = styled.button`

`