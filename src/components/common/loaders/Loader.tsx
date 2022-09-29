import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './Loader.module.scss'

export const Loader: FC = (): ReturnComponentType => {
  return (
    <div className={style.loader}>
      <div className={style.bounceOne}></div>
      <div className={style.bounceTwo}></div>
      <div className={style.bounceThree}></div>
    </div>
  )
}
