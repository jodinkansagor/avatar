import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Paging.css';

export const Paging = ({ onClick, page, label }) => {

  return (
    <button className={styles.button} onClick={onClick} value={page}>{label}</button>
  );

};

Paging.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.Number,
  label: PropTypes.string.isRequired,
};
