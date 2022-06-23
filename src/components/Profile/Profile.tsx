import React, { FC } from 'react'
import style from './Profile.module.scss'
import user from 'assets/images/user.png'
import { Posts } from './Posts'
import { ProfileData } from './ProfileData'

type ProfilePropsType = {

}

export const Profile: FC<ProfilePropsType> = ({ }) => {
	return (
		<div className={style.profile}>
			<div className={style.person}>
				<img src={user} />
				<div className={style.name}>ZaM</div>
				<span className={style.status}>Set status</span>
				<input type='file' />
			</div>
			<ProfileData />
			<Posts />
		</div>
	)
}
