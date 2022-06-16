import React, { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent } from 'react'
import s from './UniversalInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type UniversalInputPropsType = Omit<DefaultInputPropsType, 'type'> & {
	onChangeValue?: (value: string) => void
	onClickEnter?: () => void
	secondDivClassName?: string
	error?: string
}

export const UniversalInput: FC<UniversalInputPropsType> =
	({ onChange, onKeyPress, onChangeValue, onClickEnter, className, secondDivClassName, error, ...props }) => {

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
			onChange && onChange(e)
			onChangeValue && onChangeValue(e.currentTarget.value)
		}

		const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
			onKeyPress && onKeyPress(e)
			onClickEnter && e.key === 'Enter' && onClickEnter()
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

