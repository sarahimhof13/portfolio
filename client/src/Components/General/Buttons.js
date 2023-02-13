import { HeroButton, Button } from "./Buttons.styled";

export const MainButton = (props) => {
    return ( 
        <HeroButton>
            {props.name}
        </HeroButton>
     );
}

export const SecondaryButton = (props) => {
    return (
        <Button>
            {props.name}
        </Button>
    );
}

