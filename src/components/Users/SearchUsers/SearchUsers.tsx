import React, { FC } from 'react'
import style from './SearchUsers.module.scss'

type SearchUsersPropsType = {

}

export const SearchUsers: FC<SearchUsersPropsType> = ({ }) => {
	return (
		<form className={style.form}>
			<input className={style.term} type={'text'} name={'term'} />
			<select name={'friend'} >
				<option value={'null'}>All</option>
				<option value={'true'}>Only followed</option>
				<option value={'false'}>Only unFollowed</option>
			</select>
			<button type={'submit'}>Find</button>
		</form>
	)
}
