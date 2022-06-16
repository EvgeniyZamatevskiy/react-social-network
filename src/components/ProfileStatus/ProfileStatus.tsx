import React, { FC, useState } from 'react'
import { UniversalInput } from '../common/UniversalInput/UniversalInput'

type ProfileStatusPropsType = {
	currentValue: string
	changeValue: (newValue: string) => void
}

export const ProfileStatus: FC<ProfileStatusPropsType> = ({ currentValue, changeValue }) => {

	const [editMode, setEditMode] = useState<boolean>(false)
	const [newValue, setNewValue] = useState<string>('')

	const onDoubleClickHandler = () => {
		setEditMode(true)
		setNewValue(currentValue)
	}

	const onBlurHandler = () => {
		setEditMode(false)
		changeValue(newValue)
	}

	const onClickEnterHandler = () => {
		setEditMode(false)
		changeValue(newValue)
	}

	return (
		<>
			{editMode
				? <UniversalInput autoFocus value={newValue} onChangeValue={setNewValue} onBlur={onBlurHandler} onClickEnter={onClickEnterHandler} />
				: <span onDoubleClick={onDoubleClickHandler}><b>status: </b>{currentValue ? currentValue : 'Set status'}</span>}
		</>
	)
}