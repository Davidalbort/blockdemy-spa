import React, { useContext, useEffect } from "react";
import { StyledArticle } from "../../styles/components/MenuItem";
import { AppContext } from "../../context/Appcontext";
import { state,toogleInformation,setToogleInformation,addToCharacterById,viewCharacter} from '../../hooks/useGetCharacters';

const MenuItem = ({character}) =>{
    const {toogleInformation,setToogleInformation,addToCharacterById,viewCharacter,state}=useContext(AppContext);
    const handleClick = (person) => {
        addToCharacterById(character);
        setToogleInformation(true);
    }
    useEffect(() => {

            addToCharacterById(state.characters[0]);
        },[character])
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