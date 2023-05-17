import React from 'react';

import css from './Button.module.css';

const Button = ({ children, className, onClick, type, ...props }) => {
  return (
    <button type={type} onClick={onClick} className={`${css.button} ${className} `}>
      {children}
    </button>
  );
};

export default Button;
