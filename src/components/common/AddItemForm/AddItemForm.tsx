import { EMPTY_STRING } from '../../../constants'
import React, { ChangeEvent, FC, useState } from 'react'
import { UniversalButton } from '../UniversalButton'
import { UniversalInput } from '../UniversalInput'
import { AddItemFormPropsType } from './types'

export const AddItemForm: FC<AddItemFormPropsType> = ({ addItem, buttonTitle }) => {

	const [title, setTitle] = useState<string>(EMPTY_STRING)
	const [error, setError] = useState<string>(EMPTY_STRING)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const currentValue = e.currentTarget.value
		setTitle(currentValue)

		if (error !== '') {
			setError('')
		}
	}

	const handleAddItemClick = (): void => {
		const trimmedTitle = title.trim()

		if (trimmedTitle !== EMPTY_STRING) {
			addItem(trimmedTitle)
			setTitle(EMPTY_STRING)

			return
		}
		setError('Title is required!')
	}

	return (
		<>
			<UniversalInput value={title} onChange={onChangeHandler} onEnterKeyPress={handleAddItemClick} />
			<UniversalButton onClick={handleAddItemClick}>{buttonTitle}</UniversalButton>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</>
	)
}