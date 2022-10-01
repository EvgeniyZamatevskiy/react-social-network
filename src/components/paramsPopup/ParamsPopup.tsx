import React, { ChangeEvent, FC, useState } from 'react'
import { ReturnComponentType } from 'types'
import { Radio } from '../common'
import { setFriend } from '../../store/slices/users'
import { EMPTY_STRING, FIRST_ELEMENT_ARRAY } from '../../constants/base'
import { useAppDispatch, useTheme } from '../../hooks'
import style from './ParamsPopup.module.scss'

const friendOptions = ['All', 'Only followed', 'Only unfollowed']

export const ParamsPopup: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const [friendOption, setFriendOption] = useState(friendOptions[FIRST_ELEMENT_ARRAY])

  const isDarkTheme = useTheme('dark')

  const setFriendConvertValue = (currentValue: string) => {
    if (currentValue === 'Only followed') {
      return dispatch(setFriend(true))
    }

    if (currentValue === 'Only unfollowed') {
      return dispatch(setFriend(false))
    }

    dispatch(setFriend(EMPTY_STRING))
  }

  const onFriendChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const currentValue = event.currentTarget.value
    setFriendOption(currentValue)
    setFriendConvertValue(currentValue)
  }

  return (
    <div className={`${style.paramsPopup} ${isDarkTheme && style.paramsPopupDark}`}>
      <div className={style.findValue}>Find</div>
      <Radio options={friendOptions} name={'friend'} value={friendOption} onChange={onFriendChange}/>
    </div>
  )
}
