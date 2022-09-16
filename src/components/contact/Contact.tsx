import React, {FC} from 'react'
import {ReturnComponentType} from 'types/ReturnComponentType'
import style from './Contact.module.scss'
import {ContactPropsType} from './types'

export const Contact: FC<ContactPropsType> = ({title, value}): ReturnComponentType => {
  return (
    <ul className={style.contactsList}>
      	<li>{title}: <a href={value} target='_blank'>{value}</a></li>
    </ul>
  )
}
