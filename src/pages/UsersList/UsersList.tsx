import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useActions } from '../../redux/hooks'
import { selectIsLoading } from '../../redux/reducers/app-reducer/selectors'
import { selectIsAuth } from '../../redux/reducers/auth-reducer/selectors'
import { usersActionCreators } from '../../redux/reducers/users-reducer'
import { selectCount, selectPage, selectTotalUsersCount, selectUsers } from '../../redux/reducers/users-reducer/selectors'
import { Paginator } from '../../components/common/Paginator/Paginator'
import { UsersItem } from '../../components/UsersItem/UsersItem'
import { UsersSearchForm } from '../../components/UsersSearchForm/UsersSearchForm'

type UsersListPropsType = {

}

export const UsersList: FC<UsersListPropsType> = ({ }) => {

	const { getUsersTC } = useActions(usersActionCreators)
	const users = useSelector(selectUsers)
	const count = useSelector(selectCount)
	const page = useSelector(selectPage)
	const isLoading = useSelector(selectIsLoading)
	const totalUsersCount = useSelector(selectTotalUsersCount)

	const isAuth = useSelector(selectIsAuth)

	const setCurrentPage = (currentPage: number) => {
		getUsersTC(count, currentPage)
	}

	useEffect(() => {
		if (isAuth) {
			getUsersTC(count, page)
		}
	}, [])

	if (!isAuth) {
		return <Redirect to={'/login'} />
	}

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			<UsersSearchForm />
			<Paginator setCurrentPage={setCurrentPage} totalItemsCount={totalUsersCount} page={page} count={page} />
			{users.map(user => <UsersItem key={user.id} user={user} />)}
		</div>
	)
}