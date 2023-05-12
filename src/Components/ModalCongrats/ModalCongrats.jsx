import React from 'react';

const ModalCongrats = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>Youre registration is success</p>
        <button onClick={onClose}>Go to profile</button>
      </div>
    </div>
  );
};

export default ModalCongrats;