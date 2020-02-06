import React from 'react';
import PropTypes from 'prop-types';

export const Paging = ({ onClick, page }) => {
  console.log(page);
  return (
    <button onClick={onClick} value={page}>Next Page</button>
  );

};

Paging.propTypes = {
  onClick: PropTypes.func.isRequired,
  page: PropTypes.string
};
