import React, { ChangeEvent, FC, memo, MouseEvent, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './UsersSearch.module.scss'
import { FilterType } from 'store/slices/users/types'

type UsersSearchPropsType = {
	handleFilterChangedClick: (filter: FilterType) => void
}

export const UsersSearch: FC<UsersSearchPropsType> = memo(({ handleFilterChangedClick }): ReturnComponentType => {

	const [term, setTerm] = useState<string>(EMPTY_STRING)
	const [friend, setFriend] = useState<string>('null')

	const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setTerm(event.currentTarget.value)
	}

	const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
		setFriend(event.currentTarget.value)
	}

	const onFilterChangedClick = (event: MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault()

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
