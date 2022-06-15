import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { selectIsAuth } from '../../redux/reducers/auth-reducer/selectors'
import { PostsList } from './PostsList/PostsList'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {

}

export const Profile: FC<ProfilePropsType> = ({ }) => {

	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Redirect to={'/login'} />
	}

	return (
		<div>
			<ProfileInfo />
			<PostsList />
		</div>
	)
}