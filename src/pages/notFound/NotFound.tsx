import React, { FC, ReactElement } from 'react'
import style from './NotFound.module.scss'

export const NotFound: FC = (): ReactElement => {
  return (
    <div className={style.container}>
      <div className={style.notFoundImage}></div>
    </div>
  )
}
