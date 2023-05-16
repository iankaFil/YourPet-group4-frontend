import React, { useEffect } from 'react';
import Button from 'Components/Button/Button';
import { CrossSmallIcon } from './../SvgIcons/CrossSmallIcon';
import { PawIcon } from 'Components/SvgIcons';

import css from './ModalCongrats.module.css';

const ModalCongrats = ({ onClose, className = 'Modal content goes here' }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={`${css.modal} ${className}`} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
        </button>
        <h2 className={css.title}>Congrats!</h2>
        <p className={css.text}>Your registration is success</p>
        <Button className={css.modalBtn} onClick={onClose}>
          Go to profile
          <PawIcon id='svg'className={css.pawIcon}/>
        </Button>
      </div>
    </div>
  );
};

export default ModalCongrats;
