import { Path } from 'enums'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReturnComponentType } from 'types/ReturnComponentType'

export const NotFound: FC = (): ReturnComponentType => {
	return (
		<h1>This page doesn't exist. Go <Link to={Path.profile}>Profile</Link></h1>
	)
}
