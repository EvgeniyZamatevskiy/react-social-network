import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { EyePropsType } from './types'
import { Icon20ViewOutline } from '@vkontakte/icons'
import { Icon20HideOutline } from '@vkontakte/icons'
import style from './Eye.module.scss'

export const Eye: FC<EyePropsType> = ({inputType, setInputType, errorPasswordMessage}): ReturnComponentType => {

  const setInputTypeTextClick = (): void => setInputType('text')

  const setInputTypePasswordClick = (): void => setInputType('password')

  const eyeClassName = `${style.eye} ${errorPasswordMessage && style.secondaryEye}`

  return (
    <>
      {inputType === 'password'
        ? <Icon20ViewOutline className={eyeClassName} width={24} height={24} onClick={setInputTypeTextClick}/>
        : <Icon20HideOutline className={eyeClassName} width={24} height={24} onClick={setInputTypePasswordClick}/>}
    </>
  )
}
