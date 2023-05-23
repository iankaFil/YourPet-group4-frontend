import React, { useEffect } from 'react';

import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';
import { ReactComponent as Delete } from 'Components/SvgIcons/DeleteWhiteIcon.svg';

import css from './ModalAcces.module.css';

const ModalAcces = ({
  onClose,
  className,
  title,
  _id,
  handleDeleteClick
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
        <h2 className={css.title}>Delete adverstiment?</h2>
        <p className={css.text}>
          Are you sure you want to delete{' '}
          <span className={css.title_span}>“{title}”</span> ? You can`t undo
          this action.
        </p>
        <div className={css.button_wrap}>
          <button type="button" className={css.cancel_btn} onClick={onClose}>
            Cancel
          </button>
          <button type="button" className={css.del_btn} onClick={() => handleDeleteClick(_id)}>
            Yes <Delete id="svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAcces;
