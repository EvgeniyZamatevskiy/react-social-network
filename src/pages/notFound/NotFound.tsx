import React, { FC } from 'react'
import { Path } from 'enums'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './NotFound.module.scss'
import { CustomLink } from 'components/common/customLink/CustomLink'

export const NotFound: FC = (): ReturnComponentType => {
	return (
		<div className={style.notFound}>
			<h1>This page doesn't exist.
				<div>Go <CustomLink to={Path.PROFILE}>Profile</CustomLink></div>
			</h1>
		</div>
	)
}
