import {React, useContext, useEffect, useState} from 'react'
import { FIND_CHARACTER } from '../service/graphql';
import { useLazyQuery } from '@apollo/client';
import { AppContext } from '../context/Appcontext';
import {addToCharacter,state, viewCharacter,setToogleInformation,addToCharacterById} from '../hooks/useGetCharacters';
import { CharacterItem } from '../components/CharacterItem/CharacterItem';
import { StyledMain } from '../styles/containers/Main';





const FindPerson = ({totalId}) =>{
    const {addToCharacter,viewCharacter,setToogleInformation,state,addToCharacterById}= useContext(AppContext);
    const [numberId,setNumberId]=useState(null);
    const [characters,setCharacters]= useState([]);
    const [getCharacter,{data,loading}]=useLazyQuery(FIND_CHARACTER);
    
    
    const handleClick = (randNumber) =>{
        setToogleInformation(false);
        if(randNumber){

            console.log('randomNumber',randNumber);
            getCharacter({variables:{number:randNumber}});
            setNumberId(Math.floor(Math.random()*totalId))
            
        }
    }
    if(!numberId){
        if(totalId){
            setNumberId(Math.floor(Math.random()*totalId));
        }
    }
    useEffect(()=> {
        if(data){
            setCharacters(data.character);
        }
    },[data]);
    useEffect(()=>{
        addToCharacter(characters);
        addToCharacterById(characters);
        
    },[characters]);
    console.log(viewCharacter,'loading',loading);
    return(
        <StyledMain>
            {viewCharacter.id && <CharacterItem character={viewCharacter}/>}
            
            {state.characters.length< 2 ? <h1>No se ha cargado ningún personaje</h1>:null}
            <button onClick={() => handleClick(numberId)}>GENERATE</button>
            {loading && <h2>Loading...</h2>}

        </StyledMain>
    )
}

export {FindPerson};