import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Users.module.scss'
import user from 'assets/images/user.png'

type UsersPropsType = {

}

export const Users: FC<UsersPropsType> = ({ }): ReturnComponentType => {
	return (
		<div>
			<div className={style.content}>
				<h1 className={style.developers}>Developers</h1>
				<form className={style.form}>
					<input type='text' name='term' />
					<select name='friend' >
						<option value='null'>All</option>
						<option value='true'>Only followed</option>
						<option value='false'>Only unfollowed</option>
					</select>
					<button className={style.btn} type='submit'>
						Find
					</button>
				</form>
				<div className={style.pagination}>
					<button className={style.paginationBtn}>PREV</button>
					<span>1, 2, 3, 4</span>
					<button className={style.paginationBtn}>NEXT</button>
				</div>
			</div>
			<div className={style.items}>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
				<div className={style.item}>
					<div className={style.image}>
						<img src={user} />
						<div className={style.name}>Name</div>
						<button>Follow</button>
					</div>
				</div>
			</div>
		</div>
	)
}
