import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './ProfileData.module.scss'

type ProfileDataPropsType = {

}

export const ProfileData: FC<ProfileDataPropsType> = ({ }): ReturnComponentType => {
	return (
		<div className={style.about}>
			<h1>About</h1>
			<ul className={style.aboutList}>
				<li>Full name: <span>ZaM</span></li>
				<li>Looking for a job: <span>Yes</span></li>
				<li>My professional skills: <span>JS, HTML, REACT</span></li>
				<li>About me: <span>Front-end developer</span></li>
			</ul>
			<h2>Contacts</h2>
			<ul className={style.contactsList}>
				<li>Facebook <span>https://www.facebook.com</span></li>
				<li>Website: <span>https://www.facebook.com</span></li>
				<li>Vk: <span>https://www.facebook.com</span></li>
				<li>Twitter: <span>https://www.facebook.com</span></li>
				<li>Instagram: <span>https://www.facebook.com</span></li>
				<li>Youtube: <span>https://www.facebook.com</span></li>
				<li>Github: <span>https://www.facebook.com</span></li>
				<li>MainLink: <span>https://www.facebook.com</span></li>
			</ul>
		</div>
	)
}
