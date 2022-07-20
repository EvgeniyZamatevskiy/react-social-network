import React, { FC } from 'react'
import { ContactsType, UserProfileType } from 'api/profile/types'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch } from 'store/hooks'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './ProfileDataEdit.module.scss'
import { updateUserProfile } from 'store/asyncActions'
import { Nullable } from 'types'

type ProfileEditType = {
	aboutMe: string
	contacts: ContactsType
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
}

type ProfileDataEditPropsType = {
	userProfile: Nullable<UserProfileType>
	setEditProfile: (editProfile: boolean) => void
	editProfile: boolean
}

export const ProfileDataEdit: FC<ProfileDataEditPropsType> = ({ userProfile, setEditProfile, editProfile }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const { register, handleSubmit, formState: { errors }, } = useForm<UserProfileType>({
		mode: 'onBlur',
		defaultValues: { ...userProfile },
	})

	const aboutValidate = {
		required: 'Field is required!',
		minLength: { value: 3, message: 'Min 3 characters!' },
	}

	const contactsValidate = {
		pattern: { value: /(http|https):\/\/([\w.]+\/?)\S*/, message: 'Incorrect title!', }
	}

	const onDeactivateEditProfileClick = (): void => setEditProfile(false)

	const onSubmit: SubmitHandler<UserProfileType> = (data): void => {
		dispatch(updateUserProfile(data))
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
							{...register('fullName', aboutValidate)} />
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
							{...register('lookingForAJobDescription', aboutValidate)} />
						{errors?.lookingForAJobDescription && <p>{errors?.lookingForAJobDescription?.message}</p>}
					</li>
					<li>About me:
						<input
							className={errors?.aboutMe && style.errorInput}
							placeholder='aboutMe'
							{...register('aboutMe', aboutValidate)} />
						{errors?.aboutMe && <p>{errors?.aboutMe?.message}</p>}</li>
				</ul>
				<h2>{editProfile ? 'Editing contacts' : 'Contacts'}</h2>
				<ul className={style.contactsList}>
					<li>Facebook:
						<input
							className={errors?.contacts?.facebook && style.errorInput}
							placeholder='facebook'
							{...register('contacts.facebook', contactsValidate)} />
						{errors?.contacts?.facebook && <p>{errors?.contacts?.facebook.message}</p>}</li>
					<li>Website:
						<input
							className={errors?.contacts?.website && style.errorInput}
							placeholder='website'
							{...register('contacts.website', contactsValidate)} />
						{errors?.contacts?.website && <p>{errors?.contacts?.website.message}</p>}</li>
					<li>Vk:
						<input
							className={errors?.contacts?.vk && style.errorInput}
							placeholder='vk'
							{...register('contacts.vk', contactsValidate)} />
						{errors?.contacts?.vk && <p>{errors?.contacts?.vk.message}</p>}</li>
					<li>Twitter:
						<input
							className={errors?.contacts?.twitter && style.errorInput}
							placeholder='twitter'
							{...register('contacts.twitter', contactsValidate)} />
						{errors?.contacts?.twitter && <p>{errors?.contacts?.twitter.message}</p>}</li>
					<li>Instagram:
						<input
							className={errors?.contacts?.instagram && style.errorInput}
							placeholder='instagram'
							{...register('contacts.instagram', contactsValidate)} />
						{errors?.contacts?.instagram && <p>{errors?.contacts?.instagram.message}</p>}</li>
					<li>Youtube:
						<input
							className={errors?.contacts?.youtube && style.errorInput}
							placeholder='youtube'
							{...register('contacts.youtube', contactsValidate)} />
						{errors?.contacts?.youtube && <p>{errors?.contacts?.youtube.message}</p>}</li>
					<li>Github:
						<input
							className={errors?.contacts?.github && style.errorInput}
							placeholder='github'
							{...register('contacts.github', contactsValidate)} />
						{errors?.contacts?.github && <p>{errors?.contacts?.github.message}</p>}</li>
					<li>MainLink:
						<input
							className={errors?.contacts?.mainLink && style.errorInput}
							placeholder='mainLink'
							{...register('contacts.mainLink', contactsValidate)} />
						{errors?.contacts?.mainLink && <p>{errors?.contacts?.mainLink.message}</p>}</li>
				</ul>
				<button type={'submit'}>save</button>
			</form>
		</div>
	)
}
