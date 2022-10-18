import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {SmallLoaderPropsType} from "./types"
import style from "./SmallLoader.module.scss"

export const SmallLoader: FC<SmallLoaderPropsType> = ({color}): ReturnComponentType => {
  return (
    <div className={`${style.laBallClipRotate} ${style.laSm}`} style={{color: color || "#fff"}}>
      <div></div>
    </div>
  )
}
