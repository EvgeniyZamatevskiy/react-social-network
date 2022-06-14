import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../redux/hooks'
import { usersActionCreators } from '../../redux/reducers/users-reducer'
import { selectUsers } from '../../redux/reducers/users-reducer/selectors'
import { UsersItem } from './UsersItem/UsersItem'

type UsersListPropsType = {

}

export const UsersList: FC<UsersListPropsType> = ({ }) => {

	const { getUsersTC } = useActions(usersActionCreators)

	const users = useSelector(selectUsers)

	const usersElements = users.map(user => <UsersItem key={user.id} user={user} />)

	useEffect(() => {
		getUsersTC()
	}, [])

	return (
		<div>
			{usersElements}
		</div>
	)
}