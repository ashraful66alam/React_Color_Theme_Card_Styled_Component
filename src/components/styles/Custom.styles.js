import styled from "styled-components";
import Title from "../Title";

export const StyledTitle = styled(Title)`
    /* color: ${(props)=>props.color}; */
    color: ${(props)=>props.theme.cardtheme.color};
    font-size: larger;
`;