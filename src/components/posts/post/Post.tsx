import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { PostPropsType } from './types'
import { useAppDispatch, useAvatar } from 'hooks'
import { Icon20LikeCircleFillGray } from '@vkontakte/icons'
import { Icon20LikeCircleFillRed } from '@vkontakte/icons'
import { Icon24MoreHorizontal } from '@vkontakte/icons'
import { addLike, removePost } from 'store/slices/profile'
import { useSelector } from 'react-redux'
import { selectFullName } from 'store/selectors'
import style from './Post.module.scss'

export const Post: FC<PostPropsType> = ({post}): ReturnComponentType => {

  const {like, isAuthorizedUserLiked, id, message, time} = post

  const dispatch = useAppDispatch()

  const fullName = useSelector(selectFullName)

  const userAvatar = useAvatar()

  const onAddLikeClick = (): void => {
    dispatch(addLike(id))
  }

  const onRemovePostClick = (): void => {
    dispatch(removePost(id))
  }

  return (
    <div className={style.container}>

      <div className={style.userInfo}>
        <div className={style.content}>
          <img className={style.userAvatarImage} src={userAvatar} alt="user avatar"/>
          <div className={style.body}>
            <div className={style.name}>{fullName}</div>
            <div className={style.time}>{time}</div>
          </div>
        </div>
        <div className={style.threeDots}>
          {/*Временное удаление*/}
          <Icon24MoreHorizontal onClick={onRemovePostClick}/>
        </div>
      </div>

      <div className={style.message}>
        {message}
      </div>

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
