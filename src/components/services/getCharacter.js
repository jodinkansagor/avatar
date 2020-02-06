export const getCharacters = (page) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
    .then(res => res.json());
};

export const getSpecificCharacter = (_id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${_id}`)
    .then(res => res.json());
};
