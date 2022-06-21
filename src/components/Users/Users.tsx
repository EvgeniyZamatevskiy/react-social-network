import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { User } from './User/User'
import style from './Users.module.css'

type UsersPropsType = {

}

export const Users: FC<UsersPropsType> = ({ }): ReturnComponentType => {
	return (
		<div>
			Users
		</div>
	)
}
