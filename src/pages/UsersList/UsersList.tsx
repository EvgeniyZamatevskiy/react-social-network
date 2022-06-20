import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { UserItem } from 'components/UserItem'
import { getCount, getFilter, getIsLoading, getPage, getTotalUsersCount, getUsers } from 'store/selectors'
import { getIsAuth } from 'store/selectors/auth'
import { ReturnComponentType } from 'types'
import { Pagination } from 'components/common/Pagination'
import { Path } from 'enums'
import { UsersSearchForm } from 'components'
import { useTypedDispatch } from 'store/hooks'
import { getUsersTC } from 'store/middlewares/users'

export const UsersList: FC = ({ }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const users = useSelector(getUsers)
	const count = useSelector(getCount)
	const page = useSelector(getPage)
	const isLoading = useSelector(getIsLoading)
	const totalUsersCount = useSelector(getTotalUsersCount)
	const filter = useSelector(getFilter)
	const isAuth = useSelector(getIsAuth)

	const mappedUsers = users.map(user => <UserItem key={user.id} user={user} />)

	useEffect(() => {
		if (isAuth) {
			dispatch(getUsersTC(count, page, filter))
		}
	}, [])

	const handleSetCurrentPageClick = (currentPage: number): void => {
		dispatch(getUsersTC(count, currentPage, filter))
	}

	const onFilterChanged = (filter: any): void => {
		dispatch(getUsersTC(count, 1, filter))
	}

	if (!isAuth) {
		return <Redirect to={Path.login} />
	}

	return (
		<div>
			<h1>Developers</h1>
			{isLoading && <h1>Loading...</h1>}
			<UsersSearchForm onFilterChanged={onFilterChanged} />
			<Pagination setCurrentPage={handleSetCurrentPageClick} totalItemsCount={totalUsersCount} page={page} count={count} />
			{mappedUsers}
		</div>
	)
}
