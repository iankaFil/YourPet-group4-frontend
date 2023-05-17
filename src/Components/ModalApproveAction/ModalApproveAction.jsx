import React, { useEffect } from 'react';

import Button from 'Components/Button/Button';
import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';
import LogoutIcon from 'Components/SvgIcons/LogoutIcon';

import css from './ModalApproveAction.module.css';

const ModalApproveAction = ({
  onClose,
  handleApproveClick, 
  className,
  children = 'Modal content goes here',
}) => {
  
    const handleClick =(event) => {
      if (event.target === event.currentTarget) {
        onClose();
        }
    }
  
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
    <div className={`${css.modal} ${className}`} onClick={handleClick}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
        </button>
        {children}
        <div className={css.buttonWrap}>
          <Button onClick={onClose} className={`${css.modalBtn} ${css.cancelBtn}`}>Cancel</Button>
          <Button onClick={handleApproveClick} className={`${css.modalBtn} ${css.approveBtn}`}>
            Yes
            <LogoutIcon id='svg'className={css.logoutIcon}/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;
