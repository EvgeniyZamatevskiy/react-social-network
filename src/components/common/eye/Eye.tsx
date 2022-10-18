import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {EyePropsType} from "./types"
import {Icon20HideOutline, Icon20ViewOutline} from "@vkontakte/icons"
import style from "./Eye.module.scss"

export const Eye: FC<EyePropsType> = ({type, setType, errorPasswordMessage}): ReturnComponentType => {

  const onShowOpenEyeClick = (): void => setType("text")

  const onShowClosedEyeClick = (): void => setType("password")

  const eyeClassName = `${style.eye} ${errorPasswordMessage && style.secondaryEye}`

  return (
    <>
      {type === "password"
        ? <Icon20ViewOutline className={eyeClassName} width={24} height={24} onClick={onShowOpenEyeClick}/>
        : <Icon20HideOutline className={eyeClassName} width={24} height={24} onClick={onShowClosedEyeClick}/>}
    </>
  )
}
