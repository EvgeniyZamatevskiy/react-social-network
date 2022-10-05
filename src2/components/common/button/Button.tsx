import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { ButtonPropsType } from './types'
import style from './Button.module.scss'

export const Button: FC<ButtonPropsType> =
  ({
     children,
     className,
     isDarkTheme,
     isPrimary,
     ...restProps
   }): ReturnComponentType => {

    const buttonClassName = isPrimary && `${style.button} ${isDarkTheme && style.darkButton}`

    return <button className={`${buttonClassName} ${className}`} {...restProps}>{children}</button>
  }
