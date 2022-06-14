import React, { FC } from 'react'
import { PostsList } from './PostsList/PostsList'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {

}

export const Profile: FC<ProfilePropsType> = ({ }) => {

	return (
		<div>
			<ProfileInfo />
			<PostsList />
		</div>
	)
}