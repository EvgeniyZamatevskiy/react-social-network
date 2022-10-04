import { EditableItem, Line } from 'components'
import React, { FC, useState } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { InformationPropsType } from './types'
import { useAppDispatch } from 'hooks'
import { useSelector } from 'react-redux'
import { selectStatus } from 'store/selectors'
import { updateStatus } from 'store/asyncActions'
import style from './Information.module.scss'

export const Information: FC<InformationPropsType> = ({fullName, isOwner}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const status = useSelector(selectStatus)

  const [isShowDetailedInformation, setIsShowDetailedInformation] = useState(false)

  const onToggleIsShowDetailedInformationClick = (): void => {
    setIsShowDetailedInformation(!isShowDetailedInformation)
  }

  const handleUpdateStatusClick = (updatedTitle: string): void => {
    dispatch(updateStatus(updatedTitle))
  }

  return (
    <>
      <div className={style.container}>

        <div className={style.nameContainer}>
          <div className={style.name}>{fullName}</div>
          <span className={style.online}>{isOwner ? 'online' : 'seen recently'}</span>
        </div>

        <div className={style.statusContainer}>
          {isOwner
            ? <EditableItem currentTitle={status} handleUpdateTitleClick={handleUpdateStatusClick}/>
            : <div className={style.status}>{status}</div>}
        </div>
        <Line/>

        <div className={style.jobContainer}>
          <div className={style.item}>lookingForAJob:</div>
          <span>Yes</span>
        </div>

        <button
          className={style.showInformationBtn}
          onClick={onToggleIsShowDetailedInformationClick}
        >
          {isShowDetailedInformation ? 'Hide full information' : 'Show full information'}
        </button>

        {isShowDetailedInformation &&
          <>
            <div className={style.aboutContainer}>
              <div className={style.about}>About</div>
              <Line/>
            </div>
            <div className={style.field}>Full name: <span>ZaM</span></div>
            <div className={style.field}>My professional skills: <span>all</span></div>
            <div className={style.field}>About me: <span>Front-end developer</span></div>

            <>
              <div className={style.contactsContainer}>
                <div className={style.contacts}>Contacts</div>
                <Line/>
              </div>
              <div className={style.field}>github: <span>ZaM</span></div>
              <div className={style.field}>vk: <span>all</span></div>
              <div className={style.field}>facebook: <span>https://www.youtube.com/</span></div>
              <div className={style.field}>instagram: <span>https://www.youtube.com/</span></div>
              <div className={style.field}>twitter: <span>https://www.youtube.com/</span></div>
              <div className={style.field}>website: <span>https://www.youtube.com/</span></div>
              <div className={style.field}>youtube: <span>https://www.youtube.com/</span></div>
              <div className={style.field}>mainLink: <span>https://www.youtube.com/</span></div>
            </>
          </>}
      </div>
    </>
  )
}
