import React, { FC, useCallback, useEffect } from 'react'
import { Path } from 'enums'
import { Pagination } from 'components/common'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'
import { FilterType } from 'store/slices/users/types'
import { selectUsers, selectIsAuth, selectTotalCount, selectCount, selectPage, selectFilter } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { User } from '../../components/user/User'
import { UsersSearch } from '../../components/usersSearch'
import style from './Users.module.scss'
import { getUsers } from 'store/asyncActions/users'

export const Users: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const users = useSelector(selectUsers)
	const isAuth = useSelector(selectIsAuth)
	const totalCount = useSelector(selectTotalCount)
	const count = useSelector(selectCount)
	const page = useSelector(selectPage)
	const filter = useSelector(selectFilter)

	const renderUsers = users.map(user => <User key={user.id} user={user} />)

	const handleSetCurrentPageClick = useCallback((page: number): void => {
		dispatch(getUsers({ count, page, filter }))
	}, [])

	const handleFilterChangedClick = useCallback((filter: FilterType): void => {
		dispatch(getUsers({ count, page: 1, filter }))
	}, [])

	useEffect(() => {
		if (isAuth) {
			dispatch(getUsers({ count, page, filter }))
		}
	}, [])

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	return (
		<div className={style.users}>
			<div className={style.top}>
				<div>
					<h2>Developers</h2>
					<UsersSearch handleFilterChangedClick={handleFilterChangedClick} />
				</div>
				<Pagination
					count={count}
					currentPage={page}
					totalItemsCount={totalCount}
					handleSetCurrentPageClick={handleSetCurrentPageClick}
				/>
			</div>
			<div className={style.bottom}>
				{renderUsers}
			</div>
		</div>
	)
}
