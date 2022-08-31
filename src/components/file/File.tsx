import React, { ChangeEvent, FC, useRef } from 'react'
import { useAppDispatch } from 'hooks'
import { updateUserPhoto } from 'store/asyncActions'
import { setErrorMessage } from 'store/slices/app'
import { ReturnComponentType } from 'types'
import style from './File.module.scss'

const FIRST_FILES_INDEX = 0
const MAX_FILE_SIZE = 1000000
const ERROR_MESSAGE = 'The file is too large'

export const File: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const inputRef = useRef<HTMLInputElement>(null)

	const onSelectFileClick = (): void => inputRef && inputRef.current?.click()

	const onUploadFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.currentTarget.files && event.currentTarget.files.length) {
			const file = event.currentTarget.files[FIRST_FILES_INDEX]

			if (file.size < MAX_FILE_SIZE) {
				dispatch(updateUserPhoto(file))
			} else {
				dispatch(setErrorMessage(ERROR_MESSAGE))
			}
		}
	}

	return (
		<label className={style.label}>
			<input
				className={style.file}
				type='file'
				onChange={onUploadFileChange}
				ref={inputRef}
			/>
			<button className={style.changeAvatarBtn} onClick={onSelectFileClick}>
				Change avatar
			</button>
		</label>
	)
}
