import React, { FC } from 'react'
import style from './Profile.module.scss'
import user from 'assets/images/user.png'

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
			<div className={style.myPosts}>
				<div className={style.body}>
					<h2>My posts</h2>
					<div className={style.addItemForm}>
						<textarea placeholder={'Enter text...'} />
						<button>Add new post</button>
					</div>
				</div>
				<div className={style.myPost}>

				</div>
			</div>

		</div>
	)
}
