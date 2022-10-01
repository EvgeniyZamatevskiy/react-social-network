import React, { ChangeEvent, FC } from 'react'
import { ReturnComponentType } from 'types'
import { Radio } from '../common'
import { useAppDispatch, useTheme } from '../../hooks'
import { useSelector } from 'react-redux'
import { FriendValuesType } from 'store/slices/users/types'
import { selectFriend } from 'store/selectors'
import { setFriend } from 'store/slices/users'
import style from './ParamsPopup.module.scss'

const friendOptions: FriendValuesType[] = ['All', 'Only followed', 'Only unfollowed']

export const ParamsPopup: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const friend = useSelector(selectFriend)

  const isDarkTheme = useTheme('dark')

  const onFriendChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFriend(event.currentTarget.value as FriendValuesType))
  }

  return (
    <div className={`${style.paramsPopup} ${isDarkTheme && style.paramsPopupDark}`}>
      <div className={style.findValue}>Find</div>
      <Radio options={friendOptions} name={'friend'} value={friend} onChange={onFriendChange}/>
    </div>
  )
}
