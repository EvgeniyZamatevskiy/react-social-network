import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './AddPost.module.scss'

export const AddPost: FC = (): ReturnComponentType => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.body}>
          <div className={style.avatar}>ava</div>
          <input className={style.input} type="text" placeholder="What`s new?"/>
        </div>
        <button>+</button>
      </div>
    </div>
  )
}
