import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './Edit.module.scss'

export const Edit: FC = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      Edit
    </div>
  )
}
