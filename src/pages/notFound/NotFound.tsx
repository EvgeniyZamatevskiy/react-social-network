import React, { FC, ReactElement } from 'react'
import notFound from 'assets/images/notFound.png'
import error404 from 'assets/images/error404.jpg'
import { Path } from 'enums'
import { Link } from 'react-router-dom'
import style from './NotFound.module.scss'

export const NotFound: FC = (): ReactElement => {
	return (
		<img className={style.notFoundImage} src={error404} alt="" />
		// <div className={style.container}>
		// 	<div className={style.content}>
		// 		<div className={style.body}>
		// 			<h2 className={style.title}>Ooops!</h2>
		// 			<div className={style.text}>Sorry! Page not found!</div>
		// 			<div className={style.backToHomePageBtnContainer}>
		// 				<Link to={Path.PROFILE} className={style.backToHomePageBtn}>Back to profile page</Link>
		// 			</div>
		// 		</div>
		// 		<div>
		// 			<img src={notFound} alt='not found' />
		// 		</div>
		// 	</div>
		// </div>
	)
}
