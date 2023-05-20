import React, { useEffect } from 'react';
// import Button from 'Components/Button/Button';
// import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';
// import { PawIcon } from 'Components/SvgIcons';
import { AddToFavoriteIcon } from 'Components/SvgIcons/AddToFavoriteIcon';

import css from './ModalNotice.module.css';

const ModalNotice = ({
  title,
  name,
  birthday,
  breed,
  place,
  sex,
  photoURL,
  comments,
  onClose,
  className = 'Modal content goes here',
}) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={`${css.modal} ${className}`} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <div>
          <img src={photoURL} alt="photocard" />
          <h2>{title}</h2>
          <ul>
            <li>Name: {name}</li>
            <li>Birthday: {birthday}</li>
            <li>Breed:{breed}</li>
            <li>Place:{place}</li>
            <li>The sex: {sex}</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>
        <p>{comments}</p>
        <button type="button">
          Add to <AddToFavoriteIcon id="svg" />
        </button>
        <button type="button"> Contact</button>
      </div>
    </div>
  );
};

export default ModalNotice;
