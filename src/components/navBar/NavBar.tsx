import React, {FC} from "react"
import {Path} from "enums"
import {Link} from "react-router-dom"
import {ReturnComponentType} from "types"
import {Icon16Users2Outline, Icon20UserCircleOutline} from "@vkontakte/icons"
import {useTest} from "hooks"
import style from "./NavBar.module.scss"

export const NavBar: FC = (): ReturnComponentType => {

  const theme = useTest("Link")

  const linkClass = `${style.link} ${style[theme]}`

  return (
    <div className={style.navBar}>
      <div className={style.container}>
        <Link className={linkClass} to={Path.PROFILE}>
          <Icon20UserCircleOutline className={style.icon} height={20} width={20}/>
          My profile
        </Link>
        <Link className={linkClass} to={Path.USERS}>
          <Icon16Users2Outline className={style.icon} height={20} width={20}/>
          Users
        </Link>
      </div>
    </div>
  )
}
