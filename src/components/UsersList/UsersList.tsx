import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { UserItem } from 'components/UsersList/UserItem'
import { ReturnComponentType } from 'types'
import { Pagination } from 'components/common/Pagination'
import { Path } from 'enums'
import { UsersSearchForm } from 'components'
import { useTypedDispatch } from 'store/hooks'
import { getUsersTC } from 'store/middlewares/users'
import { selectUsers, selectCount, selectPage, selectIsLoading, selectTotalUsersCount, selectFilter, selectIsAuth } from 'store/selectors'

export const UsersList: FC = ({ }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const users = useSelector(selectUsers)
	const count = useSelector(selectCount)
	const page = useSelector(selectPage)
	const isLoading = useSelector(selectIsLoading)
	const totalUsersCount = useSelector(selectTotalUsersCount)
	const filter = useSelector(selectFilter)
	const isAuth = useSelector(selectIsAuth)

	const renderUsers = users.map(user => <UserItem key={user.id} user={user} />)

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
			{renderUsers}
		</div>
	)
}
