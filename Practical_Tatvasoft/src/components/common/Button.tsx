import React from 'react'
import { ButtonProps } from '../types'

const Button = ({className, title, onClick}: ButtonProps) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>{title}</button>
  )
}

export default Button