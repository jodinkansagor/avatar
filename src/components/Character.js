import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, affiliation, photoUrl, allies, enemies, weapon }) => (
  <section>
    <h1>{name}</h1>
    <h3>{affiliation}</h3>
    <h3>{allies}</h3>
    <h3>{enemies}</h3>
    <h3>{weapon}</h3>
    <img src={photoUrl} />
  </section>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
  enemies: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired
};

export default Character;
