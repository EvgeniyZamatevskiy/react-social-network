import React, { FC } from 'react'
import user from 'assets/images/user.png'
import style from './User.module.scss'

type UserPropsType = {

}

export const User: FC<UserPropsType> = ({ }) => {
	return (
		<div className={style.user}>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
			<div className={style.item}>
				<img src={user} />
				<span className={style.name}>ZaM</span>
				<button>Follow</button>
			</div>
		</div>
	)
}