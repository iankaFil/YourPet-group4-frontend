import React, { useEffect } from 'react';
import Button from 'Components/Button/Button';
import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';
import { PawIcon } from 'Components/SvgIcons';

import css from './ModalWindow.module.css';

const ModalWindow = ({
  buttonText,
  onClose,
  className = 'Modal content goes here',
  children,
  title,
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
        <button className={css.closeBtn} onClick={onClose}>
          <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
        </button>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{children}</p>
        <Button className={css.modalBtn} onClick={onClose}>
          {buttonText}
          <PawIcon id="svg" className={css.pawIcon} />
        </Button>
      </div>
    </div>
  );
};

export default ModalWindow;
