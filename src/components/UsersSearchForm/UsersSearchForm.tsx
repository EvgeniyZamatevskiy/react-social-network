import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

type UsersSearchFormPropsType = {
	onFilterChanged: (filter: any) => void
}

export const UsersSearchForm: FC<UsersSearchFormPropsType> = ({ onFilterChanged }) => {

	type FormType = {
		term: string,
		friend: 'true' | 'false' | 'null' | boolean | null
	}

	const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
		mode: 'onBlur',
		defaultValues: {},
	})

	const onSubmit: any = (data: FormType) => {
		const filter: FormType = {
			term: data.term,
			friend: data.friend === 'null' ? null : data.friend === 'true' ? true : false
		}
		onFilterChanged(filter)
		// reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type='text' {...register('term', {

			})} />

			<select {...register('friend', {

			})}>
				<option value='null'>All</option>
				<option value='true'>Only followed</option>
				<option value='false'>Only unFollowed</option>
			</select>
			<button type='submit' disabled={false}>
				Find
			</button>
		</form>
	)
}