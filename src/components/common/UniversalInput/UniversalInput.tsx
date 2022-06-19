import React, { ChangeEvent, FC, KeyboardEvent } from 'react'
import { KeyCode } from 'enums/KeyCode'
import { ReturnComponentType } from 'types'
import { UniversalInputPropsType } from './types'
import style from './style/UniversalInput.module.css'

export const UniversalInput: FC<UniversalInputPropsType> =
	({ onChange, onKeyPress, handleSetValueChange, handleEnterKeyPress, className, secondDivClassName, error, ...props }): ReturnComponentType => {

		const inputClassName = `${error ? style.errorInput : style.input} ${className && className}`
		const divClassName = `${style.errorMessage} ${secondDivClassName && secondDivClassName}`

		const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
			handleSetValueChange && handleSetValueChange(e.currentTarget.value)
			onChange && onChange(e)
		}

		const onEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
			if (e.key === KeyCode.Enter) {
				handleEnterKeyPress && handleEnterKeyPress()
			}

			onKeyPress && onKeyPress(e)
		}

		return (
			<>
				{error && <div className={divClassName}>{error}</div>}
				<input
					type={'text'}
					className={inputClassName}
					onChange={onInputChange}
					onKeyPress={onEnterKeyPress}
					{...props}
				/>
			</>
		)
	}
