import React, { FC } from 'react'
import { Path } from 'enums'
import { Link } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { Icon16Users2Outline } from '@vkontakte/icons'
import { Icon20UserCircleOutline } from '@vkontakte/icons'
import { useTheme } from 'hooks'
import style from './NavBar.module.scss'

export const NavBar: FC = (): ReturnComponentType => {

  const isDarkTheme = useTheme('dark')

  const linkClassName = `${style.link} ${isDarkTheme && style.linkDark}`

  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <Link className={linkClassName} to={Path.PROFILE}>
          <Icon20UserCircleOutline className={style.icon} height={20} width={20}/>
          My page
        </Link>
        <Link className={linkClassName} to={Path.USERS}>
          <Icon16Users2Outline className={style.icon} height={20} width={20}/>
          Users
        </Link>
      </div>
    </div>
  )
}
