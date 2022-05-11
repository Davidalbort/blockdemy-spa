import styled from 'styled-components'
import { colors } from '../abstracts/color'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem;
    position: sticky;
    top: 0;
    color: white;
    background-color: ${colors.primary_black};
    font-size: clamp(1.0rem,2.5vw,1.6rem);
    width: clamp(36rem,100%,128rem);
    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        &:hover{
            transform:scale(1.25);
        }
    }
    nav{
        input[type="radio"]{
            display: none;
        }
        label {
            &:hover{
                cursor: pointer;
                border-bottom: solid 0.2rem white;
            }
        }
        
    }

`
