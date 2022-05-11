import React, { useState } from 'react';
import { StyledHeader } from '../styles/containers/Header'
import { Menu } from './Menu';

const Header = () =>{
    const href= 'https://www.blockdemy.com/';
    const [toogleHistory, setToogleHistory]= useState(false);
    console.log(toogleHistory);
    return(
        <StyledHeader>

            <a href={href}>
                BLOCKDEMY
            </a>

            <nav>
                {/* <a onClick={()=> setToogleHistory(!toogleHistory)}>
                    Menu
                </a> */}
                <input id='menu'type="radio" name='menu'/>
                <label  htmlFor='menu' onClick={()=> setToogleHistory(!toogleHistory)}>
                    Menu
                </label>
            </nav>
            
            {toogleHistory && <Menu/>}
        </StyledHeader>
    )
}

export {Header};