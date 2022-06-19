import React, { FC, ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useActions } from '../../store/hooks'
import { Paginator } from '../../components/common/Paginator/Paginator'
import { UsersSearchForm } from '../../components/UsersSearchForm/UsersSearchForm'
import { UserItem } from 'components/UserItem'
import { getCount, getFilter, getIsLoading, getPage, getTotalUsersCount, getUsers } from 'store/selectors'
import { getIsAuth } from 'store/selectors/auth'
import { usersActionCreators } from 'store/action-creators'
import { ReturnComponentType } from 'types'

type UsersListPropsType = {

}

export const UsersList: FC<UsersListPropsType> = ({ }): ReturnComponentType => {

	const { getUsersTC } = useActions(usersActionCreators)
	const users = useSelector(getUsers)
	const count = useSelector(getCount)
	const page = useSelector(getPage)
	const isLoading = useSelector(getIsLoading)
	const totalUsersCount = useSelector(getTotalUsersCount)
	const filter = useSelector(getFilter)

	const isAuth = useSelector(getIsAuth)

	const setCurrentPage = (currentPage: number) => {
		getUsersTC(count, currentPage, filter)
	}

	const onFilterChanged = (filter: any): void => {
		getUsersTC(count, 1, filter)
	}

	useEffect(() => {
		if (isAuth) {
			getUsersTC(count, page, filter)
		}
	}, [])

	if (!isAuth) {
		return <Redirect to={'/login'} />
	}

	return (
		<div>
			<h1>Developers</h1>
			{isLoading && <h1>Loading...</h1>}
			<UsersSearchForm onFilterChanged={onFilterChanged} />
			<Paginator setCurrentPage={setCurrentPage} totalItemsCount={totalUsersCount} page={page} count={count} />
			{users.map(user => <UserItem key={user.id} user={user} />)}
		</div>
	)
}
