import {useTheme} from "hooks"
import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {SmallLoaderPropsType} from "./types"
import style from "./SmallLoader.module.scss"
import {Theme} from "store/slices/app/types";

export const SmallLoader: FC<SmallLoaderPropsType> = ({darkColor, lightColor}): ReturnComponentType => {

  const isDarkTheme = useTheme(Theme.DARK)

  return (
    <div style={isDarkTheme ? {color: darkColor} : {color: lightColor}}
         className={`${style.laBallClipRotate} ${style.laSm}`}>
      <div></div>
    </div>
  )
}
