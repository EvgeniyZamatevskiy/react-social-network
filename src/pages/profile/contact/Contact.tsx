import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { ContactPropsType } from './types'
import style from './Contact.module.scss'

export const Contact: FC<ContactPropsType> = ({title, link}): ReturnComponentType => {

  const currentTitle = title[0].toUpperCase() + title.slice(1)

  return (
    <div className={style.container}>
      {currentTitle}: <a className={style.link} target="_blank" href={link}>{link}</a>
    </div>
  )
}
