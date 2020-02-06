import { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacter';

export const useCharacter = (page) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(characters => setCharacters(characters));
  }, []);

  return { characters };
};
