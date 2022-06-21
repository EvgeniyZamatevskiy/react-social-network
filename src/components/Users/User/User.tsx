import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './User.module.css'

type UserPropsType = {

}

export const User: FC<UserPropsType> = ({ }): ReturnComponentType => {
	return (
		<div>
			User
		</div>
	)
}
