import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './ProfileData.module.scss'
import { ProfileDataPropsType } from './types'

export const ProfileData: FC<ProfileDataPropsType> = ({ userProfile, setEditProfile, isOwner }): ReturnComponentType => {

	const onActivateEditProfile = (): void => {
		setEditProfile(true)
	}

	return (
		<div className={style.about}>
			<h1>About
				{isOwner && <span onClick={onActivateEditProfile}>&#9998;</span>}
			</h1>
			<ul className={style.aboutList}>
				<li>Full name: <span>{userProfile?.fullName}</span></li>
				<li>Looking for a job: <span>{userProfile?.lookingForAJob ? 'Yes' : 'No'}</span></li>
				<li>My professional skills: <span>{userProfile?.lookingForAJobDescription}</span></li>
				<li>About me: <span>{userProfile?.aboutMe}</span></li>
			</ul>
			<h2>Contacts</h2>
			<ul className={style.contactsList}>
				<li>Facebook: <span>{userProfile?.contacts.facebook}</span></li>
				<li>Website: <span>{userProfile?.contacts.website}</span></li>
				<li>Vk: <span>{userProfile?.contacts.vk}</span></li>
				<li>Twitter: <span>{userProfile?.contacts.twitter}</span></li>
				<li>Instagram: <span>{userProfile?.contacts.instagram}</span></li>
				<li>Youtube: <span>{userProfile?.contacts.youtube}</span></li>
				<li>Github: <span>{userProfile?.contacts.github}</span></li>
				<li>MainLink: <span>{userProfile?.contacts.mainLink}</span></li>
			</ul>
		</div>
	)
}
