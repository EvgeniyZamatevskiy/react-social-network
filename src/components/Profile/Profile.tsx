import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Profile.module.scss'
import user from 'assets/images/user.png'

type ProfilePropsType = {

}

export const Profile: FC<ProfilePropsType> = ({ }): ReturnComponentType => {
	return (
		<div className={style.profile}>
			<div className={style.content}>
				<div className={style.photo}>
					<img src={user} />
				</div>
				<div className={style.info}>
					<div className={style.name}>ZaM</div>
					<span className={style.status}>Set status</span>
					<input className={style.file} type={'file'} />
				</div>
				<div className={style.friends}>
					<div className={style.friendsTitle}>Friends <span>6</span></div>
					<div className={style.body}>
						<div className={style.friend}>
							<img src={user} />
							<div className={style.friendName}>Noah</div>
						</div>
						<div className={style.friend}>
							<img src={user} />
							<div className={style.friendName}>Liam</div>
						</div>
						<div className={style.friend}>
							<img src={user} />
							<div className={style.friendName}>Mason</div>
						</div>
						<div className={style.friend}>
							<img src={user} />
							<div className={style.friendName}>William</div>
						</div>
						<div className={style.friend}>
							<img src={user} />
							<div className={style.friendName}>Ethan</div>
						</div>
						<div className={style.friend}>
							<img src={user} />
							<div className={style.friendName}>Alfred</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.aboutMe}>
				<h2 className={style.aboutTitle}>About</h2>
				<ul className={style.aboutList}>
					<li>Full name: <span>ZaM</span></li>
					<li>Looking for a job: <span>Yes</span></li>
					<li>My professional skills: <span>JS, HTML, REACT</span></li>
					<li>About me: <span>Front-end developer lorem</span></li>
				</ul>
				<h2 className={style.contacts}>Contacts</h2>
				<ul className={style.contactsList}>
					<li>Facebook: <span>https://www.facebook.com</span></li>
					<li>Website: <span>https://www.facebook.com</span></li>
					<li>Vk: <span>https://www.facebook.com</span></li>
					<li>Twitter: <span>https://www.facebook.com</span></li>
					<li>Instagram: <span>https://www.facebook.com</span></li>
					<li>Youtube: <span>https://www.facebook.com</span></li>
					<li>Github: <span>https://www.facebook.com</span></li>
					<li>MainLink: <span>https://www.facebook.com</span></li>
				</ul>
			</div>
		</div>
	)
}
