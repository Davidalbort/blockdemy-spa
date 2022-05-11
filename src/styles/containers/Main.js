import styled from "styled-components";
import { colors } from "../abstracts/color";

export const StyledMain = styled.main`

    h1{
        display:flex;
        justify-content: center;
        padding-top: 10rem;
        font-size: clamp(1.2rem,2.5vw,2.2rem);
        
    }
    &>h2{
        display:flex;
        justify-content: center;
        padding-top: 1rem;
        font-size: clamp(1.2rem,2.5vw,2.2rem);  
    }
    button{
        margin: 2rem 4rem;
        width: clamp(8rem,23.5vw,20rem);
        font-size: clamp(1.2rem,2.5vw,2.2rem);
        color: ${colors.primary_blue};
        border: solid 0.15rem ${colors.primary_blue};
        border-radius: 1.2rem;
        background-color: transparent;
        &:hover{
            background-color: ${colors.primary_blue};
            color: white;
    }
`