import React, { FC, useState } from 'react'
import { Button, Line } from 'components'
import { ReturnComponentType } from 'types'
import { DataPropsType } from './types'
import { useSelector } from 'react-redux'
import { selectUserProfile } from 'store/selectors'
import style from './Data.module.scss'
import { ContactType } from 'api/profile/types'
import { Contact } from '../contact'

export const Data: FC<DataPropsType> = ({setIsEditFullInfo}): ReturnComponentType => {

  const userProfile = useSelector(selectUserProfile)

  const [isShowFullInfo, setIsShowFullInfo] = useState(false)

  // const contactKeys = Object.keys(userProfile.contacts)

  const onToggleIsShowFullInfoClick = (): void => {
    setIsShowFullInfo(!isShowFullInfo)
  }

  const onSetIsEditFullInfoClick = (): void => {
    setIsEditFullInfo(true)
  }

  return (
    <>
      <div className={style.jobContainer}>
        <div className={style.item}>Full name: <span>{userProfile.fullName}</span></div>
      </div>

      <div className={style.jobContainer}>
        <div className={style.item}>lookingForAJob: <span>{userProfile.lookingForAJob ? 'Yes' : 'No'}</span></div>
      </div>

      <div className={style.jobContainer}>
        <div className={style.item}>About me: <span>{userProfile.aboutMe}</span></div>
      </div>

      <button className={style.showInformationBtn} onClick={onToggleIsShowFullInfoClick}>
        {isShowFullInfo ? 'Hide full information' : 'Show full information'}
      </button>
      {isShowFullInfo &&
        <>
          <div className={style.contactsContainer}>
            <Line/>
          </div>

          {/*{contactKeys.map((key) => {*/}
          {/*  return <Contact key={key} title={key} value={userProfile.contacts[key as keyof ContactType]}/>*/}
          {/*})}*/}

          <div className={style.field}>
            github: <a target={'_blank'} href={userProfile.contacts.github}>{userProfile.contacts.github}</a>
          </div>
          <div className={style.field}>
            vk: <a target={'_blank'} href={userProfile.contacts.vk}>{userProfile.contacts.vk}</a></div>
          <div className={style.field}>
            facebook: <a target={'_blank'} href={userProfile.contacts.facebook}>{userProfile.contacts.facebook}</a>
          </div>
          <div className={style.field}>
            instagram: <a target={'_blank'} href={userProfile.contacts.instagram}>{userProfile.contacts.instagram}</a>
          </div>
          <div className={style.field}>
            twitter: <a target={'_blank'} href={userProfile.contacts.twitter}>{userProfile.contacts.twitter}</a>
          </div>
          <div className={style.field}>
            website: <a target={'_blank'} href={userProfile.contacts.website}>{userProfile.contacts.website}</a>
          </div>
          <div className={style.field}>
            youtube: <a target={'_blank'} href={userProfile.contacts.youtube}>{userProfile.contacts.youtube}</a>
          </div>
          <div className={style.field}>
            mainLink: <a target={'_blank'} href={userProfile.contacts.mainLink}>{userProfile.contacts.mainLink}</a>
          </div>

          <Button isPrimary className={style.editBtn} onClick={onSetIsEditFullInfoClick}>Edit</Button>
        </>
      }
    </>
  )
}
