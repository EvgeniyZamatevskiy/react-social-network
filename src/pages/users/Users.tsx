import React, { FC, useEffect, useState } from 'react'
import { Input, Select, User } from 'components'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types'
import { Icon20Search } from '@vkontakte/icons'
import { Icon12Dropdown } from '@vkontakte/icons'
import style from './Users.module.scss'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'hooks'
import { getUsers } from 'store/asyncActions'

export const Users: FC = (): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const [searchValue, setSearchValue] = useState(EMPTY_STRING)

	useEffect(() => {
		dispatch(getUsers())
	}, [])

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
					<User />
				</div>
			</div>
		</div>
	)
}
