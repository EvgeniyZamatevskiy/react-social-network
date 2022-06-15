import React, { FC, useState } from 'react'
import { UniversalInput } from '../../../../components/UI/UniversalInput/UniversalInput'

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

	const onKeyDownHandler = () => {
		setEditMode(false)
		changeValue(newValue)
	}

	// useEffect(() => {
	// 	setNewValue(currentValue)
	// }, [currentValue])

	return (
		<>
			{editMode
				? <UniversalInput autoFocus value={newValue} onChangeValue={setNewValue} onBlur={onBlurHandler} onClickEnter={onKeyDownHandler} />
				: <span onDoubleClick={onDoubleClickHandler}>{currentValue ? currentValue : 'Add Status'}</span>}
		</>
	)
}