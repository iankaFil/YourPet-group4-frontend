import React from 'react';
import PetsListItem from './PetsListItem/PetsListItem';

const PetsList = ({ pets }) => {
  return (
    <ul>
      {pets.map(({ _id, photoURL, name, birthday, breed, comments }) => (
        <PetsListItem
          key={_id} 
          name={name}
          birthday={birthday}
          photoURL={photoURL}
          breed={breed}
          comments={comments}
          loading="lazy"
        />
      ))}
    </ul>
  );
};

export default PetsList;
