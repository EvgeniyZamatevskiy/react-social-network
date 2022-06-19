import React, { ChangeEvent, FC, KeyboardEvent } from 'react'
import { KeyCode } from 'enums/KeyCode'
import { ReturnComponentType } from 'types'
import { UniversalInputPropsType } from './types'
import s from './style/UniversalInput.module.css'

export const UniversalInput: FC<UniversalInputPropsType> =
	({ onChange, onKeyPress, onInputChange, onEnterKeyPress, className, secondDivClassName, error, ...props }): ReturnComponentType => {

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			onChange && onChange(e)
			onInputChange && onInputChange(e.currentTarget.value)
		}

		const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
			onKeyPress && onKeyPress(e)
			onEnterKeyPress && e.key === KeyCode.Enter && onEnterKeyPress()
		}

		return (
			<>
				{error && <div className={`${s.errorMessage} ${secondDivClassName ? secondDivClassName : ''}`}>{error}</div>}
				<input
					type={'text'}
					className={`${error ? s.errorInput : s.input} ${className ? className : ''}`}
					onChange={onChangeHandler}
					onKeyPress={onKeyPressHandler}
					{...props}
				/>
			</>
		)
	}
