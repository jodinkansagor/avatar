import React from 'react';
import airbender from '../assets/airbender.jpg';
import { useSpecificCharacter } from '../components/hooks/specficCharacterHook';
import { useParams } from 'react-router-dom';

const Character = () => {
  const { id } = useParams();
  const { avatar } = useSpecificCharacter(id);
  
  return (
    < section >
      <h1>{avatar.name}</h1>
      <h3>{avatar.affiliation || 'No affilitation listed'}</h3>
      <h3>{avatar.allies || 'No allies listed'}</h3>
      <h3>{avatar.enemies || 'No enemies listed'}</h3>
      <h3>{avatar.weapon || 'No weapon listed'}</h3>
      <img src={avatar.photoUrl} />
    </section >
  );
};

export default Character;
