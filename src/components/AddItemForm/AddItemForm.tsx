import React, { ChangeEvent, FC, useState } from 'react'
import { UniversalButton } from '../UI/UniversalButton/UniversalButton'
import { UniversalInput } from '../UI/UniversalInput/UniversalInput'

type AddItemFormPropsType = {
	addItem: (title: string) => void
	buttonTitle: string
}

export const AddItemForm: FC<AddItemFormPropsType> = ({ addItem, buttonTitle }) => {

	const [title, setTitle] = useState('')
	const [error, setError] = useState('')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
		if (error !== '') {
			setError('')
		}
	}

	const addItemHandler = () => {
		if (title.trim() !== '') {
			addItem(title.trim())
			setTitle('')
		} else {
			setError('Title is required!')
		}
	}

	return (
		<>
			<UniversalInput value={title} onChange={onChangeHandler} onClickEnter={addItemHandler} />
			<UniversalButton onClick={addItemHandler}>{buttonTitle}</UniversalButton>
			{error && <div style={{ color: 'red' }}>{error}</div>}
		</>
	)
}