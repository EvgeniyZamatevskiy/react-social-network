import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Key } from 'enums/Key'
import style from './EditableItem.module.scss'

type EditableItemPropsType = {
	currentValue: string
	changeValue: (newValue: string) => void
	secondSpanClassName?: string
}

export const EditableItem: FC<EditableItemPropsType> = memo(({ currentValue, changeValue, secondSpanClassName }): ReturnComponentType => {

	const [editMode, setEditMode] = useState<boolean>(false)
	const [newValue, setNewValue] = useState<string>(EMPTY_STRING)

	const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setNewValue(event.currentTarget.value)
	}

	const onSetCurrentValueClick = (): void => {
		setEditMode(true)
		setNewValue(currentValue)
	}

	const onSetNewValueKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === Key.ENTER) {
			setEditMode(false)
			changeValue(newValue)
		}
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
					onClick={onSetCurrentValueClick}>
					{currentValue ? currentValue : 'Set status'}
				</span>}
		</>
	)
})
