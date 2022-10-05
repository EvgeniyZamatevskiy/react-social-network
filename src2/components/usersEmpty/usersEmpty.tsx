import { useTheme } from 'hooks'
import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './UsersEmpty.module.scss'

export const UsersEmpty: FC = (): ReturnComponentType => {

  const isDarkTheme = useTheme('dark')

  return <div className={`${style.usersEmpty} ${isDarkTheme && style.usersEmptyDark}`}>No user found</div>
}
