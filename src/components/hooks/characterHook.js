import { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacter';

export const useCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    getCharacters(page)
      .then(characters => setCharacters(characters));
  }, [page]);
  
  const setNewPage = (page) => {
    const newPage = Number(page) + 1;
    setPage(newPage);
  };

  const setBackPage = (page) => {
    const newPage = Number(page) - 1;
    setPage(newPage);
  };
  return { characters, setNewPage, page, setBackPage };
};
