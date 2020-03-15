import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../components/ListItem.css';
import airbender from '../assets/airbender.jpg';

const ListItem = ({ name, photoUrl, _id }) => (
  <li>
    <Link to={`/character/${_id}`}>
      <h1>{name}</h1>
      <img src={photoUrl || airbender} />
    </Link>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  _id: PropTypes.string.isRequired
};

export default ListItem;
