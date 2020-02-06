import React from 'react';
import PropTypes from 'prop-types';

export const Paging = ({ onClick }) => {
  
  return (
    <button onClick={onClick}>Next Page</button>
  );

};

Paging.propTypes = {
  onClick: PropTypes.func.isRequired
};
