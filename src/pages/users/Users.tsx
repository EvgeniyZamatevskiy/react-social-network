import React, { FC, useEffect, useState } from 'react'
import { Input, Loader, Select, User } from 'components'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types'
import { Icon20Search } from '@vkontakte/icons'
import { Icon12Dropdown } from '@vkontakte/icons'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'hooks'
import { getUsers } from 'store/asyncActions'
import { selectIsAuth, selectIsLoadingUsers, selectUsers } from 'store/selectors'
import { Navigate } from 'react-router-dom'
import { Path } from 'enums'
import style from './Users.module.scss'

export const Users: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const users = useSelector(selectUsers)
	const isAuth = useSelector(selectIsAuth)
	const isLoadingUsers = useSelector(selectIsLoadingUsers)

	const [searchValue, setSearchValue] = useState(EMPTY_STRING)

	const usersRender = users.map(({ id, followed, name, photos, status }) => {
		return <User key={id} id={id} followed={followed} name={name} photos={photos} status={status} />
	})

	useEffect(() => {
		dispatch(getUsers())
	}, [])

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} />
	}

	if (isLoadingUsers) {
		return <Loader />
	}

	return (
		<div className={style.container}>
			<div className={style.users}>
				<h2 className={style.title}>Users</h2>
				<div className={style.filterContainer}>
					<div className={style.searchInputContainer}>
						<Icon20Search className={style.searchIcon} />
						<Input placeholder='Search' className={style.searchInput} value={searchValue} setValue={setSearchValue} />
					</div>
					<Select value={'Params'} options={['Params', 'Params']} />
					<Icon12Dropdown width={14} height={14} fill='#92A0B1' />
				</div>
				<div className={style.userContainer}>
					{usersRender}
				</div>
			</div>
		</div>
	)
}
