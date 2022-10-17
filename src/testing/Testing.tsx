import React, {FC} from "react"
import {ReturnComponentType} from "types/ReturnComponentType"
import style from "./Testing.module.scss"
import {Login} from "../pages/login"

export const Testing: FC = (): ReturnComponentType => {


  return (
    <div className={style.testing}>
      <Login/>
    </div>
  )
}
