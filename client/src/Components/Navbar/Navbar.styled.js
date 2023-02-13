import styled from "styled-components";
import { Device } from "../../Devices";

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    flex-wrap: wrap;

    @media ${Device.tablet} {
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 30px 0;
    }

    @media ${Device.desktop} {
        padding: 40px 0;
    }

`

export const Logo = styled.a`
    font-weight: 700;
    color: var(--white);
    text-decoration: none;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;

    @media ${Device.tablet} {
        width: auto;
        font-size: 2rem;
        margin-bottom: 0;
    }
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media ${Device.tablet} {
        gap: 32px;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`