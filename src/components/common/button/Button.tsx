import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { ButtonPropsType } from './types'
import style from './Button.module.scss'

export const Button: FC<ButtonPropsType> = ({children, className, ...restProps}): ReturnComponentType => {
  return <button className={`${style.button} ${className}`} {...restProps}>{children}</button>
}
