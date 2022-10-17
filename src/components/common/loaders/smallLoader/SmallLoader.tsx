import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {SmallLoaderPropsType} from "./types"
import style from "./SmallLoader.module.scss"

export const SmallLoader: FC<SmallLoaderPropsType> = ({color}): ReturnComponentType => {
  return (
    <div style={{color: color}}
         className={`${style.laBallClipRotate} ${style.laSm}`}>
      <div></div>
    </div>
  )
}
