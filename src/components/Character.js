import React from 'react';
import airbender from '../assets/airbender.jpg';
import { useSpecificCharacter } from '../components/hooks/specficCharacterHook';
import { useParams } from 'react-router-dom';
import styles from './Character.css';

const Character = () => {
  const { id } = useParams();
  const { avatar } = useSpecificCharacter(id);
  
  return (
    <section className={styles.character} >
      <h1> {avatar.name}</h1>
      <h3>Affiliation: {avatar.affiliation || 'No affilitation listed'}</h3>
      <h3>Allies: {avatar.allies || 'No allies listed'}</h3>
      <h3>Enemies: {avatar.enemies || 'No enemies listed'}</h3>
      <h3>Weapons: {avatar.weapon || 'No weapon listed'}</h3>
      <img src={avatar.photoUrl  || airbender} />
    </section >
  );
};

export default Character;
