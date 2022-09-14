import React, { FC } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { CustomLinkPropsType } from './types'

export const CustomLink: FC<CustomLinkPropsType> = ({ children, to, colorActiveLink, ...props }): ReturnComponentType => {

	const match = useMatch({ path: to, end: to.length === 1 })

	return (
		<Link to={to} style={{ color: match ? colorActiveLink : 'inherit' }} {...props}>
			{children}
		</Link>
	)
}
