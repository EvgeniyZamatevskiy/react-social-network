import React, {ChangeEvent, FC, useRef, useState} from "react"
import {ReturnComponentType} from "types"
import {PostPropsType} from "./types"
import {useAppDispatch, useAvatar} from "hooks"
import {Icon20LikeCircleFillGray, Icon20LikeCircleFillRed, Icon24MoreHorizontal} from "@vkontakte/icons"
import {addLike, removePost, setEditMessage} from "store/slices/profile"
import {useSelector} from "react-redux"
import {selectFullName} from "store/selectors"
import {EMPTY_STRING} from "constants/base"
import {Button} from "components/common"
import style from "./Post.module.scss"

export const Post: FC<PostPropsType> = ({post}): ReturnComponentType => {

  const {like, isAuthorizedUserLiked, id, message, time} = post

  const dispatch = useAppDispatch()

  const fullName = useSelector(selectFullName)

  const [isActivePostInfoPopup, setIsActivePostInfoPopup] = useState(false)
  const [isEditPost, setIsEditPost] = useState(false)
  const [modifiedMessage, setModifiedMessage] = useState(EMPTY_STRING)

  const userAvatar = useAvatar()

  const editPostRef = useRef<HTMLInputElement>(null)

  const onAddLikeClick = (): void => {
    dispatch(addLike(id))
  }

  const onRemovePostClick = (): void => {
    dispatch(removePost(id))
  }

  const onSetIsActivePostInfoPopupMouseEnter = (): void => {
    setIsActivePostInfoPopup(true)
  }

  const onSetIsActivePostInfoPopupMouseLeave = (): void => {
    setIsActivePostInfoPopup(false)
  }

  const onSetIsEditPostClick = (): void => {
    setIsEditPost(true)
    setModifiedMessage(message)
  }

  const onEditMessageChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setModifiedMessage(event.currentTarget.value)
  }

  const onDeactivateEditPostClick = (): void => {
    setIsEditPost(false)
    setIsActivePostInfoPopup(false)
  }

  const onEditMessageClick = () => {
    if (modifiedMessage.trim()) {
      dispatch(setEditMessage({id, message: modifiedMessage}))
      setIsEditPost(false)
      setIsActivePostInfoPopup(false)
    } else {
      editPostRef.current?.select()
    }
  }

  return (
    <div className={style.container}>

      <div className={style.userInfo}>
        <div className={style.content}>
          <img className={style.userAvatarImage} src={userAvatar} alt="user avatar"/>
          <div className={style.body}>
            <div className={style.name}>{fullName} {isEditPost && <span>· edit post</span>}</div>
            <div className={style.time}>{time}</div>
          </div>
        </div>

        {!isEditPost &&
          <div className={style.threeDotsContainer}
               onMouseEnter={onSetIsActivePostInfoPopupMouseEnter}
               onMouseLeave={onSetIsActivePostInfoPopupMouseLeave}
          >
            <div className={style.threeDots}>
              <Icon24MoreHorizontal/>

              {isActivePostInfoPopup &&
                <div className={style.postInfoPopup}>
                  <button className={style.deletePostBtn} onClick={onRemovePostClick}>Delete post</button>
                  <button className={style.deletePostBtn} onClick={onSetIsEditPostClick}>Edit post</button>
                </div>
              }
            </div>
          </div>
        }
      </div>

      <div className={style.message}>
        {isEditPost
          ? <input
            className={style.editPostInput}
            type="text"
            autoFocus
            value={modifiedMessage}
            onChange={onEditMessageChange}
            ref={editPostRef}
          />
          : message}
      </div>

      {isEditPost
        && <div className={style.buttons}>
          <Button className={style.cancelBtn} isPrimary onClick={onDeactivateEditPostClick}>Cancel</Button>
          <Button className={style.cancelSave} isPrimary onClick={onEditMessageClick}>Save</Button>
        </div>}

      <button
        className={`${style.noAuthorizedUserLike} ${isAuthorizedUserLiked && style.haveAuthorizedUserLike}`}
        onClick={onAddLikeClick}
      >
        {isAuthorizedUserLiked
          ? <Icon20LikeCircleFillRed width={24} height={24}/>
          : <Icon20LikeCircleFillGray width={24} height={24}/>}

        <div className={`${style.amount} ${like > 0 && style.test}`}>
          {like > 0 && like}
        </div>
      </button>

    </div>
  )
}
