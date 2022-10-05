import React, { FC, ReactElement } from 'react'
import notFound from 'assets/images/notFound.png'
import style from './NotFound.module.scss'

export const NotFound: FC = (): ReactElement => {
  return (
    <div className={style.container}>
      <img className={style.notFoundImage} src={notFound} alt="not Found"/>
    </div>
  )
}
