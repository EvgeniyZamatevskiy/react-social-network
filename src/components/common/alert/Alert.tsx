import React, {FC} from "react"
import {ReturnComponentType} from "types/ReturnComponentType"
import {Button} from "components"
import {AlertPropsType} from "./types"
import warning from "assets/icons/warning.svg"
import error from "assets/icons/error.svg"
import info from "assets/icons/info.svg"
import success from "assets/icons/success.svg"
import style from "./Alert.module.scss"

export const Alert: FC<AlertPropsType> = ({message, onCloseAlertClick, type}): ReturnComponentType => {
  return (
    <div className={`${style.alert} ${style[type]}`}>
      <div className={style.body}>
        <div className={style.icon}>
          {type === "warning" && <img src={warning} alt="warning"/>}
          {type === "error" && <img src={error} alt="error"/>}
          {type === "info" && <img src={info} alt="info"/>}
          {type === "success" && <img src={success} alt="success"/>}
        </div>
        <div className={style.message}>{message}</div>
      </div>
      <Button className={style.closeAlertButton} onClick={onCloseAlertClick}>
        &#10006;
      </Button>
    </div>
  )
}
