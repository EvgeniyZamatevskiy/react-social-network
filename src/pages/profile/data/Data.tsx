import React, { FC, useState } from 'react'
import { Button, Line } from 'components'
import { ReturnComponentType } from 'types'
import { DataPropsType } from './types'
import { useSelector } from 'react-redux'
import { selectUserProfile } from 'store/selectors'
import { ContactType } from 'api/profile/types'
import { Contact } from '../contact'
import style from './Data.module.scss'

export const Data: FC<DataPropsType> = ({setIsEditFullInfo, isOwner}): ReturnComponentType => {

  const userProfile = useSelector(selectUserProfile)

  const [isShowFullInfo, setIsShowFullInfo] = useState(false)

  const onToggleIsShowFullInfoClick = (): void => {
    setIsShowFullInfo(!isShowFullInfo)
  }

  const onSetIsEditFullInfoClick = (): void => {
    setIsEditFullInfo(true)
  }

  if (!userProfile) {
    return null
  }

  const contactKeys = Object.keys(userProfile.contacts)

  return (
    <>
      <div className={style.field}>
        Readiness to work: <span>{userProfile.lookingForAJob ? 'Looking for a job' : 'Not looking for a job'}</span>
      </div>
      <div className={style.field}>My professional skills: <span>{userProfile.lookingForAJobDescription}</span></div>
      <div className={style.field}>About me: <span>{userProfile.aboutMe}</span></div>

      <Button className={style.fullInfoBtn} onClick={onToggleIsShowFullInfoClick}>
        {isShowFullInfo ? 'Hide full information' : 'Show full information'}
      </Button>
      {isShowFullInfo &&
        <>
          <div className={style.lineContainer}>
            <Line/>
          </div>

          {contactKeys.map((key) => {
            return <Contact key={key} title={key} link={userProfile.contacts[key as keyof ContactType]}/>
          })}

          {isOwner &&
            <Button isPrimary className={style.editBtn} onClick={onSetIsEditFullInfoClick}>Edit</Button>}
        </>
      }
    </>
  )
}
