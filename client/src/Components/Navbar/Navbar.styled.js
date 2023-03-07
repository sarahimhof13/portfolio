import styled from "styled-components";
import { Device } from "../../Devices";

export const NavContainer = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    flex-wrap: wrap;
    background-color: var(--slate);

    @media ${Device.tablet} {
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 30px;
    }

    @media ${Device.desktop} {
        padding: 40px 165px;
    }

`

export const LogoContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-bottom: 20px;

    @media ${Device.tablet} {
        margin-bottom: 0;
    }

    & img {
        height: 22px;
    }
`

export const Logo = styled.a`
    font-weight: 700;
    color: var(--white);
    text-decoration: none;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;

    &:hover {
        color: var(--pink);
        transition: 0.2s;
    }

    @media ${Device.tablet} {
        width: auto;
        font-size: 2rem;
        margin-bottom: 0;
    }
`

export const LinksContainer = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    width: 100%;

    @media ${Device.tablet} {
        margin: 0;
        justify-content: right;
        margin-right: 20px;
    }

    @media ${Device.desktop} {
        margin-right: 32px;
        gap: 32px;
    }

    & a {
        color: var(--white);
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            color: var(--pink);
            transition: 0.2s;
        }
    }
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media ${Device.tablet} {
        gap: 32px;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`

export const FooterNavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    padding: 40px 0;
    flex-wrap: wrap;
    border-top: 1px solid var(--light-grey);

    @media ${Device.tablet} {
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: 30px 0;
        margin: 0 -130px;
    }

    @media ${Device.desktop} {
        padding: 40px 0;
        margin: 0;
        flex: 2 1 auto;
    }

`