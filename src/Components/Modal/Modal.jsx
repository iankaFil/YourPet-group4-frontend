import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

import { CrossSmallIcon } from './../SvgIcons/CrossSmallIcon';

import css from './Modal.module.css'


//этот код нужно добавитьо в компонент, в котором используется модалка
// const [showModal, setShowModal] = useState(false);

// открытие модалки
//   function handleOpenModal() {
//     setShowModal(true);
//   }

// закрытие модалки
//   function handleCloseModal() {
//     setShowModal(false);
//   }

//рендеринг модалки в компоненте
{/* <button onClick={handleOpenModal}>Open modal</button>
{showModal && <Modal onClose={handleCloseModal}> 
    Здесь будет ваш контент
</Modal>} */}

const Modal = ({ onClose, className, children="Modal content goes here" }) => { 
    
    useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 27) { // escape key
        onClose();
      }
    }

    function handleClick(event) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('click', handleClick);
    };
    }, [onClose]);
    
    return (
        <div className={`${css.modal} ${className}`}>
            <div className={css.modalContent}>
                <button className={css.modalBtn} onClick={onClose}>
                    <CrossSmallIcon id='svg' className={css.crossSmallIcon}/>
                </button>
                    {children}
                </div>
        </div>
    );
}

export default Modal