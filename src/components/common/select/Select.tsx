import React, { ChangeEvent, FC } from 'react'
import { ReturnComponentType } from 'types'
import { SelectPropsType } from './types'
import style from './Select.module.scss'
import { useTheme } from 'hooks'

export const Select: FC<SelectPropsType> =
  ({
     options,
     setValue,
     onChange,
     ...restProps
   }): ReturnComponentType => {

    const isDarkTheme = useTheme('dark')

    const optionsRender = options.map((option, index) => {
      return <option key={index} className={`${style.option} ${isDarkTheme && style.optionDark}`}>{option}</option>
    })

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      setValue && setValue(event.currentTarget.value)
      onChange && onChange(event)
    }

    return (
      <select
        onChange={onSelectChange}
        className={style.select}
        {...restProps}
      >
        {optionsRender}
      </select>
    )
  }
