import React, { ChangeEvent, FC, memo, MouseEvent, useState, useEffect } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { FilterType } from 'store/slices/users/types'
import { UsersSearchPropsType } from './types'
import { useSelector } from 'react-redux'
import { selectFilter } from 'store/selectors'
import style from './UsersSearch.module.scss'

export const UsersSearch: FC<UsersSearchPropsType> = memo(({ handleFilterChangedClick }): ReturnComponentType => {

	const filter = useSelector(selectFilter)

	const [term, setTerm] = useState(EMPTY_STRING)
	const [friend, setFriend] = useState('null')

	useEffect(() => {
		setTerm(filter.term)
		setFriend(String(filter.friend))
	}, [filter])

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
			<input value={term} className={style.term} type='text' onChange={onInputChange} />
			<select value={friend} onChange={onSelectChange}>
				<option value='null'>All</option>
				<option value='true'>Only followed</option>
				<option value='false'>Only unFollowed</option>
			</select>
			<button onClick={onFilterChangedClick}>Find</button>
		</div>
	)
})
