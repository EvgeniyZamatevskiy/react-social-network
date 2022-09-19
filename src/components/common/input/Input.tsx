import React, { ChangeEvent, FC, forwardRef, KeyboardEvent } from 'react'
import { Key } from 'enums'
import { ReturnComponentType } from 'types'
import { InputPropsType } from './types'
import { EMPTY_STRING } from 'constants/base'
import style from './Input.module.scss'

export const Input: FC<InputPropsType> =
	forwardRef(({
		isPrimary,
		isSecondary,
		className,
		errorClassName,
		errorMessage,
		onChange,
		onKeyDown,
		setValue,
		onEnter,
		onEscape,
		setErrorMessage,
		...restProps
	},
		ref): ReturnComponentType => {

		const primaryInput = isPrimary && `${style.primaryInput}`
		const secondaryInput = isSecondary && `${style.secondaryInput}`
		const otherInput = className && className
		const error = `${style.error}`
		const otherError = errorClassName && errorClassName

		const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
			onChange && onChange(event)
			setValue && setValue(event.currentTarget.value)

			if (errorMessage) {
				setErrorMessage && setErrorMessage(EMPTY_STRING)
			}
		}

		const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
			onKeyDown && onKeyDown(event)
			onEnter && event.key === Key.ENTER && onEnter()
			onEscape && event.key === Key.ESCAPE && onEscape()
		}

		return (
			<>
				<input
					onChange={onInputChange}
					onKeyDown={onInputKeyDown}
					ref={ref}
					className={`${primaryInput} ${secondaryInput} ${otherInput}`}
					{...restProps}
				/>
				{errorMessage && <div className={`${error} ${otherError}`}>{errorMessage}</div>}
			</>
		)
	})
