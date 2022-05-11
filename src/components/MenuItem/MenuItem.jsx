import React, { useContext, useEffect } from "react";
import { StyledArticle } from "../../styles/components/MenuItem";
import { AppContext } from "../../context/Appcontext";
import { setToogleInformation,addToCharacterById} from '../../hooks/useGetCharacters';

const MenuItem = ({character}) =>{
    const {setToogleInformation,addToCharacterById}=useContext(AppContext);
    const handleClick = (person) => {
        addToCharacterById(character);
        setToogleInformation(true);
    }
    return(
        <StyledArticle>

            <img src={character.image} alt={`image of ${character.name}`}/>

            <div>
                <span>{character.name}</span>
                <button onClick={() => handleClick(character)}>VIEW</button>
            </div>
        </StyledArticle>
    )
}

export {MenuItem};