import React from 'react';
import ListItem from './ListItem';
import { useCharacter } from './hooks/characterHook';
import { Paging } from '../components/Paging';
import styles from '../components/List.css';
import airbender from '../assets/airbender.jpg';



const List = () => {
  const { characters, setNewPage, page, setBackPage, loading } = useCharacter();
  
  if(loading) return <img src={airbender} className={styles.Loading} />;

  const listItemElements = characters.map(({ name, photoUrl, _id }) => (
    <ListItem key={name} name={name} _id={_id} photoUrl={photoUrl} />
  ));

  const handlePaging = ({ target }) => {
    setNewPage(target.value);
  };

  const handleBackPaging = ({ target }) => {
    setBackPage(target.value);
  };

  return (
    <section >
      <ul className={styles.listClass}>
        {listItemElements}
      </ul>
      <section className={styles.paging}>
        <Paging onClick={handleBackPaging} page={page} label="Previous" />
        <Paging onClick={handlePaging} page={page} label="Next" />
      </section>
    </section >
  );

};

export default List;
