import React from 'react'
import { useQuery } from '@apollo/client';
import { FindPerson } from '../containers/FindPerson'
import {ALL_CHARACTERS} from '../service/graphql';
import {AppContext} from '../context/Appcontext';
import {useInitialState} from '../hooks/useGetCharacters';
import { Header } from '../containers/Header';

function App() {

  const initialState= useInitialState();
  const {data, loading}= useQuery(ALL_CHARACTERS);
  let totalId;
  if(!loading){
    totalId = data.characters.info.count;
  }

  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Header/>
        {loading && <h1>Loading...</h1>}

        <FindPerson
          totalId={totalId}
        />
      </div>
    </AppContext.Provider>
  );
}



export default App;
