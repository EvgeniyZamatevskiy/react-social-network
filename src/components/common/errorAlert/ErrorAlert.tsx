import React, { FC, useEffect } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Button } from '../button'
import { useSelector } from 'react-redux'
import { selectErrorMessage } from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { setErrorMessage } from 'store/slices/app'
import { ErrorCircle } from '../errorCircle'
import style from './ErrorAlert.module.scss'

const DELAY = 3000

export const ErrorAlert: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const errorMessage = useSelector(selectErrorMessage)

	useEffect(() => {
		const timerId = setTimeout(() => {
			onDeactivateErrorAlertClick()
		}, DELAY)

		return (() => {
			clearTimeout(timerId)
		})
	}, [errorMessage])

	const onDeactivateErrorAlertClick = (): void => {
		dispatch(setErrorMessage(EMPTY_STRING))
	}

	return (
		<div className={style.errorAlert}>
			<div className={style.alertContainer}>
				<ErrorCircle secondaryClassName={style.errorCircle} />
				<div className={style.alert}>{errorMessage}</div>
			</div>
			<Button
				className={style.deactivateErrorAlertBtn}
				onClick={onDeactivateErrorAlertClick}
			>
				&#10006;
			</Button>
		</div>
	)
}
