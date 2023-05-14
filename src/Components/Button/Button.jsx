import React from 'react'

import css from './Button.module.css'

const Button = ({children, className, ...props}) => {
    return (
        <button className={`${css.button} ${className} `} >
            {children}
        </button>
    )
}

export default Button