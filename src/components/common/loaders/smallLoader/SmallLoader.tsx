import { useTheme } from 'hooks'
import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './SmallLoader.module.scss'

export const SmallLoader: FC = (): ReturnComponentType => {

  const isDarkTheme = useTheme('dark')

  return (
    <div style={isDarkTheme ? {color: '#000'} : {color: '#FFF'}}
         className={`${style.laBallClipRotate} ${style.laSm}`}>
      <div></div>
    </div>
  )
}
