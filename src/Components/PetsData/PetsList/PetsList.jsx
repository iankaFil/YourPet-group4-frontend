import React from 'react';
import PetsListItem from './PetsListItem/PetsListItem';

const PetsList = ({ pets, removePet }) => {
  return (
    <ul>
      {pets.map(({ _id, photoURL, name, birthday, breed, comments }) => (
        <PetsListItem
          _id={_id}
          key={_id} 
          name={name}
          birthday={birthday}
          photoURL={photoURL}
          breed={breed}
          comments={comments}
          loading="lazy"
          removePet={removePet}
        />
      ))}
    </ul>
  );
};

export default PetsList;
