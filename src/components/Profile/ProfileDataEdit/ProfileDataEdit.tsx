import React, { FC, memo } from 'react'
import { UserProfileType } from 'api/types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTypedDispatch } from 'store/hooks'
import { updateUserProfileTC } from 'store/profileReducer'
import { ProfileDataEditPropsType } from './types'
import style from './ProfileDataEdit.module.scss'

export const ProfileDataEdit: FC<ProfileDataEditPropsType> = memo(({ userProfile, setEditProfile, editProfile }) => {

	const dispatch = useTypedDispatch()

	const { register, handleSubmit, formState: { errors }, } = useForm<UserProfileType>({
		mode: 'onBlur',
		defaultValues: { ...userProfile },
	})

	const validateForAbout = {
		required: 'Field is required!',
		minLength: { value: 3, message: 'Min 3 characters!' },
	}

	const validateForContacts = {
		pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Incorrect title!', }
	}

	const onDeactivateEditProfileClick = (): void => {
		setEditProfile(false)
	}

	const onSubmit: SubmitHandler<UserProfileType> = (data): void => {
		dispatch(updateUserProfileTC(data))
		onDeactivateEditProfileClick()
	}

	return (
		<div className={style.about}>
			{editProfile
				? <h1>Editing about
					<span onClick={onDeactivateEditProfileClick}>&#10006;</span>
				</h1>
				: <h1>About</h1>}
			<form onSubmit={handleSubmit(onSubmit)}>
				<ul className={style.aboutList}>
					<li>Full name:
						<input
							className={errors?.fullName && style.errorInput}
							placeholder='fullName'
							{...register('fullName', validateForAbout)} />
						{errors?.fullName && <p>{errors?.fullName?.message}</p>}</li>
					<li>Looking for a job:
						<input
							type='checkbox'
							{...register('lookingForAJob')} />
					</li>
					<li>My professional skills:
						<input
							className={errors?.lookingForAJobDescription && style.errorInput}
							placeholder='lookingForAJobDescription'
							{...register('lookingForAJobDescription', validateForAbout)} />
						{errors?.lookingForAJobDescription && <p>{errors?.lookingForAJobDescription?.message}</p>}
					</li>
					<li>About me:
						<input
							className={errors?.aboutMe && style.errorInput}
							placeholder='aboutMe'
							{...register('aboutMe', validateForAbout)} />
						{errors?.aboutMe && <p>{errors?.aboutMe?.message}</p>}</li>
				</ul>
				<h2>{editProfile ? 'Editing contacts' : 'Contacts'}</h2>
				<ul className={style.contactsList}>
					<li>Facebook:
						<input
							className={errors?.contacts?.facebook && style.errorInput}
							placeholder='facebook'
							{...register('contacts.facebook', validateForContacts)} />
						{errors?.contacts?.facebook && <p>{errors?.contacts?.facebook.message}</p>}</li>
					<li>Website:
						<input
							className={errors?.contacts?.website && style.errorInput}
							placeholder='website'
							{...register('contacts.website', validateForContacts)} />
						{errors?.contacts?.website && <p>{errors?.contacts?.website.message}</p>}</li>
					<li>Vk:
						<input
							className={errors?.contacts?.vk && style.errorInput}
							placeholder='vk'
							{...register('contacts.vk', validateForContacts)} />
						{errors?.contacts?.vk && <p>{errors?.contacts?.vk.message}</p>}</li>
					<li>Twitter:
						<input
							className={errors?.contacts?.twitter && style.errorInput}
							placeholder='twitter'
							{...register('contacts.twitter', validateForContacts)} />
						{errors?.contacts?.twitter && <p>{errors?.contacts?.twitter.message}</p>}</li>
					<li>Instagram:
						<input
							className={errors?.contacts?.instagram && style.errorInput}
							placeholder='instagram'
							{...register('contacts.instagram', validateForContacts)} />
						{errors?.contacts?.instagram && <p>{errors?.contacts?.instagram.message}</p>}</li>
					<li>Youtube:
						<input
							className={errors?.contacts?.youtube && style.errorInput}
							placeholder='youtube'
							{...register('contacts.youtube', validateForContacts)} />
						{errors?.contacts?.youtube && <p>{errors?.contacts?.youtube.message}</p>}</li>
					<li>Github:
						<input
							className={errors?.contacts?.github && style.errorInput}
							placeholder='github'
							{...register('contacts.github', validateForContacts)} />
						{errors?.contacts?.github && <p>{errors?.contacts?.github.message}</p>}</li>
					<li>MainLink:
						<input
							className={errors?.contacts?.mainLink && style.errorInput}
							placeholder='mainLink'
							{...register('contacts.mainLink', validateForContacts)} />
						{errors?.contacts?.mainLink && <p>{errors?.contacts?.mainLink.message}</p>}</li>
				</ul>
				<button type={'submit'}>save</button>
			</form>
		</div>
	)
})
