import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../redux/hooks'
import { usersActionCreators } from '../../redux/reducers/users-reducer'
import { selectCount, selectPage, selectTotalUsersCount, selectUsers } from '../../redux/reducers/users-reducer/selectors'
import { UsersItem } from './UsersItem/UsersItem'

type UsersListPropsType = {

}

export const UsersList: FC<UsersListPropsType> = ({ }) => {

	const { getUsersTC } = useActions(usersActionCreators)
	const users = useSelector(selectUsers)
	const count = useSelector(selectCount)
	const page = useSelector(selectPage)
	const totalUsersCount = useSelector(selectTotalUsersCount)

	let pagesCount = Math.ceil(totalUsersCount / count)

	let pages = []
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	useEffect(() => {
		getUsersTC(count, page)
	}, [])

	return (
		<div>
			{pages.map((p) => {

				const setCurrentPageHandler = () => {
					getUsersTC(count, p)
				}

				return (
					<span onClick={setCurrentPageHandler} className={p === page ? 'activePage' : ''} key={p}>{p}</span>
				)
			})}
			{users.map(user => <UsersItem key={user.id} user={user} />)}
		</div>
	)
}