import React, { FC } from 'react'
import { Line } from 'components'
import { ReturnComponentType } from 'types'
import { DataPropsType } from './types'
import style from './Data.module.scss'

export const Data: FC<DataPropsType> = ({isEditDetailedInfo, onToggleIsEditDetailedInfoClick}): ReturnComponentType => {
  return (
    <>
      <div className={style.jobContainer}>
        <div className={style.item}>Full name:</div>
        <span>ZaM</span>
      </div>

      <div className={style.jobContainer}>
        <div className={style.item}>lookingForAJob:</div>
        <span>Yes</span>
      </div>

      <div className={style.jobContainer}>
        <div className={style.item}>About me:</div>
        <span>Front-end developer</span>
      </div>

      <div className={style.contactsContainer}>
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

      <button className={style.showInformationBtn} onClick={onToggleIsEditDetailedInfoClick}>
        {isEditDetailedInfo ? 'Save full information' : 'Edit full information'}
      </button>
    </>
  )
}
