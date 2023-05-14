import React from 'react'

import css from './Button.module.css'

const Button = ({children, className, type, ...props}) => {
    return (
        <button type={ type} className={`${css.button} ${className} `} >
            {children}
        </button>
    )
}

export default Button