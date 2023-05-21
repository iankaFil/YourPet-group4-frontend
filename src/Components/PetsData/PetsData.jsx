import React from 'react';
import { useNavigate } from 'react-router-dom';

import PetsList from './PetsList';
import { PlusSmallIcon } from 'Components/SvgIcons';

import css from './PetsData.module.css';

const PetsData = ({pets, removePet}) => {
  const navigate = useNavigate(); 
  
  const handleAddPet = () => {
    navigate('/add-pet')
  };
  
  return (
    <div className={css.petData}>
      <div className={css.buttonWrap}>
        <h2 className={css.title}>My pets:</h2>
        <button className={css.button} type="button" onClick={handleAddPet}>
          Add Pet
          <PlusSmallIcon id="svg" />
        </button>
      </div>
      {pets?.length ? <PetsList pets={pets} removePet={removePet}/> : <p>No pets</p>}
    </div>
  );
};

export default PetsData;
