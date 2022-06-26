import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { EditableSpanPropsType } from './types'
import { EMPTY_STRING } from 'constants/base'
import style from './EditableSpan.module.scss'

export const EditableSpan: FC<EditableSpanPropsType> = memo(({ currentValue, changeValue, secondSpanClassName }): ReturnComponentType => {

	const [editMode, setEditMode] = useState<boolean>(false)
	const [newValue, setNewValue] = useState<string>(EMPTY_STRING)

	const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setNewValue(e.currentTarget.value)
	}

	const onSetNewValueKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			setEditMode(false)
			changeValue(newValue)
		}
	}

	const onSetNewValueClick = (): void => {
		setEditMode(true)
		setNewValue(currentValue)
	}

	const onSetNewValueBlur = (): void => {
		setEditMode(false)
		changeValue(newValue)
	}

	return (
		<>
			{editMode
				? <input
					className={style.editableInput}
					autoFocus
					value={newValue}
					onChange={onInputChange}
					onBlur={onSetNewValueBlur}
					onKeyDown={onSetNewValueKeyDown}
				/>
				: <span
					className={`${style.span} ${secondSpanClassName && secondSpanClassName}`}
					onClick={onSetNewValueClick}>
					{currentValue ? currentValue : 'Set status'}
				</span>}
		</>
	)
})
