import React, {ChangeEvent, FC, useRef, useState} from "react"
import {ReturnComponentType} from "types"
import {PostPropsType} from "./types"
import {useAppDispatch} from "hooks"
import {Icon20LikeCircleFillGray, Icon20LikeCircleFillRed, Icon24MoreHorizontal} from "@vkontakte/icons"
import {addLike, setEditMessage} from "store/slices/profile"
import {useSelector} from "react-redux"
import {selectFullName, selectPhotoLarge, selectPhotoSmall} from "store/selectors"
import {EMPTY_STRING} from "constants/base"
import {Button, Input} from "components/common"
import {PostInfoPopup} from "../postInfoPopup"
import defaultAvatar from "assets/images/defaultAvatar.png"
import style from "./Post.module.scss"

export const Post: FC<PostPropsType> = ({post}): ReturnComponentType => {

  const {like, isAuthorizedUserLiked, id, message, time} = post

  const dispatch = useAppDispatch()

  const fullName = useSelector(selectFullName)
  const photoLarge = useSelector(selectPhotoLarge)
  const photoSmall = useSelector(selectPhotoSmall)

  const [isActivePostInfoPopup, setIsActivePostInfoPopup] = useState(false)
  const [isEditPost, setIsEditPost] = useState(false)
  const [modifiedMessage, setModifiedMessage] = useState(EMPTY_STRING)

  const editPostRef = useRef<HTMLInputElement>(null)

  const isLiked = like > 0
  const userAvatar = photoSmall || photoLarge || defaultAvatar

  const onAddLikeClick = (): void => {
    dispatch(addLike(id))
  }

  const onActivatePostInfoPopupMouseEnter = (): void => {
    setIsActivePostInfoPopup(true)
  }

  const onDeactivatePostInfoPopupMouseLeave = (): void => {
    setIsActivePostInfoPopup(false)
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

  const handleSetIsEditPostClick = (): void => {
    setIsEditPost(true)
    setModifiedMessage(message)
  }

  return (
    <div className={style.post}>

      <div className={style.userInfo}>
        <div className={style.content}>
          <img src={userAvatar} alt="user avatar"/>
          <div className={style.body}>
            <div className={style.name}>{fullName} {isEditPost && <span>· edit post</span>}</div>
            <div className={style.time}>{time}</div>
          </div>
        </div>

        {!isEditPost &&
          <div className={style.threeDotsIconContainer}
               onMouseEnter={onActivatePostInfoPopupMouseEnter}
               onMouseLeave={onDeactivatePostInfoPopupMouseLeave}
          >
            <div className={style.threeDotsIcon}>
              <Icon24MoreHorizontal/>

              {isActivePostInfoPopup && <PostInfoPopup postId={id} onSetIsEditPostClick={handleSetIsEditPostClick}/>}
            </div>
          </div>
        }
      </div>

      <div className={style.messageContainer}>
        {isEditPost
          ? <Input
            className={style.editPostInput}
            type="text"
            autoFocus
            value={modifiedMessage}
            onChange={onEditMessageChange}
            ref={editPostRef}
          />
          : <div className={style.message}>{message}</div>}
      </div>

      {isEditPost
        && <div className={style.buttons}>
          <Button className={style.saveButton} isPrimary onClick={onEditMessageClick}>Save</Button>
          <Button className={style.cancelButton} isPrimary onClick={onDeactivateEditPostClick}>Cancel</Button>
        </div>}

      <Button
        className={`${style.addLike} ${isAuthorizedUserLiked && style.additionalAddLike}`}
        onClick={onAddLikeClick}
      >
        {isAuthorizedUserLiked
          ? <Icon20LikeCircleFillRed width={24} height={24}/>
          : <Icon20LikeCircleFillGray width={24} height={24}/>}

        <div className={`${style.amount} ${isLiked && style.additionalAmount}`}>
          {isLiked && like}
        </div>
      </Button>
    </div>
  )
}
