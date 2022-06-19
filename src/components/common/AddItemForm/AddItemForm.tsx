import React, { ChangeEvent, FC, useState } from 'react'
import { EMPTY_STRING } from '../../../constants'
import { Nullable, ReturnComponentType } from 'types'
import { UniversalButton } from '../UniversalButton'
import { UniversalInput } from '../UniversalInput'
import { AddItemFormPropsType } from './types'

export const AddItemForm: FC<AddItemFormPropsType> = ({ onAddItemClick, buttonTitle }): ReturnComponentType => {

	const [value, setValue] = useState<string>(EMPTY_STRING)
	const [error, setError] = useState<Nullable<string>>(null)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setValue(e.currentTarget.value)

		if (error !== null) {
			setError(null)
		}
	}

	const handleAddItemClick = (): void => {
		const trimmedValue = value.trim()

		if (trimmedValue !== EMPTY_STRING) {
			onAddItemClick(trimmedValue)
			setValue(EMPTY_STRING)

			return
		}
		setError('Title is required!')
	}

	return (
		<>
			<UniversalInput value={value} onChange={handleInputChange} handleEnterKeyPress={handleAddItemClick} error={error} />
			<UniversalButton onClick={handleAddItemClick}>{buttonTitle}</UniversalButton>
		</>
	)
}
