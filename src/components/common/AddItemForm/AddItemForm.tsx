import React, { ChangeEvent, FC, memo, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { AddItemFormPropsType } from './types'
import style from './AddItemForm.module.scss'

const ERROR_MESSAGE = 'Title is required!'

export const AddItemForm: FC<AddItemFormPropsType> = memo(({ addItem }): ReturnComponentType => {

	const [title, setTitle] = useState<string>(EMPTY_STRING)
	const [error, setError] = useState<string>(EMPTY_STRING)

	const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setTitle(e.currentTarget.value)

		if (error) {
			setError(EMPTY_STRING)
		}
	}

	const onAddPostClick = (): void => {
		const trimmedTitle = title.trim()

		if (trimmedTitle !== EMPTY_STRING) {
			addItem(trimmedTitle)
			setTitle(EMPTY_STRING)
		} else {
			setError(ERROR_MESSAGE)
		}
	}

	return (
		<div className={style.addItemForm}>
			{error && <div className={style.errorMessage}>{error}</div>}
			<textarea
				className={`${error && style.textareaError}`}
				value={title}
				onChange={onTextareaChange}
				placeholder='Enter text...'
			/>
			<button onClick={onAddPostClick}>Add new post</button>
		</div>
	)
})
