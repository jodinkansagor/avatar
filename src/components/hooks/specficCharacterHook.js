import { useState, useEffect } from 'react';
import { getSpecificCharacter } from '../services/getCharacter';

export const useSpecificCharacter = (id) => {
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    getSpecificCharacter(id)
      .then(avatar => setAvatar(avatar));
  }, []);

  return { avatar, setAvatar };
};

