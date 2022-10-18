import React, {ChangeEvent, FC, useState} from "react"
import {ReturnComponentType} from "types"
import {useAppDispatch, useAvatar} from "hooks"
import {Button} from "../../common"
import {EMPTY_STRING} from "constants/base"
import {addPost} from "store/slices/profile"
import {getDate} from "utils"
import style from "./AddPost.module.scss"

export const AddPost: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const [message, setMessage] = useState(EMPTY_STRING)

  const userAvatar = useAvatar()

  const hour = getDate(new Date().getHours())
  const minute = getDate(new Date().getMinutes())
  const second = getDate(new Date().getSeconds())
  const time = `${hour}:${minute}:${second}`

  const onMessageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.currentTarget.value)
  }

  const onAddPostClick = (): void => {
    dispatch(addPost({message, time}))
    setMessage(EMPTY_STRING)
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.body}>
          <img className={style.avatar} src={userAvatar} alt="user avatar"/>
          <input
            className={style.input}
            value={message}
            onChange={onMessageChange}
            type="text"
            placeholder="What`s new?"
          />
        </div>
        {message.length > 0 &&
          <Button className={style.postButton} isPrimary onClick={onAddPostClick}>Post</Button>}
      </div>
    </div>
  )
}
