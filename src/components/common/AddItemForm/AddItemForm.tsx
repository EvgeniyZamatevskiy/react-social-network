import React, { ChangeEvent, FC, memo, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './AddItemForm.module.scss'

type AddItemFormPropsType = {
	addItem: (title: string) => void
}

const ERROR_MESSAGE = 'Title is required!'

export const AddItemForm: FC<AddItemFormPropsType> = memo(({ addItem }): ReturnComponentType => {

	const [title, setTitle] = useState(EMPTY_STRING)
	const [errorMessage, setErrorMessage] = useState(EMPTY_STRING)

	const resetErrorMessage = (): void => setErrorMessage(EMPTY_STRING)

	const resetTitle = (): void => setTitle(EMPTY_STRING)

	const onTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
		setTitle(event.currentTarget.value)

		if (errorMessage !== EMPTY_STRING) {
			resetErrorMessage()
		}
	}

	const onAddPostClick = (): void => {
		const trimmedTitle = title.trim()

		if (trimmedTitle !== EMPTY_STRING) {
			addItem(trimmedTitle)
			resetTitle()
		} else {
			setErrorMessage(ERROR_MESSAGE)
		}
	}

	return (
		<div className={style.addItemForm}>
			{errorMessage && <div className={style.errorMessage}>{errorMessage}</div>}
			<textarea
				className={`${errorMessage && style.textareaError}`}
				value={title}
				onChange={onTextareaChange}
				placeholder='Enter text...'
			/>
			<button onClick={onAddPostClick}>Add new post</button>
		</div>
	)
})
