import { HeroButton, Button, SubmitButton } from "./Buttons.styled";

export const MainButton = (props) => {
    return ( 
        <HeroButton href={props.href}>
            {props.name}
        </HeroButton>
     );
}

export const SecondaryButton = (props) => {
    return (
        <Button href={props.href}>
            {props.name}
        </Button>
    );
}

export const FormButton = (props) => {
    return (
        <SubmitButton>
            {props.name}
        </SubmitButton>
    )
}
