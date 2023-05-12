import React from 'react';
import styles from './ModalCongrats.module.css'

const ModalCongrats = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className="modal-content">
        <h2 className={styles.titelCongrats}>Congrats!</h2>
        <p className={styles.textCongrats}>Youre registration is success</p>
        <button className={styles.btn} onClick={onClose}><span className={styles.btnText}>Go to profile</span></button>
      </div>
    </div>
  );
};

export default ModalCongrats;