import React, { ChangeEvent, FC, useState } from 'react'
import { UniversalButton } from '../UI/UniversalButton/UniversalButton'

type AddItemFormPropsType = {
	addItem: (title: string) => void
	buttonTitle: string
}

export const AddItemForm: FC<AddItemFormPropsType> = ({ addItem, buttonTitle }) => {

	const [title, setTitle] = useState('')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	const addItemHandler = () => {
		addItem(title)
		setTitle('')
	}

	return (
		<>
			<input value={title} onChange={onChangeHandler} />
			<UniversalButton onClick={addItemHandler}>{buttonTitle}</UniversalButton>
		</>
	)
}