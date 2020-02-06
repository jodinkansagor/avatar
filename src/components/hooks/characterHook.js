import { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacter';

export const useCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    getCharacters(page)
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false));
  }, [page]);
  
  const setNewPage = (page) => {
    const newPage = Number(page) + 1;
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  const setBackPage = (page) => {
    const newPage = Number(page) - 1;
    setPage(newPage);
    window.scrollTo(0, 0);
  };
  return { characters, setNewPage, page, setBackPage, loading };
};
