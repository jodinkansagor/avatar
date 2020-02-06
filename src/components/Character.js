import React from 'react';
import PropTypes from 'prop-types';
import { useSpecificCharacter } from '../components/hooks/specficCharacterHook';
import { useParams } from 'react-router-dom';
import avatarImg from '../assets/airbender.jpg';

const Character = () => {
  const { id } = useParams();
  const { avatar } = useSpecificCharacter(id);
  console.log(avatar);
  return (
    < section >
      <h1>{avatar.name}</h1>
      <h3>{avatar.affiliation || 'No affilitation listed'}</h3>
      <h3>{avatar.allies || 'No allies listed'}</h3>
      <h3>{avatar.enemies || 'No enemies listed'}</h3>
      <h3>{avatar.weapon || 'No weapon listed'}</h3>
      <img src={avatar.photoUrl  || avatarImg} />
    </section >
  );
};

export default Character;
