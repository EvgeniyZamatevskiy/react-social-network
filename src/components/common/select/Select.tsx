import React, { ChangeEvent, FC } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { SelectPropsType } from './types'
import style from './Select.module.scss'

export const Select: FC<SelectPropsType> =
	({
		options,
		setValue,
		onChange,
		...restProps
	}): ReturnComponentType => {

		const theme = useSelector(selectTheme)

		const optionsRender = options.map((option, index) => {
			return <option key={index} className={`${style.option} ${theme === 'dark' && style.dark}`}>{option}</option>
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
