import React, {ChangeEvent, FC} from "react"
import {ReturnComponentType} from "types"
import {RadioPropsType} from "./types"
import style from "./Radio.module.scss"

export const Radio: FC<RadioPropsType> =
  ({
     className,
     options,
     name,
     value,
     onChange,
     setValue,
     setIndex,
     ...restProps
   }): ReturnComponentType => {

    const optionsRender = options.map((option, index) => {

      const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
        setValue && setValue(event.currentTarget.value)
        setIndex && setIndex(index)
      }

      return (
        <label key={index} className={style.label}>
          <input
            className={style.radio}
            type="radio"
            name={name}
            value={option}
            checked={option === value}
            onChange={onRadioChange}
            {...restProps}
          />
          {option}
        </label>
      )
    })

    return <>{optionsRender}</>
  }
