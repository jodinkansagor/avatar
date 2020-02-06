import React from 'react';
import PropTypes from 'prop-types';

export const Paging = ({ onClick, page, label }) => {
  console.log(page);
  return (
    <button onClick={onClick} value={page}>{label}</button>
  );

};

Paging.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.string,
  label: PropTypes.string.isRequired,
};
