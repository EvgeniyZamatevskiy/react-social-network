import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { useTheme } from '../hooks'
import style from './Testing.module.scss'
import { Login } from '../pages/login'

export const Testing: FC = (): ReturnComponentType => {

  const isDarkTheme = useTheme('dark')

  return (
    <div className={style.testing}>
      <Login/>
    </div>
  )
}
