import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './Messages.module.scss'

export const Messages: FC = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      Messages
    </div>
  )
}
