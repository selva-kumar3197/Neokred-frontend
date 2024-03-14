import React from 'react'

const Button = ({ className, style, children, onClick }) => (
    <button className={className} style={style} onClick={onClick} >
        {children}
    </button>
)


export default Button