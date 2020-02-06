import React from 'react';
import ListItem from './ListItem';
import { useCharacter } from './hooks/characterHook';


const List = () => {
  const { characters } = useCharacter();

  const listItemElements = characters.map(({ name, photoUrl, _id }) => (
    <ListItem key={name} name={name} _id={_id} photoUrl={photoUrl} />
  ));

    // handlePaging = () => {
    //   //call fetch again and increment page
    // }

  return (
    <ul>
      {listItemElements}
      {/* <Paging onClick={handlePaging} /> */}
    </ul>
  );

};

export default List;
