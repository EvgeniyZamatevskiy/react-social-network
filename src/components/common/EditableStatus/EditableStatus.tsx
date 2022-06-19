import React, { FC, useState } from 'react'
import { EMPTY_STRING } from '../../../constants'
import { ReturnComponentType } from 'types'
import { EditableStatusPropsType } from './types'
import { UniversalInput } from '../UniversalInput'

export const EditableStatus: FC<EditableStatusPropsType> = ({ currentValue, changeValue }): ReturnComponentType => {

	const [editMode, setEditMode] = useState<boolean>(false)
	const [newValue, setNewValue] = useState<string>(EMPTY_STRING)

	const onSpanDoubleClick = () => {
		setEditMode(true)
		setNewValue(currentValue)
	}

	const handleInputBlur = () => {
		setEditMode(false)
		changeValue(newValue)
	}

	const handleEnterKeyPress = () => {
		setEditMode(false)
		changeValue(newValue)
	}

	return (
		<>
			{editMode
				? <UniversalInput
					autoFocus
					value={newValue}
					handleSetValueChange={setNewValue}
					onBlur={handleInputBlur}
					handleEnterKeyPress={handleEnterKeyPress}
				/>
				: <span onDoubleClick={onSpanDoubleClick}><b>status: </b>{currentValue ? currentValue : 'Set status'}</span>}
		</>
	)
}
