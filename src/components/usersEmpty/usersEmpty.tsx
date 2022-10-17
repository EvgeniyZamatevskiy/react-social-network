import React, {FC} from "react"
import {ReturnComponentType} from "types"
import style from "./UsersEmpty.module.scss"

export const UsersEmpty: FC = (): ReturnComponentType => {
  return <div className={style.usersEmpty}>No user found</div>
}
