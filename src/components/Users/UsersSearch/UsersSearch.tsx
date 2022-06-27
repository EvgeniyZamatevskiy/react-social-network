import React, { ChangeEvent, FC, memo, MouseEvent, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { FilterType } from 'store/usersReducer'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { UsersSearchPropsType } from './types'
import style from './UsersSearch.module.scss'

export const UsersSearch: FC<UsersSearchPropsType> = memo(({ handleFilterChangedClick }): ReturnComponentType => {

	const [term, setTerm] = useState<string>(EMPTY_STRING)
	const [friend, setFriend] = useState<string>('null')

	const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setTerm(e.currentTarget.value)
	}

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
		setFriend(e.currentTarget.value)
	}

	const onFilterChangedClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()

		const filter: FilterType = {
			term: term,
			friend: friend === 'null' ? null : friend === 'true' ? true : false
		}

		handleFilterChangedClick(filter)
	}

	return (
		<div className={style.usersSearch}>
			<input className={style.term} type='text' onChange={onInputChange} />
			<select onChange={onSelectChange}>
				<option value='null'>All</option>
				<option value='true'>Only followed</option>
				<option value='false'>Only unFollowed</option>
			</select>
			<button onClick={onFilterChangedClick}>Find</button>
		</div>
	)
})
