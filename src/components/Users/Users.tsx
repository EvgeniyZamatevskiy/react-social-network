import React, { FC, useCallback, useEffect } from 'react'
import { Path } from 'enums'
import { Pagination } from 'components/common'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useTypedDispatch } from 'store/hooks'
import { getUsersTC } from 'store/middlewares'
import { FilterType } from 'store/reducers/users/types'
import { selectUsers, selectIsAuth, selectTotalCount, selectCount, selectPage, selectFilter } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { User } from './User/User'
import { UsersSearch } from './UsersSearch'
import style from './Users.module.scss'

export const Users: FC = (): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const users = useSelector(selectUsers)
	const isAuth = useSelector(selectIsAuth)
	const totalCount = useSelector(selectTotalCount)
	const count = useSelector(selectCount)
	const page = useSelector(selectPage)
	const filter = useSelector(selectFilter)

	const renderUsers = users.map(user => <User key={user.id} user={user} />)

	const handleSetCurrentPageClick = useCallback((page: number): void => {
		dispatch(getUsersTC(count, page, filter))
	}, [])

	const handleFilterChangedClick = useCallback((filter: FilterType): void => {
		dispatch(getUsersTC(count, 1, filter))
	}, [])

	useEffect(() => {
		if (isAuth) {
			dispatch(getUsersTC(count, page, filter))
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
					<UsersSearch handleFilterChangedClick={handleFilterChangedClick} />
				</div>
				<Pagination
					count={count}
					currentPage={page}
					totalItemsCount={totalCount}
					setCurrentPage={handleSetCurrentPageClick}
				/>
			</div>
			<div className={style.bottom}>
				{renderUsers}
			</div>
		</div>
	)
}
