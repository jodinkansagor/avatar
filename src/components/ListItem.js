import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, affiliation, photoURL }) => (
  <section>
    <h1>{name}</h1>
    <h3>{affiliation}</h3>
    <img src={photoURL} />
  </section>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired
};

export default ListItem;
