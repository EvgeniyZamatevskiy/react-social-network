import React, { FC, memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FilterType } from 'store/usersReducer'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { UsersSearchPropsType, FormType } from './types'
import style from './UsersSearch.module.scss'

export const UsersSearch: FC<UsersSearchPropsType> = memo(({ onFilterChangedSubmit }): ReturnComponentType => {

	const { register, handleSubmit } = useForm<FormType>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<FormType> = (data): void => {
		const filter: FilterType = {
			term: data.term,
			friend: data.friend === 'null' ? null : data.friend === 'true' ? true : false
		}
		onFilterChangedSubmit(filter)
	}

	return (
		<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
			<input
				className={style.term}
				type='text'
				{...register('term')}
			/>
			<select {...register('friend')} >
				<option value='null'>All</option>
				<option value='true'>Only followed</option>
				<option value='false'>Only unFollowed</option>
			</select>
			<button type='submit'>Find</button>
		</form>
	)
})
