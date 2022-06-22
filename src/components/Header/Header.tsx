import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Header.module.scss'

type HeaderPropsType = {

}

export const Header: FC<HeaderPropsType> = (): ReturnComponentType => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Social network</h1>
      <div className={style.body}>
        <div className={style.name}>ZaM</div>
        <button className={style.logOut}>Log Out</button>
      </div>
    </header>
  )
}
