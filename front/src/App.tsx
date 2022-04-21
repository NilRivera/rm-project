import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, fetchCharacter } from './store/modules/characters';
import { AppDispatch, RootState } from './store/configureStore';

import './App.css';

const App: React.FC = () => {
  const dispatch : AppDispatch = useDispatch();
  const { characters, isLoading } = useSelector((state: RootState) => state.characters);
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);
  return (

    <div>
      {isLoading ? <p>hello</p>
        : (
          <div>
            {characters.map((element) => <div key={element.id}><button type="button" onClick={() => dispatch(fetchCharacter({ id: element.id }))}>{element.name}</button></div>)}
          </div>
        )}
    </div>

  );
};

export default App;
