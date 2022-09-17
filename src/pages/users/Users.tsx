import React, { FC, useCallback, useEffect } from 'react'
import { Pagination } from 'components/common'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'hooks'
import { FilterType } from 'store/slices/users/types'
import { selectUsers, selectTotalCount, selectCount, selectPage, selectFilter } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { User } from '../../components/user/User'
import { UsersSearch } from '../../components/usersSearch'
import { getUsers } from 'store/asyncActions/users'
import { WithAuthNavigate } from 'hoc'
import { useSearchParams } from 'react-router-dom'
import { EMPTY_STRING } from 'constants/base'
import style from './Users.module.scss'

export const Users: FC = WithAuthNavigate((): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const [searchParams, setSearchParams] = useSearchParams()

	const searchParamTerm = searchParams.get('term') || EMPTY_STRING
	const searchParamFriend = searchParams.get('friend') || EMPTY_STRING
	const searchParamPage = searchParams.get('page') || EMPTY_STRING

	const users = useSelector(selectUsers)
	const totalCount = useSelector(selectTotalCount)
	const count = useSelector(selectCount)
	const page = useSelector(selectPage)
	const filter = useSelector(selectFilter)

	const renderUsers = users.map(user => <User key={user.id} user={user} />)

	useEffect(() => {
		setSearchParams({ term: filter.term, friend: String(filter.friend), page: String(page) })
	}, [filter, page])

	useEffect(() => {
		let actualPage = page
		let actualFilter = filter

		if (searchParamPage) {
			actualPage = Number(searchParamPage)
		}

		if (searchParamTerm) {
			actualFilter = { ...actualFilter, term: searchParamTerm }
		}

		if (searchParamFriend === 'null') {
			actualFilter = { ...actualFilter, friend: null }
		}

		if (searchParamFriend === 'true') {
			actualFilter = { ...actualFilter, friend: true }
		}

		if (searchParamFriend === 'false') {
			actualFilter = { ...actualFilter, friend: false }
		}

		dispatch(getUsers({ count, page: actualPage, filter: actualFilter }))
	}, [])

	const handleSetCurrentPageClick = useCallback((page: number): void => {
		dispatch(getUsers({ count, page, filter }))
	}, [])

	const handleFilterChangedClick = useCallback((filter: FilterType): void => {
		dispatch(getUsers({ count, page: 1, filter }))
	}, [])

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
})
