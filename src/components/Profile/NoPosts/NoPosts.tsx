import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './NoPosts.module.scss'

export const NoPosts: FC = (): ReturnComponentType => {
	return (
		<div className={style.noPosts}>
			<h1>There are no posts on the wall yet</h1>
		</div>
	)
}
