import React, { ChangeEvent, FC } from 'react'
import { ReturnComponentType } from 'types'
import { CheckboxPropsType } from './types'
import style from './Checkbox.module.scss'

export const Checkbox: FC<CheckboxPropsType> =
	({
		isPrimary,
		isSecondary,
		className,
		labelClassName,
		spanClassName,
		children,
		onChange,
		setValue,
		...restProps
	}): ReturnComponentType => {

		const primaryCheckbox = isPrimary && `${style.primaryCheckbox}`
		const secondaryCheckbox = isSecondary && `${style.secondaryCheckbox}`
		const otherCheckbox = className && className
		const primaryLabel = `${style.primaryLabel}`
		const otherLabel = labelClassName && labelClassName
		const primarySpan = `${style.primarySpan}`
		const otherSpan = spanClassName && spanClassName

		const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
			onChange && onChange(event)
			setValue && setValue(event.currentTarget.checked)
		}

		return (
			<label className={`${primaryLabel} ${otherLabel}`}>
				<input
					type='checkbox'
					onChange={onCheckboxChange}
					className={`${primaryCheckbox} ${secondaryCheckbox} ${otherCheckbox}`}
					{...restProps}
				/>
				{children && <span className={`${primarySpan} ${otherSpan}`}>{children}</span>}
			</label>
		)
	}
