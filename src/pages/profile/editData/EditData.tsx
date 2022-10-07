import React, { FC } from 'react'
import { Button, Line } from 'components'
import { ReturnComponentType } from 'types'
import { EditDataPropsType } from './types'
import style from './Data.module.scss'

export const EditData: FC<EditDataPropsType> = ({setIsEditFullInfo}): ReturnComponentType => {

  const onSetIsEditFullInfoClick = (): void => {
    setIsEditFullInfo(false)
  }

  return (
    <>
      <div className={style.jobContainer}>
        <div className={style.item}>Full name:</div>
        <input type="text"/>
      </div>

      <div className={style.jobContainer}>
        <div className={style.item}>lookingForAJob:</div>
        <input type="text"/>
      </div>

      <div className={style.jobContainer}>
        <div className={style.item}>About me:</div>
        <input type="text"/>
      </div>

      <div className={style.contactsContainer}>
        <Line/>
      </div>

      <div className={style.field}>github: <input type="text"/></div>
      <div className={style.field}>vk: <input type="text"/></div>
      <div className={style.field}>facebook: <input type="text"/></div>
      <div className={style.field}>instagram: <input type="text"/></div>
      <div className={style.field}>twitter: <input type="text"/></div>
      <div className={style.field}>website: <input type="text"/></div>
      <div className={style.field}>youtube: <input type="text"/></div>
      <div className={style.field}>mainLink: <input type="text"/></div>

      <Button isPrimary className={style.saveBtn} onClick={onSetIsEditFullInfoClick}>Save</Button>
    </>
  )
}
