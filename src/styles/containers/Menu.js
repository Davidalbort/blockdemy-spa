import styled from "styled-components";
import { colors } from "../abstracts/color";

export const StyledAside= styled.aside`
    position: absolute;
    right: 0;
    top: clamp(5rem,5.25vw,5.8rem);
    width: clamp(32rem,50%,53rem);
    height: 30rem;
    overflow-y: scroll;
    color: ${colors.primary_black};
    background-color: white;
    box-shadow: 0rem 0.2rem 0.6rem ${colors.primary_gray};
    border-radius: 0.25rem;
    border: solid 0.1rem {colors.primary_gray};
    &>h1{
        display: flex;
        justify-content: center;
    }
}
`