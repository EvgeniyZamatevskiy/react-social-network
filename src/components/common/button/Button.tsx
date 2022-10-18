import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {ButtonPropsType} from "./types"
import {EMPTY_STRING} from "constants/base"
import style from "./Button.module.scss"

export const Button: FC<ButtonPropsType> =
  ({
     children,
     className,
     isPrimary,
     ...restProps
   }): ReturnComponentType => {

    const primaryButtonClass = isPrimary ? `${style.button}` : EMPTY_STRING
    const additionalButtonClass = className ? className : EMPTY_STRING

    return (
      <button className={`${primaryButtonClass} ${additionalButtonClass}`} {...restProps}>
        {children}
      </button>
    )
  }
