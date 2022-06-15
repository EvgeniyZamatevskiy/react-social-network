import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { useActions } from '../../redux/hooks'
import { selectIsLoading } from '../../redux/reducers/app-reducer/selectors'
import { selectIsAuth } from '../../redux/reducers/auth-reducer/selectors'
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
	const isLoading = useSelector(selectIsLoading)

	let pagesCount = Math.ceil(totalUsersCount / count)

	let pages = []
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	const navigate = useNavigate()
	const isAuth = useSelector(selectIsAuth)

	useEffect(() => {
		if (isAuth) {
			getUsersTC(count, page)
		} else {
			navigate('/login')
		}
	}, [isAuth])

	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{pages.map((p) => {

				const setCurrentPageHandler = () => {
					getUsersTC(count, p)
				}

				return (
					<span key={p} onClick={setCurrentPageHandler} className={p === page ? 'activePage' : ''} >{p}</span>
				)
			})}
			{users.map(user => <UsersItem key={user.id} user={user} />)}
		</div>
	)
}