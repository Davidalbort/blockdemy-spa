import styled from "styled-components";
import { colors } from "../abstracts/color";

export const StyledSection = styled.section`
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-wrap: 2rem;
    width: clamp(37.5rem,100%,128rem);
    height: clamp(3rem,100%,4rem);
    row-gap: 2rem;
    column-gap: 13rem;
    img{
        heigth:clamp(30rem,100%,40rem);
        box-shadow: 0rem 0.2rem 0.6rem ${colors.primary_purple};
        border-radius: 0.5rem;
    }
    &>div{
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        width: clamp(30rem,76%, 60rem);
        font-size: 2rem;
        font-size: clamp(1.2rem,2.5vw,2.2rem);
        box-shadow: 0rem 0.2rem 0.6rem ${colors.primary_purple};
        border-radius: 0.5rem;
        header{
            border-bottom: solid 0.2rem ${colors.primary_blue};
            h2{
                font-size: clamp(1.2rem,2.5vw,2.2rem);  
            }
        }
        &>section{
            display:flex;
            flex-direction: column;
            row-gap: 0.2rem;
            div{
                display:flex;
                justify-content: space-between;
                border-bottom: solid 0.2rem ${colors.primary_blue};
                color:${colors.primary_gray};
                span{
                    color:${colors.primary_black};
                    font-weight: bold;
                }
            }
        }
    }
`