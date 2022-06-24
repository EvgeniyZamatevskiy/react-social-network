import { Pagination } from 'components/common/Pagination/Pagination'
import { Path } from 'enums'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useTypedDispatch } from 'store/hooks'
import { selectIsAuth } from 'store/selectors/auth'
import { selectUsers } from 'store/selectors/users'
import { getUsersTC } from 'store/usersReducer'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { SearchUsers } from './SearchUsers/SearchUsers'
import { User } from './User/User'
import style from './Users.module.scss'

type UsersPropsType = {

}

export const Users: FC<UsersPropsType> = (): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const users = useSelector(selectUsers)
	const isAuth = useSelector(selectIsAuth)

	const renderUsers = users.map(user => <User key={user.id} user={user} />)

	useEffect(() => {
		if (isAuth) {
			dispatch(getUsersTC())
		}
	}, [])

	if (!isAuth) {
		return <Navigate to={Path.login} />
	}

	return (
		<div className={style.users}>
			<div className={style.top}>
				<div>
					<h2>Developers</h2>
					<SearchUsers />
				</div>
				<Pagination />
			</div>
			<div className={style.bottom}>
				{renderUsers}
			</div>
		</div>
	)
}
