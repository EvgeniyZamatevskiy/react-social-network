import React, {FC} from "react"
import {ReturnComponentType} from "types/ReturnComponentType"
import {useTheme} from "../hooks"
import style from "./Testing.module.scss"
import {Login} from "../pages/login"
import {Theme} from "store/slices/app/types";

export const Testing: FC = (): ReturnComponentType => {

  const isDarkTheme = useTheme(Theme.DARK)

  return (
    <div className={style.testing}>
      <Login/>
    </div>
  )
}
