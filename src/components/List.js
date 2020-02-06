import React from 'react';
import ListItem from './ListItem';
import { useCharacter } from './hooks/characterHook';
import { Paging } from '../components/Paging';



const List = () => {
  const { characters, setNewPage, page } = useCharacter();

  const listItemElements = characters.map(({ name, photoUrl, _id }) => (
    <ListItem key={name} name={name} _id={_id} photoUrl={photoUrl} />
  ));

  const handlePaging = ({ target }) => {
    console.log(target.value);
    setNewPage(target.value);
  };

  return (
    <section>
      <Paging onClick={handlePaging} page={page}/>
      <ul>
        {listItemElements}
      </ul>
    </section>
  );

};

export default List;
