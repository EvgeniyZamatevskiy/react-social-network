import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react'

type ProfileStatusPropsType = {
	currentValue: string
	changeValue: (newValue: string) => void
}

export const ProfileStatus: FC<ProfileStatusPropsType> = ({ currentValue, changeValue }) => {

	const [editMode, setEditMode] = useState<boolean>(false)
	const [newValue, setNewValue] = useState<string>('')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewValue(e.currentTarget.value)
	}

	const onDoubleClickHandler = () => {
		setEditMode(true)
		setNewValue(currentValue)
	}

	const onBlurHandler = () => {
		setEditMode(false)
		changeValue(newValue)
	}

	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setEditMode(false)
			changeValue(newValue)
		}
	}

	// useEffect(() => {
	// 	setNewValue(currentValue)
	// }, [currentValue])

	return (
		<>
			{editMode
				? <input autoFocus value={newValue} onChange={onChangeHandler} onBlur={onBlurHandler} onKeyDown={onKeyDownHandler} />
				: <span onDoubleClick={onDoubleClickHandler}>{currentValue ? currentValue : 'Add Status'}</span>}
		</>
	)
}