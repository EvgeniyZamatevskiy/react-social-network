import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {EditDataPropsType} from "./types"
import {ContactType, UserProfileType} from "api/profile/types"
import {SubmitHandler, useForm} from "react-hook-form"
import {useAppDispatch} from "hooks"
import {useSelector} from "react-redux"
import {Button} from "components"
import {updateUserProfile} from "store/asyncActions"
import {selectContacts, selectUserProfile} from "store/selectors"
import style from "./EditData.module.scss"

export const EditData: FC<EditDataPropsType> = ({setIsEditFullInfo}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const userProfile = useSelector(selectUserProfile)

  const contacts = useSelector(selectContacts)

  const {register, handleSubmit, formState: {errors}} = useForm<UserProfileType>({
    mode: "onBlur",
    defaultValues: {...userProfile},
  })

  const aboutValidate = {
    required: "Field is required",
    minLength: {value: 3, message: "Min 3 characters"},
  }

  const contactsValidate = {
    pattern: {value: /(http|https):\/\/([\w.]+\/?)\S*/, message: "Incorrect title",}
  }

  const contactRender = Object.keys(contacts)

  const onSetIsEditFullInfoClick = (): void => {
    setIsEditFullInfo(false)
  }

  const onSubmit: SubmitHandler<UserProfileType> = (data): void => {
    dispatch(updateUserProfile(data))
    onSetIsEditFullInfoClick()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className={style.field}>
        <div>Full name:</div>
        <input
          className={style.input}
          type="text"
          {...register("fullName", aboutValidate)}
        />
        {errors?.fullName && <p className={style.errorMessage}>{errors?.fullName?.message}</p>}
      </div>

      <div className={style.field}>Readiness to work:
        <input
          type="checkbox"
          {...register("lookingForAJob")}
        />
      </div>

      <div className={style.field}>My professional skills:
        <input
          className={style.input}
          type="text"
          {...register("lookingForAJobDescription", aboutValidate)}
        />
        {errors?.lookingForAJobDescription &&
          <p className={style.errorMessage}>{errors?.lookingForAJobDescription?.message}</p>}
      </div>

      <div className={style.field}>About me:
        <input
          className={style.input}
          type="text"
          {...register("aboutMe", aboutValidate)}
        />
        {errors?.aboutMe && <p className={style.errorMessage}>{errors?.aboutMe?.message}</p>}
      </div>

      {contactRender.map((key) => {

        const currentKey = key[0].toUpperCase() + key.slice(1)

        return (
          <div key={key} className={style.field}>
            {currentKey}:
            <input
              className={style.input}
              {...register(`contacts.${key as keyof ContactType}`, contactsValidate)}
            />
            {errors?.contacts &&
              <p className={style.errorMessage}>{errors?.contacts[key as keyof ContactType]?.message}</p>}
          </div>
        )
      })}

      <div className={style.buttons}>
        <Button type="submit" isPrimary className={style.saveButton}>Save</Button>
        <Button type="button" isPrimary className={style.backButton} onClick={onSetIsEditFullInfoClick}>Back</Button>
      </div>
    </form>
  )
}
