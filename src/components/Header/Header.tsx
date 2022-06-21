import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Header.module.scss'

type HeaderPropsType = {

}

export const Header: FC<HeaderPropsType> = (): ReturnComponentType => {
  return (
    <div>
      <header>
        Header
      </header>
    </div>
  )
}
