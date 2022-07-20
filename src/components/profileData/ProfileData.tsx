import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './ProfileData.module.scss'
import { UserProfileType } from 'api/profile/types'
import { Nullable } from 'types'

type ProfileDataPropsType = {
	userProfile: Nullable<UserProfileType>
	setEditProfile: (editProfile: boolean) => void
	isOwner: boolean
}

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
				{userProfile?.lookingForAJob &&
					<li>My professional skills: <span>{userProfile?.lookingForAJobDescription}</span></li>}
				<li>About me: <span>{userProfile?.aboutMe}</span></li>
			</ul>
			<h2>Contacts</h2>
			<ul className={style.contactsList}>
				<li>Facebook: <a href={userProfile?.contacts.facebook}>{userProfile?.contacts.facebook}</a></li>
				<li>Website: <a href={userProfile?.contacts.website}>{userProfile?.contacts.website}</a></li>
				<li>Vk: <a href={userProfile?.contacts.vk}>{userProfile?.contacts.vk}</a></li>
				<li>Twitter: <a href={userProfile?.contacts.twitter}>{userProfile?.contacts.twitter}</a></li>
				<li>Instagram: <a href={userProfile?.contacts.instagram}>{userProfile?.contacts.instagram}</a></li>
				<li>Youtube: <a href={userProfile?.contacts.youtube}>{userProfile?.contacts.youtube}</a></li>
				<li>Github: <a href={userProfile?.contacts.github}>{userProfile?.contacts.github}</a></li>
				<li>MainLink: <a href={userProfile?.contacts.mainLink}>{userProfile?.contacts.mainLink}</a></li>
			</ul>
		</div>
	)
}
