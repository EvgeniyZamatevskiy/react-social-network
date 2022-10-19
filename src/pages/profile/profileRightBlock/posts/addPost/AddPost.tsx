import React, {FC, useState} from "react"
import {ReturnComponentType} from "types"
import {useAppDispatch} from "hooks"
import {Button, Input} from "components"
import {EMPTY_STRING} from "constants/base"
import {addPost} from "store/slices/profile"
import {getDate} from "utils"
import style from "./AddPost.module.scss"
import {useSelector} from "react-redux"
import {selectPhotoLarge, selectPhotoSmall} from "store/selectors"
import defaultAvatar from "assets/images/defaultAvatar.png"

export const AddPost: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const photoSmall = useSelector(selectPhotoSmall)
  const photoLarge = useSelector(selectPhotoLarge)

  const [message, setMessage] = useState(EMPTY_STRING)

  const userAvatar = photoSmall || photoLarge || defaultAvatar
  const isThereMessage = message.length > 0
  const hour = getDate(new Date().getHours())
  const minute = getDate(new Date().getMinutes())
  const second = getDate(new Date().getSeconds())
  const time = `${hour}:${minute}:${second}`

  const addPostClass = `${style.addPost} ${isThereMessage ? style.additionalAddPost : EMPTY_STRING}`

  const onAddPostClick = (): void => {
    dispatch(addPost({message, time}))
    setMessage(EMPTY_STRING)
  }

  return (
    <div className={addPostClass}>
      <Input className={style.input} value={message} setValue={setMessage} type="text" placeholder="What`s new?"/>
      <img className={style.userAvatar} src={userAvatar} alt="user avatar"/>

      {isThereMessage && <Button className={style.button} isPrimary onClick={onAddPostClick}>Post</Button>}
    </div>
  )
}
