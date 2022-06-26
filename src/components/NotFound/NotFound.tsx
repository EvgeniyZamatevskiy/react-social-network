import React, { FC } from 'react'
import { Path } from 'enums'
import { Link } from 'react-router-dom'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './NotFound.module.scss'

export const NotFound: FC = (): ReturnComponentType => {
	return (
		<div className={style.notFound}>
			<h1>This page doesn't exist.
				<div>Go <Link to={Path.profile}>Profile</Link></div>
			</h1>
		</div>
	)
}
