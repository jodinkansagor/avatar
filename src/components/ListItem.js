import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ name, photoUrl, _id }) => (
  <li>
    <Link to={`/character/${_id}`}>
      <h1>{name}</h1>
      <img src={photoUrl} />
    </Link>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};

export default ListItem;
