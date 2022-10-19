import React, {FC, useState} from "react"
import {Button, Line} from "components"
import {ReturnComponentType} from "types"
import {useSelector} from "react-redux"
import {
  selectContacts,
  selectLookingForAJob,
  selectLookingForAJobDescription,
  selectAboutMe,
} from "store/selectors"
import {DataPropsType} from "./types"
import {Contact} from "./contact"
import {ContactType} from "api/profile/types"
import style from "./Data.module.scss"

export const Data: FC<DataPropsType> = ({setIsEditFullInfo, isOwner}): ReturnComponentType => {

  const contacts = useSelector(selectContacts)
  const lookingForAJob = useSelector(selectLookingForAJob)
  const lookingForAJobDescription = useSelector(selectLookingForAJobDescription)
  const aboutMe = useSelector(selectAboutMe)

  const [isShowFullInfo, setIsShowFullInfo] = useState(false)

  if (!contacts) {
    return null
  }

  const contactKeys = Object.keys(contacts)
  const contactKeysRender = contactKeys.map((key) => {
    return <Contact key={key} title={key} link={contacts[key as keyof ContactType]}/>
  })

  const onToggleIsShowFullInfoClick = (): void => {
    setIsShowFullInfo(!isShowFullInfo)
  }

  const onSetIsEditFullInfoClick = (): void => {
    setIsEditFullInfo(true)
  }

  return (
    <div className={style.data}>
      <div className={style.field}>
        Readiness to work: <span>{lookingForAJob ? "Looking for a job" : "Not looking for a job"}</span>
      </div>
      <div className={style.field}>My professional skills: <span>{lookingForAJobDescription}</span></div>
      <div className={style.field}>About me: <span>{aboutMe}</span></div>

      <Button className={style.fullInfoButton} onClick={onToggleIsShowFullInfoClick}>
        {isShowFullInfo ? "Hide full information" : "Show full information"}
      </Button>
      {isShowFullInfo &&
        <>
          <div className={style.lineContainer}>
            <Line/>
          </div>

          {contactKeysRender}

          {isOwner &&
            <Button isPrimary className={style.editButton} onClick={onSetIsEditFullInfoClick}>
              Edit
            </Button>}
        </>}
    </div>
  )
}
