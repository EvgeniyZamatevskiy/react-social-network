import { UserProfileResponseType } from 'api/types/profile'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { profileActionCreators } from 'store/action-creators'
import { useActions } from 'store/hooks'

type ProfileDataFormPropsType = {
	userProfile: UserProfileResponseType
	setEditMode: (editMode: boolean) => void
}

export const ProfileDataForm: FC<ProfileDataFormPropsType> = ({ userProfile, setEditMode }) => {

	const { saveProfileTC } = useActions(profileActionCreators)

	const { register, handleSubmit, reset, formState: { errors }, } = useForm<any>({
		mode: 'onBlur',
		defaultValues: { ...userProfile },
	})

	const onSubmit: any = (data: any) => {
		saveProfileTC(data)
		setEditMode(false)
		// reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div><button type={'submit'}>save</button></div>
			<div>
				<b>Full name</b>: <input placeholder='fullName' {...register('fullName', {
					required: 'Поле обязательно к заполнению!',
					minLength: { value: 3, message: 'Минимум 3 символа!' },
				})} />
				{errors?.fullName && <p>{errors?.fullName?.message}</p>}
			</div>
			<div>
				<b>Looking for a job</b>: <input type={'checkbox'}{...register('lookingForAJob')}
				/>
			</div>

			<div>
				<b>My professional skills</b>: <input placeholder='lookingForAJobDescription' {...register('lookingForAJobDescription', {
					required: 'Поле обязательно к заполнению!',
					minLength: { value: 3, message: 'Минимум 3 символа!' }
				})} />
				{errors?.lookingForAJobDescription && <p>{errors?.lookingForAJobDescription?.message}</p>}
			</div>

			<div>
				<b>About me</b>: <input placeholder='aboutMe' {...register('aboutMe', {
					required: 'Поле обязательно к заполнению!',
					minLength: { value: 3, message: 'Минимум 3 символа!' }
				})} />
				{errors?.aboutMe && <p>{errors?.aboutMe?.message}</p>}
			</div>

			<div>
				<h3>Contacts</h3>:
				<div>
					<b>github</b>: <input placeholder='github' {...register('contacts.github', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный github!', }
					})} />
					{errors?.contacts?.github && <p>{errors?.contacts?.github.message}</p>}
				</div>
				<div>
					<b>instagram</b>: <input placeholder='instagram' {...register('contacts.instagram', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный instagram!', }
					})} />
					{errors?.contacts?.instagram && <p>{errors?.contacts?.instagram.message}</p>}
				</div>
				<div>
					<b>youtube</b>:<input placeholder='youtube' {...register('contacts.youtube', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный youtube!', }
					})} />
					{errors?.contacts?.youtube && <p>{errors?.contacts?.youtube.message}</p>}
				</div>
				<div>
					<b>mainLink</b>: <input placeholder='mainLink' {...register('contacts.mainLink', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный mainLink!', }
					})} />
					{errors?.contacts?.mainLink && <p>{errors?.contacts?.mainLink.message}</p>}
				</div>
				<div>
					<b>twitter</b>: <input placeholder='twitter' {...register('contacts.twitter', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный twitter!', }
					})} />
					{errors?.contacts?.twitter && <p>{errors?.contacts?.twitter.message}</p>}
				</div>
				<div>
					<b>vk</b>: <input placeholder='vk' {...register('contacts.vk', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный vk!', }
					})} />
					{errors?.contacts?.vk && <p>{errors?.contacts?.vk.message}</p>}
				</div>
				<div>
					<b>website</b>: <input placeholder='website' {...register('contacts.website', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный website!', }
					})} />
					{errors?.contacts?.website && <p>{errors?.contacts?.website.message}</p>}
				</div>
				<div>
					<b>facebook</b>: <input placeholder='facebook' {...register('contacts.facebook', {
						pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Некорректный facebook!', }
					})} />
					{errors?.contacts?.facebook && <p>{errors?.contacts?.facebook.message}</p>}
				</div>

			</div>
		</form>
	)
}