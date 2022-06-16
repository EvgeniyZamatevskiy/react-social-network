import React, { FC } from 'react'

type ContactPropsType = {
	title: string
	value: string
}

export const Contact: FC<ContactPropsType> = ({ title, value }) => {
	return (
		<div>
			<b>{title}</b>:{value}
		</div>
	)
}