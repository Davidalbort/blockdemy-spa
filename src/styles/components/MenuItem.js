import styled from "styled-components";
import { colors } from "../abstracts/color";


export const StyledArticle = styled.article`
    margin:1rem;
    display: flex;
    flex-direction: row;
    box-shadow: 0rem 0.2rem 0.6rem ${colors.primary_purple};
    border-radius: 0.5rem;
    font-size: clamp(1.2rem,2.5vw,2.2rem);
    h1{
        display: flex;
        justify-content: center;
    }
    img{
        width: 8rem;
        heigth: auto;
        border-radius: 0.5rem;
    }
    div{
        display: flex;
        flex: 1 1 auto;
        justify-content: space-between;
        align-items: center;
        row-wap: 1rem;
        padding: 0 1rem;
        width: clamp(22rem,9.5vw,43rem)
        span{
            color:${colors.primary_gray};
            width: clamp(15rem,27.5vw,20rem);
            }
        }
        button{
            width: clamp(4rem,9.5vw,10rem);
            font-size: clamp(1.2rem,2.5vw,1.5rem);
            color: ${colors.primary_blue};
            border: solid 0.15rem ${colors.primary_blue};
            border-radius: 1.2rem;
            background-color: transparent;
            &:hover{
                background-color: ${colors.primary_blue};
                color: white;
            }
        }
 
`