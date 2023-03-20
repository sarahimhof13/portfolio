import { HeroButton, Button, SubmitButton } from "./Buttons.styled";

export const MainButton = ({href, name, onClick}) => {
    return ( 
        <HeroButton href={href} onClick={onClick}>
            {name}
        </HeroButton>
     );
}

export const SecondaryButton = ({href, name, onClick}) => {
    return (
        <Button href={href} target="_blank" onClick={onClick}>
            {name}
        </Button>
    );
}

export const FormButton = ({name}) => {
    return (
        <SubmitButton type="submit">
            {name}
        </SubmitButton>
    )
}
