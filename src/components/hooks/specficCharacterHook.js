import { useState, useEffect } from 'react';
import { getSpecificCharacter } from '../services/getCharacter';

export const useSpecificCharacter = (_id) => {
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    getSpecificCharacter(_id)
      .then(avatar => setAvatar(avatar));
  }, {});

  return { avatar, setAvatar };
};

