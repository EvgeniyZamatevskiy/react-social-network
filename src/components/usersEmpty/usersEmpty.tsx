import {useTheme} from "hooks"
import React, {FC} from "react"
import {ReturnComponentType} from "types"
import style from "./UsersEmpty.module.scss"
import {Theme} from "store/slices/app/types";

export const UsersEmpty: FC = (): ReturnComponentType => {

  const isDarkTheme = useTheme(Theme.DARK)

  return <div className={`${style.usersEmpty} ${isDarkTheme && style.usersEmptyDark}`}>No user found</div>
}
