import React, { FC, useState } from 'react'
import { ReturnComponentType } from 'types'
import { useAvatar } from 'hooks'
import { Button } from '../../common'
import style from './AddPost.module.scss'

export const AddPost: FC = (): ReturnComponentType => {

  const [isFocus, setIsFocus] = useState(false)

  const userAvatar = useAvatar()

  const onInputFocus = (): void => {
    setIsFocus(true)
  }

  const onInputBlur = (): void => {
    setIsFocus(false)
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.body}>
          <img className={style.avatar} src={userAvatar} alt="user avatar"/>
          <input
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            className={style.input}
            type="text"
            placeholder="What`s new?"
          />
        </div>
        {isFocus && <Button className={style.postBtn} isPrimary>Post</Button>}
      </div>
    </div>
  )
}
