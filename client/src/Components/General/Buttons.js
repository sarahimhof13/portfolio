import { HeroButton, Button, SubmitButton } from "./Buttons.styled";

export const MainButton = ({href, name}) => {
    return ( 
        <HeroButton href={href}>
            {name}
        </HeroButton>
     );
}

export const SecondaryButton = ({href, name}) => {
    return (
        <Button href={href} target="_blank">
            {name}
        </Button>
    );
}

export const FormButton = ({name, type}) => {
    return (
        <SubmitButton type="submit">
            {name}
        </SubmitButton>
    )
}
