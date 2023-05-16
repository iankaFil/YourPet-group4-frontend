import React, { useEffect } from 'react';
import Button from 'Components/Button/Button';
import { CrossSmallIcon } from './../SvgIcons/CrossSmallIcon';
import { PawIcon } from 'Components/SvgIcons';

import css from './ModalCongrats.module.css';
import { useNavigate } from 'react-router-dom';

const ModalCongrats = ({ onClose, className = 'Modal content goes here' }) => {
  const navigate = useNavigate();

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBtnClick = () => {
    navigate('/user')
  }

  return (
    <div className={`${css.modal} ${className}`} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
        </button>
        <h2 className={css.title}>Congrats!</h2>
        <p className={css.text}>Your registration is success</p>
        <Button className={css.modalBtn} onClick={handleBtnClick}>
          Go to profile
          <PawIcon id='svg'className={css.pawIcon}/>
        </Button>
      </div>
    </div>
  );
};

export default ModalCongrats;
