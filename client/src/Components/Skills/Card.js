import { SkillCard, SkillImg, } from "./Skills.styled";

const Card = (props) => {
    return (
        <SkillCard>
            <div>
                <SkillImg src={props.src} />
                <p>{props.description}</p>
            </div>
        </SkillCard>
    );
}

export default Card;