import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ listItems }) => {

  const listItemElements = listItems.map(({ name, affiliation, photoURL }) => (
    <ListItem key={name} name={name} affiliation={affiliation} photoURL={photoURL} />
  ));

  return (
    <section>
      {listItemElements}
    </section>
  );

};

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired
  }))
};

export default List;
